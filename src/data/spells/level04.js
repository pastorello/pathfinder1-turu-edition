const primeviSpells = [
  {
    level: 4,
    url: "/wiki/Forma_di_Dinosauro",
    name: "Forma di Dinosauro",
    school: "trasmutazione",
    description: "Ti trasformi in un dinosauro",
  },
  {
    level: 4,
    url: "/wiki/Parlare_con_i_Vegetali",
    name: "Parlare con i Vegetali",
    school: "divinazione",
    description: "Comunichi con le piante e le creature con il tratto vegetale",
    source: "primeva",
  },
  {
    level: 4,
    url: "/wiki/Torrente_Impetuoso",
    name: "Torrente Impetuoso",
    school: "invocazione",
    description: "Respingi le creature con un rovinoso torrente d'acqua",
    source: "primeva",
  },
];

const occultSpells = [
  {
    level: 4,
    url: "/wiki/Loquacit%C3%A0",
    name: "Loquacità",
    school: "ammaliamento",
    description: "Menti impunemente",
  },
  {
    level: 4,
    url: "/wiki/Modificare_Memoria",
    name: "Modificare Memoria",
    school: "ammaliamento",
    description: "Cambi o impianti memorie",
  },
];

const divineSpells = [
  {
    level: 4,
    url: "/wiki/Anamnesi_Spirituale",
    name: "Anamnesi Spirituale",
    school: "necromanzia",
    description:
      "La mente del bersaglio viene sopraffatta dai ricordi di una vita passata che sembrano incredibilmente reali",
  },
  {
    level: 4,
    url: "/wiki/Cadavere_Parlante",
    name: "Cadavere Parlante",
    school: "necromanzia",
    description: "Un cadavere risponde a tre domande",
  },
  {
    level: 4,
    url: "/wiki/Camminare_nell%27Aria",
    name: "Camminare nell'Aria",
    school: "trasmutazione",
    description: "Cammini nell'aria come se fosse terreno solido",
  },
  {
    level: 4,
    url: "/wiki/Cascata_Sacra",
    name: "Cascata Sacra",
    school: "invocazione",
    description:
      "Trasforma una fiala di acqua santa in un'esplosione di acqua benedetta",
    source: "divina",
    energy: "positiva",
  },
  {
    level: 4,
    url: "/wiki/Collera_Divina",
    name: "Collera Divina",
    school: "invocazione",
    description:
      "Ostacoli e infliggi danni alle creature di allineamento opposto alla tua divinità",
    source: "divina",
  },
  {
    level: 4,
    url: "/wiki/Faro_Vitale",
    name: "Faro Vitale",
    school: "necromanzia",
    description: "Irradi vitalità che guarisce le creature che ti toccano",
    source: "divina",
    energy: "positiva",
  },
  {
    level: 4,
    url: "/wiki/Leggere_Premonizioni",
    name: "Leggere Premonizioni",
    school: "divinazione",
    description: "Apprendi un indizio su un evento che sta per accadere",
  },
  {
    level: 4,
    url: "/wiki/Rimuovi_Maledizione",
    name: "Rimuovi Maledizione",
    school: "necromanzia",
    description: "Contrasti una maledizione che affligge una creatura",
    source: "divina",
    energy: "positiva",
  },
  {
    level: 4,
    url: "/wiki/Ritorsione_dell%27Anatema",
    name: "Ritorsione dell'Anatema",
    school: "ammaliamento",
    description:
      "Provochi sofferenza mentale a chi scaglia un anatema contro la tua divinità",
    source: "divina",
  },
];

