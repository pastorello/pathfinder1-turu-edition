const primeviSpells = [
  {
    level: 5,
    url: "/wiki/Evoca_Gigante",
    name: "Evoca Gigante",
    school: "evocazione",
    description: "Evochi un gigante che combatta con te",
    source: ["primeva"],
  },
  {
    level: 5,
    url: "/wiki/Incantesimi/Forma_Vegetale",
    name: "Forma Vegetale",
    school: "trasmutazione",
    description:
      "Ti trasformi in una pericolosa creatura con il tratto vegetale",
    source: ["primeva"],
  },
  {
    level: 5,
    url: "/wiki/Frenesia_Lunare",
    name: "Frenesia Lunare",
    school: "trasmutazione",
    description:
      "Creature consenzienti sviluppano zanne ed artigli e sono in preda alla follia",
    source: ["demoniaca"],
  },
  {
    level: 5,
    url: "/wiki/Traslazione_Arborea",
    name: "Traslazione Arborea",
    school: "evocazione",
    description: "Ti teletrasporti da un albero all'altro",
    source: ["primeva"],
  },
];

const occultSpells = [
  {
    level: 5,
    url: "/wiki/Evoca_Entit%C3%A0",
    name: "Evoca Entità",
    school: "evocazione",
    description: "Evochi un'aberrazione che combatta con te",
    source: ["demoniaca"],
  },
  {
    level: 5,
    url: "/wiki/Impulso_Sinaptico",
    name: "Impulso Sinaptico",
    school: "ammaliamento",
    description: "Rallenti le creature con un'esplosione mentale",
    source: ["satanica"],
  },
  {
    level: 5,
    url: "/wiki/Sinestesia",
    name: "Sinestesia",
    school: "divinazione",
    description: "Riprogrammi i sensi di una creatura",
    source: ["satanica"],
  },
  {
    level: 5,
    url: "/wiki/Sognare_Potenziale",
    name: "Sognare Potenziale",
    school: "ammaliamento",
    description: "Il bersaglio si riaddestra nei suoi sogni",
    source: ["occulta"],
  },
];

const divineSpells = [
  {
    level: 5,
    url: "/wiki/Colpo_Infuocato",
    name: "Colpo Infuocato",
    school: "invocazione",
    description: "Evochi il fuoco divino dal cielo",
    source: ["elementale"],
  },
  {
    level: 5,
    url: "/wiki/Esplosione_d%27Ombra",
    name: "Esplosione d'Ombra",
    school: "invocazione",
    description: "Crei un cono d'ombra che infligge danni del tipo scelto",
    source: ["nera"],
  },
  {
    level: 5,
    url: "/wiki/Evoca_Celestiale",
    name: "Evoca Celestiale",
    school: "evocazione",
    description: "Evochi un celestiale che combatta con te",
    source: ["bianca"],
  },
  {
    level: 5,
    url: "/wiki/Evoca_Nefando",
    name: "Evoca Nefando",
    school: "evocazione",
    description: "Evochi un nefando che combatta con te",
    source: ["demoniaca"],
  },
  {
    level: 5,
    url: "/wiki/Guardiano_Spirituale",
    name: "Guardiano Spirituale",
    school: "abiurazione",
    description:
      "Crei un guardiano magico che attacca al tuo comando e subisce danni al posto dei tuoi alleati",
    source: ["bianca"],
  },
  {
    level: 5,
    url: "/wiki/Interdizione_alla_Morte",
    name: "Interdizione alla Morte",
    school: "abiurazione",
    description: "Proteggi una creatura dall'energia negativa",
    source: ["bianca"],
  },
  {
    level: 5,
    url: "/wiki/Piaga_Abissale",
    name: "Piaga Abissale",
    school: "necromanzia",
    description: "Infliggi una maledizione che rende risucchiato",
    source: ["nera"],
  },
  {
    level: 5,
    url: "/wiki/Respiro_di_Vita",
    name: "Respiro di Vita",
    school: "necromanzia",
    description:
      "Reagisci per rianimare una creatura al momento della sua morte",
    source: ["bianca", "primeva"],
  },
];

