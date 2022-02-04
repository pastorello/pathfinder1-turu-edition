const baseAttackSpells = {
  spruzzoPrismatico: {
    level: 7,
    url: "/wiki/Spruzzo_Prismatico",
    name: "Spruzzo Prismatico",
    school: "invocazione",
    description:
      "Sprigioni raggi di luce arcobaleno che hanno vari effetti sulle creature in un cono",
    source: ["arcana", "fatata"],
  },
  esplosioneSolare: {
    level: 7,
    url: "/wiki/Esplosione_Solare",
    name: "Esplosione Solare",
    school: "invocazione",
    description:
      "Un globo di luce solare infligge danni da fuoco, ferisce i non morti e contrasta l'oscurità",
    source: ["bianca"],
  },
  rigenerazione: {
    level: 7,
    url: "/wiki/Rigenerazione",
    name: "Rigenerazione",
    school: "necromanzia",
    description:
      "Permetti a una creatura di guarire col tempo, la ricrescita dei suoi organi e di riattaccarsi parti del corpo",
    source: ["bianca", "primeva", "runica"],
  },
  sentenzaDivina: {
    level: 7,
    url: "/wiki/Sentenza_Divina",
    name: "Sentenza Divina",
    school: "invocazione",
    description:
      "Le creature dell'allineamento opposto alla tua divinità subiscono danni, sono indebolite, paralizzate o vengono esiliate",
    source: ["runica"],
  },
  eruzioneVulcanica: {
    level: 7,
    url: "/wiki/Eruzione_Vulcanica",
    name: "Eruzione Vulcanica",
    school: "invocazione",
    description:
      "Sprigioni spruzzi di lava che bruciano le creature e le incastonano nella roccia",
    source: ["arcana", "demoniaca"],
  },
  corpoInfuocato: {
    level: 7,
    url: "/wiki/Corpo_Infuocato",
    name: "Corpo Infuocato",
    school: "trasmutazione",
    description: "Trasformi il tuo corpo in una fiamma vivente",
    source: ["primeva", "fatata", "demoniaca"],
  },
  esplosioneOscurante: {
    level: 7,
    url: "/wiki/Esplosione_Oscurante",
    name: "Esplosione Oscurante",
    school: "necromanzia",
    description:
      "Un globo di oscurità infligge danni da freddo, ferisce i viventi e prevale sulla luce",
    source: ["occulta", "nera"],
  },
  faroTemporale: {
    level: 7,
    url: "/wiki/Faro_Temporale",
    name: "Faro Temporale",
    school: "divinazione",
    description:
      "Crei un faro nel tempo, con l'intenzione di ritornarci se le cose dovessero mettersi male",
    source: ["occulta"],
  },
  ditoMorte: {
    level: 7,
    url: "/wiki/Dito_della_Morte",
    name: "Dito della Morte",
    school: "necromanzia",
    description:
      "Punti il dito verso una creatura per infliggere danni da energia negativa potenzialmente uccidendola all'istante",
    source: ["nera", "satanica"],
  },
  visioniPericolo: {
    level: 7,
    url: "/wiki/Visioni_di_Pericolo",
    name: "Visioni di Pericolo",
    school: "illusione",
    description:
      "Crei una visione di terrificanti creature sciamanti che provocano danni mentali",
    source: ["satanica"],
  },
};

