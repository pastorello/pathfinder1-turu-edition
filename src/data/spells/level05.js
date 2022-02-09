const allLevels = [6, 7, 8, 9, 10];
const baseAttackSpells = {
  conoFreddo: {
    level: 5,
    url: "/wiki/Cono_di_Freddo",
    name: "Cono di Freddo",
    school: "invocazione",
    description: "Un freddo estremo infligge danni alle creature in un cono",
    source: ["fatata"],
    intensified: allLevels,
  },
  esilio: {
    level: 5,
    url: "/wiki/Esilio",
    name: "Esilio",
    school: "abiurazione",
    description: "Fai tornare una creatura sul suo piano natio",
    source: ["arcana", "runica", "blasfema"],
    intensified: [9],
  },
  respiroVita: {
    level: 5,
    url: "/wiki/Respiro_di_Vita",
    name: "Respiro di Vita",
    school: "necromanzia",
    description:
      "Reagisci per rianimare una creatura al momento della sua morte",
    source: ["divina", "primeva", "runica"],
  },
  tempestaAcida: {
    level: 5,
    url: "/wiki/Tempesta_Acida",
    name: "Tempesta Acida",
    school: "invocazione",
    description:
      "Richiami una tempesta di pioggia acida che bombarda l'area per la durata dell'incantesimo",
    source: ["primeva"],
    intensified: [7, 9],
  },
  colpoInfuocato: {
    level: 5,
    url: "/wiki/Colpo_Infuocato",
    name: "Colpo Infuocato",
    school: "invocazione",
    description: "Evochi il fuoco divino dal cielo",
    source: ["divina", "infernale"],
  },
  tentacoliNeri: {
    level: 5,
    url: "/wiki/Tentacoli_Neri",
    name: "Tentacoli Neri",
    school: "evocazione",
    description: "Tentacoli in  un'area afferrano le creature",
    source: ["infernale"],
  },
  esplosioneOmbra: {
    level: 5,
    url: "/wiki/Esplosione_d%27Ombra",
    name: "Esplosione d'Ombra",
    school: "invocazione",
    description: "Crei un cono d'ombra che infligge danni del tipo scelto",
    source: ["occulta"],
    intensified: allLevels,
  },
  nubeMortale: {
    level: 5,
    url: "/wiki/Nube_Mortale",
    name: "Nube Mortale",
    school: "necromanzia",
    description: "Avveleni le creature in una nube che si allontana da te",
    source: ["blasfema"],
    intensified: allLevels,
  },
  impulsoSinaptico: {
    level: 5,
    url: "/wiki/Impulso_Sinaptico",
    name: "Impulso Sinaptico",
    school: "ammaliamento",
    description: "Rallenti le creature con un'esplosione mentale",
    source: ["nera"],
  },
};

