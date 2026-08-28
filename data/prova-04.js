/* =========================================================
   UFSCar — Concurso Público TAE 2026 (22/03/2026)
   Técnico de Laboratório / Engenharia Civil
   Instituto Verbena / UFG · 50 questões, 4 alternativas
   ========================================================= */

(function () {

const TEXTO_1 =
"Texto 1 — resenha\n\n" +
"(O texto original é acompanhado da imagem da capa do livro “às vezes esqueço como respirar”, de Madu Sansil, Goiânia: Mondru, 2024, p. 88.)\n\n" +
"Lançamento da Mondru Editora, às vezes esqueço como respirar é a estreia na poesia da professora, pesquisadora e multiartista pernambucana Madu Sansil, que nos convida a um mergulho intenso na complexidade do sentir humano.\n\n" +
"O título já é explicativo: o corpo do eu lírico deixa de respirar pela pletora de emoções que o atingem de uma vez só. Na poesia de Sansil, isso é mais do que evidente, já que os textos perpassam temas como ansiedade, síndrome da impostora, perdas e relações abusivas. Entretanto, o leitor vai percebendo que, conforme a obra vai se concebendo, a voz poética passa a comportar o ar e os mecanismos respiratórios perdidos pelo corpo.\n\n" +
"Isso se vê, por exemplo, no poema “parestesia” (p. 23), que diz: “na loucura / vou me abraçar a todos os demônios que me invadem. / faremos nossas juras e morreremos assim: / fantasiando sonho de realidade”.\n\n" +
"[...]\n\n" +
"O tom bem-humorado está presente ao longo de todo o livro, refletindo uma poética ferida, marcada, mas em busca de se reconstruir. Não se trata de uma mera tentativa de equilibrar a obra, mas de testar outros pontos de vista para nossas falhas, como exercício de elaboração.\n\n" +
"às vezes esqueço como respirar revela as muitas camadas entre o trágico e o cômico, sendo um livro que dialoga, certamente, com as questões de nossos tempos. Madu Sansil busca, na formulação poética, meios de se “lembrar de respirar” – ou talvez, mais do que isso, de se lembrar do próprio corpo.\n\n" +
"Laura Redfern Navarro — poeta, jornalista e pesquisadora.\n" +
"(diplomatique.org.br/miscelanea-64. Acesso em 18 fev. 2026. Adaptado.)";

const TEXTO_2 =
"Texto 2 — poema “Neologismo”, de Manuel Bandeira\n" +
"(Estrela da vida inteira. 20. ed. Rio de Janeiro: Nova Fronteira, 1993. p. 199-200.)\n\n" +
"O poema não está reproduzido aqui por ser obra ainda protegida por direitos autorais. São sete versos curtos em que o eu lírico afirma beijar pouco e falar menos ainda, mas inventar palavras que traduzem uma ternura mais funda e mais cotidiana. Como exemplo dessa invenção, apresenta um verbo que criou — “teadorar” —, classifica-o como intransitivo e encerra o poema com o verso “Teadoro, Teodora.”\n\n" +
"As três questões seguintes citam, elas próprias, os trechos necessários para respondê-las. Se quiser ler o poema completo, ele está em qualquer edição da obra de Bandeira.";

const TEXTO_3 =
"Texto 3 — Doenças da Idade Média\n" +
"Por Arthur Almeida, da Agência Einstein\n\n" +
"A confirmação de um caso de peste bubônica (“peste negra”) no final de agosto de 2025 nos Estados Unidos reverberou em diversos países. Muitos imaginam que essa doença tenha ficado no passado, especificamente na Idade Média, quando se estima que tenha causado a morte de 75 milhões a 200 milhões de pessoas em todo o mundo. Mas, na verdade, ela ainda está entre nós – assim como outras enfermidades que entraram para a história, como por exemplo a cólera e a hanseníase.\n\n" +
"Todos os microrganismos patogênicos têm como objetivo biológico primordial se perpetuar e, para tanto, buscam formas de se reproduzir. Na prática, isso significa que, por mais que o ser humano consiga criar barreiras para tentar desacelerar esse processo, a seleção natural caminha em direção a tentar selecionar características evolutivas que permitam a esses agentes infecciosos driblar nossos mecanismos de proteção.\n\n" +
"Por isso é tão difícil pensar na erradicação de doenças. “Em toda a história, a única infecção que conseguimos de fato impedir que ocorra na natureza é a varíola. Tanto é que, desde 1980, quando a OMS a declarou erradicada, acabou a exigência de medidas de controle, como a vacinação. Mas essa não é a regra”, explica o epidemiologista Expedito José de Albuquerque Luna, professor da Faculdade de Medicina da Universidade de São Paulo (USP).\n\n" +
"A desigualdade social e as falhas na vigilância epidemiológica favorecem os surtos. Por isso, a chave para superar esses problemas está em garantir o saneamento básico e o acesso à água potável, ao mesmo tempo em que se oferece antimicrobianos e vacinação à população.\n\n" +
"(Revista Galileu, nov. 2025. Adaptado.)";

const TEXTO_4 =
"Texto 4 — Cerrado\n\n" +
"Cerrado é onde ocorre a predominância do bioma das savanas no Brasil. Trata-se do segundo maior domínio em extensão territorial, ocupando uma área de mais de dois milhões de km². O termo “cerrado” pode ser utilizado em três sentidos. O primeiro diz respeito à “fisionomia do cerrado sensu stricto”. É uma das fisionomias do bioma savana, e parte da província florística cerrado sensu lato.\n\n" +
"O segundo se refere à “província do cerrado sensu lato”. É uma província florística ou fitogeográfica – também chamada tipo vegetacional ou fitocório, que é um conceito florístico, que leva em conta a composição dos grupos taxonômicos das plantas de uma comunidade, (isto é, a flora) e biogeográfica (ao se incluir também a fauna).\n\n" +
"O terceiro se aplica ao “domínio do cerrado”. É um domínio morfoclimático e fitogeográfico (área do espaço geográfico, com dimensões subcontinentais, em que predominam características morfoclimáticas – de clima e relevo – semelhantes, além de uma província florística (tipo vegetacional) predominante, podendo, entretanto, conter vários tipos de formações (como a floresta ripícola, o campo rupícola, o Cerradão, a floresta estacional decídua, o campo úmido, o campo rupestre a mata ciliar, a mata de galeria, a vereda etc.), algumas pertencentes a outras províncias florísticas (como a Mata Atlântica).\n\n" +
"(pt.wikipedia.org/wiki/Cerrado. Acesso em 18 fev. 2026. Adaptado.)";

registrarProva({
  id: "ufscar-2026-tec-laboratorio-engcivil",
  titulo: "UFSCar — Técnico de Laboratório / Engenharia Civil",
  subtitulo: "Instituto Verbena–UFG · 2026 · 50 questões",
  questoes: [

/* ---------- LÍNGUA PORTUGUESA (1 a 10) ---------- */

{ id: "1", apoio: TEXTO_1,
  enunciado: "O Texto 1, considerando-se a forma composicional e o conteúdo temático, pertence ao gênero",
  alternativas: ["nota.", "resumo.", "artigo.", "resenha."],
  correta: "D" },

{ id: "2", apoio: TEXTO_1,
  enunciado: "Considere o seguinte trecho citado no Texto 1: “na loucura / vou me abraçar a todos os demônios que me invadem. / faremos nossas juras e morreremos assim: / fantasiando sonho de realidade”. Nesse trecho, o uso do sinal gráfico barra oblíqua ou inclinada (/) serve para",
  alternativas: [
    "indicar expressões textuais alternativas.",
    "marcar a fronteira dos versos do poema.",
    "inserir um traço de poesia concreta no poema.",
    "estabelecer o papel sintático da forma subsequente."
  ], correta: "B" },

{ id: "3", apoio: TEXTO_1,
  enunciado: "No trecho “o corpo do eu lírico deixa de respirar pela pletora de emoções que o atingem de uma vez só”, o termo “pletora” pode ser substituído, sem prejudicar a coesão e o sentido, por",
  alternativas: ["parcimônia.", "profusão.", "contradição.", "ausência."],
  correta: "B" },

{ id: "4", apoio: TEXTO_2,
  enunciado: "Em Neologismo, o eu lírico toma o ato de inventar palavras como objeto de referência. Nesse sentido, o poema é construído a partir de um procedimento",
  alternativas: ["metalinguístico.", "metafórico.", "metafísico.", "metacognitivo."],
  correta: "A" },

{ id: "5", apoio: TEXTO_2,
  enunciado: "O neologismo proposto pelo eu lírico “teadorar” é formado pela junção de duas palavras que, originalmente, têm respectivamente as seguintes propriedades morfossintáticas:",
  alternativas: [
    "pronome oblíquo em posição enclítica; verbo intransitivo.",
    "pronome oblíquo átono de terceira pessoa; verbo bitransitivo.",
    "pronome oblíquo em posição proclítica; verbo transitivo direto.",
    "pronome oblíquo tônico de segunda pessoa; verbo transitivo indireto."
  ], correta: "C" },

{ id: "6", apoio: TEXTO_2,
  enunciado: "Considerando que o neologismo proposto pelo eu lírico “teadoro” seja uma única palavra, os dois vocábulos do verso “Teadoro, Teodora” constituem, segundo a ordem em que aparecem,",
  alternativas: [
    "um paradigma de conjugação verbal com uma forma na 1ª pessoa e outra na 2ª pessoa.",
    "uma frase composta por um verbo numa forma pessoal seguido de um vocativo.",
    "uma frase composta por um verbo impessoal seguido de um sujeito em posição invertida.",
    "um paradigma de conjugação verbal com uma forma na 2ª pessoa e outra na 1ª pessoa."
  ], correta: "B" },

{ id: "7", apoio: TEXTO_3,
  enunciado: "De acordo com as informações apresentadas no Texto 3, enfermidades como a peste bubônica, a hanseníase e a cólera",
  alternativas: [
    "estão sob controle e próximas da erradicação em função de ações intensivas e permanentes de saúde pública em áreas de risco.",
    "são doenças do passado, tendo sido declaradas erradicas pela OMS desde a década de 1980, quando foram registradas as últimas ocorrências.",
    "são doenças transmitidas por contato, daí a necessidade de implementação de medidas de distanciamento social em caso de surto.",
    "continuam aparecendo de forma localizada, expondo problemas relacionados a desigualdade social no acesso à prevenção e à saúde."
  ], correta: "D" },

{ id: "8", apoio: TEXTO_3,
  enunciado: "No segmento oracional “por mais que o ser humano consiga criar barreiras para tentar desacelerar esse processo”, a locução conectiva “por mais que” expressa um sentido",
  alternativas: ["causal.", "adversativo.", "concessivo.", "proporcional."],
  correta: "C" },

{ id: "9", apoio: TEXTO_4,
  enunciado: "O Texto 4 é parte de um texto maior, de caráter expositivo-descritivo, publicado na Wikipédia, no qual se apresentam informações conceituais, históricas, técnicas etc. a respeito do termo “Cerrado”. Considerando as características composicionais, o objetivo comunicativo e o espaço de circulação, o Texto 4 é classificado como",
  alternativas: [
    "um verbete de enciclopédia.",
    "um artigo científico.",
    "um relatório de pesquisa.",
    "um editorial."
  ], correta: "A" },

{ id: "10", apoio: TEXTO_4,
  enunciado: "As expressões “stricto sensu” (ou “sensu stricto”), “lato sensu” (ou “sensu lato”), “et cetera” (ou a abreviatura “etc.”) são formas latinas de uso corrente e consagrado no português. Significam, segundo a ordem,",
  alternativas: [
    "“em sentido conotativo”, “em sentido denotativo”, “e o seguinte”.",
    "“em sentido objetivo”, “em sentido pessoal”, “e tudo mais”.",
    "“em sentido específico”, “em sentido amplo”, “e o restante”.",
    "“em sentido perfeito”, “em sentido impreciso”, “e aquilo”."
  ], correta: "C" },

/* ---------- RACIOCÍNIO LÓGICO-MATEMÁTICO (11 a 15) ---------- */

{ id: "11",
  enunciado: "Uma equipe composta por 9 servidores executa determinado serviço em 20 dias, mantendo produtividade individual constante e trabalhando nas mesmas condições durante todo o período. Mantidas as mesmas condições, para que o mesmo serviço seja concluído em 15 dias, o número necessário de servidores será:",
  alternativas: ["10.", "11.", "12.", "13."],
  correta: "C" },

{ id: "12",
  enunciado: "Em um processo avaliativo interno, a nota final corresponde à média ponderada de três etapas:\n\n• Etapa I, peso 2;\n• Etapa II, peso 3;\n• Etapa III, peso 1.\n\nUm candidato obteve, respectivamente, as notas 8,0; 7,0; e 5,0. A nota final desse candidato, arredondando para uma casa decimal, é",
  alternativas: ["6,5.", "6,7.", "6,8.", "7,0."],
  correta: "D" },

{ id: "13",
  enunciado: "O orçamento anual de um setor sofreu aumento de 20% em determinado período e, posteriormente, redução de 20% sobre o valor já reajustado. Considerando o valor final em relação ao valor inicial, esse orçamento passou a corresponder a",
  alternativas: ["92%.", "96%.", "100%.", "104%."],
  correta: "B" },

{ id: "14",
  enunciado: "Considere a sequência numérica:\n\n2, 6, 7, 21, 22, 66, ___\n\nMantendo-se o mesmo padrão de formação, o próximo termo da sequência é",
  alternativas: ["67.", "68.", "69.", "72."],
  correta: "A" },

{ id: "15",
  enunciado: "Quatro atividades administrativas distintas (A, B, C e D) devem ser realizadas, todas obrigatoriamente e cada uma exatamente uma vez, de forma sequencial (uma de cada vez), obedecendo às seguintes condições:\n\n• A atividade B deve ocorrer em momento posterior ao da atividade A;\n• A atividade C deve ocorrer em momento posterior ao da atividade B;\n• A atividade D deve ocorrer em momento posterior ao da atividade A.\n\nRespeitando todas as condições estabelecidas, o número de ordens distintas possíveis para a execução das atividades é:",
  alternativas: ["2.", "3.", "4.", "5."],
  correta: "B" },

/* ---------- NOÇÕES DE INFORMÁTICA (16 a 20) ---------- */

{ id: "16",
  enunciado: "O Windows, em suas versões atuais, disponibiliza recursos para gerenciamento de arquivos e pastas no Explorador de Arquivos. Ao selecionar um arquivo, pressionar as teclas Ctrl+C e, em seguida, Ctrl+V em outra pasta, o sistema realiza a operação de",
  alternativas: [
    "mover o arquivo, removendo-o da pasta de origem.",
    "duplicar o arquivo na mesma pasta.",
    "criar um atalho para o arquivo na pasta de destino.",
    "copiar o arquivo para a pasta de destino."
  ], correta: "D" },

{ id: "17",
  enunciado: "No Microsoft Excel, em sua configuração padrão para o idioma Português (Brasil), uma planilha contém o valor 10 na célula A1, 20 na célula A2 e 30 na célula A3. Ao inserir na célula A4 a fórmula =SOMA(A1;A3) o resultado exibido será",
  alternativas: ["30.", "40.", "50.", "60."],
  correta: "B" },

{ id: "18",
  enunciado: "No Windows, o Gerenciador de Tarefas é um recurso utilizado para",
  alternativas: [
    "visualizar e encerrar aplicativos em execução.",
    "alterar o plano de fundo da área de trabalho.",
    "configurar a resolução do monitor.",
    "instalar e desinstalar aplicativos."
  ], correta: "A" },

{ id: "19",
  enunciado: "Os serviços de armazenamento em nuvem permitem que arquivos atualizados sejam",
  alternativas: [
    "acessados no computador em que foram criados, sem sincronização externa.",
    "armazenados em dispositivos físicos locais, como discos rígidos internos ou externos.",
    "sincronizados e acessados por meio da internet em diferentes dispositivos.",
    "mantidos em servidores remotos com acesso restrito à rede interna da organização."
  ], correta: "C" },

{ id: "20",
  enunciado: "No contexto do uso de correio eletrônico corporativo, um servidor recebeu uma mensagem com anexo intitulado “Atualização Cadastral”, enviada por remetente desconhecido e com domínio semelhante ao institucional, porém com pequena variação na grafia. Considerando as boas práticas de segurança da informação, a conduta adequada consiste em",
  alternativas: [
    "responder à mensagem solicitando confirmação da identidade do remetente antes de abrir o anexo.",
    "abrir o anexo em computador compartilhado, a fim de verificar seu conteúdo.",
    "encaminhar a mensagem ao setor de Tecnologia da Informação para verificação de autenticidade.",
    "realizar o download do anexo e analisá-lo posteriormente com antivírus atualizado."
  ], correta: "C" },

/* ---------- LEGISLAÇÃO APLICADA AO SETOR PÚBLICO (21 a 30) ---------- */

{ id: "21",
  enunciado: "De acordo com a Constituição Federal de 1988, no sistema de repartição de competências, cuidar da saúde e assistência pública, da proteção e garantia das pessoas com deficiência é competência",
  alternativas: [
    "privativa da União e excepcional para os estados e o Distrito Federal.",
    "exclusiva dos estados e residual para os municípios e o Distrito Federal.",
    "concorrente entre municípios, estados e Distrito Federal.",
    "comum entre União, estados, Distrito Federal e municípios."
  ], correta: "D" },

{ id: "22",
  enunciado: "Leia o caso a seguir.\n\nUm servidor público, pregoeiro, participa de certame federal para aquisição de produto. A cônjuge desse pregoeiro é sócia de escritório de advocacia que questiona ao servidor itens do edital do pregão.\n\nNesse caso, o princípio da Administração Pública precipuamente violado é o da",
  alternativas: ["moralidade.", "pessoalidade.", "eficiência.", "legalidade."],
  correta: "A" },

{ id: "23",
  enunciado: "De acordo com as Regras Deontológicas do Decreto nº 1.171/1994, o servidor público não terá que decidir somente entre o legal e o ilegal, o justo e o injusto, o conveniente e o inconveniente, o oportuno e o inoportuno, mas principalmente entre",
  alternativas: [
    "o interesse da administração e a conveniência da chefia imediata.",
    "o honesto e o desonesto, consoante as regras de boa administração.",
    "a celeridade do ato administrativo e o rigor excessivo da burocracia.",
    "o lucro da instituição e o bem-estar social dos administrados."
  ], correta: "B" },

{ id: "24",
  enunciado: "No que tange ao poder de polícia (um dos poderes da Administração Pública) e à sua natureza jurídica, as fases relativas à fiscalização e à sanção, no âmbito do ciclo de polícia, podem ser delegadas a pessoas jurídicas de direito privado integrantes da Administração Pública Indireta, desde que",
  alternativas: [
    "exerçam atividade econômica em regime de livre concorrência e em regime de monopólio, sem concorrência com o setor privado.",
    "sejam constituídas sob a forma de autarquias ou fundações públicas de direito público, entidade integrantes da Administração Direta.",
    "prestem serviço público em regime não concorrencial e sejam financiadas majoritariamente por recursos públicos.",
    "atuem no exercício de atividades meramente executórias, sem qualquer margem de discricionariedade."
  ], correta: "C" },

{ id: "25",
  enunciado: "De acordo com as regras gerais de provimento de cargo público, definidas pela Lei nº 8.112/1990, as universidades e instituições de pesquisa científica e tecnológica federais poderão prover seus cargos com",
  alternativas: [
    "professores, técnicos e cientistas estrangeiros ou brasileiros.",
    "professores estrangeiros e técnicos limitados aos brasileiros.",
    "cientistas brasileiros natos e professores e técnicos estrangeiros.",
    "professores, técnicos e cientistas brasileiros naturalizados."
  ], correta: "A" },

{ id: "26",
  enunciado: "De acordo com o rito procedimental comum estabelecido pela Lei nº 14.133/2021, a fase de habilitação, na qual se verificam a documentação e a aptidão do licitante para contratar com a Administração Pública, deve ocorrer, como regra geral, logo após a fase de",
  alternativas: [
    "divulgação do edital de licitação.",
    "julgamento das propostas.",
    "apresentação de propostas e lances.",
    "homologação do certame."
  ], correta: "B" },

{ id: "27",
  enunciado: "Nos termos da Lei de Improbidade Administrativa, o pedido de indisponibilidade de bens dos réus, formulado com o fim de garantir a recomposição do erário ou do acréscimo patrimonial resultante de enriquecimento ilícito, será deferido pelo juízo mediante",
  alternativas: [
    "a presunção absoluta de urgência, sendo dispensada a demonstração de perigo de dano em razão da natureza do ato de improbidade.",
    "a demonstração, no caso concreto, de perigo de dano irreparável ou de risco ao resultado útil do processo, não podendo a urgência ser presumida.",
    "a prévia e obrigatória oitiva do Ministério Público e do Tribunal de Contas, sem as quais a autoridade judicial não poderá conhecer do pedido.",
    "a comprovação de que o agente público possui bens ou contas bancárias no exterior, visto que a medida não alcança o patrimônio em território nacional."
  ], correta: "B" },

{ id: "28",
  enunciado: "Segundo a Lei nº 14.230/2021, no caso de danos causados ao patrimônio público, o Ministério Público poderá, conforme as circunstâncias do caso concreto, celebrar acordo de não persecução civil, desde que dele advenha, ao menos,",
  alternativas: [
    "punição de suspensão ao agente causador do dano.",
    "ressarcimento parcial do dano causado pelo agente.",
    "reversão à pessoa lesada da vantagem indevida obtida.",
    "banimento do agente infrator do serviço público."
  ], correta: "C" },

{ id: "29",
  enunciado: "De acordo com as noções gerais de orçamento público, integrará(ão) as leis orçamentárias:",
  alternativas: [
    "o quadro discriminativo da receita por fontes e respectiva legislação.",
    "os quadros demonstrativos da receita e planos de aplicação dos fundos especiais.",
    "o quadro demonstrativo do programa anual de trabalho do Governo.",
    "os quadros demonstrativos de despesas, na forma legal e regulamentar."
  ], correta: "A" },

{ id: "30",
  enunciado: "Segundo a Lei Geral de Proteção de Dados (LGPD), o tratamento de dados pessoais sensíveis pode ser realizado sem o fornecimento de consentimento do titular quando for indispensável para a realização de estudos por órgão de pesquisa, devendo ser",
  alternativas: [
    "comunicada previamente à Autoridade Nacional de Proteção de Dados (ANPD).",
    "garantida, quando for possível, a anonimização dos dados pessoais sensíveis.",
    "imposta a publicidade integral dos dados para fins de transparência científica.",
    "delimitado o tratamento de dados de pessoas que apresentem capacidade civil plena."
  ], correta: "B" },

/* ---------- TÉCNICO DE LABORATÓRIO / ENGENHARIA CIVIL (31 a 50) ---------- */

{ id: "31",
  enunciado: "O Equipamento de Proteção Individual (EPI) é todo dispositivo ou produto de uso individual utilizado pelo trabalhador para proteção contra riscos que possam comprometer sua segurança e sua saúde no trabalho. Durante o manuseio de um produto químico em um laboratório de engenharia civil, os equipamentos de proteção individual obrigatórios incluem",
  alternativas: [
    "luvas impermeáveis compatíveis com o produto, óculos de proteção contra respingos e avental de proteção química.",
    "capacete de segurança, colete refletivo e protetor auricular tipo concha.",
    "luvas de raspa de couro, máscara cirúrgica descartável e botas com biqueira metálica.",
    "protetor facial para solda, cinto de segurança tipo paraquedista e respirador autônomo."
  ], correta: "A" },

{ id: "32",
  enunciado: "A biossegurança em laboratório consiste no conjunto de medidas voltadas à prevenção, minimização ou eliminação de riscos inerentes às atividades laboratoriais, visando a proteção dos trabalhadores, do meio ambiente e da comunidade. No contexto de um laboratório de engenharia civil, uma prática adequada de biossegurança relacionada ao manejo de resíduos é",
  alternativas: [
    "descartar resíduos líquidos gerados em ensaios diretamente na rede de esgoto comum.",
    "armazenar reagentes químicos em recipientes sem identificação para evitar exposição visual.",
    "utilizar recipientes identificados e compatíveis para segregação e armazenamento temporário de resíduos.",
    "manter recipientes de produtos químicos abertos para facilitar o acesso durante os ensaios."
  ], correta: "C" },

{ id: "33",
  enunciado: "Em caso de princípio de incêndio em equipamento elétrico energizado no laboratório de engenharia civil, o procedimento adequado envolve a utilização de agente extintor compatível com o tipo de material envolvido, evitando riscos adicionais ao operador. Nessa situação, o extintor adequado é o de",
  alternativas: [
    "água pressurizada.",
    "dióxido de carbono (CO₂).",
    "espuma mecânica.",
    "água com aditivo molhante."
  ], correta: "B" },

{ id: "34",
  enunciado: "A amostragem de solos em campo deve ser realizada de modo a garantir que a amostra represente adequadamente as características do material investigado, podendo ser classificada como deformada ou indeformada, conforme o método empregado. A obtenção de amostras indeformadas é indicada quando se pretende determinar",
  alternativas: [
    "a cor e a textura visual do solo.",
    "a composição mineralógica por inspeção manual.",
    "os parâmetros relacionados à estrutura natural do solo, como compressibilidade e resistência.",
    "a presença de fragmentos grosseiros para classificação tátil-visual."
  ], correta: "C" },

{ id: "35",
  enunciado: "A classificação geotécnica dos solos agrupa materiais com características semelhantes, considerando propriedades como granulometria e plasticidade. Na classificação de solos, a sigla CL corresponde a um solo",
  alternativas: [
    "arenoso mal graduado, com baixa plasticidade.",
    "argiloso de baixa plasticidade.",
    "siltoso de alta plasticidade.",
    "pedregulhoso bem graduado."
  ], correta: "B" },

{ id: "36",
  enunciado: "A sondagem de simples reconhecimento é utilizada em investigações geotécnicas para obtenção do perfil do subsolo e estimativa da resistência do solo. Nesse procedimento, o índice N corresponde ao número de golpes necessários para",
  alternativas: [
    "cravar o amostrador padrão nos primeiros 45 cm de profundidade.",
    "cravar o amostrador padrão nos últimos 30 cm de um total de 45 cm de penetração.",
    "introduzir o trado manual até a profundidade de 1 metro.",
    "perfurar o solo até atingir o nível d’água."
  ], correta: "B" },

{ id: "37",
  enunciado: "Os índices físicos dos solos são parâmetros obtidos em laboratório que permitem caracterizar o estado em que o solo se encontra, sendo fundamentais para análises geotécnicas. O teor de umidade de um solo é determinado pela relação entre",
  alternativas: [
    "a massa de água e a massa de sólidos secos.",
    "a massa total da amostra e seu volume natural.",
    "o volume de vazios e o volume total da amostra.",
    "a massa específica natural e a massa específica dos grãos."
  ], correta: "A" },

{ id: "38",
  enunciado: "A análise granulométrica conjunta dos solos permite determinar a distribuição das partículas por tamanho, utilizando peneiramento para as frações mais grossas e sedimentação para as frações mais finas. No procedimento laboratorial, o ensaio de sedimentação é utilizado para determinar a proporção de partículas",
  alternativas: [
    "com diâmetro superior a 4,8 mm.",
    "retidas na peneira de abertura 2,0 mm.",
    "que passam na peneira 0,075 mm.",
    "classificadas como pedregulhos."
  ], correta: "C" },

{ id: "39",
  enunciado: "Os limites de consistência são determinados em laboratório para avaliar o comportamento dos solos finos em diferentes teores de umidade, sendo utilizados na sua classificação e interpretação geotécnica. O Limite de Liquidez corresponde ao teor de umidade no qual o solo",
  alternativas: [
    "passa do estado plástico para o estado semissólido.",
    "apresenta volume constante após secagem em estufa.",
    "passa do estado plástico para o estado líquido.",
    "perde totalmente sua umidade natural."
  ], correta: "C" },

{ id: "40",
  enunciado: "O ensaio de compactação em laboratório tem como finalidade determinar a relação entre o teor de umidade e a massa específica seca do solo, permitindo identificar parâmetros importantes para execução de obras de terraplenagem. No ensaio de compactação, o ponto correspondente à massa específica seca máxima está associado",
  alternativas: [
    "ao menor teor de umidade obtido durante o ensaio.",
    "ao teor de umidade ótimo de compactação.",
    "ao maior volume de vazios da amostra ensaiada.",
    "ao momento em que o solo apresenta comportamento líquido."
  ], correta: "B" },

{ id: "41",
  enunciado: "O ensaio de dosagem Marshall é utilizado na caracterização de misturas asfálticas, permitindo avaliar parâmetros importantes para o desempenho do pavimento. No ensaio de Marshall, os corpos de prova moldados são submetidos à compressão diametral para determinação da",
  alternativas: [
    "resistência à tração por compressão indireta.",
    "estabilidade e da fluência da mistura asfáltica.",
    "permeabilidade da camada de revestimento.",
    "massa específica real dos agregados graúdos."
  ], correta: "B" },

{ id: "42",
  enunciado: "Nos levantamentos topográficos, diferentes tipos de medições são realizadas conforme o objetivo do trabalho. O levantamento altimétrico tem como finalidade principal determinar:",
  alternativas: [
    "as distâncias horizontais entre pontos do terreno.",
    "os ângulos horizontais formados entre alinhamentos.",
    "as diferenças de nível e as cotas dos pontos do terreno.",
    "as coordenadas geográficas em latitude e longitude."
  ], correta: "C" },

{ id: "43",
  enunciado: "A locação é o procedimento de demarcar no terreno a construção que será executada conforme o projeto. Quando a locação é realizada pelo método de ângulo e distância, é necessário utilizar equipamento capaz de medir ângulos horizontais e distâncias com precisão. Nesse caso, o equipamento adequado para demarcar os pontos no terreno é",
  alternativas: ["a estação total.", "o nível a laser.", "o receptor GNSS.", "a mira estadimétrica."],
  correta: "A" },

{ id: "44",
  enunciado: "Em levantamentos topográficos, os pontos do terreno podem ser definidos por meio de sistemas de coordenadas, permitindo sua localização precisa em relação a um referencial adotado. No sistema de coordenadas planas utilizado em topografia, a posição de um ponto é determinada por meio de",
  alternativas: [
    "latitude e longitude geográficas.",
    "azimute e rumo magnético.",
    "coordenadas X e Y em relação a um sistema de referência.",
    "altitude ortométrica e nível médio do mar."
  ], correta: "C" },

{ id: "45",
  enunciado: "As projeções cartográficas são utilizadas para representar a superfície curva da Terra em um plano, possibilitando a elaboração de mapas e cartas. É(São) característica(s) da projeção UTM (Universal Transversa de Mercator):",
  alternativas: [
    "representar toda a superfície terrestre em um único plano contínuo.",
    "dividir a Terra em fusos e utilizar coordenadas planas métricas.",
    "preservar integralmente áreas, formas e distâncias simultaneamente.",
    "utilizar exclusivamente coordenadas em latitude e longitude."
  ], correta: "B" },

{ id: "46",
  enunciado: "Durante a execução de um levantamento em campo com receptor por satélite, o técnico obteve valores numéricos em metros para Leste (E) e Norte (N) após o processamento dos dados. Esses valores correspondem",
  alternativas: [
    "a ângulos horizontais medidos em relação ao norte magnético.",
    "a distâncias inclinadas entre dois pontos consecutivos.",
    "a altitudes ortométricas determinadas por nivelamento geométrico.",
    "a coordenadas planas do ponto em um sistema projetado."
  ], correta: "D" },

{ id: "47",
  enunciado: "A condutividade hidráulica do solo pode ser determinada em laboratório por meio de ensaios de permeabilidade, como os de carga constante e carga variável, conforme o tipo de solo analisado. O ensaio de carga constante é indicado para solos",
  alternativas: [
    "granulares, com maior permeabilidade.",
    "argilosos, com baixa permeabilidade.",
    "expansivos, com elevado índice de plasticidade.",
    "orgânicos, com alto teor de matéria vegetal."
  ], correta: "A" },

{ id: "48",
  enunciado: "O ensaio de compressão edométrica é realizado em laboratório para avaliar o comportamento do solo quando submetido a carregamentos verticais confinados lateralmente. Nesse ensaio, a principal grandeza observada para análise da compressibilidade é",
  alternativas: [
    "a variação da umidade natural da amostra durante o carregamento.",
    "o deslocamento vertical da amostra ao longo do tempo sob determinada carga.",
    "a resistência ao cisalhamento em condição não drenada.",
    "a permeabilidade horizontal do solo saturado."
  ], correta: "B" },

{ id: "49",
  enunciado: "A resistência ao cisalhamento dos solos pode ser determinada por diferentes ensaios laboratoriais, conforme o tipo de solo e a condição de carregamento analisada. No ensaio de cisalhamento direto, a ruptura da amostra ocorre ao longo de",
  alternativas: [
    "um plano previamente definido no interior da caixa de cisalhamento.",
    "uma superfície livre determinada pela menor resistência natural do solo.",
    "um plano vertical provocado por compressão axial não confinada.",
    "uma fissura irregular formada pela perda de umidade da amostra."
  ], correta: "A" },

{ id: "50",
  enunciado: "No controle tecnológico do concreto, o ensaio de abatimento do tronco de cone (slump test) é realizado para avaliar uma propriedade do concreto ainda no estado fresco. Esse ensaio tem como finalidade principal determinar",
  alternativas: [
    "a resistência característica à compressão do concreto endurecido.",
    "o teor de ar incorporado à mistura.",
    "a massa específica do concreto após a cura.",
    "a consistência e a trabalhabilidade do concreto fresco."
  ], correta: "D" }

  ]
});

})();
