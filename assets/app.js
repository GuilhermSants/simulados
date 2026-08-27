/* =========================================================
   Caderno de Simulados — motor
   Site estático. Progresso local + sincronização opcional.
   ========================================================= */

var PROVAS = [];
var LETRAS = ["A", "B", "C", "D", "E", "F", "G"];

/* ---------------------------------------------------------
   1. Cadastro de provas (chamado pelos arquivos em data/)
--------------------------------------------------------- */

function registrarProva(prova) {
  PROVAS.push({
    id: prova.id,
    titulo: prova.titulo || "Prova sem título",
    subtitulo: prova.subtitulo || "",
    questoes: (prova.questoes || []).map(function (q, i) {
      return {
        qid: String(q.id || i + 1),
        numero: i + 1,
        enunciado: q.enunciado || "",
        apoio: q.apoio || "",
        imagem: q.imagem || "",
        html: q.html === true,
        alternativas: q.alternativas || [],
        correta: interpretarGabarito(q.correta),
        comentario: q.comentario || ""
      };
    })
  });
}

function interpretarGabarito(valor) {
  if (typeof valor === "number") return valor;
  var pos = LETRAS.indexOf(String(valor || "").trim().toUpperCase());
  return pos >= 0 ? pos : 0;
}

function acharProva(id) {
  for (var i = 0; i < PROVAS.length; i++) if (PROVAS[i].id === id) return PROVAS[i];
  return null;
}

/* ---------------------------------------------------------
   2. Formato do progresso

   respostas  { provaId: { qid: { e: indice, t: instante } } }
   erros      { "provaId::qid": { provaId, qid, ativo, t } }
   resultados { provaId: { acertos, erros, total, pct, t } }
   limpezas   { provaId: instante, __tudo: instante }

   Cada registro guarda o instante em que foi gravado. Na
   fusão entre duas máquinas vence sempre o mais recente.
--------------------------------------------------------- */

var CHAVE = "caderno-simulados-v2";
var memoria = null;

function temLocalStorage() {
  try {
    window.localStorage.setItem("__teste__", "1");
    window.localStorage.removeItem("__teste__");
    return true;
  } catch (e) { return false; }
}

var LS = temLocalStorage();

function dadosPadrao() {
  return { versao: 2, respostas: {}, erros: {}, resultados: {}, limpezas: {} };
}

function normalizarDados(obj) {
  var d = dadosPadrao();
  if (!obj || typeof obj !== "object") return d;

  Object.keys(obj.respostas || {}).forEach(function (pid) {
    d.respostas[pid] = {};
    var mapa = obj.respostas[pid] || {};
    Object.keys(mapa).forEach(function (qid) {
      var reg = mapa[qid];
      if (typeof reg === "number") d.respostas[pid][qid] = { e: reg, t: 1 };
      else if (reg && typeof reg.e === "number") d.respostas[pid][qid] = { e: reg.e, t: reg.t || 1 };
    });
  });

  Object.keys(obj.erros || {}).forEach(function (k) {
    var reg = obj.erros[k];
    if (!reg) return;
    d.erros[k] = {
      provaId: reg.provaId,
      qid: String(reg.qid),
      ativo: reg.ativo !== false,
      t: reg.t || reg.quando || 1
    };
  });

  Object.keys(obj.resultados || {}).forEach(function (pid) {
    var reg = obj.resultados[pid];
    if (!reg) return;
    d.resultados[pid] = {
      acertos: reg.acertos, erros: reg.erros, total: reg.total,
      pct: reg.pct, t: reg.t || reg.quando || 1
    };
  });

  Object.keys(obj.limpezas || {}).forEach(function (k) { d.limpezas[k] = obj.limpezas[k] || 0; });

  return d;
}

function lerDados() {
  if (!LS) {
    if (!memoria) memoria = dadosPadrao();
    return memoria;
  }
  try {
    var bruto = window.localStorage.getItem(CHAVE) || window.localStorage.getItem("caderno-simulados-v1");
    return bruto ? normalizarDados(JSON.parse(bruto)) : dadosPadrao();
  } catch (e) { return dadosPadrao(); }
}