const combatSpells = {
  morteIllusoria: {
    level: 5,
    url: "/wiki/Morte_Illusoria",
    name: "Morte Illusoria",
    school: "illusione",
    description: "Il bersaglio sembra morire, ma in realtà diventa invisibile",
    source: ["blasfema", "arcana", "fatata"],
    intensified: [7],
  },
  evocaDrago: {
    level: 5,
    url: "/wiki/Evoca_Drago",
    name: "Evoca Drago",
    school: "evocazione",
    description: "Evochi un drago che combatta con te",
    source: ["arcana"],
    intensified: allLevels,
  },
  trasportoTelecinetico: {
    level: 5,
    url: "/wiki/Trasporto_Telecinetico",
    name: "Trasporto Telecinetico",
    school: "invocazione",
    description: "Sposti un oggetto grande",
    source: ["arcana", "occulta"],
  },
  interdizioneMorte: {
    level: 5,
    url: "/wiki/Interdizione_alla_Morte",
    name: "Interdizione alla Morte",
    school: "abiurazione",
    description: "Proteggi una creatura dall'energia negativa",
    source: ["divina", "runica", "primeva"],
  },
  evocaCelestiale: {
    level: 5,
    url: "/wiki/Evoca_Celestiale",
    name: "Evoca Celestiale",
    school: "evocazione",
    description: "Evochi un celestiale che combatta con te",
    source: ["divina"],
    intensified: allLevels,
  },
  guardianoSpirituale: {
    level: 5,
    url: "/wiki/Guardiano_Spirituale",
    name: "Guardiano Spirituale",
    school: "abiurazione",
    description:
      "Crei un guardiano magico che attacca al tuo comando e subisce danni al posto dei tuoi alleati",
    source: ["divina", "runica"],
    intensified: [7, 9],
  },
  muroCromatico: {
    level: 5,
    url: "/wiki/Muro_Cromatico",
    name: "Muro Cromatico",
    school: "abiurazione",
    description:
      "Un muro di luci offre una protezione specifica in base al colore",
    source: ["arcana"],
    intensified: [7],
  },
  muroPietra: {
    level: 5,
    url: "/wiki/Muro_di_Pietra",
    name: "Muro di Pietra",
    school: "evocazione",
    description: "Crei un muro di pietra",
    source: ["runica"],
    intensified: [7, 9],
  },
  sottrazioneFantasma: {
    level: 5,
    url: "/wiki/Sottrazione_Fantasma",
    name: "Sottrazione Fantasma",
    school: "illusione",
    description:
      "Reagisci per ridurre il danno di un incantesimo di un nemico trasformandolo in una versione parzialmente illusoria",
    source: ["fatata"],
  },
  sinestesia: {
    level: 5,
    url: "/wiki/Sinestesia",
    name: "Sinestesia",
    school: "divinazione",
    description: "Riprogrammi i sensi di una creatura",
    source: ["fatata"],
    intensified: [9],
  },
  formaVegetale: {
    level: 5,
    url: "/wiki/Incantesimi/Forma_Vegetale",
    name: "Forma Vegetale",
    school: "trasmutazione",
    description:
      "Ti trasformi in una pericolosa creatura con il tratto vegetale",
    source: ["primeva"],
    intensified: [6],
  },
  muroGhiaccio: {
    level: 5,
    url: "/wiki/Muro_di_Ghiaccio",
    name: "Muro di Ghiaccio",
    school: "invocazione",
    description:
      "Scolpisci un muro di ghiaccio spesso 30 cm che blocca la vista e può raffreddare le creature",
    source: ["fatata"],
    intensified: [7, 9],
  },
  formaElementale: {
    level: 5,
    url: "/wiki/Incantesimi/Forma_Elementale",
    name: "Forma Elementale",
    school: "trasmutazione",
    description: "Ti trasformi in un elementale",
    source: ["fatata", "infernale", "runica", "occulta"],
    intensified: [6, 7],
  },
  mantoColori: {
    level: 5,
    url: "/wiki/Manto_di_Colori",
    name: "Manto di Colori",
    school: "illusione",
    description:
      "Colori accecanti abbagliano le creature vicine al bersaglio, e gli attacchi provocano lampi di luce abbaglianti",
    source: ["arcana"],
  },
  evocaGigante: {
    level: 5,
    url: "/wiki/Evoca_Gigante",
    name: "Evoca Gigante",
    school: "evocazione",
    description: "Evochi un gigante che combatta con te",
    source: ["primeva"],
    intensified: allLevels,
  },
  evocaNefando: {
    level: 5,
    url: "/wiki/Evoca_Nefando",
    name: "Evoca Nefando",
    school: "evocazione",
    description: "Evochi un nefando che combatta con te",
    source: ["infernale"],
    intensified: allLevels,
  },
  evocaEntità: {
    level: 5,
    url: "/wiki/Evoca_Entit%C3%A0",
    name: "Evoca Entità",
    school: "evocazione",
    description: "Evochi un'aberrazione che combatta con te",
    source: ["infernale"],
    intensified: allLevels,
  },
  frenesiaLunare: {
    level: 5,
    url: "/wiki/Frenesia_Lunare",
    name: "Frenesia Lunare",
    school: "trasmutazione",
    description:
      "Creature consenzienti sviluppano zanne ed artigli e sono in preda alla follia",
    source: ["primeva"],
    intensified: [6, 8],
  },
  piagaAbissale: {
    level: 5,
    url: "/wiki/Piaga_Abissale",
    name: "Piaga Abissale",
    school: "necromanzia",
    description: "Infliggi una maledizione che rende risucchiato",
    source: ["blasfema"],
  },
  maledizionaMarinaio: {
    level: 5,
    url: "/wiki/Maledizione_del_Marinaio",
    name: "Maledizione del Marinaio",
    school: "necromanzia",
    description: "Contagi una creatura con la maledizione del mare mosso",
    source: ["blasfema", "infernale"],
  },
  disperazioneOpprimente: {
    level: 5,
    url: "/wiki/Disperazione_Opprimente",
    name: "Disperazione Opprimente",
    school: "ammaliamento",
    description: "Fai piangere a dirotto una creatura",
    source: ["infernale"],
    intensified: [7],
  },
};

