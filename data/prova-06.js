/* =========================================================
   FIOCRUZ — Concurso Público 2014 · caderno CT1334
   Tecnologista em Saúde Pública — Engenharia Civil / Hidráulica
   Fundação Dom Cintra · 60 questões, 5 alternativas
   ========================================================= */

(function () {

const CEL = 'style="border:1px solid #B4C0C8;padding:7px 10px;vertical-align:top"';

const TABELA_DRENAGEM =
'<p>Um sistema de drenagem de águas pluviais tem uma área de contribuição de 0,5 km², que é revestida conforme mostra a tabela a seguir:</p>' +
'<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:15px"><thead><tr>' +
'<th ' + CEL + '>Revestimento</th><th ' + CEL + '>% da área total</th><th ' + CEL + '>Coeficiente de escoamento superficial</th>' +
'</tr></thead><tbody>' +
'<tr><td ' + CEL + '>Concreto</td><td ' + CEL + '>20%</td><td ' + CEL + '>0,80</td></tr>' +
'<tr><td ' + CEL + '>Paralelepípedo</td><td ' + CEL + '>30%</td><td ' + CEL + '>0,50</td></tr>' +
'<tr><td ' + CEL + '>Terreno livre</td><td ' + CEL + '>50%</td><td ' + CEL + '>0,10</td></tr>' +
'</tbody></table>' +
'<p>Utilizando-se o método racional com uma intensidade pluviométrica uniforme de 1,2 mm/min sobre toda a área de contribuição, o sistema de drenagem das águas superficiais deve ser projetado para escoar uma vazão de:</p>';

const TABELA_CANAL =
'<p>Observe a tabela abaixo, que mostra as características observadas em duas seções distintas de um mesmo canal.</p>' +
'<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:15px"><thead><tr>' +
'<th ' + CEL + '>Seção</th><th ' + CEL + '>Velocidade superficial</th><th ' + CEL + '>Profundidade do canal</th>' +
'</tr></thead><tbody>' +
'<tr><td ' + CEL + '>A</td><td ' + CEL + '>4 m/s</td><td ' + CEL + '>2 m</td></tr>' +
'<tr><td ' + CEL + '>B</td><td ' + CEL + '>8 m/s</td><td ' + CEL + '>1,5 m</td></tr>' +
'</tbody></table>' +
'<p>Considerando uma aceleração da gravidade de 9,8 m/s² e desprezando-se os atritos nesse escoamento, a diferença de cota entre os fundos dos canais nessas duas seções vale:</p>';

const TABELA_INCENDIO =
'<p>Observe a seguinte descrição resumida da classificação dos incêndios:</p>' +
'<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:15px"><thead><tr>' +
'<th ' + CEL + '>Classe</th><th ' + CEL + '>Descrição</th></tr></thead><tbody>' +
'<tr><td ' + CEL + '>A</td><td ' + CEL + '>Fogo em materiais comuns de fácil combustão, com a propriedade de queimarem em sua superfície e profundidade, deixando resíduos</td></tr>' +
'<tr><td ' + CEL + '>B</td><td ' + CEL + '>Fogo em inflamáveis que queimam somente em sua superfície, não deixando resíduos</td></tr>' +
'<tr><td ' + CEL + '>C</td><td ' + CEL + '>Fogo em equipamentos elétricos energizados</td></tr>' +
'<tr><td ' + CEL + '>D</td><td ' + CEL + '>Fogo em metais pirofóricos e suas ligas</td></tr>' +
'</tbody></table>' +
'<p>O combate por meio de espuma é indicado para as classes de incêndio:</p>';

registrarProva({
  id: "fiocruz-2014-tecnologista-engcivil-hidraulica",
  titulo: "FIOCRUZ — Tecnologista em Saúde Pública (Eng. Civil / Hidráulica)",
  subtitulo: "Fundação Dom Cintra · 2014 · caderno CT1334",
  questoes: [

/* ---------- CONHECIMENTOS ESPECÍFICOS NA ÁREA DE ATUAÇÃO (1 a 20) ---------- */

{ id: "1",
  enunciado: "O decreto 5378 de 23 de fevereiro de 2005 instituiu o Programa Nacional de Gestão Pública e Desburocratização (GESPÚBLICA). As alternativas abaixo apresentam ações relacionadas a esse programa, à exceção de uma. Assinale-a:",
  alternativas: [
    "Mobilizar entidades da administração pública para a melhoria da gestão e desburocratização.",
    "Apoiar tecnicamente os órgãos e entidades da administração pública na melhoria do atendimento ao cidadão e na simplificação de procedimentos e normas.",
    "Orientar os órgãos da administração pública para a implantação de ciclos contínuos de avaliação.",
    "Desenvolver modelo de excelência em gestão pública.",
    "Promover a gestão centralizada, de forma a desburocratizar o atendimento ao cidadão."
  ], correta: "E" },

{ id: "2",
  enunciado: "De acordo com o decreto 5378 de 23 de fevereiro de 2005, cabe ao Comitê Gestor do Programa Nacional de Gestão Pública e Desburocratização (GESPÚBLICA):",
  alternativas: [
    "propor ao Presidente da República o planejamento estratégico do GESPÚBLICA.",
    "constituir comissões setoriais e regionais com a finalidade de descentralizar a gestão do GESPÚBLICA.",
    "monitorar, avaliar e divulgar os resultados do GESPÚBLICA.",
    "certificar a validação dos resultados da autoavaliação dos órgãos e entidades participantes do GESPÚBLICA.",
    "articular-se para a identificação de mecanismos que possibilitem a obtenção de recursos e demais meios para a execução das ações do GESPÚBLICA."
  ], correta: "C" },

{ id: "3",
  enunciado: "De acordo com a lei 8666/93, frustrar ou fraudar, mediante ajuste, combinação ou qualquer outro expediente, o caráter competitivo do processo licitatório, com o intuito de obter, para si ou para outrem, vantagem decorrente da adjudicação do objeto da licitação implica:",
  alternativas: [
    "apenas em detenção de 2 (dois) a 4 (quatro) anos.",
    "apenas em detenção de 3 (três) a 5 (cinco) anos.",
    "detenção de 2 (dois) a 4 (quatro) anos e multa.",
    "detenção de 3 (três) a 5 (cinco) anos e multa.",
    "detenção de 2 (dois) a 6 (seis) anos e multa."
  ], correta: "C" },

{ id: "4",
  enunciado: "Sobre os motivos para rescisão de contratos, no âmbito da lei 8666/93, leia atentamente as afirmativas abaixo.\n\nI. O atraso injustificado no início da obra, serviço ou fornecimento pode levar à rescisão do contrato.\nII. A subcontratação total do objeto do contrato é motivo para rescisão contratual.\nIII. O atraso superior a 60 (sessenta) dias dos pagamentos devidos pela Administração decorrentes de obras, serviços ou fornecimento é motivo para rescisão do contrato.\n\nAssinale:",
  alternativas: [
    "se somente a afirmativa I for verdadeira.",
    "se somente a afirmativa II for verdadeira.",
    "se somente a afirmativa III for verdadeira.",
    "se somente as afirmativas I e II forem verdadeiras.",
    "se somente as afirmativas I e III forem verdadeiras."
  ], correta: "D" },

{ id: "5",
  enunciado: "Um serviço de engenharia no valor de R$ 120.000,00 deverá ser contratado por uma unidade administrativa. Além disso, sabe-se que há 10 empresas qualificadas para a execução do serviço no mercado. Desse modo, de acordo com a lei 8666/93, a unidade responsável pelo processo licitatório deverá organizá-lo considerando um número mínimo de participantes igual a:",
  alternativas: ["1", "3", "5", "6", "10"],
  correta: "B" },

{ id: "6",
  enunciado: "A modalidade de licitação entre interessados devidamente cadastrados ou que atenderem a todas as condições exigidas para cadastramento até o terceiro dia anterior à data do recebimento das propostas, observada a necessária qualificação, é chamada de:",
  alternativas: ["concorrência.", "tomada de preços.", "convite.", "concurso.", "leilão."],
  correta: "B" },

{ id: "7",
  enunciado: "De acordo com a IN01/2010-MPOG, as especificações e demais exigências do projeto básico ou executivo, para contratação de obras e serviços de engenharia, devem ser elaborados visando à economia da manutenção e operacionalização da edificação, a redução do consumo de energia e água, bem como a utilização de tecnologias que reduzam o impacto ambiental. As alternativas abaixo apresentam tais medidas à exceção de uma. Assinale-a:",
  alternativas: [
    "automação da iluminação do prédio.",
    "sistema de reuso de água e de tratamento de efluentes gerados.",
    "uso exclusivo de lâmpadas incandescentes.",
    "aproveitamento da água da chuva.",
    "comprovação da origem da madeira a ser utilizada na execução da obra ou serviço."
  ], correta: "C" },

{ id: "8",
  enunciado: "De acordo com a IN01/2010-MPOG, os órgãos e entidades da Administração Pública Federal direta, autárquica e fundacional, quando da aquisição de bens, poderão exigir que esses não contenham substâncias perigosas acima da recomendada na diretiva RoHS (Restriction of Certain Hazardous Substances). Uma dessas substâncias é o:",
  alternativas: ["Cádmio.", "Cobre.", "Lítio.", "Cálcio.", "Fósforo."],
  correta: "A" },

{ id: "9",
  enunciado: "O EPI é um dispositivo de uso individual destinado a neutralizar ou atenuar um possível agente agressivo contra o corpo do trabalhador. De acordo com a Norma Regulamentadora 6 (NR-6), quanto ao EPI, cabe ao empregado:",
  alternativas: [
    "adquirir o EPI adequado para o exercício de sua função.",
    "responsabilizar-se pela higienização e manutenção periódica.",
    "comunicar ao Ministério do Trabalho e Emprego qualquer alteração observada.",
    "responsabilizar-se por sua guarda e conservação.",
    "em caso de dano ou extravio, comunicar ao fabricante."
  ], correta: "D" },

{ id: "10",
  enunciado: "Na construção civil, para melhor visualização, mapeiam-se as áreas de riscos através de cores. Desse modo, regiões mapeadas com a cor vermelha indicam risco:",
  alternativas: ["físico.", "biológico.", "ergonômico.", "de acidente.", "químico."],
  correta: "E" },

{ id: "11",
  enunciado: "Avalie se o GESPÚBLICA deve contemplar a formulação e implementação de medidas integradas em agenda de transformações da gestão, necessárias à promoção dos resultados preconizados no plano plurianual, à consolidação da administração pública profissional voltada ao interesse do cidadão e à aplicação de instrumentos e abordagens gerenciais, que tenham os seguintes objetivos:\n\nI - eliminar o déficit institucional, visando ao integral atendimento das competências constitucionais do Poder Executivo Federal.\nII - promover a governança, aumentando a capacidade de formulação, implementação e avaliação das políticas públicas.\nIII - promover a eficiência, por meio de melhor aproveitamento dos recursos, relativamente aos resultados da ação pública.\nIV - assegurar a eficácia e efetividade da ação governamental, promovendo a adequação entre meios, ações, impactos e resultados.\nV - promover a gestão democrática, participativa, transparente e ética.\n\nEstão corretos os objetivos:",
  alternativas: [
    "I, II e III, apenas.",
    "III, IV e V, apenas.",
    "I, II, III e IV, apenas.",
    "II, III, IV e V, apenas.",
    "I, II, III, IV e V."
  ], correta: "E" },

{ id: "12",
  enunciado: "A prevenção de acidentes deve ser preocupação de todos os envolvidos nos locais de trabalho. Os locais de trabalho que apresentem as características descritas a seguir devem ser sinalizados como locais sujeitos a riscos ergonômicos, EXCETO UM, que está ERRADO. Assinale-o.",
  alternativas: [
    "esforço físico intenso.",
    "imposição de ritmos excessivos.",
    "exigência de postura inadequada.",
    "iluminação inadequada.",
    "jornadas de trabalho prolongadas."
  ], correta: "D" },

{ id: "13",
  enunciado: "Avalie se a administração pública direta e indireta de qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios deve obedecer aos seguintes princípios:\n\nI - legalidade.\nII - impessoalidade.\nIII - moralidade.\nIV - publicidade.\nV - eficiência.\n\nEstão corretos:",
  alternativas: [
    "I, III e IV, apenas.",
    "II, IV e V, apenas.",
    "I, II, III, IV e V.",
    "I, III, IV e V, apenas.",
    "I, III e V, apenas."
  ], correta: "C" },

{ id: "14",
  enunciado: "Em relação à remuneração dos servidores públicos, avalie, à luz da Constituição Federal, se as afirmativas a seguir são falsas (F) ou verdadeiras (V):\n\nI – É vedada a vinculação ou equiparação de quaisquer espécies remuneratórias para o efeito de remuneração de pessoal do serviço público.\nII - Os acréscimos pecuniários percebidos por servidor público serão computados e acumulados para fins de concessão de acréscimos ulteriores.\nIII - O subsídio e os vencimentos dos ocupantes de cargos e empregos públicos são sempre irredutíveis.\n\nAs afirmativas I, II e III são respectivamente",
  alternativas: ["F, F e F.", "V, F e F.", "V, F e V.", "V, V e F.", "V, V e V."],
  correta: "B" },

{ id: "15",
  enunciado: "Aos servidores titulares de cargos efetivos da União, dos Estados, do Distrito Federal e dos Municípios, incluídas suas autarquias e fundações, é assegurado regime de previdência de caráter contributivo e solidário, mediante contribuição do respectivo ente público, dos servidores ativos e inativos e dos pensionistas, observados critérios que preservem o equilíbrio financeiro e atuarial e o disposto no artigo 40 da Constituição Federal. Em relação à aposentadoria dos servidores abrangidos pelo regime de previdência de que trata esse artigo avalie se as seguintes afirmativas em relação à aposentadoria são falsas (F) ou verdadeiras (V):\n\nI - Serão aposentados por invalidez permanente, sendo os proventos proporcionais ao tempo de contribuição, exceto se decorrente de acidente em serviço, moléstia profissional ou doença grave, contagiosa ou incurável, na forma da lei.\nII - Serão aposentados compulsoriamente, aos setenta anos de idade, com proventos proporcionais ao tempo de contribuição.\nIII - Serão aposentados voluntariamente, desde que cumprido tempo mínimo de dez anos de efetivo exercício no serviço público e cinco anos no cargo efetivo em que se dará a aposentadoria, observadas as seguintes condições: a) sessenta anos de idade e trinta e cinco de contribuição, se homem, e cinquenta e cinco anos de idade e trinta de contribuição, se mulher; e b) sessenta e cinco anos de idade, se homem, e sessenta anos de idade, se mulher, com proventos proporcionais ao tempo de contribuição.\n\nAs afirmativas I, II e III são respectivamente:",
  alternativas: ["V, V e V.", "V, F e F.", "F, F e V.", "V, V e F.", "F, V e F."],
  correta: "A" },

{ id: "16",
  enunciado: "“São estáveis após ____ de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público”.\n\nA lacuna fica corretamente preenchida por:",
  alternativas: ["um ano.", "dezoito meses.", "dois anos.", "três anos.", "quatro anos."],
  correta: "D" },

{ id: "17",
  enunciado: "Para os fins da Lei 8666/93, as seguintes definições estão corretas, EXCETO:",
  alternativas: [
    "Obra - toda construção, reforma, fabricação, recuperação ou ampliação, realizada por execução direta ou indireta.",
    "Serviço - toda atividade destinada a obter determinada utilidade de interesse para a Administração, tais como: demolição, conserto, instalação, montagem, operação, conservação, reparação, adaptação, manutenção, transporte, locação de bens, publicidade, seguro ou trabalhos técnico-profissionais.",
    "Compra - toda aquisição remunerada de bens para fornecimento de uma só vez ou parceladamente.",
    "Alienação - toda transferência de domínio de bens a terceiros.",
    "Obras, serviços e compras de grande vulto - aquelas cujo valor estimado seja superior a 100 (cem) vezes o limite estabelecido na alínea “c” do inciso I do art. 23 da referida Lei."
  ], correta: "E" },

{ id: "18",
  enunciado: "De acordo com a Lei 8666/93, as obras e os serviços podem ser licitados nas seguintes condições, dentre outras, EXCETO:",
  alternativas: [
    "quando houver projeto básico aprovado pela autoridade competente e disponível para exame dos interessados em participar do processo licitatório.",
    "quando existir orçamento detalhado em planilhas que expressem a composição de todos os seus custos unitários.",
    "quando incluir no objeto da licitação a obtenção de recursos financeiros para sua execução.",
    "quando houver previsão de recursos orçamentários que assegurem o pagamento das obrigações decorrentes de obras ou serviços a serem executadas no exercício financeiro em curso, de acordo com o respectivo cronograma.",
    "quando o produto deles esperado estiver contemplado nas metas estabelecidas no Plano Plurianual de que trata o art. 165 da Constituição Federal, quando for o caso."
  ], correta: "C" },

{ id: "19",
  enunciado: "Avalie se o Regime Diferenciado de Contratações Públicas (RDC) é aplicável às licitações e contratos necessários à realização:\n\nI. dos Jogos Olímpicos e Paraolímpicos de 2016, constantes da Carteira de Projetos Olímpicos a ser definida pela Autoridade Pública Olímpica (APO).\nII. da Copa do Mundo Fifa 2014 e de obras de infraestrutura e de contratação de serviços para os aeroportos das capitais dos Estados da Federação distantes até 350 km das cidades sedes do mundial.\nIII. das ações integrantes do Programa de Aceleração do Crescimento (PAC).\nIV. das obras e serviços de engenharia no âmbito do Sistema Único de Saúde - SUS.\nV. das obras e serviços de engenharia para construção, ampliação e reforma de estabelecimentos penais e unidades de atendimento socioeducativo.\n\nEstão corretos os itens:",
  alternativas: [
    "I, II, III, IV e V.",
    "I, II e III, apenas.",
    "III, IV e V, apenas.",
    "I e II, apenas.",
    "II, III e IV, apenas."
  ], correta: "A" },

{ id: "20",
  enunciado: "Para efeitos de aplicação do RDC, projeto básico é o conjunto de elementos necessários e suficientes, com nível de precisão adequado, para caracterizar a obra ou serviço de engenharia, ou complexo de obras ou serviços objeto da licitação, com base nas indicações dos estudos técnicos preliminares; e assegurar a viabilidade técnica e o adequado tratamento do impacto ambiental do empreendimento.\n\nPara tal fim, avalie se o projeto básico deverá conter, sem frustrar o caráter competitivo do procedimento licitatório, os seguintes elementos:\n\nI. desenvolvimento da solução escolhida de forma a fornecer visão global da obra e identificar seus elementos constitutivos com clareza.\nII. soluções técnicas globais e localizadas, suficientemente detalhadas, de forma a restringir a necessidade de reformulação ou de variantes durante as fases de elaboração do projeto executivo e de realização das obras e montagem a situações devidamente comprovadas em ato motivado da administração pública.\nIII. identificação dos tipos de serviços a executar e de materiais e equipamentos a incorporar à obra, bem como especificações que assegurem os melhores resultados para o empreendimento.\nIV. informações que possibilitem o estudo e a dedução de métodos construtivos, instalações provisórias e condições organizacionais para a obra.\nV. subsídios para montagem do plano de licitação e gestão da obra, compreendendo a sua programação, a estratégia de suprimentos, as normas de fiscalização e outros dados necessários em cada caso, exceto, em relação à respectiva licitação, na hipótese de contratação integrada.\nVI. orçamento detalhado do custo global da obra, fundamentado em quantitativos de serviços e fornecimentos propriamente avaliados.\n\nEstão corretos os itens:",
  alternativas: [
    "I, II, III, IV, V e VI.",
    "I, II e III, apenas.",
    "III, IV, V e VI, apenas.",
    "II, III e VI, apenas.",
    "I, IV e V, apenas."
  ], correta: "A" },

/* ---------- CONHECIMENTOS ESPECÍFICOS NO PERFIL (21 a 60) ---------- */

{ id: "21",
  enunciado: "Um duto fechado irá trabalhar a seção cheia, com uma velocidade de escoamento de 0,5 m/s. Se a vazão de projeto é de 314 l/s, o diâmetro mínimo da tubulação deverá ser de aproximadamente:",
  alternativas: ["(2√10)/10 m", "√5/5 m", "(2√5)/5 m", "(4√10)/5 m", "4/5 m"],
  correta: "C" },

{ id: "22",
  enunciado: "Observe o texto abaixo, que descreve um hidrômetro utilizado em uma rede de abastecimento de água:\n\n“Baseia-se na medição direta do número de vezes que uma câmara de volume conhecido é enchida e esvaziada pela ação de um êmbolo dotado de movimento retilíneo alternativo, de um disco rotativo, ou, ainda de um disco oscilante”\n(A. J. Macintyre, “Manual de Instalações Hidráulicas e Sanitárias”)\n\nEste tipo de hidrômetro é denominado:",
  alternativas: ["multijato", "monojato", "barimétrico", "taquimétrico", "volumétrico"],
  correta: "E" },

{ id: "23",
  enunciado: "Observe o desenho abaixo, que mostra uma calha utilizada para condução de água em um sistema de captação de águas pluviais:\n\nO perímetro molhado desta calha, que é utilizado na fórmula de Manning, vale:",
  imagem: "img/prova06-q23.png",
  alternativas: ["43 cm", "61 cm", "65 cm", "86 cm", "90 cm"],
  correta: "B" },

{ id: "24",
  enunciado: "A figura abaixo mostra três curvas de precipitação máxima (mm) em determinado município, em função do tempo de recorrência (anos). As curvas correspondem a tempos de duração da chuva de 5 min, 15 min e 1 hora, porém por um descuido esqueceu-se de indicar a que duração corresponde cada curva.\n\nDeseja-se projetar, nesse município, um sistema de drenagem que suporte a maior chuva de duração de 5 minutos que ocorre com frequência anual de 0,02. O valor de precipitação que deve ser considerada nesse projeto é em torno de:",
  imagem: "img/prova06-q24.png",
  alternativas: ["170 mm", "190 mm", "220 mm", "260 mm", "290 mm"],
  correta: "D" },

{ id: "25",
  enunciado: "Em um prédio, a água é distribuída a partir de um reservatório superior de acumulação, passando por uma série de encanamentos até chegar às peças de utilização ou aparelhos sanitários da residência. A ordem correta em que os encanamentos são percorridos é:",
  alternativas: [
    "colunas de alimentação => barrilete de distribuição => ramais => sub-ramais",
    "ramais => sub-ramais => barrilete de distribuição => colunas de alimentação",
    "barrilete de distribuição => ramais => sub-ramais => colunas de alimentação",
    "colunas de alimentação => ramais => sub-ramais => barrilete de distribuição",
    "barrilete de distribuição => colunas de alimentação => ramais => sub-ramais"
  ], correta: "E" },

{ id: "26",
  enunciado: "Observe o esquema de distribuição de água mostrado abaixo.\n(Fonte: A.R. Bohn, “Instalação Predial de água fria”, UFSC)\n\nEsse esquema representa um sistema do tipo:",
  imagem: "img/prova06-q26.png",
  alternativas: [
    "direto, sem bombeamento",
    "direto, com bombeamento",
    "indireto, sem bombeamento",
    "indireto, com bombeamento",
    "misto, sem bombeamento"
  ], correta: "D" },

{ id: "27",
  enunciado: "O símbolo a seguir consta de uma planta de instalação de esgoto predial.\n\nEste símbolo representa:",
  imagem: "img/prova06-q27.png",
  alternativas: [
    "uma caixa de gordura simples",
    "um ralo seco",
    "uma caixa de passagem",
    "um tanque séptico",
    "uma válvula de retenção"
  ], correta: "A" },

{ id: "28",
  enunciado: "Diversos pontos de utilização estão presentes em uma instalação de água fria, cada um com determinado peso relativo, que é função de sua vazão de projeto. Assinale a alternativa que lista corretamente três aparelhos sanitários em ordem crescente de peso relativo:",
  alternativas: [
    "válvula de descarga de bacia sanitária, chuveiro e lavadora de roupas",
    "lavadora de roupas, válvula de descarga de bacia sanitária e chuveiro",
    "chuveiro, lavadora de roupas e válvula de descarga de bacia sanitária",
    "chuveiro, válvula de descarga de bacia sanitária e lavadora de roupas",
    "lavadora de roupas, chuveiro e válvula de descarga de bacia sanitária"
  ], correta: "C" },

{ id: "29",
  enunciado: "“Quando uma válvula, torneira ou outro componente é fechado muito rapidamente, o fechamento é algumas vezes acompanhado por um claro ruído originado do fenômeno de transiente de pressão”\n\nO trecho acima foi retirado da NBR 5626, referente às Instalações prediais de água fria, e descreve a ocorrência do fenômeno chamado:",
  alternativas: [
    "bombeamento hidráulico",
    "chaminé de equilíbrio",
    "ressalto hidráulico",
    "golpe de aríete",
    "perda de carga"
  ], correta: "D" },

{ id: "30",
  enunciado: "O gráfico abaixo mostra os registros obtidos por um pluviômetro, ao longo do ano, utilizado para avaliar a precipitação sobre uma região S com 10 km² de área.\n\nApesar de não estarem indicados os valores exatos referentes a cada mês, é possível perceber que o volume total de água precipitado nesta região ao longo do ano foi em torno de:",
  imagem: "img/prova06-q30.png",
  alternativas: ["0,5 hm³", "1 hm³", "5 hm³", "10 hm³", "20 hm³"],
  correta: "B" },

{ id: "31",
  enunciado: "Em uma instalação de esgoto por meio de fossa séptica, o poço destinado a receber o efluente da fossa e permitir sua infiltração subterrânea é denominado:",
  alternativas: [
    "câmara de digestão",
    "sumidouro",
    "câmara de escuma",
    "vala de filtração",
    "câmara de decantação"
  ], correta: "B" },

{ id: "32",
  enunciado: "Em um sistema de tratamento de esgoto, a etapa na qual ocorre a remoção da matéria orgânica por meio de reações bioquímicas, aeróbicas ou anaeróbicas é denominada tratamento:",
  alternativas: ["preliminar", "primário", "secundário", "de lodo", "terciário"],
  correta: "C" },

{ id: "33", html: true,
  enunciado: TABELA_DRENAGEM,
  alternativas: ["1 m³/s", "2 m³/s", "4 m³/s", "8 m³/s", "10 m³/s"],
  correta: "E" },

{ id: "34",
  enunciado: "Uma caixa retangular de dimensões 2 m x 1 m x 0,5 m e densidade 0,80 g/cm³ flutua sobre a água. O volume da caixa que estará sobre a superfície da água será de:",
  alternativas: ["0,1 m³", "0,2 m³", "0,4 m³", "0,5 m³", "0,8 m³"],
  correta: "B" },

{ id: "35", html: true,
  enunciado: TABELA_CANAL,
  alternativas: ["2 m", "4 m", "8 m", "10 m", "12 m"],
  correta: "A" },

{ id: "36",
  enunciado: "Deseja-se projetar um canal retangular a céu aberto. Utilizando-se a fórmula de Manning, a seção hidráulica mais eficiente é aquela na qual a relação entre a largura L do fundo e a profundidade H do canal é:",
  alternativas: ["L = H/4", "L = H/2", "L = H", "L = 2H", "L = 4H"],
  correta: "D" },

{ id: "37",
  enunciado: "A figura abaixo mostra um trecho de canal onde são identificadas três seções A, B e C.\n\nOs regimes de escoamento nas seções A, B e C são denotados, respectivamente, de:",
  imagem: "img/prova06-q37.png",
  alternativas: [
    "subcrítico, crítico e supercrítico",
    "supercrítico, crítico e subcrítico",
    "supercrítico, crítico e supercrítico",
    "subcrítico, crítico e subcrítico",
    "crítico, subcrítico e supercrítico"
  ], correta: "A" },

{ id: "38",
  enunciado: "Um vertedor apresenta as seguintes características:\n\n- o nível de jusante é inferior ao da sua crista;\n- a largura do vertedor é menor do que a do canal de aproximação.\n\nPode-se dizer que esse vertedor é do tipo:",
  alternativas: [
    "incompleto, sem contração lateral",
    "afogado, com contração lateral",
    "completo, com contração lateral",
    "livre, sem contração lateral",
    "afogado, sem contração lateral"
  ], correta: "C" },

{ id: "39",
  enunciado: "Observe a figura abaixo.\n\nNesse trecho do canal, observa-se a ocorrência de um / uma:",
  imagem: "img/prova06-q39.png",
  alternativas: [
    "filtração lateral",
    "remanso de abaixamento",
    "veia",
    "lâmina vertente",
    "ressalto hidráulico"
  ], correta: "E" },

{ id: "40",
  enunciado: "A figura abaixo refere-se a uma instalação típica de uma bomba centrífuga.\n(Adaptado de: A. J. Macintyre, “Manual de Instalações Hidráulicas e Sanitárias”.)\n\nNo processo descrito acima, pode-se dizer que a água bombeada adquiriu:",
  imagem: "img/prova06-q40.png",
  alternativas: [
    "energia potencial, somente",
    "energia cinética, somente",
    "energia elétrica, somente",
    "energia cinética e energia potencial",
    "energia elétrica e energia potencial"
  ], correta: "D" },

{ id: "41",
  enunciado: "Considerando a mesma instalação típica de bomba centrífuga da figura, as alturas de aspiração e recalque são denotadas, respectivamente, por:",
  imagem: "img/prova06-q40.png",
  alternativas: ["h₁ e h₂", "h₁ e h₃", "h₂ e h₁", "h₂ e h₃", "h₃ e h₁"],
  correta: "A" },

{ id: "42",
  enunciado: "Em hidrologia, PMP é uma sigla que corresponde ao:",
  alternativas: [
    "valor de evaporação acima da qual a quantidade evaporada não mais é compensada pelo montante de chuvas, e o reservatório diminui de volume",
    "valor de umidade do solo abaixo da qual a água não está mais disponível para as plantas, e estas não recuperam mais a turgidez",
    "valor de umidade do ar acima da qual não há mais transpiração pelas plantas, aumentando a quantidade de água que se infiltra no solo",
    "valor de precipitação suportada pelo solo, acima da qual toda a água precipitada passa a escoar superficialmente",
    "valor de porosidade do solo, acima da qual começa a haver infiltração da água precipitada, diminuindo o escoamento superficial"
  ], correta: "B" },

{ id: "43",
  enunciado: "O esquema abaixo mostra como evoluem, ao longo do tempo, as diversas parcelas em que se subdividem as águas provenientes das chuvas.\n(Adaptado de: Pinto et al, “Hidrologia Básica”)\n\nAlém das águas que atingem diretamente a superfície líquida, as parcelas identificadas pelas letras A, B e C também atingem o leito dos cursos d'água. Essas parcelas correspondem, respectivamente, a:",
  imagem: "img/prova06-q43.png",
  alternativas: [
    "escoamento superficial, escoamento subterrâneo e escoamento hipodérmico",
    "escoamento superficial, escoamento hipodérmico e escoamento subterrâneo",
    "escoamento subterrâneo, escoamento superficial e escoamento hipodérmico",
    "escoamento subterrâneo, escoamento hipodérmico e escoamento superficial",
    "escoamento hipodérmico, escoamento superficial e escoamento subterrâneo"
  ], correta: "D" },

{ id: "44",
  enunciado: "O hidrograma abaixo mostra as vazões de escoamento superficial verificadas durante todo o intervalo de tempo decorrido após o início de uma chuva.\n\nO volume total de água escoado foi de:",
  imagem: "img/prova06-q44.png",
  alternativas: ["12.750 m³", "26.500 m³", "31.500 m³", "37.500 m³", "41.250 m³"],
  correta: "C" },

{ id: "45",
  enunciado: "Em hidrologia, a curva-chave pode ser descrita como uma função que relaciona as seguintes variáveis medidas em uma seção do rio:",
  alternativas: [
    "cota do nível d'água X vazão",
    "velocidade do escoamento X profundidade",
    "temperatura X velocidade do escoamento",
    "vazão X velocidade do escoamento",
    "cota do nível d'água X temperatura"
  ], correta: "A" },

{ id: "46",
  enunciado: "A figura abaixo mostra uma curva de permanência para as vazões de um rio.\n\nCom base nessa curva pode-se dizer que em aproximadamente:",
  imagem: "img/prova06-q46.png",
  alternativas: [
    "10% do tempo a vazão no rio é inferior a 1000 m³/s",
    "40% do tempo a vazão no rio é inferior a 1200 m³/s",
    "15% do tempo a vazão no rio é igual a 800 m³/s",
    "10% do tempo a vazão no rio é superior a 200 m³/s",
    "40% do tempo a vazão no rio é superior a 400 m³/s"
  ], correta: "E" },

{ id: "47",
  enunciado: "Uma cidade de 50.000 habitantes apresenta um consumo per capita de água de 160 litros/dia. Um reservatório de abastecimento de água deve ser dimensionado de forma a armazenar água suficiente para suprir a cidade por 30 dias ininterruptos, sem receber nenhuma afluência natural ou artificial, e sem que haja necessidade de racionamento. Desta forma, a capacidade do reservatório deve ser de:",
  alternativas: ["0,6 hm³", "1,2 hm³", "1,8 hm³", "2,4 hm³", "3,0 hm³"],
  correta: "D" },

{ id: "48",
  enunciado: "Em um desconector num sistema de esgotamento sanitário, a camada líquida que veda a passagem de gases é denominada de:",
  alternativas: ["fecho hídrico", "escuma", "caixa sifonada", "sumidouro", "tubo ventilador"],
  correta: "A" },

{ id: "49",
  enunciado: "Os coletores, interceptores e emissários são elementos destinados a:",
  alternativas: [
    "tratar e purificar o esgoto, em um sistema de esgoto sanitário",
    "coletar e transportar o esgoto, em um sistema de esgoto sanitário",
    "captar e conduzir a água da chuva, em um sistema de abastecimento de água",
    "armazenar a água tratada, em um sistema de abastecimento de água",
    "transportar a água tratada, em um sistema de abastecimento de água"
  ], correta: "B" },

{ id: "50",
  enunciado: "Uma vez observadas as condições e padrões estabelecidos pelos órgãos regulamentadores competentes, a reutilização de um resíduo sólido consiste:",
  alternativas: [
    "na reciclagem do resíduo, através de sua transformação em um produto de menor valor agregado",
    "na reciclagem do resíduo, através de sua transformação em um produto de mesmo valor agregado que o original",
    "no reaproveitamento do resíduo, através de transformações apenas de origem física",
    "no reaproveitamento do resíduo, através de transformações apenas de origem biológica",
    "no reaproveitamento do resíduo, sem sua transformação biológica, física ou físico-química"
  ], correta: "E" },

{ id: "51",
  enunciado: "Observe o desenho, em perspectiva, de uma instalação de esgoto sanitário de uma residência.\n\nO ramal de ventilação está designado pela letra:",
  imagem: "img/prova06-q51.png",
  alternativas: ["A", "B", "C", "D", "E"],
  correta: "C" },

{ id: "52",
  enunciado: "Para uma bacia sanitária, o diâmetro nominal mínimo do ramal de descarga deve ser de:",
  alternativas: ["40 mm", "60 mm", "80 mm", "100 mm", "120 mm"],
  correta: "D" },

{ id: "53",
  enunciado: "Em relação às conexões de uma instalação de tubulação enterrada de gás, pode-se dizer que são proibidas as conexões:",
  alternativas: [
    "soldadas e flangeadas, e permitidas as conexões rosqueadas",
    "flangeadas e permitidas as conexões soldadas e rosqueadas",
    "flangeadas e rosqueadas, e permitidas as conexões soldadas",
    "rosqueadas, e permitidas as conexões flangeadas e soldadas",
    "rosqueadas e soldadas, e permitidas as conexões flangeadas"
  ], correta: "C" },

{ id: "54",
  enunciado: "Observe o tipo de junção de tubos mostrada na figura abaixo.\n\nEssa junção é do tipo:",
  imagem: "img/prova06-q54.png",
  alternativas: ["flangeada", "rosqueada", "soldada", "ponta e bolsa", "colada"],
  correta: "A" },

{ id: "55", html: true,
  enunciado: TABELA_INCENDIO,
  alternativas: [
    "A e B, somente",
    "A e C, somente",
    "B e C, somente",
    "B e D, somente",
    "C e D, somente"
  ], correta: "A" },

{ id: "56",
  enunciado: "Em um sistema de abastecimento de água, a saúde pública está em risco sempre que se identifica:",
  alternativas: [
    "um ponto de utilização",
    "uma conexão cruzada",
    "um alimentador predial",
    "um barrilete",
    "uma junta"
  ], correta: "B" },

{ id: "57",
  enunciado: "Deseja-se executar um canal em concreto armado para condução das águas pluviais de uma cidade. Os itens referentes ao concreto, forma de madeira e aço devem ser mensurados, para fins de medição, nas respectivas unidades:",
  alternativas: ["m³, m³ e kg", "m², m³ e kg", "kg, kg e m³", "m³, m² e m³", "m³, m² e kg"],
  correta: "E" },

{ id: "58",
  enunciado: "Uma planta de instalações prediais foi confeccionada no formato A2. Portanto, as dimensões dessa planta são de:",
  alternativas: [
    "210 mm x 297 mm",
    "420 mm x 297 mm",
    "420 mm x 594 mm",
    "594 mm x 841 mm",
    "841 mm x 420 mm"
  ], correta: "C" },

{ id: "59",
  enunciado: "O diagrama abaixo mostra uma rede PERT, no qual são indicados os tempos, em dias, necessários para a realização de diversas atividades em uma obra. Os círculos numerados indicam os diversos estágios intermediários no andamento da obra, desde o seu estágio inicial até o final.\n\nO tempo mínimo necessário para a conclusão de todas as atividades é de:",
  imagem: "img/prova06-q59.png",
  alternativas: ["15,0 dias", "18,5 dias", "21,5 dias", "31,0 dias", "42,0 dias"],
  correta: "C" },

{ id: "60",
  enunciado: "Uma empresa irá tomar emprestado um milhão de reais para a realização de uma obra. O pagamento do empréstimo será feito de uma só vez, daqui a 3 anos, com juros compostos de 10% ao ano. Ao final desse período, o valor que a empresa irá pagar para quitar esse empréstimo será de:",
  alternativas: [
    "R$ 1,100 milhão",
    "R$ 1,231 milhão",
    "R$ 1,300 milhão",
    "R$ 1,331 milhão",
    "R$ 1,433 milhão"
  ], correta: "D" }

  ]
});

})();
