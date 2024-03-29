const allLevels = [9, 10];

const baseAttackSpells = {
  labirinto: {
    level: 8,
    url: "/wiki/Incantesimi/Labirinto",
    name: "Labirinto",
    school: "evocazione",
    description: "Intrappoli una creatura in un labirinto extradimensionale",
    source: ["arcana", "runica"],
  },
  raggioPolare: {
    level: 8,
    url: "/wiki/Incantesimi/Raggio_Polare",
    name: "Raggio Polare",
    school: "invocazione",
    description: "Un freddo estremo infligge danni e risucchia una creatura",
    source: ["fatata"],
    intensified: allLevels,
  },
  momentoRisanamento: {
    level: 8,
    url: "/wiki/Incantesimi/Momento_di_Risanamento",
    name: "Momento di Risanamento",
    school: "necromanzia",
    description: "Conferisci un giorno di recupero in un istante",
    source: ["divina", "primeva"],
  },
  terremoto: {
    level: 8,
    url: "/wiki/Incantesimi/Terremoto",
    name: "Terremoto",
    school: "invocazione",
    description: "Scuoti il terreno con un terremoto devastante",
    source: ["runica", "primeva", "infernale"],
    intensified: [10],
  },
  cantoSpirito: {
    level: 8,
    url: "/wiki/Incantesimi/Canto_dello_Spirito",
    name: "Canto dello Spirito",
    school: "necromanzia",
    description:
      "Canti una canzone sinistra che infligge danni a qualsiasi creatura abbia uno spirito",
    source: ["infernale", "blasfema"],
    intensified: allLevels,
  },
  epidemiaSpirito: {
    level: 8,
    url: "/wiki/Incantesimi/Epidemia_dello_Spirito",
    name: "Epidemia dello Spirito",
    school: "necromanzia",
    description: "Indebolisci un bersaglio con una maledizione contagiosa",
    source: ["blasfema"],
  },
  formaMostruosità: {
    level: 8,
    url: "/wiki/Incantesimi/Forma_di_Mostruosit%C3%A0",
    name: "Forma di Mostruosità",
    school: "trasmutazione",
    description: "Ti trasformi in un potente mostro",
    source: ["infernale", "primeva", "fatata", "infernale"],
    intensified: [9],
  },
  orridoAvvizzimento: {
    level: 8,
    url: "/wiki/Incantesimi/Orrido_Avvizzimento",
    name: "Orrido Avvizzimento",
    school: "necromanzia",
    description: "Disidrati i corpi delle creature, infliggendo loro danni",
    source: ["blasfema", "nera"],
    intensified: allLevels,
  },
};

const combatSpells = {
  tramaScintillante: {
    level: 8,
    url: "/wiki/Incantesimi/Trama_Scintillante",
    name: "Trama Scintillante",
    school: "illusione",
    description:
      "Crei una varietà di colori che abbagliano, confondono e stordiscono",
    source: ["arcana", "fatata"],
  },
  muroPrismatico: {
    level: 8,
    url: "/wiki/Incantesimi/Muro_Prismatico",
    name: "Muro Prismatico",
    school: "abiurazione",
    description: "Crei un muro protettivo con sette strati cromatici",
    source: ["arcana", "runica"],
  },
  auraDivina: {
    level: 8,
    url: "/wiki/Incantesimi/Aura_Divina",
    name: "Aura Divina",
    school: "abiurazione",
    description:
      "Gli alleati in un'aura hanno difese migliori e sono protetti contro un allineamento",
    source: ["divina", "blasfema"],
  },
  ispirazioneDivina: {
    level: 8,
    url: "/wiki/Incantesimi/Ispirazione_Divina",
    name: "Ispirazione Divina",
    school: "ammaliamento",
    description:
      "L'energia spirituale recupera un incantesimo speso da una creatura",
    source: ["divina"],
  },
  campoAntimagia: {
    level: 8,
    url: "/wiki/Incantesimi/Campo_AntiMagia",
    name: "Campo AntiMagia",
    school: "abiurazione",
    description: "La magia non funziona in  un'area che ti circonda",
    source: ["runica", "arcana", "blasfema", "divina"],
  },
  sparizione: {
    level: 8,
    url: "/wiki/Incantesimi/Sparizione",
    name: "Sparizione",
    school: "illusione",
    description:
      "Rendi una creatura invisibile, silente e impossibile da individuare da tutti i sensi",
    source: ["nera", "fatata", "arcana"],
  },
  ventiPunitori: {
    level: 8,
    url: "/wiki/Incantesimi/Venti_Punitori",
    name: "Venti Punitori",
    school: "invocazione",
    description: "Un ciclone ostacola i voli e intrappola le creature",
    source: ["occulta", "primeva"],
  },
  danzaIrrefrenabile: {
    level: 8,
    url: "/wiki/Incantesimi/Danza_Irrefrenabile",
    name: "Danza Irrefrenabile",
    school: "ammaliamento",
    description:
      "Il bersaglio è sopraffatto da una voglia irrefrenabile di danzare",
    source: ["infernale"],
  },
  parolaStordire: {
    level: 8,
    url: "/wiki/Incantesimi/Parola_del_Potere,_Stordire",
    name: "Parola del Potere, Stordire",
    school: "ammaliamento",
    description: "Pronunci una parola che stordisce una creatura",
    source: ["nera"],
    intensified: allLevels,
  },
  vuotoMentale: {
    level: 8,
    url: "/wiki/Incantesimi/Vuoto_Mentale",
    name: "Vuoto Mentale",
    school: "abiurazione",
    description: "Proteggi una creatura da magie mentali e alcune divinazioni",
    source: ["divina", "runica"],
  },
};

const utilitySpells = {
  osservazioneIncessante: {
    level: 8,
    url: "/wiki/Incantesimi/Osservazione_Incessante",
    name: "Osservazione Incessante",
    school: "divinazione",
    description:
      "Tu ed altre creature tracciate la posizione esatta di un soggetto attraverso lo scrutamento",
    source: ["occulta", "nera"],
  },
  rivelaLocazione: {
    level: 8,
    url: "/wiki/Incantesimi/Rivela_Locazione",
    name: "Rivela Locazione",
    school: "divinazione",
    description:
      "Scopri l'esatta locazione di un bersaglio entro un raggio illimitato",
    source: ["occulta", "nera"],
  },
  consiglioOnirico: {
    level: 8,
    url: "/wiki/Incantesimi/Consiglio_Onirico",
    name: "Consiglio Onirico",
    school: "illusione",
    description: "Comunichi attraverso un sogno condiviso",
    source: ["occulta"],
  },
  camminareVento: {
    level: 8,
    url: "/wiki/Incantesimi/Camminare_nel_Vento",
    name: "Camminare nel Vento",
    school: "trasmutazione",
    description: "Trasformi le creature in nubi rapide",
    source: ["occulta", "primeva", "fatata"],
  },
};

const totalSpells = {
  ...baseAttackSpells,
  ...combatSpells,
  ...utilitySpells,
};

const spells = Object.keys(totalSpells).map((item) => totalSpells[item]);

export default spells;
