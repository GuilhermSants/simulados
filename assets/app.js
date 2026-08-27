/* =========================================================
   Caderno de Simulados — motor
   Sem dependências. Funciona como site estático.
   ========================================================= */

var PROVAS = [];
var LETRAS = ["A", "B", "C", "D", "E", "F", "G"];

/* ---------------------------------------------------------
   1. Cadastro de provas
   Chamado pelos arquivos dentro de data/
--------------------------------------------------------- */

function registrarProva(prova) {
  var normalizada = {
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
  };
  PROVAS.push(normalizada);
}

function interpretarGabarito(valor) {
  if (typeof valor === "number") return valor;
  var letra = String(valor || "").trim().toUpperCase();
  var pos = LETRAS.indexOf(letra);
  return pos >= 0 ? pos : 0;
}

function acharProva(id) {
  for (var i = 0; i < PROVAS.length; i++) {
    if (PROVAS[i].id === id) return PROVAS[i];
  }
  return null;
}

/* ---------------------------------------------------------
   2. Armazenamento
   localStorage quando disponível; memória como reserva.
--------------------------------------------------------- */

var CHAVE = "caderno-simulados-v1";
var memoria = null;

function temLocalStorage() {
  try {
    window.localStorage.setItem("__teste__", "1");
    window.localStorage.removeItem("__teste__");
    return true;
  } catch (e) {
    return false;
  }
}

var LS = temLocalStorage();

function dadosPadrao() {
  return { respostas: {}, erros: {}, resultados: {} };
}

function lerDados() {
  if (!LS) {
    if (!memoria) memoria = dadosPadrao();
    return memoria;
  }
  try {
    var bruto = window.localStorage.getItem(CHAVE);
    if (!bruto) return dadosPadrao();
    var obj = JSON.parse(bruto);
    return {
      respostas: obj.respostas || {},
      erros: obj.erros || {},
      resultados: obj.resultados || {}
    };
  } catch (e) {
    return dadosPadrao();
  }
}

function gravarDados(dados) {
  if (!LS) {
    memoria = dados;
    return;
  }
  try {
    window.localStorage.setItem(CHAVE, JSON.stringify(dados));
  } catch (e) {
    memoria = dados;
  }
}

function chaveErro(provaId, qid) {
  return provaId + "::" + qid;
}

/* ---------------------------------------------------------
   3. Caderno de revisão
--------------------------------------------------------- */