function gravarDados(dados, semEnviar) {
  if (LS) {
    try { window.localStorage.setItem(CHAVE, JSON.stringify(dados)); }
    catch (e) { memoria = dados; }
  } else {
    memoria = dados;
  }
  if (!semEnviar && window.Nuvem && window.Nuvem.agendarEnvio) window.Nuvem.agendarEnvio(dados);
}

/* fusão entre o que está aqui e o que veio da nuvem */
function mesclarDados(a, b) {
  a = normalizarDados(a);
  b = normalizarDados(b);
  var r = dadosPadrao();

  [a, b].forEach(function (d) {
    Object.keys(d.limpezas).forEach(function (k) {
      r.limpezas[k] = Math.max(r.limpezas[k] || 0, d.limpezas[k] || 0);
    });
  });

  var corteGeral = r.limpezas.__tudo || 0;
  function corte(pid) { return Math.max(corteGeral, r.limpezas[pid] || 0); }

  [a, b].forEach(function (d) {
    Object.keys(d.respostas).forEach(function (pid) {
      Object.keys(d.respostas[pid]).forEach(function (qid) {
        var reg = d.respostas[pid][qid];
        if (reg.t < corte(pid)) return;
        var atual = r.respostas[pid] && r.respostas[pid][qid];
        if (!atual || reg.t > atual.t) {
          if (!r.respostas[pid]) r.respostas[pid] = {};
          r.respostas[pid][qid] = reg;
        }
      });
    });
    Object.keys(d.erros).forEach(function (k) {
      var reg = d.erros[k];
      if (reg.t < corteGeral) return;
      if (!r.erros[k] || reg.t > r.erros[k].t) r.erros[k] = reg;
    });
    Object.keys(d.resultados).forEach(function (pid) {
      var reg = d.resultados[pid];
      if (reg.t < corte(pid)) return;
      if (!r.resultados[pid] || reg.t > r.resultados[pid].t) r.resultados[pid] = reg;
    });
  });

  return r;
}

/* chamado pelo sync.js quando chega progresso da nuvem */
function aplicarDadosDaNuvem(remoto) {
  var juntos = mesclarDados(lerDados(), remoto);
  gravarDados(juntos, true);
  desenhar();
  return juntos;
}

function chaveErro(provaId, qid) { return provaId + "::" + qid; }

function resposta(dados, provaId, qid) {
  var m = dados.respostas[provaId];
  return m && m[qid] ? m[qid].e : undefined;
}

function errosAtivos(dados) {
  return Object.keys(dados.erros).filter(function (k) { return dados.erros[k].ativo !== false; });
}

/* ---------------------------------------------------------
   3. Caderno de revisão
--------------------------------------------------------- */

function montarRevisao() {
  var dados = lerDados();
  var questoes = [];

  errosAtivos(dados).forEach(function (chave) {
    var reg = dados.erros[chave];
    var prova = acharProva(reg.provaId);
    if (!prova) return;
    for (var i = 0; i < prova.questoes.length; i++) {
      if (prova.questoes[i].qid === reg.qid) {
        var copia = {};
        for (var k in prova.questoes[i]) copia[k] = prova.questoes[i][k];
        copia.origemId = prova.id;
        copia.origemQid = prova.questoes[i].qid;
        copia.origemTitulo = prova.titulo;
        copia.origemNumero = prova.questoes[i].numero;
        copia.qid = prova.id + "--" + prova.questoes[i].qid;
        questoes.push(copia);
        break;
      }
    }
  });

  questoes.forEach(function (q, i) { q.numero = i + 1; });

  return {
    id: "__revisao",
    titulo: "Caderno de revisão",
    subtitulo: "Questões que você errou, reunidas de todas as provas",
    revisao: true,
    questoes: questoes
  };
}