const utilitySpells = {
  scenaIllusoria: {
    level: 5,
    url: "/wiki/Scena_Illusoria",
    name: "Scena Illusoria",
    school: "illusione",
    description:
      "Crei una scena immaginaria che include più creature ed oggetti",
    source: ["nera"],
    intensified: [6, 8],
  },
  linguaggi: {
    level: 5,
    url: "/wiki/Linguaggi",
    name: "Linguaggi",
    school: "divinazione",
    description:
      "Permetti a una creatura di comprendere e parlare tutte le lingue",
    source: ["divina"],
    intensified: [7],
  },
  visioneFalsa: {
    level: 5,
    url: "/wiki/Visione_Falsa",
    name: "Visione Falsa",
    school: "illusione",
    description: "Inganni un incantesimo di scrutamento",
    source: ["arcana", "nera", "occulta"],
  },
  inviare: {
    level: 5,
    url: "/wiki/Inviare",
    name: "Inviare",
    school: "divinazione",
    description:
      "Invii un messaggio mentale a una creatura sul tuo pianeta e ricevi una risposta",
    source: ["divina", "blasfema"],
  },
  occhioIndagatore: {
    level: 5,
    url: "/wiki/Occhio_Indagatore",
    name: "Occhio Indagatore",
    school: "divinazione",
    description: "Un occhio invisibile ti trasmette ciò che vede",
    source: ["occulta", "blasfema"],
  },
  sondaMentale: {
    level: 5,
    url: "/wiki/Sonda_Mentale",
    name: "Sonda Mentale",
    school: "divinazione",
    description:
      "Accedi alle conoscenze e alle memorie nella mente di una creatura",
    source: ["nera"],
  },
  camminareOmbre: {
    level: 5,
    url: "/wiki/Camminare_nelle_Ombre",
    name: "Camminare nelle Ombre",
    school: "evocazione",
    description: "Viaggi rapidamente attraverso il Piano delle Ombre",
    source: ["occulta"],
  },
  sognarePotenziale: {
    level: 5,
    url: "/wiki/Sognare_Potenziale",
    name: "Sognare Potenziale",
    school: "ammaliamento",
    description: "Il bersaglio si riaddestra nei suoi sogni",
    source: ["occulta"],
  },
  traslazioneArborea: {
    level: 5,
    url: "/wiki/Traslazione_Arborea",
    name: "Traslazione Arborea",
    school: "evocazione",
    description: "Ti teletrasporti da un albero all'altro",
    source: ["primeva"],
    intensified: [6, 8, 9],
  },
  controllareAcqua: {
    level: 5,
    url: "/wiki/Controllare_Acqua",
    name: "Controllare Acqua",
    school: "invocazione",
    description:
      "Accresci o diminuisci il livello dell'acqua in una vasta area",
    source: ["fatata"],
  },
  passapareti: {
    level: 5,
    url: "/wiki/Passapareti",
    name: "Passapareti",
    school: "evocazione",
    description: "Formi un tunnel di terra attraverso un muro",
    source: ["runica"],
    intensified: [7],
  },
  allucinazione: {
    level: 5,
    url: "/wiki/Allucinazione",
    name: "Allucinazione",
    school: "illusione",
    description:
      "Una creatura crede che una cosa sia  un'altra, non può individuare qualcosa, oppure vede qualcosa che in realtà non c'è",
    source: ["nera"],
    intensified: [6, 8],
  },
  suggestioneInconscia: {
    level: 5,
    url: "/wiki/Suggestione_Inconscia",
    name: "Suggestione Inconscia",
    school: "ammaliamento",
    description:
      "Insinui una suggestione mentale che deve essere seguita quando si attiva un innesco",
    source: ["nera"],
    intensified: [9],
  },
  legameTelepatico: {
    level: 5,
    url: "/wiki/Legame_Telepatico",
    name: "Legame Telepatico",
    school: "divinazione",
    description:
      "Colleghi le menti con creature consenzienti per comunicare telepaticamente a grandi distanze",
    source: ["nera"],
  },
};

const totalSpells = {
  ...baseAttackSpells,
  ...combatSpells,
  ...utilitySpells,
};

const spells = Object.keys(totalSpells).map((item) => totalSpells[item]);

export default spells;