function montarRevisao() {
  var dados = lerDados();
  var questoes = [];

  Object.keys(dados.erros).forEach(function (chave) {
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
        /* identificador próprio: duas provas podem ter questões de mesmo número */
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
   4. Utilitários de texto
--------------------------------------------------------- */

function escapar(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function paragrafos(texto, permitirHtml) {
  if (permitirHtml) return texto;
  return String(texto)
    .split(/\n\s*\n/)
    .map(function (bloco) {
      return "<p>" + escapar(bloco).replace(/\n/g, "<br>") + "</p>";
    })
    .join("");
}

function porcentagem(parte, total) {
  if (!total) return 0;
  return Math.round((parte / total) * 1000) / 10;
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
  var partes = h.split("/").filter(Boolean);
  return { nome: partes[0] || "estante", param: partes[1] ? decodeURIComponent(partes[1]) : null };
}

function desenhar() {
  var r = rota();
  var app = document.getElementById("app");

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
  } else {
    app.innerHTML = telaEstante();
  }

  window.scrollTo(0, 0);
}

/* ---------------------------------------------------------
   6. Tela: estante de provas
--------------------------------------------------------- */

function telaEstante() {
  var dados = lerDados();
  var totalErros = Object.keys(dados.erros).length;

  var html = '<p class="sobrancelha">Início</p>';
  html += '<h1 class="titulo-pagina">Escolha uma prova</h1>';
  html += '<p style="max-width:60ch;margin:0;color:var(--tinta-fraca)">Clique na alternativa para corrigir na hora. O que você errar entra automaticamente no caderno de revisão.</p>';

  html += '<div class="estante">';

  html += '<article class="ficha ficha-revisao">';
  html += '<p class="sobrancelha" style="color:#7A4E08">Revisão</p>';
  html += '<h2>Caderno de revisão</h2>';
  html += '<p class="ficha-sub">questões erradas de todas as provas</p>';
  html += '<div class="ficha-dados"><span><b>' + totalErros + '</b> questão(ões) na fila</span></div>';
  html += '<div class="ficha-acoes">';
  if (totalErros) {
    html += '<a class="botao botao-grifo" href="#/revisao">Refazer os erros</a>';
  } else {
    html += '<span style="font-family:var(--mono);font-size:12px;color:var(--tinta-fraca)">Nada por aqui ainda.</span>';
  }
  html += '</div></article>';

  PROVAS.forEach(function (p) {
    var res = dados.resultados[p.id];
    var respondidas = contarRespondidas(p, dados);
    html += '<article class="ficha">';
    html += '<h2>' + escapar(p.titulo) + '</h2>';
    if (p.subtitulo) html += '<p class="ficha-sub">' + escapar(p.subtitulo) + '</p>';
    html += '<div class="ficha-dados">';
    html += '<span><b>' + p.questoes.length + '</b> questões</span>';
    html += '<span>respondidas: <b>' + respondidas + '</b></span>';
    if (res) html += '<span>último resultado: <b>' + res.pct + '%</b></span>';
    html += '</div>';
    html += '<div class="ficha-acoes">';
    html += '<a class="botao" href="#/prova/' + encodeURIComponent(p.id) + '">' + (respondidas ? "Continuar" : "Começar") + '</a>';
    html += '</div>';
    html += '</article>';
  });

  html += '</div>';

  if (!PROVAS.length) {
    html += '<div class="vazio" style="margin-top:22px"><strong>Nenhuma prova cadastrada</strong>Adicione um arquivo em <code>data/</code> e inclua a linha correspondente no <code>index.html</code>.</div>';
  }

  return html;
}

function contarRespondidas(prova, dados) {
  var r = dados.respostas[prova.id] || {};
  var n = 0;
  prova.questoes.forEach(function (q) {
    if (typeof r[q.qid] === "number") n++;
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
   7. Tela: prova
--------------------------------------------------------- */

function telaProva(prova) {
  var dados = lerDados();
  var respostas = dados.respostas[prova.id] || {};
  var eRevisao = prova.revisao === true;

  var html = '<section class="capa-prova' + (eRevisao ? " capa-revisao" : "") + '">';
  html += '<p class="sobrancelha">' + (eRevisao ? "Revisão" : "Simulado") + '</p>';
  html += '<h1>' + escapar(prova.titulo) + '</h1>';
  html += '<p>' + escapar(prova.subtitulo || "") + (prova.subtitulo ? " · " : "") + prova.questoes.length + ' questões</p>';
  html += '<div class="capa-acoes">';
  html += '<a class="botao botao-fantasma" href="#/">Voltar para a estante</a>';
  html += '<button class="botao botao-fantasma" id="btn-limpar">Limpar respostas</button>';
  html += '</div></section>';

  html += '<div class="area-prova">';

  /* cartão-resposta */
  html += '<aside class="cartao"><h3>Cartão-resposta</h3><div class="cartao-grade" id="cartao-grade">';
  prova.questoes.forEach(function (q) {
    html += '<button class="cartao-item" data-ir="' + escapar(q.qid) + '" type="button" title="Ir para a questão ' + q.numero + '">' + q.numero + '</button>';
  });
  html += '</div><div class="cartao-placar" id="cartao-placar"></div></aside>';

  /* questões */
  html += '<div><div class="lista-questoes">';
  prova.questoes.forEach(function (q) {
    html += blocoQuestao(prova, q, respostas[q.qid], eRevisao);
  });
  html += '</div>';
  html += '<section class="resultado" id="resultado"></section>';
  html += '</div></div>';

  return html;
}

function blocoQuestao(prova, q, escolha, eRevisao) {
  var respondida = typeof escolha === "number";
  var acertou = respondida && escolha === q.correta;

  var classe = "questao";
  if (respondida) classe += acertou ? " respondida-certo" : " respondida-errado";

  var html = '<article class="' + classe + '" id="q-' + escapar(q.qid) + '" data-qid="' + escapar(q.qid) + '">';

  html += '<div class="questao-topo">';
  html += '<span class="questao-num">Questão ' + (q.numero < 10 ? "0" : "") + q.numero + '</span>';
  if (eRevisao && q.origemTitulo) {
    html += '<span class="questao-origem">' + escapar(q.origemTitulo) + ' · nº ' + q.origemNumero + '</span>';
  }
  html += '</div>';

  if (q.apoio) html += '<div class="apoio">' + paragrafos(q.apoio, q.html) + '</div>';
  if (q.imagem) html += '<img class="questao-imagem" src="' + escapar(q.imagem) + '" alt="Imagem da questão ' + q.numero + '">';

  html += '<div class="questao-texto">' + paragrafos(q.enunciado, q.html) + '</div>';

  html += '<ul class="alternativas' + (respondida ? " travada" : "") + '">';
  q.alternativas.forEach(function (texto, i) {
    var cls = "alternativa";
    var selo = "";
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
    html += selo;
    html += '</button></li>';
  });
  html += '</ul>';

  if (respondida && q.comentario) {
    html += '<div class="comentario"><strong>Comentário</strong>' + (q.html ? q.comentario : escapar(q.comentario)) + '</div>';
  }

  html += '</article>';
  return html;
}

/* ---------------------------------------------------------
   8. Interação da prova
--------------------------------------------------------- */

function ligarEventosProva(prova) {
  var lista = document.querySelector(".lista-questoes");

  lista.addEventListener("click", function (ev) {
    var botao = ev.target.closest(".alternativa");
    if (!botao || botao.disabled) return;
    var artigo = botao.closest(".questao");
    responder(prova, artigo.getAttribute("data-qid"), parseInt(botao.getAttribute("data-alt"), 10));
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

  var dados = lerDados();
  if (!dados.respostas[prova.id]) dados.respostas[prova.id] = {};
  dados.respostas[prova.id][qid] = escolha;

  var acertou = escolha === questao.correta;
  var provaOrigem = questao.origemId || prova.id;
  var qidOrigem = questao.origemQid || questao.qid;
  var chave = chaveErro(provaOrigem, qidOrigem);

  if (acertou) {
    delete dados.erros[chave];
  } else {
    dados.erros[chave] = { provaId: provaOrigem, qid: qidOrigem, quando: Date.now() };
  }

  gravarDados(dados);

  /* redesenha só a questão respondida */
  var antigo = document.getElementById("q-" + qid);
  var molde = document.createElement("div");
  molde.innerHTML = blocoQuestao(prova, questao, escolha, prova.revisao === true);
  antigo.replaceWith(molde.firstChild);

  atualizarPainel(prova);
}

function calcular(prova) {
  var dados = lerDados();
  var respostas = dados.respostas[prova.id] || {};
  var acertos = 0, erros = 0;

  prova.questoes.forEach(function (q) {
    var e = respostas[q.qid];
    if (typeof e !== "number") return;
    if (e === q.correta) acertos++; else erros++;
  });

  var total = prova.questoes.length;
  var respondidas = acertos + erros;

  return {
    acertos: acertos,
    erros: erros,
    respondidas: respondidas,
    brancos: total - respondidas,
    total: total,
    pct: porcentagem(acertos, total),
    pctParcial: porcentagem(acertos, respondidas),
    completa: respondidas === total && total > 0
  };
}

function atualizarPainel(prova) {
  var dados = lerDados();
  var respostas = dados.respostas[prova.id] || {};
  var p = calcular(prova);

  /* cartão-resposta */
  prova.questoes.forEach(function (q) {
    var item = document.querySelector('.cartao-item[data-ir="' + q.qid + '"]');
    if (!item) return;
    var e = respostas[q.qid];
    item.classList.remove("foi-certo", "foi-errado");
    if (typeof e === "number") item.classList.add(e === q.correta ? "foi-certo" : "foi-errado");
  });

  var placar = document.getElementById("cartao-placar");
  placar.innerHTML =
    '<span>respondidas <b>' + p.respondidas + '/' + p.total + '</b></span>' +
    '<span>acertos <b>' + p.acertos + '</b></span>' +
    '<span>erros <b>' + p.erros + '</b></span>';

  /* painel de resultado */
  var caixa = document.getElementById("resultado");

  if (!p.respondidas) {
    caixa.innerHTML = '<h2>Resultado</h2><p style="margin:0;color:var(--tinta-fraca)">Responda a primeira questão para o placar aparecer.</p>';
    return;
  }

  var nota = p.completa ? p.pct : p.pctParcial;

  var html = '<h2>' + (p.completa ? "Prova concluída" : "Resultado parcial") + '</h2>';
  html += '<div class="placar">';
  html += '<div class="placar-nota">' + nota.toString().replace(".", ",") + '<span>%</span></div>';
  html += '<div class="placar-linhas">';
  html += '<div>acertos<b class="n-certo">' + p.acertos + '</b></div>';
  html += '<div>erros<b class="n-errado">' + p.erros + '</b></div>';
  html += '<div>em branco<b>' + p.brancos + '</b></div>';
  html += '<div>total<b>' + p.total + '</b></div>';
  html += '</div></div>';

  html += '<div class="barra"><i style="width:' + (p.respondidas ? (p.acertos / p.respondidas) * 100 : 0) + '%"></i></div>';
  html += '<p style="margin:0;font-family:var(--mono);font-size:12px;color:var(--tinta-fraca)">' +
    (p.completa ? "aproveitamento sobre as " + p.total + " questões da prova" : "aproveitamento sobre as " + p.respondidas + " questões já respondidas") + '</p>';

  if (p.completa) {
    var naFila = Object.keys(lerDados().erros).length;
    if (p.erros > 0) {
      html += '<div class="aviso-erros">As ' + p.erros + ' questões que você errou foram para o <a href="#/revisao">caderno de revisão</a> (' + naFila + ' no total). Cada uma sai da lista quando você acertar.</div>';
    } else {
      html += '<div class="aviso-erros">Gabarito limpo nesta prova. Nada de novo foi para o caderno de revisão.</div>';
    }

    /* grava o resultado da rodada */
    var d = lerDados();
    d.resultados[prova.id] = { acertos: p.acertos, erros: p.erros, total: p.total, pct: p.pct, quando: Date.now() };
    gravarDados(d);
  }

  html += '<div class="resultado-acoes">';
  html += '<button class="botao botao-fantasma" id="btn-limpar-2">Limpar respostas</button>';
  html += '<a class="botao botao-grifo" href="#/revisao">Ir para a revisão</a>';
  html += '<a class="botao botao-fantasma" href="#/">Outra prova</a>';
  html += '</div>';

  caixa.innerHTML = html;

  document.getElementById("btn-limpar-2").addEventListener("click", function () {
    document.getElementById("btn-limpar").click();
  });
}

/* ---------------------------------------------------------
   9. Tela: progresso (exportar / importar / zerar)
--------------------------------------------------------- */

function telaProgresso() {
  var dados = lerDados();
  var erros = Object.keys(dados.erros).length;

  var html = '<p class="sobrancelha">Progresso</p>';
  html += '<h1 class="titulo-pagina">Seu histórico</h1>';

  html += '<section class="painel">';
  html += '<h2>Levar para outra máquina</h2>';
  html += '<p>As respostas ficam gravadas só neste navegador. Baixe o arquivo, abra o site na outra máquina e importe.</p>';
  html += '<div class="painel-acoes">';
  html += '<button class="botao" id="btn-exportar">Baixar progresso</button>';
  html += '<button class="botao botao-fantasma" id="btn-importar">Importar arquivo</button>';
  html += '<input type="file" id="arquivo" accept="application/json,.json" hidden>';
  html += '<span class="recado" id="recado"></span>';
  html += '</div></section>';

  html += '<section class="painel">';
  html += '<h2>Resultados por prova</h2>';
  var linhas = "";
  PROVAS.forEach(function (p) {
    var r = dados.resultados[p.id];
    var respondidas = contarRespondidas(p, dados);
    linhas += '<tr><td>' + escapar(p.titulo) + '</td>';
    linhas += '<td class="num">' + respondidas + '/' + p.questoes.length + '</td>';
    linhas += '<td class="num">' + (r ? r.acertos + " acertos" : "—") + '</td>';
    linhas += '<td class="num">' + (r ? r.pct + "%" : "—") + '</td></tr>';
  });
  if (linhas) {
    html += '<table class="tabela"><thead><tr><th>Prova</th><th>Respondidas</th><th>Acertos</th><th>Nota</th></tr></thead><tbody>' + linhas + '</tbody></table>';
  } else {
    html += '<p style="margin:0">Nenhuma prova cadastrada ainda.</p>';
  }
  html += '</section>';

  html += '<section class="painel">';
  html += '<h2>Caderno de revisão</h2>';
  html += '<p>' + erros + ' questão(ões) esperando para serem refeitas. Uma questão sai da lista quando você acerta.</p>';
  html += '<div class="painel-acoes">';
  html += '<a class="botao botao-grifo" href="#/revisao">Abrir revisão</a>';
  html += '<button class="botao botao-fantasma" id="btn-zerar-erros">Esvaziar caderno de revisão</button>';
  html += '<button class="botao botao-fantasma" id="btn-zerar-tudo">Apagar todo o histórico</button>';
  html += '</div></section>';

  return html;
}

function ligarEventosProgresso() {
  document.getElementById("btn-exportar").addEventListener("click", function () {
    var conteudo = JSON.stringify(lerDados(), null, 2);
    var blob = new Blob([conteudo], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    var hoje = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = "simulados-progresso-" + hoje + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
        var novo = JSON.parse(leitor.result);
        var atual = lerDados();
        var juntos = {
          respostas: Object.assign({}, atual.respostas, novo.respostas || {}),
          erros: Object.assign({}, atual.erros, novo.erros || {}),
          resultados: Object.assign({}, atual.resultados, novo.resultados || {})
        };
        gravarDados(juntos);
        desenhar();
        var recado = document.getElementById("recado");
        if (recado) recado.textContent = "Progresso importado.";
      } catch (e) {
        alert("Não deu para ler esse arquivo. Ele precisa ser o .json baixado por este site.");
      }
    };
    leitor.readAsText(arq);
  });

  document.getElementById("btn-zerar-erros").addEventListener("click", function () {
    if (!confirm("Esvaziar o caderno de revisão? As questões erradas saem da fila.")) return;
    var d = lerDados();
    d.erros = {};
    gravarDados(d);
    desenhar();
  });

  document.getElementById("btn-zerar-tudo").addEventListener("click", function () {
    if (!confirm("Apagar respostas, resultados e caderno de revisão? Não dá para desfazer.")) return;
    gravarDados(dadosPadrao());
    desenhar();
  });
}