/* ---------------------------------------------------------
   4. Texto
--------------------------------------------------------- */

function escapar(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function paragrafos(texto, permitirHtml) {
  if (permitirHtml) return texto;
  return String(texto).split(/\n\s*\n/).map(function (b) {
    return "<p>" + escapar(b).replace(/\n/g, "<br>") + "</p>";
  }).join("");
}

function porcentagem(parte, total) {
  return total ? Math.round((parte / total) * 1000) / 10 : 0;
}

/* ---------------------------------------------------------
   5. Navegação
--------------------------------------------------------- */

function iniciar() {
  window.addEventListener("hashchange", desenhar);
  desenhar();
}

function rota() {
  var h = (window.location.hash || "#/").replace(/^#/, "");
  var p = h.split("/").filter(Boolean);
  return { nome: p[0] || "estante", param: p[1] ? decodeURIComponent(p[1]) : null };
}

function desenhar() {
  var r = rota();
  var app = document.getElementById("app");
  if (!app) return;

  if (r.nome === "prova" && r.param) {
    var prova = acharProva(r.param);
    if (!prova) { app.innerHTML = telaNaoEncontrada(); return; }
    app.innerHTML = telaProva(prova);
    ligarEventosProva(prova);
  } else if (r.nome === "revisao") {
    var rev = montarRevisao();
    if (!rev.questoes.length) { app.innerHTML = telaRevisaoVazia(); return; }
    app.innerHTML = telaProva(rev);
    ligarEventosProva(rev);
  } else if (r.nome === "progresso") {
    app.innerHTML = telaProgresso();
    ligarEventosProgresso();
  } else if (r.nome === "conta") {
    app.innerHTML = telaConta();
    ligarEventosConta();
  } else {
    app.innerHTML = telaEstante();
  }
}

/* ---------------------------------------------------------
   6. Estante
--------------------------------------------------------- */

function telaEstante() {
  var dados = lerDados();
  var totalErros = errosAtivos(dados).length;

  var html = '<p class="sobrancelha">Início</p>';
  html += '<h1 class="titulo-pagina">Escolha uma prova</h1>';
  html += '<p class="linha-apoio">Clique na alternativa para corrigir na hora. O que você errar entra no caderno de revisão.</p>';
  html += '<div class="estante">';

  html += '<article class="ficha ficha-revisao">';
  html += '<p class="sobrancelha sobrancelha-grifo">Revisão</p>';
  html += '<h2>Caderno de revisão</h2>';
  html += '<p class="ficha-sub">questões erradas de todas as provas</p>';
  html += '<div class="ficha-dados"><span><b>' + totalErros + '</b> questão(ões) na fila</span></div>';
  html += '<div class="ficha-acoes">';
  html += totalErros
    ? '<a class="botao botao-grifo" href="#/revisao">Refazer os erros</a>'
    : '<span class="nota-seca">Nada por aqui ainda.</span>';
  html += '</div></article>';

  PROVAS.forEach(function (p) {
    var res = dados.resultados[p.id];
    var feitas = contarRespondidas(p, dados);
    var emAndamento = feitas > 0 && feitas < p.questoes.length;

    html += '<article class="ficha' + (emAndamento ? " ficha-andamento" : "") + '">';
    if (emAndamento) html += '<p class="sobrancelha sobrancelha-andamento">Em andamento</p>';
    html += '<h2>' + escapar(p.titulo) + '</h2>';
    if (p.subtitulo) html += '<p class="ficha-sub">' + escapar(p.subtitulo) + '</p>';
    html += '<div class="ficha-dados">';
    html += '<span><b>' + p.questoes.length + '</b> questões</span>';
    html += '<span>respondidas: <b>' + feitas + '</b></span>';
    if (res) html += '<span>última nota: <b>' + res.pct + '%</b></span>';
    html += '</div><div class="ficha-acoes">';
    html += '<a class="botao" href="#/prova/' + encodeURIComponent(p.id) + '">' +
      (emAndamento ? "Continuar de onde parou" : feitas ? "Refazer" : "Começar") + '</a>';
    html += '</div></article>';
  });

  html += '</div>';

  if (!PROVAS.length) {
    html += '<div class="vazio"><strong>Nenhuma prova cadastrada</strong>Adicione um arquivo em <code>data/</code> e inclua a linha correspondente no <code>index.html</code>.</div>';
  }
  return html;
}

function contarRespondidas(prova, dados) {
  var n = 0;
  prova.questoes.forEach(function (q) {
    if (typeof resposta(dados, prova.id, q.qid) === "number") n++;
  });
  return n;
}

function telaNaoEncontrada() {
  return '<div class="vazio"><strong>Prova não encontrada</strong>Volte para a <a href="#/">estante</a>.</div>';
}

function telaRevisaoVazia() {
  return '<div class="vazio"><strong>Caderno de revisão vazio</strong>Assim que você errar uma questão, ela aparece aqui para ser refeita. Volte para a <a href="#/">estante</a>.</div>';
}

/* ---------------------------------------------------------
   7. Tela da prova
--------------------------------------------------------- */

function telaProva(prova) {
  var dados = lerDados();
  var eRevisao = prova.revisao === true;

  var html = '<section class="capa-prova' + (eRevisao ? " capa-revisao" : "") + '">';
  html += '<p class="sobrancelha">' + (eRevisao ? "Revisão" : "Simulado") + '</p>';
  html += '<h1>' + escapar(prova.titulo) + '</h1>';
  html += '<p>' + (prova.subtitulo ? escapar(prova.subtitulo) + " · " : "") + prova.questoes.length + ' questões</p>';
  html += '<div class="capa-acoes">';
  html += '<a class="botao botao-fantasma" href="#/">Voltar para a estante</a>';
  html += '<button class="botao botao-fantasma" id="btn-limpar" type="button">Limpar respostas</button>';
  html += '</div></section>';

  html += '<div class="area-prova">';
  html += '<aside class="cartao"><h3>Cartão-resposta</h3><div class="cartao-grade" id="cartao-grade">';
  prova.questoes.forEach(function (q) {
    html += '<button class="cartao-item" type="button" data-ir="' + escapar(q.qid) + '" title="Ir para a questão ' + q.numero + '">' + q.numero + '</button>';
  });
  html += '</div><div class="cartao-placar" id="cartao-placar"></div></aside>';

  html += '<div><div class="lista-questoes">';
  prova.questoes.forEach(function (q) {
    html += blocoQuestao(prova, q, resposta(dados, prova.id, q.qid), eRevisao);
  });
  html += '</div><section class="resultado" id="resultado"></section></div></div>';

  return html;
}

function blocoQuestao(prova, q, escolha, eRevisao) {
  var respondida = typeof escolha === "number";
  var acertou = respondida && escolha === q.correta;

  var classe = "questao" + (respondida ? (acertou ? " respondida-certo" : " respondida-errado") : "");
  var html = '<article class="' + classe + '" id="q-' + escapar(q.qid) + '" data-qid="' + escapar(q.qid) + '">';

  html += '<div class="questao-topo">';
  html += '<span class="questao-num">Questão ' + (q.numero < 10 ? "0" : "") + q.numero + '</span>';
  if (eRevisao && q.origemTitulo) {
    html += '<span class="questao-origem">' + escapar(q.origemTitulo) + ' · nº ' + q.origemNumero + '</span>';
  }
  html += '</div>';

  if (q.apoio) html += '<div class="apoio">' + paragrafos(q.apoio, q.html) + '</div>';
  if (q.imagem) html += '<img class="questao-imagem" src="' + escapar(q.imagem) + '" alt="Figura da questão ' + q.numero + '">';
  html += '<div class="questao-texto">' + paragrafos(q.enunciado, q.html) + '</div>';

  html += '<ul class="alternativas' + (respondida ? " travada" : "") + '">';
  q.alternativas.forEach(function (texto, i) {
    var cls = "alternativa", selo = "";
    if (respondida) {
      if (i === q.correta) {
        cls += " marcada-certo";
        selo = '<span class="selo-alt selo-certo">' + (i === escolha ? "Sua resposta" : "Gabarito") + '</span>';
      } else if (i === escolha) {
        cls += " marcada-errado";
        selo = '<span class="selo-alt selo-errado">Sua resposta</span>';
      }
    }
    html += '<li><button type="button" class="' + cls + '" data-alt="' + i + '"' + (respondida ? " disabled" : "") + '>';
    html += '<span class="bolha">' + LETRAS[i] + '</span>';
    html += '<span class="alternativa-texto">' + (q.html ? texto : escapar(texto)) + '</span>';
    html += selo + '</button></li>';
  });
  html += '</ul>';

  if (respondida && q.comentario) {
    html += '<div class="comentario"><strong>Comentário</strong>' + (q.html ? q.comentario : escapar(q.comentario)) + '</div>';
  }

  return html + '</article>';
}

/* ---------------------------------------------------------
   8. Interação
--------------------------------------------------------- */

function ligarEventosProva(prova) {
  document.querySelector(".lista-questoes").addEventListener("click", function (ev) {
    var botao = ev.target.closest(".alternativa");
    if (!botao || botao.disabled) return;
    responder(prova, botao.closest(".questao").getAttribute("data-qid"), parseInt(botao.getAttribute("data-alt"), 10));
  });

  document.getElementById("cartao-grade").addEventListener("click", function (ev) {
    var alvo = ev.target.closest("[data-ir]");
    if (!alvo) return;
    var el = document.getElementById("q-" + alvo.getAttribute("data-ir"));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("btn-limpar").addEventListener("click", function () {
    if (!confirm("Apagar suas respostas desta prova e recomeçar do zero?\n\nO caderno de revisão não é afetado.")) return;
    var dados = lerDados();
    delete dados.respostas[prova.id];
    delete dados.resultados[prova.id];
    dados.limpezas[prova.id] = Date.now();
    gravarDados(dados);
    desenhar();
  });

  atualizarPainel(prova);
}

function responder(prova, qid, escolha) {
  var questao = null;
  for (var i = 0; i < prova.questoes.length; i++) {
    if (prova.questoes[i].qid === qid) { questao = prova.questoes[i]; break; }
  }
  if (!questao) return;

  var agora = Date.now();
  var dados = lerDados();
  if (!dados.respostas[prova.id]) dados.respostas[prova.id] = {};
  dados.respostas[prova.id][qid] = { e: escolha, t: agora };

  var acertou = escolha === questao.correta;
  var origemId = questao.origemId || prova.id;
  var origemQid = questao.origemQid || questao.qid;

  /* o registro fica gravado mesmo quando resolvido: é assim que a
     baixa se propaga para as outras máquinas na hora de mesclar */
  dados.erros[chaveErro(origemId, origemQid)] = {
    provaId: origemId, qid: origemQid, ativo: !acertou, t: agora
  };

  gravarDados(dados);

  var molde = document.createElement("div");
  molde.innerHTML = blocoQuestao(prova, questao, escolha, prova.revisao === true);
  document.getElementById("q-" + qid).replaceWith(molde.firstChild);

  atualizarPainel(prova);
}

function calcular(prova) {
  var dados = lerDados();
  var acertos = 0, erros = 0;
  prova.questoes.forEach(function (q) {
    var e = resposta(dados, prova.id, q.qid);
    if (typeof e !== "number") return;
    if (e === q.correta) acertos++; else erros++;
  });
  var total = prova.questoes.length, feitas = acertos + erros;
  return {
    acertos: acertos, erros: erros, respondidas: feitas, brancos: total - feitas,
    total: total, pct: porcentagem(acertos, total), pctParcial: porcentagem(acertos, feitas),
    completa: feitas === total && total > 0
  };
}

function atualizarPainel(prova) {
  var dados = lerDados();
  var p = calcular(prova);

  prova.questoes.forEach(function (q) {
    var item = document.querySelector('.cartao-item[data-ir="' + q.qid + '"]');
    if (!item) return;
    var e = resposta(dados, prova.id, q.qid);
    item.classList.remove("foi-certo", "foi-errado");
    if (typeof e === "number") item.classList.add(e === q.correta ? "foi-certo" : "foi-errado");
  });

  document.getElementById("cartao-placar").innerHTML =
    '<span>respondidas <b>' + p.respondidas + '/' + p.total + '</b></span>' +
    '<span>acertos <b>' + p.acertos + '</b></span>' +
    '<span>erros <b>' + p.erros + '</b></span>';

  var caixa = document.getElementById("resultado");

  if (!p.respondidas) {
    caixa.innerHTML = '<h2>Resultado</h2><p class="nota-seca">Responda a primeira questão para o placar aparecer.</p>';
    return;
  }

  var nota = p.completa ? p.pct : p.pctParcial;
  var html = '<h2>' + (p.completa ? "Prova concluída" : "Resultado parcial") + '</h2>';
  html += '<div class="placar"><div class="placar-nota">' + String(nota).replace(".", ",") + '<span>%</span></div>';
  html += '<div class="placar-linhas">';
  html += '<div>acertos<b class="n-certo">' + p.acertos + '</b></div>';
  html += '<div>erros<b class="n-errado">' + p.erros + '</b></div>';
  html += '<div>em branco<b>' + p.brancos + '</b></div>';
  html += '<div>total<b>' + p.total + '</b></div></div></div>';

  html += '<div class="barra"><i style="width:' + (p.acertos / p.respondidas) * 100 + '%"></i></div>';
  html += '<p class="nota-seca">' + (p.completa
    ? "aproveitamento sobre as " + p.total + " questões da prova"
    : "aproveitamento sobre as " + p.respondidas + " já respondidas") + '</p>';

  if (p.completa) {
    var fila = errosAtivos(dados).length;
    html += p.erros > 0
      ? '<div class="aviso-erros">As ' + p.erros + ' questões erradas foram para o <a href="#/revisao">caderno de revisão</a> (' + fila + ' no total). Cada uma sai da fila quando você acertar.</div>'
      : '<div class="aviso-erros">Gabarito limpo. Nada de novo foi para o caderno de revisão.</div>';

    var d = lerDados();
    var anterior = d.resultados[prova.id];
    if (!anterior || anterior.acertos !== p.acertos || anterior.total !== p.total) {
      d.resultados[prova.id] = { acertos: p.acertos, erros: p.erros, total: p.total, pct: p.pct, t: Date.now() };
      gravarDados(d);
    }
  }

  html += '<div class="resultado-acoes">';
  html += '<button class="botao botao-fantasma" id="btn-limpar-2" type="button">Limpar respostas</button>';
  html += '<a class="botao botao-grifo" href="#/revisao">Ir para a revisão</a>';
  html += '<a class="botao botao-fantasma" href="#/">Outra prova</a></div>';

  caixa.innerHTML = html;
  document.getElementById("btn-limpar-2").addEventListener("click", function () {
    document.getElementById("btn-limpar").click();
  });
}

/* ---------------------------------------------------------
   9. Progresso
--------------------------------------------------------- */

function telaProgresso() {
  var dados = lerDados();
  var fila = errosAtivos(dados).length;

  var html = '<p class="sobrancelha">Progresso</p><h1 class="titulo-pagina">Seu histórico</h1>';

  html += '<section class="painel"><h2>Resultados por prova</h2>';
  var linhas = "";
  PROVAS.forEach(function (p) {
    var r = dados.resultados[p.id];
    linhas += '<tr><td>' + escapar(p.titulo) + '</td>';
    linhas += '<td class="num">' + contarRespondidas(p, dados) + '/' + p.questoes.length + '</td>';
    linhas += '<td class="num">' + (r ? r.acertos + " acertos" : "—") + '</td>';
    linhas += '<td class="num">' + (r ? r.pct + "%" : "—") + '</td></tr>';
  });
  html += linhas
    ? '<table class="tabela"><thead><tr><th>Prova</th><th>Respondidas</th><th>Acertos</th><th>Nota</th></tr></thead><tbody>' + linhas + '</tbody></table>'
    : '<p class="nota-seca">Nenhuma prova cadastrada ainda.</p>';
  html += '</section>';

  html += '<section class="painel"><h2>Caderno de revisão</h2>';
  html += '<p>' + fila + ' questão(ões) esperando para serem refeitas. Uma questão sai da fila quando você acerta.</p>';
  html += '<div class="painel-acoes">';
  html += '<a class="botao botao-grifo" href="#/revisao">Abrir revisão</a>';
  html += '<button class="botao botao-fantasma" id="btn-zerar-erros" type="button">Esvaziar caderno de revisão</button>';
  html += '</div></section>';

  html += '<section class="painel"><h2>Cópia de segurança</h2>';
  html += '<p>Além da sincronização, você pode guardar o histórico num arquivo.</p>';
  html += '<div class="painel-acoes">';
  html += '<button class="botao botao-fantasma" id="btn-exportar" type="button">Baixar arquivo</button>';
  html += '<button class="botao botao-fantasma" id="btn-importar" type="button">Importar arquivo</button>';
  html += '<input type="file" id="arquivo" accept="application/json,.json" hidden>';
  html += '<button class="botao botao-fantasma" id="btn-zerar-tudo" type="button">Apagar todo o histórico</button>';
  html += '<span class="recado" id="recado"></span>';
  html += '</div></section>';

  return html;
}

function ligarEventosProgresso() {
  document.getElementById("btn-exportar").addEventListener("click", function () {
    var blob = new Blob([JSON.stringify(lerDados(), null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "simulados-progresso-" + new Date().toISOString().slice(0, 10) + ".json";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  var campo = document.getElementById("arquivo");
  document.getElementById("btn-importar").addEventListener("click", function () { campo.click(); });

  campo.addEventListener("change", function () {
    var arq = campo.files[0];
    if (!arq) return;
    var leitor = new FileReader();
    leitor.onload = function () {
      try {
        gravarDados(mesclarDados(lerDados(), JSON.parse(leitor.result)));
        desenhar();
        var r = document.getElementById("recado");
        if (r) r.textContent = "Progresso importado.";
      } catch (e) {
        alert("Não deu para ler esse arquivo. Ele precisa ser o .json baixado por este site.");
      }
    };
    leitor.readAsText(arq);
  });

  document.getElementById("btn-zerar-erros").addEventListener("click", function () {
    if (!confirm("Esvaziar o caderno de revisão? As questões erradas saem da fila.")) return;
    var d = lerDados(), agora = Date.now();
    Object.keys(d.erros).forEach(function (k) { d.erros[k].ativo = false; d.erros[k].t = agora; });
    gravarDados(d);
    desenhar();
  });

  document.getElementById("btn-zerar-tudo").addEventListener("click", function () {
    if (!confirm("Apagar respostas, resultados e caderno de revisão em todas as máquinas? Não dá para desfazer.")) return;
    var d = dadosPadrao();
    d.limpezas.__tudo = Date.now();
    gravarDados(d);
    desenhar();
  });
}

/* ---------------------------------------------------------
   10. Conta / sincronização
--------------------------------------------------------- */

function estadoNuvem(texto, tipo) {
  var el = document.getElementById("estado-nuvem");
  if (!el) return;
  el.textContent = texto;
  el.className = "estado-nuvem estado-" + (tipo || "neutro");
}

function telaConta() {
  var N = window.Nuvem;

  var html = '<p class="sobrancelha">Conta</p><h1 class="titulo-pagina">Sincronizar entre máquinas</h1>';

  if (!N || !N.configurado) {
    html += '<section class="painel"><h2>Sincronização não configurada</h2>';
    html += '<p>Este site está gravando o progresso só neste navegador. Para continuar uma prova em outra máquina, preencha o arquivo <code>config.js</code> com os dados do seu projeto Supabase. O passo a passo está no <code>LEIA-ME.md</code>.</p>';
    html += '<p class="nota-seca">Enquanto isso, use a cópia de segurança em <a href="#/progresso">Progresso</a> para levar o histórico.</p>';
    html += '</section>';
    return html;
  }

  if (N.email) {
    html += '<section class="painel"><h2>Conectado</h2>';
    html += '<p>Você está em <b>' + escapar(N.email) + '</b>. Cada resposta é enviada assim que você clica, e o site busca novidades sempre que você volta para a aba.</p>';
    html += '<div class="painel-acoes">';
    html += '<button class="botao botao-fantasma" id="btn-sincronizar" type="button">Buscar agora</button>';
    html += '<button class="botao botao-fantasma" id="btn-sair" type="button">Sair desta máquina</button>';
    html += '<span class="recado" id="recado-conta"></span>';
    html += '</div></section>';
    return html;
  }

  html += '<section class="painel"><h2>Entrar</h2>';
  html += '<p>Use o mesmo e-mail e senha em todas as máquinas. Na primeira vez, crie a conta.</p>';
  html += '<div class="formulario">';
  html += '<label>E-mail<input type="email" id="campo-email" autocomplete="username" placeholder="voce@exemplo.com"></label>';
  html += '<label>Senha<input type="password" id="campo-senha" autocomplete="current-password" placeholder="mínimo de 6 caracteres"></label>';
  html += '</div>';
  html += '<div class="painel-acoes">';
  html += '<button class="botao" id="btn-entrar" type="button">Entrar</button>';
  html += '<button class="botao botao-fantasma" id="btn-criar" type="button">Criar conta</button>';
  html += '<span class="recado" id="recado-conta"></span>';
  html += '</div></section>';

  html += '<section class="painel"><h2>O que é sincronizado</h2>';
  html += '<p>Respostas em andamento, notas das provas concluídas e a fila do caderno de revisão. Se você parar uma prova na metade numa máquina, ela aparece como <b>em andamento</b> na outra, no ponto exato onde você parou.</p></section>';

  return html;
}

function ligarEventosConta() {
  var N = window.Nuvem;
  if (!N || !N.configurado) return;

  var recado = function (texto, ok) {
    var el = document.getElementById("recado-conta");
    if (el) { el.textContent = texto; el.className = "recado" + (ok === false ? " recado-erro" : ""); }
  };

  var entrar = document.getElementById("btn-entrar");
  if (entrar) {
    var tentar = function (criar) {
      var email = document.getElementById("campo-email").value.trim();
      var senha = document.getElementById("campo-senha").value;
      if (!email || !senha) { recado("Preencha e-mail e senha.", false); return; }
      recado("Conectando…");
      N[criar ? "criarConta" : "entrar"](email, senha).then(function (r) {
        if (r.erro) recado(r.erro, false);
        else desenhar();
      });
    };
    entrar.addEventListener("click", function () { tentar(false); });
    document.getElementById("btn-criar").addEventListener("click", function () { tentar(true); });
    document.getElementById("campo-senha").addEventListener("keydown", function (ev) {
      if (ev.key === "Enter") tentar(false);
    });
  }

  var sair = document.getElementById("btn-sair");
  if (sair) {
    sair.addEventListener("click", function () {
      if (!confirm("Sair da conta nesta máquina? O progresso continua salvo na nuvem.")) return;
      N.sair().then(desenhar);
    });
    document.getElementById("btn-sincronizar").addEventListener("click", function () {
      recado("Buscando…");
      N.sincronizar().then(function (r) {
        recado(r && r.erro ? r.erro : "Tudo em dia.", !(r && r.erro));
      });
    });
  }
}
