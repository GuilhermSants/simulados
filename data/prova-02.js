/* =========================================================
   Engenheiro Civil — prova objetiva, 40 questões
   Língua Portuguesa (1 a 16) + Conhecimentos Específicos (17 a 40)
   ========================================================= */

(function () {

const TEXTO_PALEOLITICO =
"Brasil Paleolítico\n\n" +
"Entre os fatores que caracterizam um país subdesenvolvido, como o Brasil, está o contraste clamoroso nos níveis de vida da população. O exemplo das famílias que habitam em cavernas, na fronteira do Piauí com o Ceará, mostra que subdesenvolvido e injusto são conceitos suaves para definir a nação.\n\n" +
"O fato de famílias viverem há mais de uma geração, quase como homens do período paleolítico desafia qualquer aspecto que possa sustentar um perfil minimamente moderno e igualitário da sociedade. Para esses poucos lavradores, o fogo ainda é uma arma vital.\n\n" +
"Enquanto em partes do país a agroindústria produz para o mercado externo com padrões internacionais, esses trabalhadores cultivam apenas o minimamente necessário para a sobrevivência de suas famílias. O “homem das cavernas” brasileiro convive ainda com cobras dentro de sua precária moradia sem ter muito o que fazer para evitá-la.\n\n" +
"Enquanto alguns reclamam do exíguo espaço dos apartamentos modernos, estes moram entre fendas de rochas, encolhidos pelo teto baixo, ameaçados por desabamentos e sem o menor instrumento que permita identificar traços de uma habitação do século 20. Não dormem sobre camas, mas sobre jiraus. Caneta, xampu e sabonete são seus objetivos de desejo.\n\n" +
"Para um país que enfrenta sérias contradições sociais, os habitantes das serras da Ibiapaba e Grande retratam de maneira mais impressionante o quanto são profundas as disparidades nacionais. Não se trata de tornar esse caso, chocante, mas localizado, um emblema nacional. Ainda assim, ele está a lembrar o quanto ainda tem de ser feito para chegar à modernidade.\n\n" +
"(Folha de São Paulo, 22 de fevereiro de 1996.)";

const TEXTO_GOOGLE =
"O Google do Japão\n\n" +
"O Google do Japão encontrou uma forma lúdica de mostrar como funciona Street View, recurso disponível no Google Maps que permite “viajar” por várias cidades do mundo sem sair da frente do monitor. Uma animação mostra um carro munido de uma câmera fazendo fotos em sequência de vários pontos de uma cidade. Depois, as imagens são levadas ao laboratório e processadas eletronicamente para dar a sensação de que você está passeando por uma rua real. Ele já foi visto quase 300 mil vezes.\n\n" +
"(Época, São Paulo, 9 nov. 2009.)";

registrarProva({
  id: "engenheiro-civil-40q",
  titulo: "Engenheiro Civil — Prefeitura Itapolis 2012",
  subtitulo: "40 questões · Português e Conhecimentos Específicos",
  questoes: [

/* ---------- LÍNGUA PORTUGUESA (1 a 16) ---------- */

{ id: "1", apoio: TEXTO_PALEOLITICO,
  enunciado: "Pode-se afirmar sobre o texto que:\n\nI. O primeiro parágrafo introduz e delimita o assunto do texto.\nII. O segundo parágrafo desenvolve o exemplo que é indicado no final do primeiro.\nIII. No quarto parágrafo há um aprofundamento da noção de contraste entre um nível de vida com certo conforto e a vida dos “habitantes das cavernas” piauienses.\n\nAssinale a correta.",
  alternativas: ["I e II.", "II e III.", "I e III.", "I, II e III."],
  correta: "D" },

{ id: "2", apoio: TEXTO_PALEOLITICO,
  enunciado: "Qual o melhor significado para o adjetivo “internacionais”, no terceiro parágrafo?",
  alternativas: [
    "Que pode ser aceito em todos os países do mundo, inclusive os altamente desenvolvidos.",
    "Refere-se ao que é produzido em outros países para o mercado externo.",
    "Refere-se àquilo que é produzido pelos agricultores piauienses para exportação.",
    "Que o mercado externo determina padrões para o que é produzido para a sobrevivência do “homem das cavernas” brasileiro."
  ], correta: "A" },

{ id: "3", apoio: TEXTO_PALEOLITICO,
  enunciado: "No primeiro período do último parágrafo os adjetivos “sérias” e “profundas” têm um peso argumentativo que pode ser entendido como:",
  alternativas: [
    "Minimização da gravidade das contradições e disparidades nacionais.",
    "Apelo apaixonado para a solução das contradições e disparidades nacionais.",
    "Intensificação da gravidade das contradições sociais e das disparidades nacionais.",
    "Suavização da gravidade das contradições e disparidades nacionais."
  ], correta: "C" },

{ id: "4",
  enunciado: "Assinale a frase que apresenta um erro de concordância nominal.",
  alternativas: [
    "O porteiro disse-lhe meias verdades.",
    "A entrada do aeroporto ficou meia congestionada.",
    "A garota ficou meio constrangida com a situação.",
    "Ele sai sempre que o relógio bate meio-dia e meia."
  ], correta: "B" },

{ id: "5",
  enunciado: "Assinale a opção cujos elementos destacados nas palavras a seguir são respectivamente sufixo, prefixo e radical.",
  alternativas: [
    "emplacar – enriquecer – impune.",
    "semear – subterrâneo – bebedouro.",
    "socialismo – exportação – empobrecer.",
    "gorduroso – cafeteira – ajeitar."
  ], correta: "C" },

{ id: "6",
  enunciado: "Em qual das opções abaixo a transposição do discurso direto para o indireto está incorreta?",
  alternativas: [
    "D.D. A esposa confirmou: – Meu marido não esteve em casa ontem. / D.I. A esposa confirmou que seu marido não estivera em casa no dia anterior.",
    "D.D. O rapaz garantiu: – Eu levarei as compras para o senhor daqui a pouco. / D.I. O rapaz garantiu que levava as compras para ele daqui a pouco.",
    "D.D. – Minha mãe vai gostar desse livro – disse o garoto. / D.I. O garoto disse que sua mãe iria gostar daquele livro.",
    "D.D. – Faça-me um favor. Não espalhe – pediu-lhe a vítima. / D.I. A vítima pediu-lhe que ele lhe fizesse um favor: não espalhasse."
  ], correta: "B" },

{ id: "7",
  enunciado: "Marque a frase cuja regência verbal esteja incorreta.",
  alternativas: [
    "Obedeço velhas tradições.",
    "Não desobedeço a meus princípios.",
    "O tenente obedeceu ao general.",
    "O sargento obedeceu-lhe."
  ], correta: "A" },

{ id: "8",
  enunciado: "A oração coordenada destacada em Joga-se comida fora; perde-se, pois, muita vitamina é:",
  alternativas: ["Assindética.", "Sindética conclusiva.", "Sindética explicativa.", "Sindética adversativa."],
  correta: "B" },

{ id: "9",
  enunciado: "Qual das alternativas apresenta em destaque uma oração subordinada adverbial causal?",
  alternativas: [
    "Ela o odeia desde que ele a traiu.",
    "Emprestar-te-ei o livro desde que você o devolva amanhã.",
    "Desde que ele se mudou para Goiás, nunca mais voltou aqui.",
    "Desde que o documento é falso, é melhor entregá-lo à polícia."
  ], correta: "D" },

{ id: "10",
  enunciado: "Em qual das orações a vírgula foi usada para marcar a elipse do verbo?",
  alternativas: [
    "Não demores, meu filho.",
    "Nossas ricas tradições, não as respeitamos mais.",
    "Nós trabalhamos com fatos e vocês, com hipóteses.",
    "São Paulo, 10 de janeiro de 1999."
  ], correta: "C" },

{ id: "11",
  enunciado: "Assinale a alternativa em que o adjetivo destacado está sendo empregado como predicativo do objeto.",
  alternativas: [
    "Eram todos objetos antigos.",
    "Coisas assustadoras ocorreram lá.",
    "Os professores ficaram satisfeitos.",
    "Considero sua proposta extravagante."
  ], correta: "D" },

{ id: "12",
  enunciado: "Assinale a alternativa cujo emprego da crase está incorreto.",
  alternativas: [
    "Fez a lição à força.",
    "À medida que caminhava, os corpos apareciam.",
    "Dirigiu-se à sala escura.",
    "Dei à ela tudo que um coração deseja."
  ], correta: "D" },

{ id: "13",
  enunciado: "Assinale a afirmação incorreta quanto às regras de acentuação gráfica.",
  alternativas: [
    "Os ditongos éi e ói devem ser acentuados nas palavras paroxítonas como em asteróide e estréia.",
    "Acentuam-se os ditongos abertos tônicos éu(s), éi(s), ói(s) em palavras oxítonas como em pastéis e troféus.",
    "A palavra friíssimo deve receber acento por ser uma proparoxítona.",
    "A palavra Guaíra recebe o acento no i pois este vem precedido de ditongo crescente e forma sílaba sozinho."
  ], correta: "A" },

{ id: "14",
  enunciado: "Qual a opção cujas palavras têm dois fonemas a menos que letras?",
  alternativas: ["tóxico – tamanho.", "bochecha – assessor.", "piscina – recessivo.", "recessivo – máximo."],
  correta: "B" },

{ id: "15",
  enunciado: "Assinale a alternativa em que há erro de ortografia.",
  alternativas: [
    "A cerração dificultava a visibilidade.",
    "Extático é sinônimo de pasmado.",
    "Ele não sabia dicenir o certo e o errado.",
    "Tinha verdadeira obsessão pelo poder."
  ], correta: "C" },

{ id: "16", apoio: TEXTO_GOOGLE,
  enunciado: "Sobre o texto pode-se afirmar:\n\nI. A primeira oração destacada (“sem sair da frente do monitor”) é uma oração subordinada adverbial condicional reduzida de infinitivo.\nII. A oração “para dar a sensação...” expressa finalidade.\nIII. A oração “de que você está passando por uma rua real” é uma oração subordinada substantiva completiva nominal.",
  alternativas: ["I, II e III.", "II e III.", "I e III.", "I e II."],
  correta: "A" },

/* ---------- CONHECIMENTOS ESPECÍFICOS (17 a 40) ---------- */

{ id: "17",
  enunciado: "Na execução de uma edificação térrea, empregando blocos de concreto 14x19x39 cm; qual a quantidade necessária de tais blocos para construir 180,00 m² de alvenaria, considerando a espessura da parede sem revestimento de 14 cm.",
  alternativas: ["2.720", "4.510", "2.364", "1.980"],
  correta: "C" },

{ id: "18",
  enunciado: "Quantos dias são necessários para desformar uma laje de concreto, onde foi empregado lajotas Beta 12 com capeamento de 4 cm, trilhos pré-moldados e concreto Fck = 20 MPa, controle tipo A?",
  alternativas: ["15 dias.", "18 dias", "35 dias", "28 dias"],
  correta: "D" },

{ id: "19",
  enunciado: "Para preparar 1,00 m³ (um metro cúbico) de concreto Fck = 20 MPa controle tipo A, com betoneira, o consumo de cimento e brita 2 são, respectivamente:",
  alternativas: [
    "7 sacas de cimento e 0,675 m³ de brita.",
    "5 sacas de cimento e 0,50 m³ de brita.",
    "9 sacas de cimento e 0,85 m³ de brita.",
    "4,5 sacas de cimento e 0,45 m³ de brita."
  ], correta: "A" },

{ id: "20",
  enunciado: "Com relação à execução da argamassa de chapisco, considere as afirmações:\n\nI - O chapisco é empregado como base para outros revestimentos, quando a superfície for muito lisa ou pouco absorvente.\nII - Recomenda-se um intervalo mínimo de 24 horas para a aplicação do emboço.\nIII - Recomenda-se molhar a área onde o chapisco será aplicado.\nIV - Recomenda-se adicionar 1% de cal hidratada para acelerar a cura.",
  alternativas: [
    "I; II e IV estão corretas.",
    "I; II e III estão corretas.",
    "I e II estão corretas.",
    "I e IV estão corretas."
  ], correta: "C" },

{ id: "21",
  enunciado: "De acordo com o Grupo I / NB-231, as espessuras adotadas para o emboço e o reboco aplicados em paredes internas são, respectivamente?",
  alternativas: ["25 mm e 15 mm", "20 mm e 5 mm", "15 mm e 7,5 mm", "18 mm e 9 mm"],
  correta: "B" },

{ id: "22",
  enunciado: "Sabemos que todos os materiais têm seu peso específico. Em se tratando do concreto armado, qual é o seu peso específico?",
  alternativas: ["1.800 Kg/m³", "3.200 Kg/m³", "2.500 Kg/m³", "1.650 Kg/m³"],
  correta: "C" },

{ id: "23",
  enunciado: "Os pesos das barras de aço 6.35 mm (CA-25); 12.70 mm (CA-50) e 4.2 mm (CA-60) são, respectivamente, os seguintes:",
  alternativas: [
    "0,20/m - 1,02/m - 0,302/m",
    "0,18/m - 0,76/m - 0,02/m",
    "0,25/m - 1,12/m - 0,205/m",
    "0,25/m - 0,99/m - 0,109/m"
  ], correta: "D" },

{ id: "24",
  enunciado: "Qual é o tempo necessário, em horas, que um técnico em topografia consome para executar um levantamento planialtimétrico e cadastral de uma área urbana de 1,0 ha; considerando para representação gráfica as escalas entre 1:100 e 1:250, com curvas de nível de 1,0 metro equidistantes:",
  alternativas: ["28 horas", "55 horas", "38 horas", "16 horas"],
  correta: "B" },

{ id: "25",
  enunciado: "Na locação de um edifício de 10 pavimentos, onde os elementos estruturais de fundação são: tubulões a céu aberto e blocos; qual é a melhor técnica de locação a ser adotada onde ocorrerá a menor porcentagem de erros?",
  alternativas: ["Por face interna.", "Por face externa.", "Por eixo.", "Por faces internas e externas."],
  correta: "C" },

{ id: "26",
  enunciado: "Os blocos sílico-calcário, quando empregados para a alvenaria portante não armada, dispensam a utilização do aço como elemento estrutural. Podem ser especificados com resistência à compressão entre:",
  alternativas: ["50 a 100 Kg/cm³", "100 a 350 Kg/cm³", "25 a 50 Kg/cm³", "N. D. A."],
  correta: "B" },

{ id: "27",
  enunciado: "Em relação a peças gráficas, considere as afirmações:\n\nI - Desenho projetivo é o resultado da projeção do objeto sobre diagramas, esquemas e gráficos.\nII - Esboço ou croqui é a primeira representação gráfica, elaborada geralmente a lápis, a mão livre, sem escala e em qualquer tipo de papel ou programa digital.\nIII - Desenho não projetivo é o resultado final da projeção do objeto sobre planos (vistas ortográficas e perspectivas).\nIV - Detalhe é o desenho de elementos isolados, ou de parte do conjunto.",
  alternativas: [
    "Somente as I, II e III estão corretas.",
    "Somente as II e III estão corretas.",
    "Somente as II e IV estão corretas.",
    "Todas estão corretas."
  ], correta: "C" },

{ id: "28",
  enunciado: "Para a execução de uma cobertura empregando telhas romanas ou termoplan, qual é a declividade correta a ser adotada, conforme a NBR-9601?",
  alternativas: ["32% ≤ d ≥ 40%", "20% ≤ d ≥ 25%", "12% ≤ d ≥ 20%", "25% ≤ d ≥ 30%"],
  correta: "A" },

{ id: "29",
  enunciado: "O posicionamento correto de uma tesoura de madeira (estrutura principal), exatamente no encontro (encaixe) do banzo superior e banzo inferior, dar-se-á:",
  alternativas: [
    "a 18 cm distante do pilar de apoio",
    "a 25 cm distante do pilar de apoio.",
    "Sobre o pilar de apoio",
    "A 30 cm do pilar de apoio"
  ], correta: "C" },

{ id: "30",
  enunciado: "Qual é o consumo diário (CD) de água em um edifício de 10 pavimentos com dois apartamentos por pavimento, com 20 vagas para a garagem e 100 m² de jardinagem? O pavimento é rígido.",
  alternativas: [
    "15.000 litros ou 15 m³",
    "18.500 litros ou 18,5 m³",
    "32.000 litros ou 32 m³",
    "21.150 litros ou 21,15 m³"
  ], correta: "D" },

{ id: "31",
  enunciado: "Determinar a vazão em um canal circular cerâmico, sabendo-se que a altura da lâmina líquida é 70% do diâmetro, que é de 0,50 m.\n\nDados: I = 5,0 m/km; η = 0,013",
  alternativas: ["Q = 0,10 m³/seg.", "Q = 0,32 m³/seg.", "Q = 0,18 m³/seg.", "Q = 0,23 m³/seg"],
  correta: "D" },

{ id: "32",
  enunciado: "Dimensionar a tubulação da figura abaixo, adotando-se tubo de aço galvanizado.\n\nDados: 5,00 litros/seg.\nPressão mínima no ponto B = 0,50 m.c.a.\nRG = registro de globo\nVR = válvula de retenção",
  imagem: "img/prova02-q32.png",
  alternativas: ["3”", "1 1/2”", "2”", "1 1/4”"],
  correta: "A" },

{ id: "33",
  enunciado: "Na treliça abaixo, quais são as reações de apoio VA e VB?",
  imagem: "img/prova02-q33.png",
  alternativas: ["3,0 tf e 5,0 tf", "1,5 tf e 2,0 tf", "2,0 tf e 4,0 tf", "2,0 tf e 1,5 tf"],
  correta: "C" },

{ id: "34",
  enunciado: "Uma viga com seção indicada na figura está submetida a um momento torçor Mt = 200 tf/cm. Qual o valor de τmáx.?",
  imagem: "img/prova02-q34.png",
  alternativas: ["55 tf/cm²", "71 tf/cm²", "62 tf/cm²", "37 tf/cm²"],
  correta: "B" },

{ id: "35",
  enunciado: "Qual é a máxima altura (h) da coluna da figura abaixo, para suportar uma carga de P = 10 tf?",
  imagem: "img/prova02-q35.png",
  alternativas: ["210 cm", "321 cm", "158,28 cm", "126,50 cm"],
  correta: "C" },

{ id: "36",
  enunciado: "Qual é o peso de uma laje de concreto armado, que tem 30 cm de espessura, por 5,00 metros de largura e 4,20 metros de comprimento?",
  alternativas: ["18,00 tf.", "15,75 tf", "12,00 tf", "8,50 tf"],
  correta: "B" },

{ id: "37",
  enunciado: "Qual é a bitola de uma barra de aço que, tendo um comprimento de 7,80 metros, pesou 17,50 kgf?",
  alternativas: ["1/2”", "3/8”", "7/8”", "3/4”"],
  correta: "D" },

{ id: "38",
  enunciado: "Determine o fator de segurança para um talude de inclinação 1V:3H e altura H = 38 metros. O solo apresenta γ = 2,0 tf/m³ e s = 4 + θ tg 18º (tf/m²)",
  alternativas: ["F = 1,10", "F = 1,86", "F = 1,65", "F = 0,98"],
  correta: "C" },

{ id: "39",
  enunciado: "Numa estaca de concreto protendido de seção 18 x 18 cm e comprimento determinado de 12,00 metros, qual é o valor da sua carga nominal em kN?",
  alternativas: ["180", "320", "120", "200"],
  correta: "D" },

{ id: "40",
  enunciado: "As águas retiradas das superfícies são tratadas nas chamadas ETAs (Estação de Tratamento de Água). Quais são as etapas básicas e essenciais para o tratamento de água para o abastecimento domiciliar de uma cidade?",
  alternativas: [
    "Decantação, Coagulação, Filtração e Desinfecção.",
    "Coagulação, Decantação, Filtração e Desinfecção.",
    "Coagulação, Filtração, Decantação e Desinfecção.",
    "Decantação, Coagulação, Desinfecção e Filtração."
  ], correta: "B" }

  ]
});

})();
