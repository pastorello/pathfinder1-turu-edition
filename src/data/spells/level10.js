const baseAttackSpells = {
  desiderio: {
    level: 10,
    url: "/wiki/Desiderio",
    name: "Desiderio",
    school: "divinazione",
    description: "Esprimi un desiderio per duplicare incantesimi",
    source: ["arcana"],
  },
  miracolo: {
    level: 10,
    url: "/wiki/Miracolo",
    name: "Miracolo",
    school: "divinazione",
    description: "Chiedi intercessione per duplicare incantesimi divini",
    source: ["bianca"],
  },
  fenomenoPrimevo: {
    level: 10,
    url: "/wiki/Fenomeno_Primevo",
    name: "Fenomeno Primevo",
    school: "divinazione",
    description:
      "Richiedi intercessione alla natura per duplicare incantesimi primevi",
    source: ["primeva"],
  },
  incarnareNatura: {
    level: 10,
    url: "/wiki/Incarnare_Natura",
    name: "Incarnare Natura",
    school: "trasmutazione",
    description: "Ti trasformi in un'enorme incarnazione della natura",
    source: ["primeva"],
  },
  cataclisma: {
    level: 10,
    url: "/wiki/Cataclisma",
    name: "Cataclisma",
    school: "invocazione",
    description: "Evochi un rovinoso cataclisma istantaneo",
    source: ["demoniaca"],
  },
  alterareRealtà: {
    level: 10,
    url: "/wiki/Alterare_Realt%C3%A0",
    name: "Alterare Realtà",
    school: "divinazione",
    description: "Distorci la realtà per duplicare incantesimi occulti",
    source: ["occulta"],
  },
  avatar: {
    level: 10,
    url: "/wiki/Avatar",
    name: "Avatar",
    school: "trasmutazione",
    description:
      "Ti trasformi in una forma da battaglia determinata dalla tua divinità",
    source: ["demoniaca"],
  },
};

const combatSpells = {
  mandriaPrimeva: {
    level: 10,
    url: "/wiki/Mandria_Primeva",
    name: "Mandria Primeva",
    school: "trasmutazione",
    description: "Trasformi creature consenzienti in mammut",
    source: ["primeva", "fatata"],
  },
  reviviscenza: {
    level: 10,
    url: "/wiki/Reviviscenza",
    name: "Reviviscenza",
    school: "necromanzia",
    description:
      "Guarisci le creature in un'area e riporti temporaneamente in vita i morti",
    source: ["bianca"],
  },
  fermareTempo: {
    level: 10,
    url: "/wiki/Fermare_il_Tempo",
    name: "Fermare il Tempo",
    school: "trasmutazione",
    description: "Fermi brevemente il tempo per tutto tranne che per te",
    source: ["occulta", "arcana"],
  },
};

const utilitySpells = {
  veritàFittizia: {
    level: 10,
    url: "/wiki/Verit%C3%A0_Fittizia",
    name: "Verità Fittizia",
    school: "ammaliamento",
    description: "Fai credere alle creature che un fatto sia vero",
    source: ["satanica"],
  },
  portale: {
    level: 10,
    url: "/wiki/Portale",
    name: "Portale",
    school: "evocazione",
    description: "Apri un portale verso un altro piano",
    source: ["arcana", "occulta"],
  },
  ricostruire: {
    level: 10,
    url: "/wiki/Ricostruire",
    name: "Ricostruire",
    school: "evocazione",
    description: "Ricrei un oggetto distrutto",
    source: ["runica"],
  },
};

const totalSpells = {
  ...baseAttackSpells,
  ...combatSpells,
  ...utilitySpells,
};

const spells = Object.keys(totalSpells).map((item) => totalSpells[item]);

export default spells;
