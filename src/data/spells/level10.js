const primeviSpells = [
  {
    level: 10,
    url: "/wiki/Mandria_Primeva",
    name: "Mandria Primeva",
    school: "trasmutazione",
    description: "Trasformi creature consenzienti in mammut",
    source: "primeva",
  },
  {
    level: 10,
    url: "/wiki/Cataclisma",
    name: "Cataclisma",
    school: "invocazione",
    description: "Evochi un rovinoso cataclisma istantaneo",
    source: "primeva",
  },
];

const occultSpells = [
  {
    level: 10,
    url: "/wiki/Verit%C3%A0_Fittizia",
    name: "Verità Fittizia",
    school: "ammaliamento",
    description: "Fai credere alle creature che un fatto sia vero",
  },
];

const divineSpells = [
  {
    level: 10,
    url: "/wiki/Avatar",
    name: "Avatar",
    school: "trasmutazione",
    description:
      "Ti trasformi in una forma da battaglia determinata dalla tua divinità",
    source: "divina",
  },
  {
    level: 10,
    url: "/wiki/Reviviscenza",
    name: "Reviviscenza",
    school: "necromanzia",
    description:
      "Guarisci le creature in un'area e riporti temporaneamente in vita i morti",
    energy: "positiva",
    source: "divina",
  },
];

const arcaneSpells = [
  {
    level: 10,
    url: "/wiki/Desiderio",
    name: "Desiderio",
    school: "divinazione",
    description: "Esprimi un desiderio per duplicare incantesimi",
  },
  {
    level: 10,
    url: "/wiki/Fermare_il_Tempo",
    name: "Fermare il Tempo",
    school: "trasmutazione",
    description: "Fermi brevemente il tempo per tutto tranne che per te",
  },
  {
    level: 10,
    url: "/wiki/Portale",
    name: "Portale",
    school: "evocazione",
    description: "Apri un portale verso un altro piano",
  },
  {
    level: 10,
    url: "/wiki/Ricostruire",
    name: "Ricostruire",
    school: "evocazione",
    description: "Ricrei un oggetto distrutto",
  },
];

const spells = [
  ...divineSpells,
  ...arcaneSpells,
  ...occultSpells,
  ...primeviSpells,
];

export default spells;