const combatSpells = {
  inversioneGravità: {
    level: 7,
    url: "/wiki/Inversione_della_Gravit%C3%A0",
    name: "Inversione della Gravità",
    school: "invocazione",
    description: "Inverti la spinta gravitazionale in  un'area",
    source: ["arcana"],
  },
  riflettereIncantesimo: {
    level: 7,
    url: "/wiki/Incantesimi/Riflettere_Incantesimo",
    name: "Riflettere Incantesimo",
    school: "abiurazione",
    description: "Rifletti indietro gli incantesimi a chi li lanciati",
    source: ["arcana", "runica"],
  },
  bersaglioAccurato: {
    level: 7,
    url: "/wiki/Bersaglio_Accurato",
    name: "Bersaglio Accurato",
    school: "divinazione",
    description:
      "Rendi più attacchi contro una creatura particolarmente accurati",
    source: ["bianca", "runica", "primeva"],
  },
  transizioneEterea: {
    level: 7,
    url: "/wiki/Transizione_Eterea",
    name: "Transizione Eterea",
    school: "evocazione",
    description:
      "Usi il Piano Etereo per muoverti attraverso gli oggetti e nell'aria",
    source: ["occulta"],
  },
  egidaEnergia: {
    level: 7,
    url: "/wiki/Egida_di_Energia",
    name: "Egida di Energia",
    school: "abiurazione",
    description:
      "Una creatura ottiene resistenza ad acido, elettricità, forza, freddo, fuoco e sonoro",
    source: ["primeva", "fatata"],
  },
  immagineProiettata: {
    level: 7,
    url: "/wiki/Immagine_Proiettata",
    name: "Immagine Proiettata",
    school: "illusione",
    description:
      "Crei  un'illusione di te stesso attraverso la quale puoi lanciare incantesimi",
    source: ["occulta"],
  },
  duplicareNemico: {
    level: 7,
    url: "/wiki/Duplicare_Nemico",
    name: "Duplicare Nemico",
    school: "evocazione",
    description:
      "Crei un duplicato temporaneo di un nemico che combatte al tuo posto",
    source: ["fatata", "demoniaca"],
  },
  recipienteDivino: {
    level: 7,
    url: "/wiki/Recipiente_Divino",
    name: "Recipiente Divino",
    school: "trasmutazione",
    description: "Assumi le sembianze di un servitore della tua divinità",
    source: ["demoniaca", "bianca"],
  },
  parolaAccecare: {
    level: 7,
    url: "/wiki/Parola_del_Potere,_Accecare",
    name: "Parola del Potere, Accecare",
    school: "ammaliamento",
    description: "Pronunci una parola che acceca una creatura",
    source: ["nera"],
  },
  possessione: {
    level: 7,
    url: "/wiki/Possessione",
    name: "Possessione",
    school: "necromanzia",
    description:
      "Invii la tua mente e la tua anima nel corpo di un'altra creatura",
    source: ["nera"],
  },
  mascheraTerrore: {
    level: 7,
    url: "/wiki/Maschera_di_Terrore",
    name: "Maschera di Terrore",
    school: "illusione",
    description:
      "L'aspetto illusorio spaventoso di una creatura terrorizza chiunque la osservi",
    source: ["satanica"],
  },
  distorcereMente: {
    level: 7,
    url: "/wiki/Distorcere_Mente",
    name: "Distorcere Mente",
    school: "ammaliamento",
    description: "Confondi una creatura, potenzialmente in modo permanente",
    source: ["satanica"],
  },
};

const utilitySpells = {
  spostamentoPlanare: {
    level: 7,
    url: "/wiki/Spostamento_Planare",
    name: "Spostamento Planare",
    school: "evocazione",
    description: "Trasporti le creature in un altro piano di esistenza",
    source: ["arcana", "primeva", "runica", "demoniaca"],
  },
  serraturaDimensionale: {
    level: 7,
    url: "/wiki/Serratura_Dimensionale",
    name: "Serratura Dimensionale",
    school: "abiurazione",
    description: "Impedisci il teletrasporto ed i viaggi planati",
    source: ["runica"],
  },
  contingenza: {
    level: 7,
    url: "/wiki/Contingenza",
    name: "Contingenza",
    school: "abiurazione",
    description:
      "Prepari un incantesimo da innescare in seguito alle condizioni che tu decidi",
    source: ["arcana", "bianca", "occulta", "nera", "satanica", "fatata"],
  },
  retrocognizione: {
    level: 7,
    url: "/wiki/Retrocognizione",
    name: "Retrocognizione",
    school: "divinazione",
    description:
      "Percepisci impressioni di eventi passati accaduti nella tua locazione",
    source: ["bianca", "occulta", "nera"],
  },
  senzaOstacoli: {
    level: 7,
    url: "/wiki/Senza_Ostacoli",
    name: "Senza Ostacoli",
    school: "abiurazione",
    description: "Permetti alle creature di evitare ostacoli ambientali",
    source: ["primeva", "demoniaca"],
  },
  reggiaMeravigliosa: {
    level: 7,
    url: "/wiki/Reggia_Meravigliosa",
    name: "Reggia Meravigliosa",
    school: "evocazione",
    description: "Evochi una residenza sicura in un semipiano",
    source: ["fatata", "satanica"],
  },
};

const totalSpells = {
  ...baseAttackSpells,
  ...combatSpells,
  ...utilitySpells,
};

const spells = Object.keys(totalSpells).map((item) => totalSpells[item]);

export default spells;
