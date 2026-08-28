/* =========================================================
   SeMAE São José do Rio Preto — Concurso Público 01/2015
   114 - Gestor de Saneamento - Engenharia Civil
   Concursos FAPERP · 60 questões, 4 alternativas
   ========================================================= */

(function () {

const TIRINHA =
"A questão original vem acompanhada de uma tirinha da Mafalda (Quino).\n\n" +
"No primeiro quadro, um locutor de TV anuncia em letras garrafais: “...TROQUE! TROQUE PELA ULTRAMODERNA LINHA DE COZINHAS, LAVADORAS, GELADEIRAS, EXAUSTORES, SECADORAS, CONDICIONADORES DE AR, TELEVISORES, LIQUIDIFICADORES, ESPREMEDORES, ENCERADEIRAS, ASPIRADORES DE PÓ, RADIOCASSETES...”\n\n" +
"No segundo quadro a locução continua (“...GRAVAD..”) até que Mafalda desliga o aparelho: “CLIC!”\n\n" +
"No terceiro quadro, Mafalda aparece sentada, cabisbaixa, e pergunta: “BOM, E QUANDO A SOCIEDADE DE CONSUMO CHEGAR A SACIEDADE DE CONSUMO, HEIN?” — com a palavra “HEIN” em letras bem maiores que o restante.";

const TEXTO_RAIOSX =
"NASA ENCONTRA SINAIS MISTERIOSOS DE RAIOS X EM OUTRA GALÁXIA\n" +
"Lucas Batista, 27 de junho de 2014\n\n" +
"Pesquisadores detectaram algo misterioso no aglomerado da galáxia de Perseu a 240 milhões de anos-luz da Terra. Os cientistas acham que os raios X podem ter sido produzidos pela decomposição de neutrinos estéreis, um tipo de partícula que tem sido proposto como candidato para a matéria escura. A descoberta foi feita pelo observatório Chandra, um telescópio espacial enviado pela Nasa em 1999 com o objetivo de observar luz visível, raios gama, raios X e infravermelho.\n\n" +
"Mas o que será? Sinais obscuros no espaço, coisas desconhecidas vistas através de telescópios enviados ao espaço. Talvez outro tipo de vida? ETs?\n\n" +
"Os astrônomos envolvidos no estudo acreditam que a matéria escura pode constituir 85% da matéria do Universo, mas ela não emite nem absorve luz, como fazem os nossos conhecidos prótons, nêutrons e elétrons. Devido a isso, os cientistas precisam usar métodos indiretos para procurar pistas sobre a matéria escura.\n\n" +
"“Nós sabemos que a explicação para a matéria escura é apenas uma hipótese, mas a recompensa será enorme se estivermos certos. Então nós vamos continuar testando essa interpretação e ver onde isso nos levará”, explica o líder do estudo, Esra Bulbul, do Centro de Astrofísica Harvard-Smithsonian.\n\n" +
"Os astrônomos dizem que mesmo que a matéria seja composta de neutrino estéril, há uma possibilidade de não ser inteiramente feita disso. Uma fonte de incerteza é que a detecção desta linha de emissão está interferindo na sensibilidade do observatório.\n\n" +
"“Nosso próximo passo é combinar dados de Chandra e de um outro satélite de raios X, o JAXA Suzaku. Unindo os dois, conseguiremos enxergar um grande número de aglomerados de galáxias. Daí veremos se encontramos o mesmo sinal de raios X”, disse o co-autor Adam Foster, também do CFA. “Há um monte de ideias por aí sobre o que estes dados poderiam representar. Com um novo tipo de detector de raios X, seremos capazes de medir a linha com mais precisão”, completa Foster.";

const TEXTO_NEMO =
"SABIA QUE O PAI DE NEMO DEVERIA TER VIRADO FÊMEA?\n" +
"Tatiana Pronin - Do UOL, em São Paulo - 15/07/2014\n\n" +
"“Procurando Nemo” pode ser uma bela história para crianças e adultos, mas não queira usar a animação nas aulas de zoologia. Isso porque o enredo traz algumas inverdades do ponto de vista da ciência. E não é só porque as criaturas marinhas falam.\n\n" +
"Se, na vida real, uma família de peixes-palhaço fosse atacada por um predador que devora a matriarca, como narra o filme, o destino mais provável do pai de Nemo seria virar mulher. E o pior (não conte essa parte às crianças): é bem possível que essa nova fêmea se acasalasse com o filhote.\n\n" +
"Como contam alguns sites e vídeos na internet destinados a ensinar (ou chocar) a criançada, os peixes-palhaço são hermafroditas, ou seja, nascem com tecido testicular e ovariano. O que determina qual sexo irá prevalecer são estímulos sociais e demográficos, como, por exemplo, o número de machos e fêmeas no cardume, assim como a idade [...]\n\n" +
"OUTROS HERMAFRODITAS\n\n" +
"Todas as espécies de peixes-palhaço são hermafroditas protândricos, ou seja, costumam nascer machos e, mais tarde, transformam-se em fêmeas. É por isso que os biólogos reconhecem com facilidade as “moças” do cardume: elas são maiores.\n\n" +
"Há vários outros peixes hermafroditas, como comenta a especialista da USP: garoupas, robalos, meros e mussuns (sim, foi o peixe que deu origem ao apelido do Trapalhão e não o contrário).\n\n" +
"Também mudam de sexo animais como certos camarões, as minhocas e alguns caracóis (estes dois últimos são hermafroditas simultâneos). Essa estratégia para manter o equilíbrio entre machos e fêmeas em uma população e garantir a perpetuação da espécie também é encontrada em algumas plantas [...]";

const ART7 =
"Leia o texto do art. 7º da Lei Complementar n.º 266, de 06 de outubro de 2008, com a redação alterada pela Lei Complementar n.º 375, de 02 de janeiro de 2013.\n\n" +
"“Art. 7º - Fica instituída a Gratificação por Desempenho de Atividade Especial a ser concedida ao servidor titular de cargo efetivo ou emprego público designado para o exercício de uma atividade especial, respeitado o limite constitucional para recebimento de vencimentos.”";

/* alternativas da questão 19 são gráficos */
function graf(letra) {
  return '<img src="img/prova03-q19' + letra + '.png" alt="Gráfico da alternativa ' + letra.toUpperCase() + '">';
}

const CEL = 'style="border:1px solid #B4C0C8;padding:8px 10px;vertical-align:top"';

const TABELA_LICITACAO =
'<p>Relacione as colunas para assinalar a alternativa correta.</p>' +
'<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:14.5px"><thead><tr>' +
'<th ' + CEL + '>COLUNA 1</th><th ' + CEL + '>COLUNA 2</th></tr></thead><tbody>' +
'<tr><td ' + CEL + '><b>1</b> - Concorrência</td><td ' + CEL + '><b>A</b> - Modalidade de licitação entre quaisquer interessados que, na fase inicial de habilitação preliminar, comprovem possuir os requisitos mínimos de qualificação exigidos no edital para execução de seu objeto.</td></tr>' +
'<tr><td ' + CEL + '><b>2</b> - Tomada de preços</td><td ' + CEL + '><b>B</b> - Modalidade de licitação entre quaisquer interessados para escolha de trabalho técnico, científico ou artístico, mediante a instituição de prêmios ou remuneração aos vencedores, conforme critérios constantes de edital publicado na imprensa oficial com antecedência mínima de 45 (quarenta e cinco) dias.</td></tr>' +
'<tr><td ' + CEL + '><b>3</b> - Convite</td><td ' + CEL + '><b>C</b> - Modalidade de licitação entre quaisquer interessados para a venda de bens móveis inservíveis para a administração ou de produtos legalmente apreendidos ou penhorados, ou para a alienação de bens imóveis prevista no art. 19, a quem oferecer o maior lance, igual ou superior ao valor da avaliação.</td></tr>' +
'<tr><td ' + CEL + '><b>4</b> - Concurso</td><td ' + CEL + '><b>D</b> - Modalidade de licitação entre interessados devidamente cadastrados ou que atenderem a todas as condições exigidas para cadastramento até o terceiro dia anterior à data do recebimento das propostas, observada a necessária qualificação.</td></tr>' +
'<tr><td ' + CEL + '><b>5</b> - Leilão</td><td ' + CEL + '><b>E</b> - Modalidade de licitação entre interessados do ramo pertinente ao seu objeto, cadastrados ou não, escolhidos e convidados em número mínimo de 3 (três) pela unidade administrativa, a qual afixará, em local apropriado, cópia do instrumento convocatório e o estenderá aos demais cadastrados na correspondente especialidade que manifestarem seu interesse com antecedência de até 24 (vinte e quatro) horas da apresentação das propostas.</td></tr>' +
'</tbody></table>' +
'<p>A correlação correta entre as colunas está disposta na alternativa:</p>';

registrarProva({
  id: "semae-2015-gestor-saneamento-engcivil",
  titulo: "SeMAE Rio Preto — Gestor de Saneamento (Eng. Civil)",
  subtitulo: "FAPERP · 2015 · concurso 01/2015",
  questoes: [

/* ---------- LÍNGUA PORTUGUESA (1 a 10) ---------- */

{ id: "1", apoio: TIRINHA,
  enunciado: "O anunciante da TV faz uso do verbo “trocar” no imperativo. Esse modo é bastante comum quando se pretende influenciar as ações de um indivíduo.\n\nO imperativo é o modo verbal pelo qual se expressa uma ordem, pedido, orientação ou conselho.\n\nPode-se direcionar o discurso, no caso do imperativo singular, à segunda ou à terceira pessoas. Assinale a alternativa que contém a adequada flexão do verbo “trocar” para a segunda pessoa do singular (imperativo afirmativo e imperativo negativo).",
  alternativas: ["Troque/Não troque.", "Trocai/Não Troqueis.", "Troquem/Não troquem.", "Troca/Não troques."],
  correta: "D" },

{ id: "2", apoio: TIRINHA,
  enunciado: "Com base no que se pode depreender da leitura da tirinha, assinale a alternativa incorreta.",
  alternativas: [
    "Os substantivos flexionados no plural dão a impressão de que mais de um elemento dos mesmos deve ser adquirido pelos consumidores.",
    "Mafalda reflete, com certo desânimo, a respeito da situação econômica que se estabeleceria a partir da queda do consumo.",
    "Ao utilizar letras maiores na grafia da palavra “hein”, o autor da tirinha propõe ao leitor que reflita a respeito do mesmo problema mencionado por Mafalda.",
    "O fato de desligar a televisão evidencia a postura revolucionária da personagem, que se ofende com a demora à volta do programa a que assistia."
  ], correta: "D" },

{ id: "3", apoio: TIRINHA,
  enunciado: "Considerando ainda a temática dos eletrodomésticos, observe a grafia de “micro-ondas”, palavra modificada pelo Acordo Ortográfico que passará a ser vigente em 2016.\n\nMICROONDAS → MICRO-ONDAS\n\nAs palavras que constituem as alternativas, diferentemente de “micro-ondas”, entretanto, não estão na lista das que adotarão novo padrão de escrita devido ao Acordo. Analise-as e assinale a alternativa em que há equívoco em relação ao emprego ou não do hífen.",
  alternativas: ["Contra-atacar.", "Inter-regional.", "Anti-americano.", "Socioeconômico."],
  correta: "C" },

{ id: "4", apoio: TEXTO_RAIOSX,
  enunciado: "O texto tem como início a frase “Pesquisadores detectaram algo misterioso no aglomerado da galáxia de Perseu a 240 milhões de anos-luz da Terra”. Assinale a alternativa correta em relação ao que se trata o “algo misterioso” mencionado.",
  alternativas: [
    "Presença de matéria escura, detentora de Raios X, a respeito da qual os cientistas ainda não tem explicação específica.",
    "Presença de vida extraterrestre em nova galáxia, intitulada Perseu.",
    "A existência de um novo medidor de raios X, já utilizado em galáxias antes desconhecidas.",
    "A existência de vida microscópica de comportamento desconhecido."
  ], correta: "A" },

{ id: "5", apoio: TEXTO_RAIOSX,
  enunciado: "Observe o emprego da vírgula nas frases abaixo.\n\n“Nós sabemos que a explicação para a matéria escura é apenas uma hipótese, mas a recompensa será enorme se estivermos certos.”\n\n“Unindo os dois, conseguiremos enxergar um grande número de aglomerados de galáxias.”\n\nAssinale a alternativa que adequadamente justifica o emprego desse sinal de pontuação em cada um dos trechos respectivamente.",
  alternativas: [
    "Introdução de oração subordinada substantiva apositiva e isolamento de oração coordenada sindética final.",
    "Introdução de oração coordenada sindética adversativa e separação da subordinada adverbial condicional (reduzida de gerúndio) da oração principal.",
    "Isolamento de coordenada sindética aditiva e separação de orações coordenadas assindéticas.",
    "Introdução de oração coordenada sindética conclusiva e separação da oração subordinada adverbial conclusiva da oração principal."
  ], correta: "B" },

{ id: "6", apoio: TEXTO_RAIOSX,
  enunciado: "Observe o emprego do verbo SER nos trechos abaixo.\n\n[...] explicação para a matéria escura é apenas uma hipótese\n\n[...] a recompensa será enorme se estivermos certos\n\nOs astrônomos dizem que mesmo que a matéria seja composta de neutrino estéril, há uma possibilidade de não ser inteiramente feita disso.\n\nAssinale a alternativa que contém o tempo e o modo nos quais, acima, está empregado o verbo SER, respectivamente.",
  alternativas: [
    "Futuro do pretérito do indicativo, futuro do presente do indicativo, futuro do subjuntivo.",
    "Presente do subjuntivo, presente do imperativo, presente do indicativo.",
    "Presente do indicativo, futuro do presente do indicativo, presente do subjuntivo.",
    "Futuro do presente do indicativo, futuro do pretérito do indicativo, pretérito do subjuntivo."
  ], correta: "C" },

{ id: "7", apoio: TEXTO_NEMO,
  enunciado: "Com base na leitura do texto, assinale a alternativa incorreta.",
  alternativas: [
    "Os peixes-palhaço são hermafroditas, ou seja, nascem com tecido testicular e ovariano, o que determina qual sexo irá prevalecer são estímulos sociais e demográficos.",
    "Garoupas, robalos, meros e mussuns também são peixes hermafroditas.",
    "Minhocas e alguns caracóis são espécies hermafroditas simultâneas.",
    "Todas as espécies de peixes são hermafroditas protândricos."
  ], correta: "D" },

{ id: "8", apoio: TEXTO_NEMO,
  enunciado: "Releia o trecho inicial do texto:\n\n“Procurando Nemo” pode ser uma bela história para crianças e adultos, mas não queira usar a animação nas aulas de zoologia. Isso porque o enredo traz algumas inverdades do ponto de vista da ciência. E não é só porque as criaturas marinhas falam.\n\nObserve o emprego do pronome em destaque (Isso) e assinale a alternativa que contém a correta análise a respeito do mesmo.",
  alternativas: [
    "Trata-se de pronome demonstrativo, utilizado para referências textuais já apresentadas antes.",
    "Trata-se de pronome apresentativo, utilizado para apresentar ideias ainda não mencionadas.",
    "Trata-se de pronome demonstrativo, utilizado para referências textuais a serem apresentadas.",
    "Trata-se de pronome de tratamento, utilizado para referências a objetos que se aproximam do falante."
  ], correta: "A" },

{ id: "9", apoio: TEXTO_NEMO,
  enunciado: "Observe o emprego do acento grave no trecho abaixo, retirado do texto.\n\nE o pior (não conte essa parte às crianças)\n\nAnalise as alternativas e assinale a incorreta em relação à crase.",
  alternativas: [
    "A palavra crase é de origem grega e significa “fusão”, “mistura”.",
    "Em Língua Portuguesa, é existente a crase da preposição “a” com o artigo feminino “a” (s), com o pronome demonstrativo “a” (s), com o “a” inicial dos pronomes aquele (s), aquela (s), aquilo e com o “a” do relativo a qual (as quais).",
    "É fundamental também, para o entendimento da crase, dominar a regência dos verbos e nomes que exigem a preposição “a”.",
    "O uso apropriado do acento agudo depende da compreensão da fusão das duas vogais (a+a)."
  ], correta: "D" },

{ id: "10", apoio: TEXTO_NEMO,
  enunciado: "Releia o trecho inicial do texto “Sabia que o pai de Nemo deveria ter virado fêmea?”, note que o nome do filme abordado está escrito entre aspas. Considere as opções de emprego desse recurso de pontuação e assinale a alternativa incorreta a esse respeito.",
  alternativas: [
    "Quando há palavras ou expressões populares, gírias, neologismos, estrangeirismos ou arcaísmos.",
    "Quando se deseja levantar questionamentos.",
    "Quando se faz citações.",
    "Quando se quer assinalar palavras ou expressões irônicas."
  ], correta: "B" },

/* ---------- RACIOCÍNIO LÓGICO / MATEMÁTICA (11 a 20) ---------- */

{ id: "11",
  enunciado: "No cartaz de uma frutaria, que trabalha com frutas selecionadas, está escrito que dez limões custam tanto quanto oito laranjas, e que dezesseis laranjas custam tanto quanto doze caquis. Pelo preço de cinco limões, o número de caquis que se pode comprar nessa frutaria é igual a:",
  alternativas: ["3.", "4.", "5.", "6."],
  correta: "A" },

{ id: "12",
  enunciado: "O salário de um vendedor de uma loja de produtos eletroeletrônicos é dado por s(x) = 450 + 0,03x, em que x é o total de vendas, em reais, durante um mês. O salário desse vendedor será de R$ 2.550,00 se, ao longo de um mês, ele vender exatamente:",
  alternativas: ["R$ 57.500,00.", "R$ 59.000,00.", "R$ 68.000,00.", "R$ 70.000,00."],
  correta: "D" },

{ id: "13",
  enunciado: "Dois jovens trabalhadores, Carlos e Daniel, receberam salários iguais. Ao final do mês, Carlos havia gasto 90% do seu salário, e Daniel gastou apenas 75% do seu salário. Sabendo que as quantias economizadas por eles somaram R$ 336,00, pode-se concluir que o salário de cada um dos rapazes é igual a:",
  alternativas: ["R$ 780,00.", "R$ 890,00.", "R$ 960,00.", "R$ 1.120,00."],
  correta: "C" },

{ id: "14",
  enunciado: "O preço da comida por quilo, do tipo self service, foi pesquisado em 200 restaurantes que oferecem essa opção de alimentação em uma determinada cidade. Os preços encontrados estão destacados no gráfico abaixo e, a estes, está associada a porcentagem daqueles 200 restaurantes que os aplica. Desse modo, é correto afirmar que o preço médio da comida por quilo nessa cidade é de:",
  imagem: "img/prova03-q14.png",
  alternativas: ["R$ 38,00.", "R$ 39,50.", "R$ 41,00.", "R$ 42,50."],
  correta: "B" },

{ id: "15",
  enunciado: "A área destinada ao palco, em um salão de festas cujo formato é o de um trapézio, corresponde a uma semicircunferência. Desse modo, é correto afirmar que a área destinada ao público corresponde a: (adote π = 3)",
  imagem: "img/prova03-q15.png",
  alternativas: ["700 m².", "708 m².", "726 m².", "740 m²."],
  correta: "C" },

{ id: "16",
  enunciado: "Sobre a figura a seguir, sabe-se que EC = CB = BA = AD e que a medida do ângulo BÂD é 130°.\n\nEntão a medida do ângulo EĈB é igual a:",
  imagem: "img/prova03-q16.png",
  alternativas: ["20°.", "30°.", "40°.", "50°."],
  correta: "B" },

{ id: "17",
  enunciado: "O número de anagramas da palavra SEMAE é igual a:",
  alternativas: ["60.", "80.", "90.", "120."],
  correta: "A" },

{ id: "18",
  enunciado: "A sequência (2, 2³, 2⁵, 2⁷, …) é uma progressão geométrica. Assim, é correto afirmar que o milésimo termo dessa sequência é igual a:",
  alternativas: ["2²⁰⁰⁷.", "2²⁰⁰⁰.", "2¹⁹⁹⁹.", "2¹⁹⁰⁰."],
  correta: "C" },

{ id: "19", html: true,
  enunciado: "<p>Assinale a alternativa que representa, corretamente, a solução do sistema de inequações:</p>" +
             "<p style=\"font-family:var(--mono);font-size:15px;line-height:1.8\">x + y ≤ 5<br>x ≥ 0<br>0 ≤ y ≤ 3</p>",
  alternativas: [graf("a"), graf("b"), graf("c"), graf("d")],
  correta: "A" },

{ id: "20",
  enunciado: "Observe o contêiner e a caixa de papelão apresentados abaixo, com suas respectivas dimensões. A quantidade máxima dessas caixas de papelão que podem ser acomodadas no interior desse contêiner corresponde a:",
  imagem: "img/prova03-q20.png",
  alternativas: ["30.", "34.", "38.", "40."],
  correta: "D" },

/* ---------- CONHECIMENTOS GERAIS E ATUALIDADES (21 a 25) ---------- */

{ id: "21",
  enunciado: "A empresa Janicki Bioenergy, financiada por uma fundação norte-americana dedicada às causas filantrópicas, criou a Janicki Omniprocessor, uma máquina que ao recolher dejetos humanos é capaz de, num processo que dura alguns instantes, produzir água limpa. Considerado pela mídia especializada o homem mais rico do planeta, o bilionário americano, responsável pela fundação, que aparece na foto bebendo uma água que cinco minutos antes era lixo, deverá levar a invenção, inicialmente, para Dakar, no Senegal. O responsável por esta fundação é:",
  alternativas: ["Bill Gates.", "Carlos Slim.", "Stephen Hawking.", "Edward Snowden."],
  correta: "A" },

{ id: "22",
  enunciado: "Sobre a produção da água de reuso considere as afirmações:\n\nI. é obtida através do tratamento avançado dos esgotos gerados pelos imóveis conectados à rede coletora de esgotos.\nII. pode ser utilizada em processos que não requerem água que seja potável, mas sanitariamente segura, como, por exemplo, a limpeza de ruas e praças, a refrigeração de equipamentos, o uso no combate a incêndios, a desobstrução da rede de esgotos, gerando a redução de custos e garantindo o uso racional da água.\nIII. Diversos países desenvolvem ações e tecnologias com vistas a ampliar o reuso de efluentes gerados a partir do tratamento de esgotos para fins industriais.\nIV. é necessário o desenvolvimento de uma tecnologia de ponta, principalmente, no campo da engenharia hidráulica, para o transporte dessa água entre regiões interestaduais.\n\nEstá correto apenas o que se afirma em:",
  alternativas: ["I e II.", "II e III.", "II e IV.", "I, II e III."],
  correta: "D" },

{ id: "23",
  enunciado: "As fontes renováveis de energia que se apresentam como alternativa às fontes tradicionais e não renováveis (petróleo, gás natural, carvão mineral), ainda enfrentam o desafio do desenvolvimento de uma engenharia de produção adequada, que consiga explorar os diferentes tipos de clima e a geografia, próprios de cada país. Observe as afirmações e assinale a única incorreta.",
  alternativas: [
    "A energia proveniente do desnível das marés é uma fonte de energia limpa e renovável. O sistema de produção é semelhante ao de uma usina hidrelétrica. Alguns países utilizam esse tipo de energia, mas a necessidade de uma altura mínima da maré (por volta de sete metros) e a relação custo-benefício torna inviável a construção desses reservatórios.",
    "A energia solar é uma fonte limpa e renovável. Comumente podemos considerar a energia solar térmica (aquecimento da água) e a energia fotovoltaica (produção de energia elétrica). No entanto, o custo acentuado da tecnologia para a produção, principalmente das placas fotovoltaicas e a questão da variação climática, tornam, por enquanto, inviável a produção em larga escala.",
    "A energia eólica, gerada pelo vento, é uma fonte inesgotável que não emite gases poluentes, não gera resíduos, não necessita de abastecimento de combustível e requer escassa manutenção. No entanto, fatores como a intermitência do vento, o choque das aves com as pás e o impacto sonoro, são algumas das principais desvantagens desse meio de produção de energia.",
    "O etanol é uma fonte de energia menos poluente que a gasolina e por ser um produto agrícola, pode ser produzido em qualquer lugar do mundo pois não é gerado apenas da cana-de-açúcar. Tem um poder calorífico maior que o da gasolina, gerando um consumo menor. Atualmente necessita de pequenas extensões de terras para a sua produção."
  ], correta: "D" },

{ id: "24",
  enunciado: "Sabe-se que no processo de separação da água e do sal, conhecido como destilação simples, a água sofre mudanças de estado. Com base na figura, afirma-se que nesse processo a água sofre:\n\nI. passagem do estado sólido para o estado líquido.\nII. passagem do estado líquido para o estado gasoso.\nIII. passagem do estado gasoso para o estado líquido.\nIV. passagem do estado líquido para o estado sólido.\n\nEstá correto apenas o que se afirma em",
  imagem: "img/prova03-q24.png",
  alternativas: ["I e II.", "II e III.", "I e III.", "III e IV."],
  correta: "B" },

{ id: "25",
  enunciado: "Em relação à economia de água e a consequente garantia de fornecimento no futuro, algumas ações, através dos órgãos competentes, se mostram viáveis, exceto:",
  alternativas: [
    "intensificar as campanhas de conscientização da população para o controle da demanda.",
    "melhorar as condições da rede de distribuição de água, avariada e obsoleta, criando um programa intensivo de redução de perdas e aumento da eficiência.",
    "incrementar o processo de dessalinização da água do mar, criando uma rede de distribuição que abasteça a agricultura, a indústria e os lares.",
    "incentivar a substituição do sistema de descarga com válvula (que gasta em média 12 litros por acionamento), pelo sistema de caixa acoplada (que gasta 6 litros por acionamento); limitar a vazão da água através da instalação das chamadas torneiras econômicas."
  ], correta: "C" },

/* ---------- NOÇÕES DE INFORMÁTICA (26 a 30) ---------- */

{ id: "26",
  enunciado: "Com o grande número de arquivos produzidos pelos usuários de computadores, armazenar todos esses dados tornou-se com segurança uma necessidade. No entanto, mais do que armazená-los, é preciso gerenciá-los com segurança, permitindo que alterações possam ser feitas e que esses arquivos possam ser acessados a qualquer tempo, sem grandes problemas. Para isso o Microsoft Windows oferece uma ferramenta muito poderosa de gerenciamento, que é o __________________. Essa ferramenta, além de consumir poucos recursos do computador, é bastante simples para se operar.\n\nDessa forma, assinale a alternativa que completa corretamente a lacuna do texto acima.",
  alternativas: ["Internet explorer.", "Navegador web.", "Painel de controle.", "Windows explorer."],
  correta: "D" },

{ id: "27",
  enunciado: "Todas as opções de funcionalidades, em primeiro nível, que o Microsoft Word 2007 oferece, possuem sub-funcionalidades e assim forma-se uma cadeia de funções. O Layout de Página é uma opção de funcionalidade em primeiro nível e é composta por:",
  alternativas: [
    "temas, ilustrações, links, legendas, índice e sumário.",
    "configurar página, parágrafo, iniciar mala direta, fonte e estilo.",
    "temas, configurar página, plano de fundo de página, parágrafo e organizar.",
    "plano de fundo de página, parágrafo, links, legendas e sumário."
  ], correta: "C" },

{ id: "28",
  enunciado: "Para os usuários que não são adeptos do uso do web mail, alguns fabricantes de software oferecem ferramentas para que esses usuários possam gerenciar as suas contas de correio eletrônico. Alguns exemplos dessas ferramentas são: Outlook Express, Thunderbird, Eudora, entre outras. Essas ferramentas são comumente chamadas de:",
  alternativas: [
    "agentes de mensagem de usuário.",
    "navegadores web.",
    "interpretadores de mensagens.",
    "buscadores de mensagens."
  ], correta: "A" },

{ id: "29",
  enunciado: "O Microsoft Excel 2007 tem se apresentado como uma ferramenta muito eficiente para a tabulação de dados. Essa tabulação pode servir para a realização de um controle de dados de qualquer setor, como: financeiro, administrativo, recursos humanos, dentre outros. Os dados são inseridos em uma planilha do Microsoft Excel e esta pode ser alterada constantemente. Dois recursos que contribuem para a alteração de uma planilha são: Inserir Células e Excluir Células.\n\nSobre esses dois recursos, assinale a alternativa correta.",
  alternativas: [
    "Inserir Células: por padrão, insere a nova célula abaixo do marcador de célula atual. Excluir Célula: por padrão, exclui a célula que se encontra no marcador de célula atual.",
    "Inserir Células: por padrão, insere a nova célula abaixo do marcador de célula atual. Excluir Célula: por padrão, exclui a célula que se encontra acima do marcador de célula atual.",
    "Inserir Células: por padrão, insere a nova célula acima do marcador de célula atual. Excluir Célula: por padrão, exclui a célula que se encontra no marcador de célula atual.",
    "Inserir Células: por padrão, insere a nova célula sobre marcador de célula atual. Excluir Célula: por padrão, exclui a célula que se encontra abaixo do marcador de célula atual."
  ], correta: "C" },

{ id: "30",
  enunciado: "O acesso seguro a websites críticos, como sistemas bancários e sistemas de compras on-line, deve ser provido pela empresa detentora desse website. É de obrigação do usuário estar em constante atenção sobre essas condições de acesso, de modo a verificar se o mínimo de cuidado foi estabelecido. A partir do momento em que não se tem confiança em determinado website, este deve ser evitado. Posto isso, assinale a alternativa que contemple dois itens importantes para garantir o acesso seguro.",
  alternativas: [
    "Autenticação criptografada apenas de usuário e certificado de segurança sem data.",
    "Autenticação criptografada apenas de senha e certificado de segurança.",
    "Autenticação criptografada de usuário e senha e certificado de segurança atualizado.",
    "Autenticação de usuário e senha feita em texto plano e certificado de segurança atualizado."
  ], correta: "C" },

/* ---------- LEGISLAÇÃO E PRINCÍPIOS DA ADMINISTRAÇÃO PÚBLICA (31 a 40) ---------- */

{ id: "31", apoio: ART7,
  enunciado: "Assinale a alternativa que não contempla uma função cujo exercício é considerado, de acordo com a legislação vigente, atividade especial.",
  alternativas: [
    "Chefe de Divisão.",
    "Pregoeiro.",
    "Presidente de Comissão nomeada para Processo Administrativo Disciplinar ou Sindicância.",
    "Tesoureiro."
  ], correta: "A" },

{ id: "32",
  enunciado: "Considerando a Seção VI - Das vedações, acumulações e substituições, da Lei Complementar n.º 266/2008, assinale a alternativa verdadeira.",
  alternativas: [
    "Ao ocupante de cargo em comissão de livre nomeação é permitida a acumulação de Gratificação de Função e Gratificação por Atividade Especial.",
    "Ao servidor designado para o desempenho de atividade especial é vedado o pagamento de horas extras.",
    "No caso de afastamento legal, superior a 5 (cinco) dias, de exercente de função gratificada, deve-se substituí-lo por ocupante de cargo em comissão designado para tal fim, sendo que o substituto não fará jus a qualquer remuneração adicional.",
    "O servidor designado para substituir exercente de atividade especial na hipótese de impedimento legal, superior a 10 (dez) dias, fará jus a remuneração integral do substituído em relação ao tempo de duração da substituição."
  ], correta: "B" },

{ id: "33",
  enunciado: "Sobre o Adicional de Exercício das Funções de Saneamento assinale a alternativa verdadeira, de acordo com a Lei Complementar n.º 266/2008.",
  alternativas: [
    "É concedido apenas aos servidores efetivos em cargos de natureza operacional.",
    "É concedido a todos os servidores do SeMAE, no percentual de 15% (quinze por cento), incidente sobre o valor do vencimento base.",
    "Não pode ser computado para o cálculo de nenhuma outra vantagem e não integra a base de cálculo de nenhum outro adicional.",
    "É incorporado, para efeito de aposentadoria, na proporção de 1/20 (hum, vinte avos) por mês de contribuição."
  ], correta: "C" },

{ id: "34",
  enunciado: "Analise os itens a seguir para assinalar a alternativa correta.\n\nI - Recursos provenientes do produto financeiro obtido através das seguintes remunerações decorrentes diretamente dos serviços de água e esgoto: tarifas de água e esgoto, instalações, reparos, aferições, aluguéis e conservação de hidrômetros, serviços referentes à ligações de água e esgoto, prolongamento da rede por interesse de terceiros e demais serviços prestados, inclusive em sistemas projetados, em construção, construídos e/ou operados por terceiros, bem como preços públicos remuneratórios de serviços conexos, infrações multas pecuniárias e juros.\nII - Recursos provenientes das tarifas de contribuição que incidirem sobre terrenos beneficiados com os serviços de água e esgoto.\nIII - Recursos provenientes dos auxílios, subvenções e créditos especiais ou adicionais que lhe forem concedidos, inclusive para obras novas, pelos governos federal, estadual e municipal e outros organismos nacionais ou estrangeiros.\nIV - Recursos provenientes do produto dos juros sobre depósitos bancários e outras rendas patrimoniais.\nV - Recursos provenientes do produto da venda de materiais inservíveis e da alienação de bens patrimoniais que se tornem desnecessários a seus serviços.\nVI - Recursos provenientes do produto de cauções de depósitos que reverterem aos seus cofres por inadimplemento contratual.\nVII - Recursos provenientes da tarifa relativa ao CMS - Custo de Manutenção dos Serviços, referente à leitura dos hidrômetros, emissão, entrega e recebimento de contas em manutenção e depreciação do sistema.\n\nNos termos da Lei Complementar n.º 130/01 e suas alterações, a receita do SEMAE provirá, dentre outros, dos recursos contidos nos itens:",
  alternativas: [
    "I, II, III, IV, V, VI e VII.",
    "I, II, III, IV, V e VI, apenas.",
    "I, II, III, V e VII, apenas.",
    "I e VII apenas."
  ], correta: "A" },

{ id: "35",
  enunciado: "O artigo 304-A da Lei Complementar n.º 05/90, acrescido pela Lei Complementar n.º 297/2009, estabelece a concessão de horário especial, independentemente de compensação de horário e sem redução de remuneração, respeitado o mínimo legal de 6h (seis horas) de trabalho, ao servidor:",
  alternativas: [
    "portador de deficiência severa, devidamente comprovada por junta médica.",
    "idoso, nos termos do Estatuto do Idoso.",
    "assíduo, sendo assim considerado aqueles que possuam mais de 10 (dez) anos de efetivo exercício sem registro de faltas.",
    "comissionado ocupante de cargo de chefia de divisão."
  ], correta: "A" },

{ id: "36",
  enunciado: "O artigo 114 da Lei Complementar n.º 05/90 estabelece que poderá ser concedida licença ao funcionário por motivo de doença em pessoa da família, sendo assim considerado o cônjuge ou companheiro, padrasto ou madrasta, ascendente, descendente, enteado e colateral consanguíneo ou afim até o segundo grau civil. Assinale a alternativa que contempla corretamente as informações sobre o prazo da referida licença.",
  alternativas: [
    "A licença será concedida sem prejuízo da remuneração do cargo efetivo, por até 7 (sete) dias, prorrogáveis por idêntico período, mediante parecer da junta médica e, excedendo este prazo, sem remuneração.",
    "A licença será concedida sem prejuízo da remuneração do cargo efetivo, por até 10 (dez) dias, prorrogáveis por idêntico período, mediante parecer da junta médica e, excedendo este prazo, sem remuneração.",
    "A licença será concedida sem prejuízo da remuneração do cargo efetivo, por até 15 (quinze) dias, prorrogáveis por idêntico período, mediante parecer da junta médica e, excedendo este prazo, sem remuneração.",
    "A licença será concedida sem prejuízo da remuneração do cargo efetivo, por até 30 (trinta) dias, prorrogáveis por idêntico período, mediante parecer da junta médica e, excedendo este prazo, sem remuneração."
  ], correta: "D" },

{ id: "37",
  enunciado: "O artigo 5º da Constituição Federal de 1988 autoriza o sigilo de atos administrativos em situações que ofereçam risco para a segurança do Estado, da sociedade ou para a intimidade de envolvidos. Essas três situações são exceções ao princípio:",
  alternativas: ["da moralidade.", "da eficiência.", "da impessoalidade.", "da publicidade."],
  correta: "D" },

{ id: "38",
  enunciado: "Assinale a alternativa verdadeira acerca dos princípios constitucionais de Direito Administrativo.",
  alternativas: [
    "No âmbito administrativo, a tomada de decisões pelo Poder Público pressupõe a instauração de processo com garantia de contraditório e ampla defesa. Tal pressuposto decorre da observância do princípio do duplo grau de jurisdição.",
    "O atendimento pela administração pública ao administrado em consideração ao seu prestígio social é decorrência da observância do princípio da impessoalidade.",
    "O administrador público que otimiza suas atividades, alcançando os resultados desejados, evitando assim que a administração pública seja ineficaz na gestão do aparelho público, observa o princípio da eficiência.",
    "A reserva de vagas em concursos públicos para pessoas com deficiência fere os princípios da impessoalidade e da competitividade."
  ], correta: "C" },

{ id: "39",
  enunciado: "Considerando os princípios fundamentais da administração pública é correto afirmar que: a divulgação de atos do Poder Público, o pagamento por precatório e a escolha da melhor proposta em sede de licitação são atos administrativos que observam, respectivamente, aos princípios:",
  alternativas: [
    "da publicidade, da impessoalidade e da eficiência.",
    "da publicidade, da legalidade e da moralidade.",
    "da publicidade, da moralidade e da eficiência.",
    "da publicidade, moralidade e da legalidade."
  ], correta: "A" },

{ id: "40",
  enunciado: "Sobre o princípio da legalidade, é correto afirmar que:",
  alternativas: [
    "trata-se de um princípio infraconstitucional.",
    "visa dar transparência aos atos da administração pública e contribuir para a concretização do princípio da moralidade administrativa.",
    "estabelece um dever de imparcialidade na defesa do interesse público, impedindo discriminações e privilégios indevidamente dispensados a particulares no exercício da função pública.",
    "a administração pública só pode praticar condutas autorizadas em lei."
  ], correta: "D" },

/* ---------- CONHECIMENTOS ESPECÍFICOS (41 a 60) ---------- */

{ id: "41",
  enunciado: "A qualidade da água depende muito de onde é coletada. Em qual das áreas de coleta de chuva seguintes a água é considerada potável, desde que seja purificada?",
  alternativas: [
    "Telhados não frequentados por pessoas ou animais.",
    "Telhados frequentados por pessoas ou animais.",
    "Pisos e estacionamentos.",
    "Estradas."
  ], correta: "A" },

{ id: "42",
  enunciado: "Qual tipo de escoamento representa a maior preocupação ao projetar estruturas hidráulicas porque representa o maior volume de água que a estrutura deve conduzir?",
  alternativas: [
    "Escoamento do subsolo.",
    "Escoamento do lençol freático.",
    "Escoamento superficial.",
    "Escoamento por evaporação."
  ], correta: "C" },

{ id: "43",
  enunciado: "É comum classificar as instalações de tratamento de esgoto em função do grau de redução dos sólidos em suspensão e da chamada demanda bioquímica de oxigênio proveniente da eficiência de uma ou mais unidades de tratamento em: preliminar, primário, secundário e avançado. A filtração biológica faz parte do tipo de tratamento:",
  alternativas: ["preliminar.", "avançado.", "primário.", "secundário."],
  correta: "D" },

{ id: "44",
  enunciado: "A partir de uma folha de carta topográfica, obtiveram-se os seguintes pontos referentes a duas cidades vizinhas:\n\nC1: E = 669 km; N = 7.697 km.\nC2: E = 709 km; N = 7.667 km.\n\nA distância C1C2, quando medida na folha, é 1 m. Qual é a escala da carta topográfica?",
  alternativas: ["1 : 25.000.", "1 : 50.000.", "1 : 75.000.", "1 : 100.000."],
  correta: "B" },

{ id: "45",
  enunciado: "Os motores trifásicos, quando comparados com os motores monofásicos de mesma potência e velocidade, apresentam várias vantagens. Assinale a alternativa que não representa uma característica de motores trifásicos.",
  alternativas: [
    "Precisam de um dispositivo que os auxiliem na partida.",
    "São menos volumosos e têm menor peso (em média 4 vezes).",
    "Têm preço menor.",
    "Apresentam rendimento maior e fator de potência mais elevado, o que se reflete em menor consumo (em média 20% menos)."
  ], correta: "A" },

{ id: "46",
  enunciado: "Deve-se compactar um aterro rodoviário cujo tipo de solo é composto de materiais argilosos e siltosos. Assinale a alternativa que melhor escolhe o tipo de rolo compactador.",
  alternativas: [
    "Vibratório com rodas metálicas lisas.",
    "Liso metálico estático, 3 rodas.",
    "Pé de carneiro estático.",
    "Rolo de grade ou malha."
  ], correta: "C" },

{ id: "47",
  enunciado: "BDI, Benefícios e Despesas Indiretas, é a parte do preço de cada serviço, expresso em percentual, que não se designa ao custo direto ou que não está efetivamente identificado como a produção direta do serviço ou produto. Assinale a alternativa que não compõe o BDI.",
  alternativas: [
    "Lucro estimado.",
    "Leis sociais sobre a mão-de-obra utilizada no custo direto.",
    "Despesas financeiras.",
    "Impostos sobre o faturamento."
  ], correta: "B" },

{ id: "48",
  enunciado: "O PCMAT, Programa de Condições e Meio Ambiente de Trabalho na Indústria da Construção, é um documento que deve ser elaborado por profissional legalmente habilitado na área de Segurança do Trabalho. É um documento obrigatório para estabelecimentos com uma quantidade mínima de funcionários. Assinale a alternativa com esta quantidade mínima.",
  alternativas: ["5.", "10.", "15.", "20."],
  correta: "D" },

{ id: "49",
  enunciado: "A sapata de fundação é um elemento de fundação superficial, de concreto armado, do tipo isolada, corrida ou associada, segundo a NBR 6122:2010. A sapata isolada transmite ações de um único pilar. Assinale a alternativa que não é uma característica de sapata isolada.",
  alternativas: [
    "A profundidade mínima nas divisas com terrenos vizinhos não deve ser inferior a 1,5 m, salvo quando a fundação for assente sobre rocha.",
    "A menor dimensão deve ser maior ou igual a 60 cm.",
    "Uma das dimensões é preponderante em relação às demais.",
    "A área comprimida deve ser de no mínimo 2/3 da área total."
  ], correta: "C" },

{ id: "50",
  enunciado: "Segundo a NBR 13752, Perícias de engenharia na construção civil, os requisitos exigidos em uma perícia estão diretamente relacionados com as informações que possam ser extraídas. Estes requisitos, que medem a exatidão do trabalho, são:",
  alternativas: [
    "tanto maiores quanto menor for a subjetividade contida na perícia.",
    "tanto maiores quanto maior for a subjetividade contida na perícia.",
    "tanto menores, não importando o quanto for a subjetividade contida na perícia.",
    "tanto menores quanto menor for a subjetividade contida na perícia."
  ], correta: "A" },

{ id: "51",
  enunciado: "No AutoCAD, assinale a alternativa que corresponde ao comando que faz a união de pontas de duas linhas, polilinhas ou arcos. Também permite fazer a concordância de linhas através de um arco, com raio definido pelo comando.",
  alternativas: ["ARC.", "FILLET.", "PLINE.", "REGEN."],
  correta: "B" },

{ id: "52",
  enunciado: "Segundo a Seção III, art. 21, inciso I da Resolução do Conama 430/11, para o lançamento direto de efluentes oriundos de sistemas de tratamento de esgotos sanitários deverão ser obedecidos algumas condições e padrões específicos. Assinale a alternativa que viola uma dessas condições.",
  alternativas: [
    "pH entre 5 e 9.",
    "Temperatura inferior a 40 ºC.",
    "Soluções solúveis em hexano (óleos e graxas) até 100 mg/L.",
    "Presença de materiais flutuantes."
  ], correta: "D" },

{ id: "53",
  enunciado: "As obras de microdrenagem urbana são definidas pelo sistema de condutos pluviais em nível de loteamento ou de rede primária urbana. Algumas regras básicas costumam ser usadas na prática atual da engenharia, e também são encontradas em leis municipais. Assinale a alternativa que não condiz com essas regras gerais.",
  alternativas: [
    "Há um diâmetro mínimo para a tubulação, geralmente de 300 mm ou 12 polegadas.",
    "Cada trecho de tubulação deve ter diâmetro igual ou superior ao trecho imediatamente a montante.",
    "Ao fazer a transição de um tubo maior para um menor, deve-se igualar os alinhamentos das coroas (geratrizes superiores), não as soleiras.",
    "A tubulação deve possuir um diâmetro e declividade suficientes para transportar a vazão de projeto, não precisando levar em consideração a velocidade de escoamento."
  ], correta: "D" },

{ id: "54",
  enunciado: "A Portaria MS 2914/11 dispõe sobre os procedimentos de controle e de vigilância da qualidade da água para consumo humano e seu padrão de potabilidade. Dentre as competências e responsabilidades apresentadas a seguir, assinale a alternativa que compete apenas às Secretarias dos Municípios.",
  alternativas: [
    "Desenvolver as ações especificadas no VIGIAGUA (Programa Nacional de Vigilância da Qualidade da Água para Consumo Humano), consideradas as peculiaridades no âmbito nacional.",
    "Executar ações estabelecidas no VIGIAGUA (Programa Nacional de Vigilância da Qualidade da Água para Consumo Humano), consideradas as peculiaridades regionais e locais, nos termos da legislação do SUS (Sistema Único de Saúde).",
    "Estabelecer ações especificadas no Programa Nacional de Vigilância da Qualidade da Água para Consumo Humano (VIGIAGUA).",
    "Implementar as diretrizes de vigilância da qualidade da água para consumo humano definidas no âmbito nacional."
  ], correta: "B" },

{ id: "55",
  enunciado: "O sistema de abastecimento de água para fins de consumo humano são constituídos de instalações e equipamentos destinados a fornecer água potável a uma comunidade. Assinale a alternativa que corresponde à parte do sistema constituída de tubulações sem derivações, que liga a captação ao tratamento ou o tratamento ao reservatório de distribuição, e pode ser por gravidade, recalque ou mista.",
  alternativas: ["Manancial.", "Rede de distribuição.", "Adução.", "Aeração."],
  correta: "C" },

{ id: "56",
  enunciado: "Trata-se de um método geoestatístico que segundo Landim (2002) é um processo de estimativa por médias móveis, de valores de variáveis distribuídas no espaço a partir de valores adjacentes, enquanto considerados como interdependentes por uma função denominada variograma. O conceito refere-se ao método:",
  alternativas: ["inverso da distância.", "krigagem.", "médias móveis.", "média simples."],
  correta: "B" },

{ id: "57",
  enunciado: "Nos termos do artigo 10 da Lei n.º 8.666/93 as obras e serviços poderão ser executados na forma de execução direta ou indireta. Assinale a alternativa que não contempla apenas espécies de regimes de execução indireta.",
  alternativas: [
    "empreitada por preço global e empreitada por preço unitário.",
    "tarefa e empreitada integral.",
    "tarefa e empreitada por preço unitário.",
    "empreitada por preço global e empreitada por preço parcial."
  ], correta: "D" },

{ id: "58",
  enunciado: "Nos termos do inciso XIII, do artigo 24, da Lei n.º 8.666/93, na contratação de instituição brasileira incumbida regimental ou estatutariamente da pesquisa, do ensino ou do desenvolvimento institucional, ou de instituição dedicada à recuperação social do preso, desde que a contratada detenha inquestionável reputação ético-profissional e não tenha fins lucrativos, a licitação é:",
  alternativas: ["obrigatória.", "inexigível.", "dispensável.", "facultativa."],
  correta: "C" },

{ id: "59",
  enunciado: "A um servidor no exercício de atividade especial de Membro da Comissão de Licitação do SeMAE é solicitado informação sobre qual modalidade de licitação deve ser utilizada para uma obra de engenharia com valor estimado em R$ 2.000.000,00 (dois milhões de reais). Considerando as disposições do artigo 23 da Lei n.º 8.666/93, assinale a alternativa que contempla a correta modalidade que deve ser indicada pelo servidor.",
  alternativas: ["convite.", "tomada de preços.", "concorrência.", "pregão eletrônico."],
  correta: "C" },

{ id: "60", html: true,
  enunciado: TABELA_LICITACAO,
  alternativas: [
    "1-A; 2-D; 3-E; 4-B; 5-C.",
    "1-D; 2-A; 3-E; 4-B; 5-C.",
    "1-A; 2-E; 3-C; 4-B; 5-D.",
    "1-B; 2-D; 3-E; 4-A; 5-C."
  ], correta: "A" }

  ]
});

})();
