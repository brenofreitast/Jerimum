// Catálogo principal do site, responsável por armazenar os dados dos filmes e séries.
const catalogo = [
  {
    "id": "miami-vice",
    "title": "Miami Vice",
    "year": "1984–1990",
    "type": "Série",
    "category": "Ação",
    "short": "Dois detetives enfrentam o narcotráfico e o crime organizado nas ruas de Miami.",
    "synopsis": "Acompanha os detetives James 'Sonny' Crockett e Ricardo Tubbs em investigações contra o narcotráfico e o crime organizado. Com cenários ensolarados, moda marcante e trilha sonora de rock e pop, a série ajudou a definir a estética televisiva dos anos 80.",
    "cast": [
      "Don Johnson",
      "Philip Michael Thomas",
      "Edward James Olmos"
    ],
    "facts": [
      "A série ficou conhecida pelo visual em tons pastel e pela moda dos anos 80.",
      "A trilha sonora teve papel importante na identidade da produção."
    ],
    "poster": "miami",
    "emoji": "🌴",
    "imagem": "miami-vice.jpg"
  },
  {
    "id": "macgyver",
    "title": "MacGyver – Profissão: Perigo",
    "year": "1985–1992",
    "type": "Série",
    "category": "Ação",
    "short": "Um agente resolve situações perigosas usando ciência, criatividade e objetos comuns.",
    "synopsis": "Angus MacGyver trabalha para a Fundação Fênix e enfrenta missões de alto risco usando conhecimento científico, raciocínio rápido e objetos do cotidiano. Seu jeito inventivo de resolver problemas é sua principal marca.",
    "cast": [
      "Richard Dean Anderson",
      "Dana Elcar",
      "Bruce McGill"
    ],
    "facts": [
      "O personagem ficou famoso por improvisar soluções com materiais simples.",
      "O canivete suíço tornou-se um dos símbolos da série."
    ],
    "poster": "mac",
    "emoji": "🧰",
    "imagem": "macgyver.jpg"
  },
  {
    "id": "arquivo-x",
    "title": "Arquivo X",
    "year": "1993–2002",
    "type": "Série",
    "category": "Terror",
    "short": "Dois agentes do FBI investigam fenômenos paranormais e conspirações misteriosas.",
    "synopsis": "Os agentes Fox Mulder, que acredita em vida extraterrestre, e Dana Scully, médica cética e racional, investigam casos inexplicáveis, criaturas e possíveis conspirações governamentais. A série mistura suspense, ficção científica e terror.",
    "cast": [
      "David Duchovny",
      "Gillian Anderson",
      "Mitch Pileggi"
    ],
    "facts": [
      "A frase 'A verdade está lá fora' tornou-se associada à série.",
      "A produção alterna histórias independentes com uma trama maior de conspiração."
    ],
    "poster": "xfiles",
    "emoji": "👽",
    "imagem": "arquivo-x.jpg"
  },
  {
    "id": "buffy",
    "title": "Buffy, a Caçadora de Vampiros",
    "year": "1997–2003",
    "type": "Série",
    "category": "Terror",
    "short": "Uma adolescente tenta equilibrar a vida escolar com a missão de enfrentar criaturas sobrenaturais.",
    "synopsis": "Buffy Summers é a escolhida para combater vampiros, demônios e forças das trevas. Com a ajuda de seus amigos, ela tenta conciliar os desafios da adolescência com a responsabilidade de proteger sua cidade.",
    "cast": [
      "Sarah Michelle Gellar",
      "Alyson Hannigan",
      "Nicholas Brendon"
    ],
    "facts": [
      "A série combina elementos de terror, humor e drama adolescente.",
      "A personagem principal subverte o clichê da vítima indefesa dos filmes de terror."
    ],
    "poster": "buffy",
    "emoji": "🦇",
    "imagem": "buffy.jpg"
  },
  {
    "id": "fresh-prince",
    "title": "Um Maluco no Pedaço",
    "year": "1990–1996",
    "type": "Série",
    "category": "Comédia",
    "short": "Will vai morar com parentes ricos em Bel-Air e provoca choques culturais divertidos.",
    "synopsis": "Will, um jovem espirituoso da Filadélfia, muda-se para a casa de seus tios em Bel-Air. A convivência com seus primos e com o estilo de vida luxuoso da família rende situações engraçadas e momentos emocionantes.",
    "cast": [
      "Will Smith",
      "James Avery",
      "Alfonso Ribeiro",
      "Tatyana Ali"
    ],
    "facts": [
      "A abertura da série é uma das mais lembradas da televisão dos anos 90.",
      "A produção mistura humor familiar com temas sociais."
    ],
    "poster": "fresh",
    "emoji": "🎤",
    "imagem": "fresh-prince.jpg"
  },
  {
    "id": "seinfeld",
    "title": "Seinfeld",
    "year": "1989–1998",
    "type": "Série",
    "category": "Comédia",
    "short": "Jerry e seus amigos transformam pequenas situações do cotidiano em grandes confusões.",
    "synopsis": "Conhecida como 'a série sobre o nada', acompanha o comediante Jerry Seinfeld e seus amigos George, Elaine e Kramer. Encontros, hábitos e pequenos aborrecimentos do dia a dia em Nova York viram histórias cômicas.",
    "cast": [
      "Jerry Seinfeld",
      "Julia Louis-Dreyfus",
      "Jason Alexander",
      "Michael Richards"
    ],
    "facts": [
      "A série influenciou muitas comédias de situação posteriores.",
      "Os personagens frequentemente criam problemas a partir de situações banais."
    ],
    "poster": "seinfeld",
    "emoji": "☕",
    "imagem": "seinfeld.jpg"
  },
  {
    "id": "plantao-medico",
    "title": "Plantão Médico (ER)",
    "year": "1994–2009",
    "type": "Série",
    "category": "Drama",
    "short": "Médicos e enfermeiros enfrentam desafios intensos em um hospital de Chicago.",
    "synopsis": "Ambientada na emergência de um hospital de Chicago, a série acompanha a rotina profissional e pessoal de médicos e enfermeiros. A narrativa destaca decisões difíceis, relações humanas e a pressão do atendimento de urgência.",
    "cast": [
      "Anthony Edwards",
      "George Clooney",
      "Noah Wyle",
      "Julianna Margulies"
    ],
    "facts": [
      "A série ajudou a popularizar dramas médicos com ritmo acelerado.",
      "Vários atores conhecidos passaram pelo elenco ao longo das temporadas."
    ],
    "poster": "er",
    "emoji": "🏥",
    "imagem": "plantao-medico.jpg"
  },
  {
    "id": "barrados",
    "title": "Barrados no Baile",
    "year": "1990–2000",
    "type": "Série",
    "category": "Drama",
    "short": "Um grupo de jovens de Beverly Hills vive amizades, romances e conflitos familiares.",
    "synopsis": "Acompanha um grupo de adolescentes e jovens adultos em Beverly Hills. Ao longo das temporadas, a série aborda amizade, relacionamentos, conflitos familiares e questões sociais que marcaram o drama adolescente dos anos 90.",
    "cast": [
      "Jason Priestley",
      "Shannen Doherty",
      "Jennie Garth",
      "Luke Perry"
    ],
    "facts": [
      "O CEP 90210 virou parte do título e da identidade da série.",
      "A produção ajudou a consolidar o drama adolescente na TV."
    ],
    "poster": "90210",
    "emoji": "📼",
    "imagem": "barrados.jpg"
  },
  {
    "id": "duro-de-matar",
    "title": "Duro de Matar",
    "year": "1988",
    "type": "Filme",
    "category": "Ação",
    "short": "John McClane enfrenta criminosos que invadem um arranha-céu durante uma festa de Natal.",
    "synopsis": "O policial John McClane visita a cidade de Los Angeles para reencontrar sua família. Durante uma festa no edifício Nakatomi Plaza, o prédio é tomado por criminosos e McClane precisa agir para proteger os reféns e impedir o plano do grupo.",
    "cast": [
      "Bruce Willis",
      "Alan Rickman",
      "Bonnie Bedelia"
    ],
    "facts": [
      "O edifício Nakatomi tornou-se um cenário icônico do cinema de ação.",
      "O filme é frequentemente lembrado em debates sobre filmes de Natal."
    ],
    "poster": "diehard",
    "emoji": "💥",
    "imagem": "duro-de-matar.jpg"
  },
  {
    "id": "terminator-2",
    "title": "O Exterminador do Futuro 2",
    "year": "1991",
    "type": "Filme",
    "category": "Ação",
    "short": "Um robô reprogramado protege John Connor de um exterminador de metal líquido.",
    "synopsis": "Um T-800 reprogramado retorna para proteger o jovem John Connor, enquanto um modelo mais avançado, o T-1000, tenta eliminá-lo. A perseguição coloca em jogo o futuro da humanidade e marcou época pelos efeitos visuais.",
    "cast": [
      "Arnold Schwarzenegger",
      "Linda Hamilton",
      "Edward Furlong",
      "Robert Patrick"
    ],
    "facts": [
      "O T-1000 ficou famoso pelo uso inovador de efeitos digitais.",
      "A frase 'Hasta la vista, baby' tornou-se muito popular."
    ],
    "poster": "t2",
    "emoji": "🤖",
    "imagem": "terminator-2.jpg"
  },
  {
    "id": "speed",
    "title": "Velocidade Máxima",
    "year": "1994",
    "type": "Filme",
    "category": "Ação",
    "short": "Um ônibus precisa manter alta velocidade para evitar uma explosão.",
    "synopsis": "O policial Jack Traven precisa impedir uma tragédia quando uma bomba é instalada em um ônibus. Com a ajuda de uma passageira, ele tenta manter o veículo em movimento e encontrar uma saída para a situação.",
    "cast": [
      "Keanu Reeves",
      "Sandra Bullock",
      "Dennis Hopper"
    ],
    "facts": [
      "O filme ajudou a consolidar Keanu Reeves como astro de ação.",
      "Grande parte da tensão vem de uma situação simples com regras claras."
    ],
    "poster": "speed",
    "emoji": "🚌",
    "imagem": "speed.jpg"
  },
  {
    "id": "matrix",
    "title": "Matrix",
    "year": "1999",
    "type": "Filme",
    "category": "Ação",
    "short": "Neo descobre que o mundo conhecido pode ser uma simulação controlada por máquinas.",
    "synopsis": "Thomas Anderson, um programador conhecido como Neo, descobre que a realidade cotidiana é uma simulação criada por máquinas. Ao conhecer Morpheus e Trinity, passa a questionar tudo o que considera real e entra em uma luta pela liberdade humana.",
    "cast": [
      "Keanu Reeves",
      "Carrie-Anne Moss",
      "Laurence Fishburne",
      "Hugo Weaving"
    ],
    "facts": [
      "O efeito visual conhecido como 'bullet time' ganhou grande destaque.",
      "O filme combina ação, ficção científica e questionamentos filosóficos."
    ],
    "poster": "matrix",
    "emoji": "🟩",
    "imagem": "matrix.jpg"
  },
  {
    "id": "iluminado",
    "title": "O Iluminado",
    "year": "1980",
    "type": "Filme",
    "category": "Terror",
    "short": "O isolamento em um hotel remoto transforma o trabalho de inverno em uma experiência assustadora.",
    "synopsis": "Jack Torrance aceita trabalhar como zelador de um hotel isolado durante o inverno, levando a família consigo. O isolamento e acontecimentos sobrenaturais tornam a estadia cada vez mais perturbadora.",
    "cast": [
      "Jack Nicholson",
      "Shelley Duvall",
      "Danny Lloyd"
    ],
    "facts": [
      "Dirigido por Stanley Kubrick e baseado no romance de Stephen King.",
      "O hotel Overlook tornou-se um dos cenários mais conhecidos do terror."
    ],
    "poster": "shining",
    "emoji": "🪓",
    "imagem": "iluminado.jpg"
  },
  {
    "id": "panico",
    "title": "Pânico",
    "year": "1996",
    "type": "Filme",
    "category": "Terror",
    "short": "Um assassino mascarado aterroriza uma cidade e transforma o suspense em um jogo perigoso.",
    "synopsis": "Após uma série de acontecimentos assustadores, Sidney Prescott e seus amigos passam a ser perseguidos por uma figura mascarada conhecida como Ghostface. O filme mistura suspense, referências aos clichês do terror e humor ácido.",
    "cast": [
      "Neve Campbell",
      "Courteney Cox",
      "David Arquette",
      "Drew Barrymore"
    ],
    "facts": [
      "Ghostface tornou-se uma fantasia muito reconhecida da cultura pop.",
      "O filme brinca com regras e convenções dos filmes de terror."
    ],
    "poster": "scream",
    "emoji": "👻",
    "imagem": "panico.jpg"
  },
  {
    "id": "de-volta",
    "title": "De Volta para o Futuro",
    "year": "1985",
    "type": "Filme",
    "category": "Comédia",
    "short": "Marty McFly viaja acidentalmente a 1955 em um DeLorean criado por Doc Brown.",
    "synopsis": "O adolescente Marty McFly viaja no tempo a bordo de um DeLorean modificado pelo cientista Doc Brown. Preso em 1955, precisa garantir que seus pais se conheçam e se apaixonem para que seu próprio futuro continue existindo.",
    "cast": [
      "Michael J. Fox",
      "Christopher Lloyd",
      "Lea Thompson",
      "Crispin Glover"
    ],
    "facts": [
      "O DeLorean virou um dos carros mais famosos do cinema.",
      "O sucesso gerou duas continuações e uma franquia muito popular."
    ],
    "poster": "bttf",
    "emoji": "⏰",
    "imagem": "de-volta.jpg"
  },
  {
    "id": "debi-loide",
    "title": "Debi & Loide: Dois Idiotas em Apuros",
    "year": "1994",
    "type": "Filme",
    "category": "Comédia",
    "short": "Dois amigos atrapalhados atravessam o país para devolver uma mala cheia de dinheiro.",
    "synopsis": "Lloyd e Harry, dois amigos ingênuos e desastrados, partem em uma viagem para devolver uma mala esquecida por uma passageira. A boa intenção dos dois dá origem a uma sequência de confusões absurdas.",
    "cast": [
      "Jim Carrey",
      "Jeff Daniels",
      "Lauren Holly"
    ],
    "facts": [
      "A comédia ajudou a destacar o humor físico de Jim Carrey nos anos 90.",
      "A dupla principal ficou conhecida pelo contraste entre ingenuidade e impulsividade."
    ],
    "poster": "dumb",
    "emoji": "🚙",
    "imagem": "debi-loide.jpg"
  },
  {
    "id": "sonho-liberdade",
    "title": "Um Sonho de Liberdade",
    "year": "1994",
    "type": "Filme",
    "category": "Drama",
    "short": "Um banqueiro condenado injustamente encontra amizade e esperança durante décadas na prisão.",
    "synopsis": "Andy Dufresne é condenado à prisão perpétua por um crime que afirma não ter cometido. Na prisão, constrói uma amizade com Red e encontra maneiras de preservar a esperança em meio às dificuldades.",
    "cast": [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton"
    ],
    "facts": [
      "O filme é baseado em uma novela de Stephen King.",
      "A amizade entre Andy e Red é o centro emocional da história."
    ],
    "poster": "shawshank",
    "emoji": "🕊️",
    "imagem": "sonho-liberdade.jpg"
  },
  {
    "id": "forrest-gump",
    "title": "Forrest Gump: O Contador de Histórias",
    "year": "1994",
    "type": "Filme",
    "category": "Drama",
    "short": "Um homem simples acaba cruzando, sem querer, momentos marcantes da história americana.",
    "synopsis": "Forrest Gump relembra sua trajetória desde a infância no Alabama. Com simplicidade e generosidade, atravessa acontecimentos históricos, conhece pessoas marcantes e vive uma jornada de amor, amizade e perseverança.",
    "cast": [
      "Tom Hanks",
      "Robin Wright",
      "Gary Sinise",
      "Sally Field"
    ],
    "facts": [
      "O filme recebeu vários prêmios importantes, incluindo o Oscar de melhor filme.",
      "A narrativa mistura a trajetória fictícia de Forrest com eventos históricos reais."
    ],
    "poster": "forrest",
    "emoji": "🪶",
    "imagem": "forrest-gump.jpg"
  }
];