const arcaneSpells = [
  {
    level: 5,
    url: "/wiki/Allucinazione",
    name: "Allucinazione",
    school: "illusione",
    description:
      "Una creatura crede che una cosa sia  un'altra, non può individuare qualcosa, oppure vede qualcosa che in realtà non c'è",
    source: ["satanica"],
  },
  {
    level: 5,
    url: "/wiki/Camminare_nelle_Ombre",
    name: "Camminare nelle Ombre",
    school: "evocazione",
    description: "Viaggi rapidamente attraverso il Piano delle Ombre",
    source: ["occulta"],
  },
  {
    level: 5,
    url: "/wiki/Cono_di_Freddo",
    name: "Cono di Freddo",
    school: "invocazione",
    description: "Un freddo estremo infligge danni alle creature in un cono",
    source: ["nera"],
  },
  {
    level: 5,
    url: "/wiki/Controllare_Acqua",
    name: "Controllare Acqua",
    school: "invocazione",
    description:
      "Accresci o diminuisci il livello dell'acqua in una vasta area",
    source: ["elementale"],
  },
  {
    level: 5,
    url: "/wiki/Disperazione_Opprimente",
    name: "Disperazione Opprimente",
    school: "ammaliamento",
    description: "Fai piangere a dirotto una creatura",
    source: ["satanica"],
  },
  {
    level: 5,
    url: "/wiki/Esilio",
    name: "Esilio",
    school: "abiurazione",
    description: "Fai tornare una creatura sul suo piano natio",
    source: ["runica"],
  },
  {
    level: 5,
    url: "/wiki/Evoca_Drago",
    name: "Evoca Drago",
    school: "evocazione",
    description: "Evochi un drago che combatta con te",
    source: ["arcana"],
  },
  {
    level: 5,
    url: "/wiki/Incantesimi/Forma_Elementale",
    name: "Forma Elementale",
    school: "trasmutazione",
    description: "Ti trasformi in un elementale",
    source: ["elementale"],
  },
  {
    level: 5,
    url: "/wiki/Inviare",
    name: "Inviare",
    school: "divinazione",
    description:
      "Invii un messaggio mentale a una creatura sul tuo pianeta e ricevi una risposta",
    source: ["runica"],
  },
  {
    level: 5,
    url: "/wiki/Legame_Telepatico",
    name: "Legame Telepatico",
    school: "divinazione",
    description:
      "Colleghi le menti con creature consenzienti per comunicare telepaticamente a grandi distanze",
    source: ["arcana"],
  },
  {
    level: 5,
    url: "/wiki/Linguaggi",
    name: "Linguaggi",
    school: "divinazione",
    description:
      "Permetti a una creatura di comprendere e parlare tutte le lingue",
    source: ["bianca"],
  },
  {
    level: 5,
    url: "/wiki/Maledizione_del_Marinaio",
    name: "Maledizione del Marinaio",
    school: "necromanzia",
    description: "Contagi una creatura con la maledizione del mare mosso",
    source: ["nera"],
  },
  {
    level: 5,
    url: "/wiki/Manto_di_Colori",
    name: "Manto di Colori",
    school: "illusione",
    description:
      "Colori accecanti abbagliano le creature vicine al bersaglio, e gli attacchi provocano lampi di luce abbaglianti",
    source: ["runica"],
  },
  {
    level: 5,
    url: "/wiki/Morte_Illusoria",
    name: "Morte Illusoria",
    school: "illusione",
    description: "Il bersaglio sembra morire, ma in realtà diventa invisibile",
    source: ["arcana"],
  },
  {
    level: 5,
    url: "/wiki/Muro_Cromatico",
    name: "Muro Cromatico",
    school: "abiurazione",
    description:
      "Un muro di luci offre una protezione specifica in base al colore",
    source: ["runica"],
  },
  {
    level: 5,
    url: "/wiki/Muro_di_Ghiaccio",
    name: "Muro di Ghiaccio",
    school: "invocazione",
    description:
      "Scolpisci un muro di ghiaccio spesso 30 cm che blocca la vista e può raffreddare le creature",
    source: ["primeva"],
  },
  {
    level: 5,
    url: "/wiki/Muro_di_Pietra",
    name: "Muro di Pietra",
    school: "evocazione",
    description: "Crei un muro di pietra",
    source: ["elementale"],
  },
  {
    level: 5,
    url: "/wiki/Nube_Mortale",
    name: "Nube Mortale",
    school: "necromanzia",
    description: "Avveleni le creature in una nube che si allontana da te",
    source: ["nera"],
  },
  {
    level: 5,
    url: "/wiki/Occhio_Indagatore",
    name: "Occhio Indagatore",
    school: "divinazione",
    description: "Un occhio invisibile ti trasmette ciò che vede",
    source: ["occulta"],
  },
  {
    level: 5,
    url: "/wiki/Passapareti",
    name: "Passapareti",
    school: "evocazione",
    description: "Formi un tunnel di terra attraverso un muro",
    source: ["elementale"],
  },
  {
    level: 5,
    url: "/wiki/Scena_Illusoria",
    name: "Scena Illusoria",
    school: "illusione",
    description:
      "Crei una scena immaginaria che include più creature ed oggetti",
    source: ["arcana"],
  },
  {
    level: 5,
    url: "/wiki/Sonda_Mentale",
    name: "Sonda Mentale",
    school: "divinazione",
    description:
      "Accedi alle conoscenze e alle memorie nella mente di una creatura",
    source: ["occulta"],
  },
  {
    level: 5,
    url: "/wiki/Sottrazione_Fantasma",
    name: "Sottrazione Fantasma",
    school: "illusione",
    description:
      "Reagisci per ridurre il danno di un incantesimo di un nemico trasformandolo in una versione parzialmente illusoria",
    source: ["occulta"],
  },
  {
    level: 5,
    url: "/wiki/Suggestione_Inconscia",
    name: "Suggestione Inconscia",
    school: "ammaliamento",
    description:
      "Insinui una suggestione mentale che deve essere seguita quando si attiva un innesco",
    source: ["satanica"],
  },
  {
    level: 5,
    url: "/wiki/Tempesta_Acida",
    name: "Tempesta Acida",
    school: "invocazione",
    description:
      "Richiami una tempesta di pioggia acida che bombarda l'area per la durata dell'incantesimo",
    source: ["demoniaca"],
  },
  {
    level: 5,
    url: "/wiki/Tentacoli_Neri",
    name: "Tentacoli Neri",
    school: "evocazione",
    description: "Tentacoli in  un'area afferrano le creature",
    source: ["demoniaca"],
  },
  {
    level: 5,
    url: "/wiki/Trasporto_Telecinetico",
    name: "Trasporto Telecinetico",
    school: "invocazione",
    description: "Sposti un oggetto grande",
    source: ["arcana"],
  },
  {
    level: 5,
    url: "/wiki/Visione_Falsa",
    name: "Visione Falsa",
    school: "illusione",
    description: "Inganni un incantesimo di scrutamento",
    source: ["runica"],
  },
];

const spells = [
  ...divineSpells,
  ...arcaneSpells,
  ...occultSpells,
  ...primeviSpells,
];

export default spells;
