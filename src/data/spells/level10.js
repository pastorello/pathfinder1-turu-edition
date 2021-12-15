const primeviSpells = [
  {
    level: 10,
    url: "/wiki/Fenomeno_Primevo",
    name: "Fenomeno Primevo Fenomeno Primevo",
    school: "divinazione",
    description:
      "Richiedi intercessione alla natura per duplicare incantesimi primevi",
  },
  {
    level: 10,
    url: "/wiki/Incarnare_Natura",
    name: "Incarnare Natura Incarnare Natura",
    school: "trasmutazione",
    description: "Ti trasformi in un'enorme incarnazione della natura",
  },
  {
    level: 10,
    url: "/wiki/Mandria_Primeva",
    name: "Mandria Primeva Mandria Primeva",
    school: "trasmutazione",
    description: "Trasformi creature consenzienti in mammut",
  },
];

const occultSpells = [
  {
    level: 10,
    url: "/wiki/Alterare_Realt%C3%A0",
    name: "Alterare Realtà Alterare Realtà",
    school: "divinazione",
    description: "Distorci la realtà per duplicare incantesimi occulti",
  },
  {
    level: 10,
    url: "/wiki/Verit%C3%A0_Fittizia",
    name: "Verità Fittizia Verità Fittizia",
    school: "ammaliamento",
    description: "Fai credere alle creature che un fatto sia vero",
  },
];

const divineSpells = [
  {
    level: 10,
    url: "/wiki/Avatar",
    name: "Avatar Avatar ",
    school: "trasmutazione",
    description:
      "Ti trasformi in una forma da battaglia determinata dalla tua divinità",
  },
  {
    level: 10,
    url: "/wiki/Miracolo",
    name: "Miracolo Miracolo ",
    school: "divinazione",
    description: "Chiedi intercessione per duplicare incantesimi divini",
  },
  {
    level: 10,
    url: "/wiki/Reviviscenza",
    name: "Reviviscenza Reviviscenza",
    school: "necromanzia",
    description:
      "Guarisci le creature in un'area e riporti temporaneamente in vita i morti",
  },
];

const arcaneSpells = [
  {
    level: 10,
    url: "/wiki/Cataclisma",
    name: "Cataclisma Cataclisma",
    school: "invocazione",
    description: "Evochi un rovinoso cataclisma istantaneo",
  },
  {
    level: 10,
    url: "/wiki/Desiderio",
    name: "Desiderio Desiderio",
    school: "divinazione",
    description: "Esprimi un desiderio per duplicare incantesimi arcani",
  },
  {
    level: 10,
    url: "/wiki/Fermare_il_Tempo",
    name: "Fermare il Tempo Fermare il Tempo",
    school: "trasmutazione",
    description: "Fermi brevemente il tempo per tutto tranne che per te",
  },
  {
    level: 10,
    url: "/wiki/Portale",
    name: "Portale Portale",
    school: "evocazione",
    description: "Apri un portale verso un altro piano",
  },
  {
    level: 10,
    url: "/wiki/Ricostruire",
    name: "Ricostruire Ricostruire",
    school: "evocazione",
    description: "Ricrei un oggetto distrutto",
  },
];

const spells = [...divineSpells, ...arcaneSpells];

export default spells;
