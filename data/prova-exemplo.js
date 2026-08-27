/* =========================================================
   PROVA DE EXEMPLO — apague quando as provas reais entrarem.
   Formato de cada questão:

   {
     enunciado:    "texto da pergunta",
     apoio:        "texto de apoio / trecho de lei (opcional)",
     imagem:       "img/figura01.png"  (opcional),
     alternativas: ["texto A", "texto B", "texto C", "texto D"],
     correta:      "C",   // letra do gabarito (ou o índice: 0 = A)
     comentario:   "aparece depois que a questão é respondida (opcional)"
   }
   ========================================================= */

registrarProva({
  id: "exemplo-saneamento",
  titulo: "Saneamento básico — prova de exemplo",
  subtitulo: "Modelo para você testar antes de enviar os PDFs",
  questoes: [
    {
      enunciado: "Segundo a Lei nº 11.445/2007, o saneamento básico é o conjunto de serviços, infraestruturas e instalações operacionais de quais componentes?",
      alternativas: [
        "Abastecimento de água potável e esgotamento sanitário, apenas.",
        "Coleta de resíduos sólidos e drenagem urbana, apenas.",
        "Abastecimento de água potável; esgotamento sanitário; limpeza urbana e manejo de resíduos sólidos; drenagem e manejo das águas pluviais urbanas.",
        "Abastecimento de água potável; esgotamento sanitário; controle de vetores; e fornecimento de energia elétrica."
      ],
      correta: "C",
      comentario: "São os quatro componentes definidos no art. 3º, I, da Lei nº 11.445/2007."
    },
    {
      enunciado: "A Política Nacional de Resíduos Sólidos (Lei nº 12.305/2010) estabelece uma ordem de prioridade na gestão de resíduos. Qual é a sequência correta?",
      alternativas: [
        "Reciclagem, reutilização, redução, não geração, tratamento e disposição final.",
        "Disposição final, tratamento, reciclagem, reutilização e redução.",
        "Redução, não geração, tratamento, reciclagem e disposição final.",
        "Não geração, redução, reutilização, reciclagem, tratamento dos resíduos sólidos e disposição final ambientalmente adequada dos rejeitos."
      ],
      correta: "D",
      comentario: "Art. 9º da Lei nº 12.305/2010. Repare que só os rejeitos vão para a disposição final."
    },
    {
      enunciado: "Em uma estação de tratamento de água (ETA) de ciclo completo, qual é a sequência usual das etapas?",
      alternativas: [
        "Coagulação, floculação, decantação, filtração e desinfecção.",
        "Filtração, coagulação, floculação, decantação e desinfecção.",
        "Decantação, filtração, coagulação, desinfecção e floculação.",
        "Coagulação, decantação, filtração, floculação e desinfecção."
      ],
      correta: "A",
      comentario: "A coagulação desestabiliza as partículas, a floculação as agrega, decantação e filtração as removem, e a desinfecção fecha o processo."
    },
    {
      enunciado: "Considerando o padrão de potabilidade brasileiro, qual é o teor mínimo de cloro residual livre que deve ser mantido em qualquer ponto da rede de distribuição?",
      alternativas: ["0,05 mg/L", "0,2 mg/L", "1,0 mg/L", "2,0 mg/L"],
      correta: "B",
      comentario: "O mínimo é 0,2 mg/L em qualquer ponto da rede. O teto permitido é 2 mg/L."
    },
    {
      enunciado: "O tratamento secundário de esgoto sanitário tem como principal objetivo:",
      alternativas: [
        "A remoção de sólidos grosseiros e areia.",
        "A desinfecção final do efluente antes do lançamento.",
        "A remoção de matéria orgânica biodegradável por processos biológicos.",
        "A remoção de nutrientes como nitrogênio e fósforo."
      ],
      correta: "C",
      comentario: "Sólidos grosseiros e areia saem no tratamento preliminar. A remoção de nutrientes caracteriza o tratamento terciário."
    },
    {
      enunciado: "A Lei nº 14.026/2020, que atualizou o marco legal do saneamento, fixou metas de universalização a serem atingidas até 31 de dezembro de 2033. Quais são elas?",
      alternativas: [
        "90% da população com água potável e 99% com coleta e tratamento de esgoto.",
        "100% da população com água potável e 100% com coleta e tratamento de esgoto.",
        "95% da população com água potável e 85% com coleta e tratamento de esgoto.",
        "99% da população com água potável e 90% com coleta e tratamento de esgoto."
      ],
      correta: "D",
      comentario: "Metas do art. 11-B: 99% de cobertura de água potável e 90% de coleta e tratamento de esgoto."
    }
  ]
});