const arcaneSpells = [
  {
    level: 4,
    url: "/wiki/Allucinazione_Mortale",
    name: "Allucinazione Mortale",
    school: "illusione",
    description:
      "Introduci  un'immagine spaventosa nella mente di una creatura per spaventarla anche al punto di morire",
  },
  {
    level: 4,
    url: "/wiki/Ancora_Dimensionale",
    name: "Ancora Dimensionale",
    school: "abiurazione",
    description:
      "Impedisci a una creatura di teletrasportarsi o viaggiare in altri piani",
  },
  {
    level: 4,
    url: "/wiki/Chiaroveggenza",
    name: "Chiaroveggenza",
    school: "divinazione",
    description: "Puoi vedere attraverso un sensore magico invisibile",
  },
  {
    level: 4,
    url: "/wiki/Confusione",
    name: "Confusione",
    school: "ammaliamento",
    description: "Disorienti una creatura, facendola agire a caso",
  },
  {
    level: 4,
    url: "/wiki/Creazione",
    name: "Creazione",
    school: "evocazione",
    description: "Crei un oggetto temporaneo",
  },
  {
    level: 4,
    url: "/wiki/Forma_Gassosa",
    name: "Forma Gassosa",
    school: "trasmutazione",
    description: "Trasforma una creatura consenziente in una nube volante",
  },
  {
    level: 4,
    url: "/wiki/Forma_Volante",
    name: "Forma Volante",
    school: "trasmutazione",
    description: "Ti trasformi in un combattente volante",
  },
  {
    level: 4,
    url: "/wiki/Frasi_Dimenticate",
    name: "Frasi Dimenticate",
    school: "divinazione",
    description:
      "Usi questo incantesimo per restaurare il materiale da importanti testi, storici o meno",
  },
  {
    level: 4,
    url: "/wiki/Globo_di_Invulnerabilit%C3%A0",
    name: "Globo di Invulnerabilità",
    school: "abiurazione",
    description:
      "Una sfera magica contrasta gli incantesimi che tentano di entrarvi",
  },
  {
    level: 4,
    url: "/wiki/Immunit%C3%A0_agli_Incantesimi",
    name: "Immunità agli Incantesimi",
    school: "abiurazione",
    description: "Pronuncia un incantesimo per negare i suoi effetti su di te",
  },
  {
    level: 4,
    url: "/wiki/Incubo",
    name: "Incubo",
    school: "illusione",
    description: "Infesta i sogni di una creatura con incubi inquietanti",
  },
  {
    level: 4,
    url: "/wiki/Individuazione_dello_Scrutamento",
    name: "Individuazione dello Scrutamento",
    school: "divinazione",
    description: "Scopri se gli effetti dello scrutamento sono nell'area",
  },
  {
    level: 4,
    url: "/wiki/Intermittenza",
    name: "Intermittenza",
    school: "evocazione",
    description: "Ti sposti rapidamente tra i piani, svanendo e riapparendo",
  },
  {
    level: 4,
    url: "/wiki/Libert%C3%A0_di_Movimento",
    name: "Libertà di Movimento",
    school: "abiurazione",
    description: "Una creatura supera gli impedimenti al suo movimento",
  },
  {
    level: 4,
    url: "/wiki/Maledizione_del_Reietto",
    name: "Maledizione del Reietto",
    school: "ammaliamento",
    description:
      "Affliggi una creatura con una maledizione che la rende sgradevole e fastidiosa",
  },
  {
    level: 4,
    url: "/wiki/Muro_di_Fuoco",
    name: "Muro di Fuoco",
    school: "invocazione",
    description:
      "Crei un muro ardente che brucia le creature che vi passano attraverso",
  },
  {
    level: 4,
    url: "/wiki/Nebbia_Solida",
    name: "Nebbia Solida",
    school: "evocazione",
    description:
      "Evochi una nebbia fitta difficile da attraversare che oscura la vista",
  },
  {
    level: 4,
    url: "/wiki/Pelle_di_Pietra",
    name: "Pelle di Pietra",
    school: "abiurazione",
    description: "Indurisci la pelle di una creatura in pietra durevole",
  },
  {
    level: 4,
    url: "/wiki/Porta_Dimensionale",
    name: "Porta Dimensionale",
    school: "evocazione",
    description: "Ti teletrasporti fino a 36 metri",
  },
  {
    level: 4,
    url: "/wiki/Rivela_Bugie",
    name: "Rivela Bugie",
    school: "divinazione",
    description: "Individui abilmente bugie e falsità",
  },
  {
    level: 4,
    url: "/wiki/Santuario_Privato",
    name: "Santuario Privato",
    school: "abiurazione",
    description:
      "Una nebbia nera impedisce di percepire, scrutare e leggere nella mente di chiunque al suo interno",
  },
  {
    level: 4,
    url: "/wiki/Scaglie_Riflettenti",
    name: "Scaglie Riflettenti",
    school: "abiurazione",
    description:
      "Ti crescono una serie di colorate scaglie luminose o  un'armatura di scaglie che conservano l'energia prima di rilasciarla in  un'esplosione finale",
  },
  {
    level: 4,
    url: "/wiki/Scolpire_Pietra",
    name: "Scolpire Pietra",
    school: "trasmutazione",
    description: "Scolpisci un cubo di pietra",
  },
  {
    level: 4,
    url: "/wiki/Scudo_di_Fuoco",
    name: "Scudo di Fuoco",
    school: "invocazione",
    description:
      "Le fiamme ti proteggono dal freddo e feriscono coloro che ti toccano",
  },
  {
    level: 4,
    url: "/wiki/Sfera_Elastica",
    name: "Sfera Elastica",
    school: "abiurazione",
    description:
      "Crei una sfera di forza che blocca qualsiasi cosa tenti di attraversarla",
  },
  {
    level: 4,
    url: "/wiki/Suggestione",
    name: "Suggestione",
    school: "ammaliamento",
    description: "Suggerisci a una creatura una linea di azione da seguire",
  },
  {
    level: 4,
    url: "/wiki/Telepatia",
    name: "Telepatia",
    school: "divinazione",
    description: "Comunichi telepaticamente con qualsiasi creatura vicina",
  },
  {
    level: 4,
    url: "/wiki/Tempesta_di_Armi",
    name: "Tempesta di Armi",
    school: "invocazione",
    description:
      "Moltiplica un'arma che stai impugnando ed attacca più creature con essa",
  },
  {
    level: 4,
    url: "/wiki/Terreno_Illusorio",
    name: "Terreno Illusorio",
    school: "illusione",
    description: "Un ambiente naturale appare come un altro tipo di terreno",
  },
  {
    level: 4,
    url: "/wiki/Trucco_della_Corda",
    name: "Trucco della Corda",
    school: "evocazione",
    description:
      "Animi una corda che sale verso un nascondiglio extradimensionale",
  },
  {
    level: 4,
    url: "/wiki/Velo",
    name: "Velo",
    school: "illusione",
    description: "Camuffi molte creature in altre creature",
  },
  {
    level: 4,
    url: "/wiki/Incantesimi/Volare",
    name: "Volare",
    school: "trasmutazione",
    description: "Fai ottenere alla creatura bersaglio una velocità di volare",
  },
];

const spells = [
  ...divineSpells,
  ...arcaneSpells,
  ...occultSpells,
  ...primeviSpells,
];

export default spells;
