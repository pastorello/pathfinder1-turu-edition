const primeviSpells = [
  {
    level: 8,
    url: "/wiki/Camminare_nel_Vento",
    name: "Camminare nel Vento",
    school: "trasmutazione",
    description: "Trasformi le creature in nubi rapide",
    source: "primeva",
  },
  {
    level: 8,
    url: "/wiki/Venti_Punitori",
    name: "Venti Punitori",
    school: "invocazione",
    description: "Un ciclone ostacola i voli e intrappola le creature",
    source: "primeva",
  },
];

const occultSpells = [
  {
    level: 8,
    url: "/wiki/Canto_dello_Spirito",
    name: "Canto dello Spirito",
    school: "necromanzia",
    description:
      "Canti una canzone sinistra che infligge danni a qualsiasi creatura abbia uno spirito",
  },
];

const divineSpells = [
  {
    level: 8,
    url: "/wiki/Aura_Divina",
    name: "Aura Divina",
    school: "abiurazione",
    description:
      "Gli alleati in un'aura hanno difese migliori e sono protetti contro un allineamento",
    source: "divina",
  },
  {
    level: 8,
    url: "/wiki/Epidemia_dello_Spirito",
    name: "Epidemia dello Spirito",
    school: "necromanzia",
    description: "Indebolisci un bersaglio con una maledizione contagiosa",
    energy: "negativa",
  },
  {
    level: 8,
    url: "/wiki/Ispirazione_Divina",
    name: "Ispirazione Divina",
    school: "ammaliamento",
    description:
      "L'energia spirituale recupera un incantesimo speso da una creatura",
    source: "divina",
  },
  {
    level: 8,
    url: "/wiki/Momento_di_Risanamento",
    name: "Momento di Risanamento",
    school: "necromanzia",
    description: "Conferisci un giorno di recupero in un istante",
    source: "divina",
    energy: "positiva",
  },
];

const arcaneSpells = [
  {
    level: 8,
    url: "/wiki/Campo_AntiMagia",
    name: "Campo AntiMagia",
    school: "abiurazione",
    description: "La magia non funziona in  un'area che ti circonda",
  },
  {
    level: 8,
    url: "/wiki/Consiglio_Onirico",
    name: "Consiglio Onirico",
    school: "illusione",
    description: "Comunichi attraverso un sogno condiviso",
  },
  {
    level: 8,
    url: "/wiki/Danza_Irrefrenabile",
    name: "Danza Irrefrenabile",
    school: "ammaliamento",
    description:
      "Il bersaglio è sopraffatto da una voglia irrefrenabile di danzare",
  },
  {
    level: 8,
    url: "/wiki/Forma_di_Mostruosit%C3%A0",
    name: "Forma di Mostruosità",
    school: "trasmutazione",
    description: "Ti trasformi in un potente mostro",
  },
  {
    level: 8,
    url: "/wiki/Labirinto",
    name: "Labirinto",
    school: "evocazione",
    description: "Intrappoli una creatura in un labirinto extradimensionale",
  },
  {
    level: 8,
    url: "/wiki/Muro_Prismatico",
    name: "Muro Prismatico",
    school: "abiurazione",
    description: "Crei un muro protettivo con sette strati cromatici",
  },
  {
    level: 8,
    url: "/wiki/Orrido_Avvizzimento",
    name: "Orrido Avvizzimento",
    school: "necromanzia",
    description: "Disidrati i corpi delle creature, infliggendo loro danni",
  },
  {
    level: 8,
    url: "/wiki/Osservazione_Incessante",
    name: "Osservazione Incessante",
    school: "divinazione",
    description:
      "Tu ed altre creature tracciate la posizione esatta di un soggetto attraverso lo scrutamento",
  },
  {
    level: 8,
    url: "/wiki/Parola_del_Potere,_Stordire",
    name: "Parola del Potere, Stordire",
    school: "ammaliamento",
    description: "Pronunci una parola che stordisce una creatura",
  },
  {
    level: 8,
    url: "/wiki/Raggio_Polare",
    name: "Raggio Polare",
    school: "invocazione",
    description: "Un freddo estremo infligge danni e risucchia una creatura",
  },
  {
    level: 8,
    url: "/wiki/Rivela_Locazione",
    name: "Rivela Locazione",
    school: "divinazione",
    description:
      "Scopri l'esatta locazione di un bersaglio entro un raggio illimitato",
  },
  {
    level: 8,
    url: "/wiki/Sparizione",
    name: "Sparizione",
    school: "illusione",
    description:
      "Rendi una creatura invisibile, silente e impossibile da individuare da tutti i sensi",
  },
  {
    level: 8,
    url: "/wiki/Terremoto",
    name: "Terremoto",
    school: "invocazione",
    description: "Scuoti il terreno con un terremoto devastante",
  },
  {
    level: 8,
    url: "/wiki/Trama_Scintillante",
    name: "Trama Scintillante",
    school: "illusione",
    description:
      "Crei una varietà di colori che abbagliano, confondono e stordiscono",
  },
  {
    level: 8,
    url: "/wiki/Vuoto_Mentale",
    name: "Vuoto Mentale",
    school: "abiurazione",
    description: "Proteggi una creatura da magie mentali e alcune divinazioni",
  },
];

const spells = [
  ...divineSpells,
  ...arcaneSpells,
  ...occultSpells,
  ...primeviSpells,
];

export default spells;
