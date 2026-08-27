/* =========================================================
   Sincronização (opcional) via Supabase.
   Sem config.js preenchido, o site funciona só nesta máquina.
   ========================================================= */

const TABELA = "progresso";
const ESPERA_ENVIO = 900;      // agrupa cliques seguidos num único envio
const ESPERA_BUSCA = 20000;    // intervalo mínimo entre buscas automáticas

function estado(texto, tipo) {
  if (window.estadoNuvem) window.estadoNuvem(texto, tipo);
}

function traduzir(mensagem) {
  const m = String(mensagem || "");
  if (/Invalid login credentials/i.test(m)) return "E-mail ou senha incorretos.";
  if (/already registered/i.test(m)) return "Esse e-mail já tem conta. Use Entrar.";
  if (/at least 6 characters/i.test(m)) return "A senha precisa de pelo menos 6 caracteres.";
  if (/valid email/i.test(m)) return "E-mail inválido.";
  if (/Email not confirmed/i.test(m)) return "Confirme o e-mail antes de entrar.";
  if (/rate limit|too many/i.test(m)) return "Muitas tentativas. Espere um minuto.";
  if (/Failed to fetch|NetworkError/i.test(m)) return "Sem conexão com o servidor.";
  return m || "Não deu certo. Tente de novo.";
}

(async function () {
  const cfg = window.SUPABASE || {};
  const semConfig = !cfg.url || !cfg.anonKey || /SEU-PROJETO|COLE-AQUI/i.test(cfg.url + cfg.anonKey);

  if (semConfig) {
    window.Nuvem = { configurado: false };
    estado("só nesta máquina", "neutro");
    return;
  }

  let createClient;
  try {
    ({ createClient } = await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm"));
  } catch (e) {
    window.Nuvem = { configurado: false };
    estado("servidor fora de alcance", "erro");
    return;
  }

  const sb = createClient(cfg.url, cfg.anonKey, {
    auth: { persistSession: true, autoRefreshToken: true }
  });

  let usuario = null;
  let temporizador = null;
  let ultimaBusca = 0;

  async function enviar(dados) {
    if (!usuario) return;
    estado("salvando…", "ativo");
    const { error } = await sb.from(TABELA).upsert(
      { usuario: usuario.id, dados: dados, atualizado_em: new Date().toISOString() },
      { onConflict: "usuario" }
    );
    estado(error ? "não salvou" : "sincronizado", error ? "erro" : "ok");
  }

  function agendarEnvio(dados) {
    if (!usuario) return;
    estado("salvando…", "ativo");
    clearTimeout(temporizador);
    temporizador = setTimeout(function () { enviar(dados); }, ESPERA_ENVIO);
  }

  async function sincronizar() {
    if (!usuario) return { erro: "Você não está conectado." };
    estado("sincronizando…", "ativo");
    ultimaBusca = Date.now();

    const { data, error } = await sb.from(TABELA).select("dados").eq("usuario", usuario.id).maybeSingle();
    if (error) {
      estado("falha ao sincronizar", "erro");
      return { erro: traduzir(error.message) };
    }

    /* funde o que veio com o que está aqui: vence o registro mais recente de cada questão */
    const juntos = window.aplicarDadosDaNuvem(data ? data.dados : {});
    await enviar(juntos);
    return {};
  }

  async function entrar(email, senha) {
    const { data, error } = await sb.auth.signInWithPassword({ email: email, password: senha });
    if (error) return { erro: traduzir(error.message) };
    usuario = data.user;
    window.Nuvem.email = usuario.email;
    await sincronizar();
    return {};
  }

  async function criarConta(email, senha) {
    const { data, error } = await sb.auth.signUp({ email: email, password: senha });
    if (error) return { erro: traduzir(error.message) };
    if (!data.session) return { erro: "Conta criada. Confirme pelo e-mail e depois use Entrar." };
    usuario = data.user;
    window.Nuvem.email = usuario.email;
    await sincronizar();
    return {};
  }

  async function sair() {
    await sb.auth.signOut();
    usuario = null;
    window.Nuvem.email = null;
    estado("só nesta máquina", "neutro");
    return {};
  }

  window.Nuvem = {
    configurado: true,
    email: null,
    entrar: entrar,
    criarConta: criarConta,
    sair: sair,
    sincronizar: sincronizar,
    agendarEnvio: agendarEnvio
  };

  /* sessão já existente nesta máquina */
  const { data: { session } } = await sb.auth.getSession();
  if (session) {
    usuario = session.user;
    window.Nuvem.email = usuario.email;
    await sincronizar();
    if (window.desenhar) window.desenhar();
  } else {
    estado("entre para sincronizar", "neutro");
  }

  /* ao voltar para a aba, busca o que foi feito nas outras máquinas */
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState !== "visible") return;
    if (!usuario || Date.now() - ultimaBusca < ESPERA_BUSCA) return;
    sincronizar();
  });
})();
