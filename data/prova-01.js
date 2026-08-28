/* =========================================================
   SeMAE São José do Rio Preto — Gestor de Saneamento (Eng. Civil)
   Prova objetiva 014 · Fundação Vunesp · 16.02.2020 · 60 questões
   ========================================================= */

(function () {

const TEXTO_ESCRITA =
"Quando o efêmero dura\n\n" +
"Uma das mais fabulosas tecnologias humanas é a escrita. Ela nos permitiu ampliar a memória para horizontes inimagináveis. Não fosse por ela, jamais teríamos atingido os níveis de acúmulo, transmissão e integração de conhecimento que logramos obter e, provavelmente, não diferiríamos muito de nossos ancestrais do Neolítico.\n\n" +
"Uma tecnologia tão poderosa não poderia passar sem deixar marcas. De início, poucos dominavam as letras, de modo que saber ler e escrever se tornou uma distinção de classe social. À medida que surgiram tecnologias mais eficientes de reprodução (prensa) e o ensino público se popularizou, o alfabetismo se tornou quase universal.\n\n" +
"No nível comportamental, havia uma divisão bastante clara entre a comunicação formal, calculada, destinada a durar (escrita), e aquela mais íntima, vaga (oral), que, justamente por não deixar traços, podia operar como uma sonda da sociabilidade, testando relacionamentos, fofocando, às vezes até zombando e insultando. O ex-presidente Temer apropriadamente matou a charada ao proclamar: “verba volant, scripta manent” (as palavras faladas voam, as palavras escritas permanecem).\n\n" +
"O problema é que as tecnologias não pararam de evoluir, dando lugar a computadores, celulares, aplicativos de mensagem, redes sociais etc. As pessoas vêm cada vez mais usando a escrita para comunicar-se no registro informal, que contava com o caráter efêmero da fala. Pior, a reprodutibilidade e transmissão de diálogos privados se tornaram potencialmente infinitas, sem falar do hackeamento.\n\n" +
"O resultado é uma explosão de curtos-circuitos sociais, nos quais mensagens concebidas para circular entre poucos ganham ampla difusão. Às vezes a divulgação é de interesse público, mas, em outros casos, ela só azeda amizades, compromete namoros ou intoxica o ambiente de trabalho. Vejo com certa preocupação a redução dos espaços de experimentação social, onde é lícito falar bobagem.\n\n" +
"(Hélio Schwartsman. Folha de S.Paulo, novembro de 2019. Adaptado.)";

const TEXTO_MADONA =
"Trecho do romance “A Madona de Cedro”, de Antonio Callado.\n\n" +
"No primeiro dia no Rio de Janeiro, Delfino Montiel quase se afogou. Ele tinha aprendido a nadar menino ainda no rio das Velhas, na fazenda de seu tio Dilermando. Mas a corrente dos rios é honesta e determinada, vai reta e sempre se disciplina pelas margens. O mar... Ora, quem vai entender o mar? Delfino largou-se para o mar no mesmo dia em que chegara ao Rio. Atravessou a areia e foi entrando no mar numa espécie de exaltação. Queria chorar com aquela frescura de água azul, queria abraçar e beijar o mar. A primeira onda que lhe veio ao encontro, Delfino a recebeu de braços abertos. Ela o derrubou numa cascata de areia e espuma. Ele bebeu água, muita, mas estava embriagado de mar.\n\n" +
"Só quando já se achava sentado na areia, arquejante, entre uma súcia de curiosos, é que Delfino compreendeu que quase tinha morrido afogado. Um dos que o havia salvo era um rapagão simpático que lhe perguntou:\n" +
"– Você donde é que veio, patrício, de Cabrobó ou Caixa Prego?\n" +
"– De Congonhas do Campo, respondeu Delfino ingenuamente.\n" +
"Muita gente riu em torno dele.\n" +
"– Pois, se você ainda quer rever Congonhas, trate o mar com mais desconfiança.\n\n" +
"Enquanto o rapaz se afastava, Delfino notou principalmente o riso de uma menina de cabelos cor de mel. Ele a notou porque a menina não queria exatamente rir, com pena dele que estava, mas sua companheira ria tão à vontade que ela não podia deixar de acompanhá-la.\n\n" +
"Com os olhos fitos nela, Delfino a foi acompanhando com a vista enquanto a menina entrava no mar. Viu logo que era uma amiga íntima do mar. Viu-a furar uma primeira onda, ligeira e exata como uma agulha mergulhando na dobra azul de um pano. Quando ela se levantou do mergulho, o cabelo cor de mel estava preto e grudado ao pescoço, preto-esverdeado, como se ela tivesse voltado mais marinha do fundo do mar.\n\n" +
"(Record/Altaya. Adaptado.)\n" +
"1 Cabrobó é uma cidade pernambucana no sertão do São Francisco.\n" +
"2 Caixa Prego significa lugar muito distante, longínquo.";

const TABELA_CONCRETO =
'<p>Para fazer o orçamento de concreto dosado e lançado com f<sub>yk</sub> igual a 30 MPa, um engenheiro utilizou a composição de custos unitários a seguir.</p>' +
'<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:15px">' +
'<caption style="text-align:left;font-size:12px;padding-bottom:6px">Concreto dosado e lançado 30 MPa — unidade m³</caption>' +
'<thead><tr>' +
'<th style="border:1px solid #B4C0C8;padding:6px 8px;text-align:left">Insumo</th>' +
'<th style="border:1px solid #B4C0C8;padding:6px 8px">Unidade</th>' +
'<th style="border:1px solid #B4C0C8;padding:6px 8px">Quantidade</th>' +
'<th style="border:1px solid #B4C0C8;padding:6px 8px">Custo unitário (R$)</th>' +
'</tr></thead><tbody>' +
'<tr><td style="border:1px solid #B4C0C8;padding:6px 8px">Pedreiro</td><td style="border:1px solid #B4C0C8;padding:6px 8px;text-align:center">h</td><td style="border:1px solid #B4C0C8;padding:6px 8px;text-align:center">1,60</td><td style="border:1px solid #B4C0C8;padding:6px 8px;text-align:center">11,00</td></tr>' +
'<tr><td style="border:1px solid #B4C0C8;padding:6px 8px">Servente</td><td style="border:1px solid #B4C0C8;padding:6px 8px;text-align:center">h</td><td style="border:1px solid #B4C0C8;padding:6px 8px;text-align:center">1,60</td><td style="border:1px solid #B4C0C8;padding:6px 8px;text-align:center">9,00</td></tr>' +
'<tr><td style="border:1px solid #B4C0C8;padding:6px 8px">Concreto dosado 30 MPa</td><td style="border:1px solid #B4C0C8;padding:6px 8px;text-align:center">m³</td><td style="border:1px solid #B4C0C8;padding:6px 8px;text-align:center">1,05</td><td style="border:1px solid #B4C0C8;padding:6px 8px;text-align:center">350,00</td></tr>' +
'<tr><td style="border:1px solid #B4C0C8;padding:6px 8px">Vibrador de imersão 2 HP</td><td style="border:1px solid #B4C0C8;padding:6px 8px;text-align:center">h</td><td style="border:1px solid #B4C0C8;padding:6px 8px;text-align:center">0,10</td><td style="border:1px solid #B4C0C8;padding:6px 8px;text-align:center">5,00</td></tr>' +
'</tbody></table>' +
'<p>Considerando os percentuais de 125% de encargos sociais sobre a mão de obra, o custo do metro cúbico do concreto dosado e lançado é</p>';

registrarProva({
  id: "semae-2020-gestor-saneamento-engcivil",
  titulo: "SeMAE Rio Preto — Gestor de Saneamento (Eng. Civil)",
  subtitulo: "Vunesp · 2020 · prova 014",
  questoes: [

/* ---------- LÍNGUA PORTUGUESA (1 a 15) ---------- */

{ id: "1", apoio: TEXTO_ESCRITA,
  enunciado: "O título do texto evidencia uma das preocupações do autor:",
  alternativas: [
    "o domínio da escrita, especialmente a de natureza formal, que aperfeiçoou a comunicação entre os humanos.",
    "as tecnologias que, evoluindo constantemente, possibilitaram ao ser humano investigar profundamente o nosso universo.",
    "a reprodução de livros em larga escala que, graças às primeiras prensas, foi determinante para o fim do analfabetismo.",
    "as ações efetivas que têm impedido que mensagens destinadas a um pequeno grupo ganhem ampla difusão.",
    "a escrita informal que, em decorrência das redes sociais, perdeu o caráter fugaz e passageiro que a aproximava da linguagem falada."
  ], correta: "E" },

{ id: "2", apoio: TEXTO_ESCRITA,
  enunciado: "Na última frase do texto, o autor ________ a respeito da situação retratada e emprega a expressão “espaços de experimentação social” referindo-se a espaços em que ________.\n\nPara que haja coerência com as ideias do texto, as lacunas dessa frase devem ser preenchidas, respectivamente, por",
  alternativas: [
    "revela sua inquietação … a distinção entre classes sociais está baseada no domínio da escrita.",
    "cita um exemplo … as tecnologias de ponta estão exclusivamente a serviço da comunicação.",
    "expõe sua apreensão … as consequências da comunicação mais íntima são efêmeras.",
    "apresenta uma solução … o hackeamento é prática corriqueira.",
    "faz um prejulgamento … a comunicação se desenvolve sobretudo pela escrita oficial."
  ], correta: "C" },

{ id: "3", apoio: TEXTO_ESCRITA,
  enunciado: "Assinale a alternativa correta a respeito do termo destacado no trecho do texto.",
  alternativas: [
    "Ela nos permitiu ampliar a memória para horizontes inimagináveis. – está em sentido próprio significando trilhados.",
    "... que, justamente por não deixar traços, podia operar como uma sonda da sociabilidade... – está em sentido figurado significando reversão.",
    "... a reprodutibilidade e transmissão de diálogos privados se tornaram potencialmente infinitas... – está em sentido próprio significando prescindíveis.",
    "... mensagens concebidas para circular entre poucos ganham ampla difusão. – está em sentido figurado significando repercussão.",
    "... mas, em outros casos, ela só azeda amizades, compromete namoros... – está em sentido figurado significando dificulta."
  ], correta: "E" },

{ id: "4", apoio: TEXTO_ESCRITA,
  enunciado: "De acordo com a norma-padrão de emprego dos pronomes, a substituição da expressão destacada na frase pela expressão entre parênteses está correta em:",
  alternativas: [
    "A escrita permitiu às pessoas ampliar a memória a níveis surpreendentes. (permitiu-lhes)",
    "Uma tecnologia poderosa como a escrita deixou muitas marcas para os humanos. (deixou-lhes)",
    "Cada vez mais os usuários da internet vêm usando a escrita para a comunicação informal. (vêm lhe usando)",
    "A divulgação de certas mensagens pode intoxicar o ambiente de trabalho. (intoxicar-lhe)",
    "A linguagem falada, por ser informal, não costuma deixar traços. (deixar-lhes)"
  ], correta: "A" },

{ id: "5", apoio: TEXTO_ESCRITA,
  enunciado: "Considere os trechos do texto.\n\n• Uma tecnologia tão poderosa não poderia passar sem deixar marcas. (2º parágrafo)\n• Vejo com certa preocupação a redução dos espaços de experimentação social... (último parágrafo)\n\nAs expressões destacadas apresentam, correta e respectivamente, circunstância adverbial de",
  alternativas: [
    "tempo e de afirmação, como ocorre, também respectivamente, em: Não fosse por ela, jamais teríamos atingido os níveis de acúmulo... / ... a reprodutibilidade e transmissão de diálogos privados se tornaram potencialmente infinitas...",
    "tempo e afirmação, como ocorre, também respectivamente, em: De início, poucos dominavam as letras... / ... que, justamente por não deixar traços, podia operar como uma sonda da sociabilidade...",
    "modo e dúvida, como ocorre, também respectivamente, em: ... mas, em outros casos, ela só azeda amizades... / No nível comportamental, havia uma divisão bastante clara...",
    "intensidade e modo, como ocorre, também respectivamente, em: ...havia uma divisão bastante clara entre a comunicação formal, calculada... / O ex-presidente Temer apropriadamente matou a charada...",
    "intensidade e modo, como ocorre, também respectivamente, em: Às vezes a divulgação é de interesse público... / À medida que surgiram tecnologias mais eficientes de reprodução..."
  ], correta: "D" },

{ id: "6", apoio: TEXTO_ESCRITA,
  enunciado: "Assinale a alternativa redigida em conformidade com a norma-padrão.",
  alternativas: [
    "Quando mensagens, com as quais trazem diálogos privados, se espalham, há uma explosão de curtos-circuitos sociais.",
    "A escrita, técnica pela qual nos diferenciamos de nossos antepassados, trouxe mudanças sociais significativas.",
    "A comunicação formal, cujo o papel prioritário é preservar o conhecimento, opõe-se à comunicação informal, mais livre.",
    "A frase em latim, na qual foi verbalizada pelo ex-presidente, exprime um ponto de vista a ser repensado atualmente.",
    "A escrita, da qual nos garantiu o registro e a memória, é uma das mais incríveis conquistas humanas."
  ], correta: "B" },

{ id: "7", apoio: TEXTO_MADONA,
  enunciado: "Com base nas informações do texto, é correto afirmar que Delfino Montiel",
  alternativas: [
    "foi de Congonhas do Campo para o Rio de Janeiro porque, em suas férias de trabalho, queria ver o mar pela primeira vez.",
    "compreendeu, com tristeza, que jamais conseguiria conquistar aquela menina que saía do mar como um ser marinho e poderoso.",
    "percebeu que a menina de cabelos cor de mel procurou conter o riso, pois se sentiu condoída pela situação vivenciada por ele.",
    "fingiu ingenuidade ao responder à pergunta do rapaz, pois não queria criar conflitos com quem o havia salvado do afogamento.",
    "entrou avidamente no mar mas foi derrubado com violência pelas ondas, o que lhe provocou extremo desapontamento."
  ], correta: "C" },

{ id: "8", apoio: TEXTO_MADONA,
  enunciado: "A pergunta que o rapaz fez a Delfino evidencia que o primeiro era",
  alternativas: ["espirituoso.", "intransigente.", "esportista.", "moralista.", "dissimulado."],
  correta: "A" },

{ id: "9", apoio: TEXTO_MADONA,
  enunciado: "Considere os trechos do texto.\n\n• Atravessou a areia e foi entrando no mar numa espécie de exaltação. (1º parágrafo)\n• Um dos que o havia salvo era um rapagão simpático que lhe perguntou... (2º parágrafo)\n\nAssinale a alternativa que apresenta, correta e respectivamente, termos de sentido oposto aos termos destacados nos trechos do texto.",
  alternativas: ["serenidade; descortês.", "tranquilidade; solícito.", "euforia; hostil.", "exasperação; cordial.", "alheamento; afável."],
  correta: "A" },

{ id: "10", apoio: TEXTO_MADONA,
  enunciado: "Na frase do primeiro parágrafo – Delfino largou-se para o mar no mesmo dia em que chegara ao Rio. –, as formas verbais destacadas, na sequência em que estão empregadas na frase, sinalizam",
  alternativas: [
    "eventos que ocorreram concomitantemente.",
    "eventos cuja realização ocorreu independentemente da vontade do personagem.",
    "um evento já concluído e o outro evento ainda em processo.",
    "um evento ocorrido posteriormente ao outro evento.",
    "um evento que precedeu o outro, ambos ocorridos no passado."
  ], correta: "D" },

{ id: "11", apoio: TEXTO_MADONA,
  enunciado: "Considere a frase do sexto parágrafo.\n\nEle a notou porque a menina não queria exatamente rir, com pena dele que estava, mas sua companheira ria tão à vontade que ela não podia deixar de acompanhá-la.\n\nOs termos destacados (porque, mas, que) apresentam, correta e respectivamente:",
  alternativas: [
    "explicação; oposição; consequência.",
    "explicação; concessão; comparação.",
    "simultaneidade; oposição; conclusão.",
    "justificativa; conclusão; consequência.",
    "justificativa; concessão; finalidade."
  ], correta: "A" },

{ id: "12", apoio: TEXTO_MADONA,
  enunciado: "Leia o trecho reescrito do texto, observando que a pontuação foi alterada e as frases foram numeradas.\n\n1. Um dos rapazes que, o havia salvo, era um rapagão simpático que lhe perguntou:\n2. Você donde é que veio, patrício, de Cabrobó ou Caixa Prego.\n3. De Congonhas do Campo respondeu: Delfino ingenuamente.\n4. Muita gente riu em (torno) dele.\n5. Pois, se você ainda quer rever Congonhas, trate o mar com mais desconfiança!\n\nA frase que contém a alteração da pontuação em conformidade com a norma-padrão, sem comprometer o sentido do texto, é a de número",
  alternativas: ["1.", "2.", "3.", "4.", "5."],
  correta: "E" },

{ id: "13", apoio: TEXTO_MADONA,
  enunciado: "A concordância verbal e nominal atende à norma-padrão da língua portuguesa na alternativa:",
  alternativas: [
    "Na Praia Vermelha, estava reunido à volta de Delfino alguns curiosos que se divertiam com a cena inusitada.",
    "Delfino aprendera a nadar no rio das Velhas, na fazenda do tio, mas era época passada, já faziam muitos anos.",
    "A garota, comparada a uma agulha que fura o mar como um tecido, saiu da água com os cabelos molhados, preto-esverdeados.",
    "A corrente dos rios são disciplinada pelas margens, diferentemente das ondas do mar, livres e traiçoeiras.",
    "Apesar do fascínio de Delfino pelo mar, derrubaram-no a cascata formada pela areia e espuma que o envolveram."
  ], correta: "C" },

{ id: "14", apoio: TEXTO_MADONA,
  enunciado: "A colocação do pronome no trecho original do texto pode ser alterada, seguindo a norma-padrão, como indicado na alternativa:",
  alternativas: [
    "... é honesta e determinada, vai reta e sempre disciplina-se pelas margens.",
    "A primeira onda que veio-lhe ao encontro, Delfino recebeu-a de braços abertos.",
    "Só quando já achava-se sentado na areia, arquejante...",
    "Um dos que havia salvo-o era um rapagão simpático...",
    "Com os olhos fitos nela, Delfino foi acompanhando-a com a vista..."
  ], correta: "E" },

{ id: "15",
  apoio: "A questão original vem acompanhada de uma tira de Bob Thaves (Frank & Ernest, O Estado de S. Paulo, 21.09.2019), em que dois convidados comentam uma cerimônia de casamento interrompida pela negociação do acordo pré-nupcial: “as pessoas não deviam deixar o acordo pré-nupcial para a última hora!”.",
  enunciado: "Em meio ________ cerimônia, os noivos passaram ________ negociar a divisão de bens, o que transformou o evento religioso em evento forense, causando surpresa ________ pessoas presentes, entre elas, os amigos Frank e Ernest.\n\nPara que o texto esteja de acordo com a norma-padrão, as lacunas devem ser preenchidas, respectivamente, por",
  alternativas: ["à … à … as", "à … a … às", "à … a … as", "a … à … às", "a … a … as"],
  correta: "B" },

/* ---------- MATEMÁTICA (16 a 25) ---------- */

{ id: "16",
  enunciado: "Um alfaiate produz certa peça de roupa em 4 dias e seu aprendiz produz uma peça igual em 6 dias. O alfaiate e seu aprendiz podem trabalhar em uma mesma peça ao mesmo tempo, e, para produzir 30 dessas peças, os dois precisam trabalhar por",
  alternativas: ["48 dias.", "60 dias.", "72 dias.", "84 dias.", "96 dias."],
  correta: "C" },

{ id: "17",
  enunciado: "Uma empresa tem 162 funcionários no período matutino, 180 no período vespertino e 252, no período noturno, de maneira que cada funcionário só trabalha em um único período. Um treino de segurança será realizado no auditório dessa empresa, que tem capacidade máxima para 80 funcionários, e, por isso, os funcionários serão divididos no menor número de grupos possível, de modo que todos os grupos tenham o mesmo número de participantes e cada grupo com funcionários de um mesmo período. Cada treino será dado para o maior número de grupos possível, respeitando a capacidade do auditório, logo em cada treino o número máximo de grupos participantes será",
  alternativas: ["4.", "5.", "6.", "7.", "8."],
  correta: "A" },

{ id: "18",
  enunciado: "Um condomínio é formado por 2 blocos. O consumo de água do bloco A, em janeiro, foi igual a 82% do consumo de água do bloco B. Em fevereiro, o bloco A aumentou seu consumo de água em 3 200 litros, e o bloco B diminuiu o consumo em 6 340 litros, de maneira que o consumo de água em cada bloco foi igual. Em fevereiro, o consumo de água em cada bloco, em litros, foi igual a",
  alternativas: ["42 280.", "43 440.", "44 500.", "45 000.", "46 660."],
  correta: "E" },

{ id: "19",
  enunciado: "Em uma empresa, para cada 5 estagiários, existem 18 funcionários. Essa empresa pretende promover 48 de seus estagiários para trabalhar no quadro normal de funcionários e contratar mais 5 novos estagiários, de maneira que passe a ter 3 estagiários para cada 16 funcionários. Após essas mudanças, a soma do número de funcionários e estagiários nessa empresa será igual a",
  alternativas: ["665.", "684.", "703.", "722.", "741."],
  correta: "E" },

{ id: "20",
  enunciado: "Para produzir 600 bicicletas, em 28 dias, são necessários 8 operários trabalhando 8 horas por dia. Se cada operário trabalhar 7 horas por dia nas mesmas condições, o número de operários de igual rendimento necessários para produzir 4 500 bicicletas em 30 dias será",
  alternativas: ["52.", "56.", "60.", "64.", "68."],
  correta: "D" },

{ id: "21",
  enunciado: "Renata fez a limpeza dos livros da biblioteca da escola. No primeiro dia, ela limpou 3/8 dos livros, no segundo dia, limpou 260 livros e, no terceiro dia, limpou os livros restantes, que correspondiam a 5/12 do total de livros.\n\nO número total de livros dessa biblioteca é",
  alternativas: ["1 200.", "1 224.", "1 248.", "1 272.", "1 296."],
  correta: "C" },

{ id: "22",
  enunciado: "Um jogo de footdoubleball alternativo é jogado com 2 bolas ao mesmo tempo, uma grande e uma pequena. Cada gol feito com a bola grande vale 5 pontos, e cada gol feito com a bola pequena vale 2 pontos. Nesse jogo, um time marcou 28 gols, num total de 92 pontos, e o outro time marcou 40 gols. Se os dois times fizeram um mesmo número de gols com a bola grande, o total de pontos feitos pelo time que marcou mais pontos foi",
  alternativas: ["110.", "116.", "122.", "128.", "134."],
  correta: "B" },

{ id: "23",
  enunciado: "A média das notas de uma prova feita por 20 alunos foi 6,8. A última questão dessa prova foi corretamente resolvida por um pequeno número de alunos e não foi resolvida pelos demais alunos. O professor decidiu aumentar em 1 ponto a nota das provas dos alunos que erraram a última questão e aumentar em 0,5 ponto a nota das provas dos alunos que acertaram a última questão, e, ao fazer isso, a nova média das notas dessa prova passou a ser 7,7. O número de alunos que acertou a última questão foi",
  alternativas: ["1.", "2.", "3.", "4.", "5."],
  correta: "D" },

{ id: "24",
  enunciado: "O perímetro do polígono ABCDEFGH é igual a 26 cm, e os lados BC e FG desse polígono são congruentes, conforme mostra a figura.\n\nA área, em cm², do polígono ABCDEFGH é",
  imagem: "img/prova01-q24.png",
  alternativas: ["26.", "28.", "30.", "32.", "34."],
  correta: "B" },

{ id: "25",
  enunciado: "A maior aresta de uma caixa na forma de um paralelepípedo reto-retângulo é 8 cm maior que a menor aresta dessa caixa, de modo que a área de uma face que contenha essas duas arestas é 84 cm². Se a face de maior área dessa caixa é 168 cm², o volume da caixa, em cm³, é",
  alternativas: ["1 008.", "1 176.", "1 344.", "1 512.", "1 680."],
  correta: "A" },

/* ---------- LEGISLAÇÃO (26 a 30) ---------- */

{ id: "26",
  enunciado: "Nos termos do Código Penal, é correto afirmar que a conduta de “exigir, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida”, tipifica o seguinte crime:",
  alternativas: ["prevaricação.", "concussão.", "corrupção passiva.", "corrupção ativa.", "peculato."],
  correta: "B" },

{ id: "27",
  enunciado: "Nos termos da Constituição Federal, é correto afirmar que",
  alternativas: [
    "o preenchimento dos cargos em comissão exigirá a aprovação em concurso público de provas ou de provas e títulos.",
    "os vencimentos dos cargos do Poder Legislativo e do Poder Judiciário poderão ser superiores aos pagos pelo Poder Executivo.",
    "a revisão geral da remuneração dos servidores públicos, sem distinção de índices entre servidores públicos civis e militares, far-se-á sempre na mesma data.",
    "o prazo de validade do concurso público será de até dois anos, prorrogável uma vez, por igual período.",
    "os cargos em comissão serão exercidos, preferencialmente, por servidores ocupantes de cargo de carreira técnica ou profissional."
  ], correta: "D" },

{ id: "28",
  enunciado: "A Prefeitura do Município “X” irá realizar uma contratação de serviço de engenharia de valor estimado de R$ 2.000.000,00 (dois milhões de reais). Nos termos da Lei nº 8.666/93 e do Decreto Federal nº 9.412/18, é correto afirmar que deverá ser utilizada a seguinte modalidade de licitação:",
  alternativas: ["tomada de preço.", "menor preço.", "leilão.", "melhor técnica.", "concurso."],
  correta: "A" },

{ id: "29",
  enunciado: "No que concerne à apresentação da declaração de bens e valores que compõem o patrimônio privado do agente público, é correto afirmar que, nos termos da Lei Federal nº 8.429/92, a referida declaração",
  alternativas: [
    "não compreenderá os bens móveis até cinquenta mil reais.",
    "será, por meio de sistema informatizado, atualizada semestralmente.",
    "quando for o caso, abrangerá os bens e valores patrimoniais do cônjuge.",
    "compreenderá os imóveis, os móveis, o dinheiro, os títulos, excetuando as ações.",
    "não poderá condicionar a posse e o exercício do agente público."
  ], correta: "C" },

{ id: "30",
  enunciado: "Assinale a alternativa correta e nos termos da Lei Federal nº 11.445/07 (Diretrizes Nacionais para o Saneamento Básico).",
  alternativas: [
    "Nos serviços públicos de saneamento básico, em que mais de um prestador execute atividade interdependente com outra, a relação entre elas não necessita ser regulada por contrato.",
    "Os reajustes de tarifas de serviços públicos de saneamento básico serão realizados, observando-se o intervalo mínimo de 24 (vinte quatro) meses.",
    "A utilização de recursos hídricos, na prestação de serviços públicos de saneamento básico, não está sujeita a outorga de direito de uso.",
    "O lixo originário de atividades industriais, cuja responsabilidade pelo manejo não seja atribuída ao gerador, não poderá, por decisão do poder público, ser considerado resíduo sólido urbano.",
    "Os recursos hídricos não integram os serviços públicos de saneamento básico."
  ], correta: "E" },

/* ---------- CONHECIMENTOS ESPECÍFICOS (31 a 60) ---------- */

{ id: "31",
  enunciado: "Nos sistemas de aproveitamento de água da chuva de coberturas para fins não potáveis, devem ser realizadas inspeção e manutenção periódicas de todos os componentes do sistema. As frequências de inspeção dos dispositivos de descarte de detritos, das calhas, das bombas e dos reservatórios são, correta e respectivamente,",
  alternativas: [
    "mensal, semestral, mensal e anual.",
    "bimensal, trimestral, mensal e mensal.",
    "trimestral, bimensal, anual e semestral.",
    "anual, mensal, bimestral e trimestral.",
    "semestral, mensal, trimestral e bimensal."
  ], correta: "A" },

{ id: "32",
  enunciado: "A figura representa uma ligação metálica de duas chapas de 20 mm de espessura por 140 mm de largura, com talas de mesma seção transversal e por 8 parafusos de 20 mm de diâmetro.\n\nConsidere que o furo padrão deve ter folga de 1,5 mm e que o corte por punção danifica parte do material da chapa, exigindo um acréscimo no diâmetro do furo de 2,0 mm. Nesse caso, a área líquida da seção furada para o cálculo da tensão será:",
  imagem: "img/prova01-q32.png",
  alternativas: ["9,30 cm²", "16,30 cm²", "18,60 cm²", "22,40 cm²", "28,00 cm²"],
  correta: "C" },

{ id: "33",
  enunciado: "No que se refere ao aço, material que é utilizado em estruturas metálicas, ductilidade é a",
  alternativas: [
    "capacidade de absorver energia mecânica em regime elástico.",
    "capacidade que o material tem de se deformar sob a ação de cargas.",
    "energia total que o material pode absorver por unidade de volume até a sua ruptura.",
    "resistência ao risco ou à abrasão.",
    "ruptura do material sob o efeito de esforços repetitivos em grande número."
  ], correta: "B" },

{ id: "34",
  enunciado: "Um pilar de madeira com comprimento de 2,0 m está submetido apenas à compressão simples. Para que seja dispensada a consideração de eventuais efeitos de flexão, o raio de giração mínimo de sua seção transversal a ser adotado é",
  alternativas: ["3,0.", "3,5.", "5,0.", "6,0.", "7,5."],
  correta: "C" },

{ id: "35",
  enunciado: "O dimensionamento no estado-limite último da seção transversal de uma viga de concreto armado, caracterizado pelo domínio 3, corresponde à",
  alternativas: [
    "tração não uniforme, sem compressão.",
    "flexão simples ou composta, sem ruptura à compressão do concreto (εc < εcu e com o máximo alongamento permitido do aço).",
    "flexão simples (seção superarmada) ou composta com ruptura à compressão do concreto e aço tracionado sem escoamento (εs < εyd).",
    "flexão simples (seção subarmada) ou composta com ruptura à compressão do concreto e com escoamento do aço (εs ≥ εyd).",
    "compressão não uniforme, sem tração."
  ], correta: "D" },

{ id: "36",
  enunciado: "No dimensionamento de vigas convencionais de concreto armado no estado-limite último, para as combinações normais das ações e executadas em condições desfavoráveis de adensamento manual do concreto, com fck igual a 30,8 MPa e verificado em data igual ou superior aos 28 dias, a distribuição de tensões no concreto se faz de acordo com o diagrama parábola-retângulo, com tensão de pico de cálculo do concreto igual a",
  alternativas: ["13 MPa.", "14 MPa.", "15 MPa.", "16 MPa.", "17 MPa."],
  correta: "E" },

{ id: "37",
  enunciado: "A treliça da figura está submetida a três cargas concentradas.\n\nA força axial de compressão na barra AB é",
  imagem: "img/prova01-q37.png",
  alternativas: ["12 kN.", "18 kN.", "24 kN.", "32 kN.", "40 kN."],
  correta: "D" },

{ id: "38",
  enunciado: "No projeto de estruturas de madeira para o dimensionamento de vigas, o valor básico do coeficiente de ponderação para o estado limite-último, decorrentes de tensões de cisalhamento paralelas às fibras é",
  alternativas: ["1,15.", "1,35.", "1,40.", "1,65.", "1,80."],
  correta: "E" },

{ id: "39",
  enunciado: "No projeto de fundações com blocos rígidos de concreto armado sobre estacas, deve-se considerar o efeito da flexão em duas direções, com as forças de tração concentradas nas linhas sobre as estacas em faixas de largura igual ao diâmetro da estaca multiplicado por",
  alternativas: ["1,2.", "1,4.", "1,5.", "1,8.", "2,0."],
  correta: "A" },

{ id: "40",
  enunciado: "No dimensionamento de uma fundação superficial, solicitada por carregamento excêntrico de solicitações características, em relação à área total da fundação, a área comprimida deve ser de, no mínimo,",
  alternativas: ["3/4.", "2/3.", "5/8.", "1/2.", "2/5."],
  correta: "B" },

{ id: "41",
  enunciado: "Quando, no projeto de fundações para pequenas construções, for especificada broca perfurada com trado manual preenchida com concreto, o seu comprimento mínimo e sua carga máxima deverão ser, correta e respectivamente,",
  alternativas: ["2,0 m e 50 kN.", "2,5 m e 75 kN.", "3,0 m e 100 kN.", "4,0 m e 150 kN.", "6,0 m e 200 kN."],
  correta: "C" },

{ id: "42",
  enunciado: "O ponto de entrada de água do reservatório inferior de um edifício encontra-se a 3,0 m abaixo da tubulação da rede pública, e o comprimento da tubulação entre a rede pública e o reservatório inferior, incluído todos os comprimentos equivalentes das singularidades, é de 20 m. Se a pressão no ponto de tomada d'água da rede pública é 12,4 mca, e a perda de carga unitária é 0,08 m/m, a pressão disponível na entrada do reservatório inferior é",
  alternativas: ["8,6 mca.", "10,2 mca.", "11,4 mca.", "13,8 mca.", "15,5 mca."],
  correta: "D" },

{ id: "43",
  enunciado: "A vazão do sistema de recalque de um edifício é 2,0 litros de água por segundo. Se o consumo diário de água é 21,6 m³, o tempo necessário de funcionamento do sistema de recalque para suprir o consumo diário é",
  alternativas: ["8,0 h.", "6,0 h.", "5,2 h.", "4,6 h.", "3,0 h."],
  correta: "E" },

{ id: "44",
  enunciado: "Na operação de estações de tratamento de esgoto sanitário, a relação entre a massa de sólidos em suspensão no afluente, introduzida em uma unidade de tratamento, e a área sobre a qual é aplicada, por unidade de tempo, é denominada taxa de",
  alternativas: [
    "aplicação de sólidos.",
    "vazão superficial.",
    "escoamento superficial.",
    "aplicação orgânica superficial.",
    "escoamento em vertedor."
  ], correta: "A" },

{ id: "45",
  enunciado: "Em um projeto de prevenção de combate a incêndio, nos locais indicados com risco baixo de classe A, a distância máxima a ser percorrida pelo operador do ponto de fixação de um extintor, com capacidade extintora mínima 2-A, a qualquer ponto da área por ele protegida, é de",
  alternativas: ["10 m.", "15 m.", "20 m.", "25 m.", "30 m."],
  correta: "D" },

{ id: "46",
  enunciado: "Considere o local de instalação de um aparelho de gás para uso residencial.\n\nA abertura superior permanente acima do piso acabado deve ser localizada a uma altura mínima de",
  imagem: "img/prova01-q46.png",
  alternativas: ["1,40 m.", "1,50 m.", "1,60 m.", "1,70 m.", "1,80 m."],
  correta: "B" },

{ id: "47",
  enunciado: "Em um edifício de múltiplos pavimentos, com altura total de 36 m, construído com estrutura de elementos pré-moldados de concreto, considerando as combinações frequentes das ações, o deslocamento horizontal global máximo da estrutura dos elementos pré-moldados, sem encunhamento de outros elementos, é de",
  alternativas: ["30 mm.", "25 mm.", "20 mm.", "15 mm.", "10 mm."],
  correta: "A" },

{ id: "48",
  enunciado: "Após os serviços de escavação, abertura de vala e assentamento de tubos pré-fabricados de concreto nas obras de drenagem de águas pluviais, é necessário proceder ao reaterro da vala com material solto de boa qualidade, em camadas com espessura máxima de",
  alternativas: ["10 cm.", "20 cm.", "30 cm.", "40 cm.", "50 cm."],
  correta: "B" },

{ id: "49",
  enunciado: "No projeto e execução de valas localizadas no leito carroçável das ruas, a distância mínima entre as tubulações de água e de esgoto deve ser de X m, e a tubulação de água deve ficar, no mínimo, Y m acima da tubulação de esgoto. Os valores de X e Y são, correta e respectivamente,",
  alternativas: ["0,60 e 0,10.", "0,80 e 0,15.", "1,00 e 0,20.", "1,50 e 0,40.", "2,00 e 0,50."],
  correta: "C" },

{ id: "50",
  enunciado: "Considere a cobertura da figura para o projeto das instalações de drenagem de águas pluviais.\n\nSe o índice pluviométrico na região onde for construída a residência é de 150 mm/h, a vazão de projeto para o dimensionamento das calhas é de",
  imagem: "img/prova01-q50.png",
  alternativas: ["120 L/min.", "140 L/min.", "150 L/min.", "160 L/min.", "180 L/min."],
  correta: "E" },

{ id: "51",
  enunciado: "Para o controle tecnológico da execução de 2 000 m³ de aterro de um mesmo material, em uma obra de construção industrial, devem ser realizados ensaios de compactação. O número mínimo de ensaios é",
  alternativas: ["18.", "15.", "12.", "9.", "6."],
  correta: "A" },

{ id: "52",
  enunciado: "Muitos levantamentos cadastrais de imóveis rurais e urbanos georreferenciados utilizam o sistema de projeção cartográfica UTM, que divide a Terra em X fusos, que se estendem por Y graus de longitude cada. Os valores de X e Y são, correta e respectivamente,",
  alternativas: ["10 e 36.", "20 e 18.", "30 e 12.", "40 e 9.", "60 e 6."],
  correta: "E" },

{ id: "53",
  enunciado: "No projeto das instalações elétricas de uma residência, um dos circuitos foi dimensionado para alimentar as cargas mínimas de iluminação de uma sala de estar retangular, 10 m por 6 m, e de uma copa retangular, 5 m por 3 m, com tensão de 110 V. A corrente do circuito é",
  alternativas: ["8 A.", "10 A.", "12 A.", "15 A.", "20 A."],
  correta: "B" },

{ id: "54",
  enunciado: "Considere o esquema de aterramento utilizado nas instalações elétricas prediais, no qual as funções de neutro e de proteção são combinadas em um único condutor, na totalidade do esquema da figura.\n\nEsse esquema de aterramento da figura utilizado é denominado esquema",
  imagem: "img/prova01-q54.png",
  alternativas: ["TN-S.", "TN-C-S.", "TN-C.", "TT.", "IT."],
  correta: "C" },

{ id: "55", html: true,
  enunciado: TABELA_CONCRETO,
  alternativas: ["R$ 350,00.", "R$ 362,00.", "R$ 387,00.", "R$ 400,00.", "R$ 440,00."],
  correta: "E" },

{ id: "56",
  enunciado: "Ao analisar o orçamento da construção de uma edificação, um engenheiro observou que seriam necessários R$ 375.000,00 de custos diretos. Se o preço de venda desta edificação for R$ 480.000,00, o BDI aplicado será:",
  alternativas: ["23 %", "25 %", "26 %", "28 %", "32 %"],
  correta: "D" },

{ id: "57",
  enunciado: "A reforma de uma residência foi planejada conforme o cronograma PERT-CPM da figura, no qual as atividades são representadas por letras, seguidas de seu tempo de execução em dias.\n\nO tempo, em dias, previsto para a conclusão da reforma é",
  imagem: "img/prova01-q57.png",
  alternativas: ["19.", "22.", "25.", "34.", "53."],
  correta: "C" },

{ id: "58",
  enunciado: "Para garantir a segurança nas obras de construção civil, as escadas provisórias de uso coletivo devem ser dimensionadas em função do fluxo de trabalhadores, respeitando-se a largura mínima de X m, devendo ter, pelo menos a cada Y m de altura, um patamar intermediário. Os valores de X e Y são, correta e respectivamente,",
  alternativas: ["0,80 e 2,90.", "0,70 e 2,80.", "0,60 e 2,70.", "0,50 e 2,60.", "0,40 e 2,50."],
  correta: "A" },

{ id: "59",
  enunciado: "Na gestão do sistema de manutenção de edificações, a manutenção preventiva é caracterizada por",
  alternativas: [
    "um fluxo constante de serviços padronizados e cíclicos.",
    "serviços programados com antecedência, priorizando também relatórios de verificações.",
    "serviços que demandam ação ou intervenção imediata e não programada.",
    "ações de urgência que evitem graves riscos pessoais aos usuários.",
    "ações rápidas que evitem graves prejuízos patrimoniais."
  ], correta: "B" },

{ id: "60",
  enunciado: "A figura que representa uma viga de concreto armado com 4 m de comprimento e seção retangular 0,20 m por 0,50 m foi armada com aço CA50.\n\nSe as massas das barras de diâmetros 6,3 mm, 10 mm e 12,5 mm são, respectivamente, 0,25 kg/m, 0,40 kg/m e 0,95 kg/m, então, o consumo de aço para a montagem dessa viga é aproximadamente,",
  imagem: "img/prova01-q60.png",
  alternativas: ["15 kg.", "18 kg.", "20 kg.", "24 kg.", "35 kg."],
  correta: "D" }

  ]
});

})();
