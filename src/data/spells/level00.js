const allTraditions = [
  "divina",
  "arcana",
  "fatata",
  "runica",
  "occulta",
  "primeva",
  "infernale",
  "blasfema",
  "nera",
];

const allLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const baseSpells = {
  prestidigitazione: {
    level: 0,
    url: "/wiki/Incantesimi/Prestidigitazione",
    name: "Prestidigitazione",
    school: "invocazione",
    description: "Esegui un trucco magico minore",
    source: allTraditions,
  },
  individuazioneMagico: {
    level: 0,
    url: "/wiki/Incantesimi/Individuazione_del_Magico",
    name: "Individuazione del Magico",
    school: "divinazione",
    description: "Percepisci la vicinanza della magia",
    source: allTraditions,
    intensified: [3, 4],
  },
  leggereAura: {
    level: 0,
    url: "/wiki/Incantesimi/Leggere_Aura",
    name: "Leggere Aura",
    school: "divinazione",
    description:
      "Vieni a sapere se un oggetto è magico e ne determini la scuola di magia",
    source: allTraditions,
    intensified: [3, 6],
  },
  sigillo: {
    level: 0,
    url: "/wiki/Incantesimi/Sigillo",
    name: "Sigillo",
    school: "trasmutazione",
    description: "Apponi un marchio magico",
    source: allTraditions,
    intensified: [3, 5, 7],
  },
};

const baseAttackSpells = {
  raggioGelo: {
    level: 0,
    url: "/wiki/Incantesimi/Raggio_di_Gelo",
    name: "Raggio di Gelo",
    school: "invocazione",
    description: "Infliggi danni da freddo a una creatura",
    source: ["fatata"],
    intensified: allLevels,
  },
  distruggereNonMorti: {
    level: 0,
    url: "/wiki/Incantesimi/Distruggere_Non_Morti",
    name: "Distruggere Non Morti",
    school: "necromanzia",
    description: "Infliggi danni da energia positiva ai non morti",
    source: ["divina"],
    intensified: allLevels,
  },
  lanciaDivina: {
    level: 0,
    url: "/wiki/Incantesimi/Lancia_Divina",
    name: "Lancia Divina",
    school: "invocazione",
    description:
      "Scagli energia divina che infligge danni in base all'allineamento della tua divinità",
    source: ["runica"],
    intensified: allLevels,
  },
  proiettileTelecinetico: {
    level: 0,
    url: "/wiki/Incantesimi/Proiettile_Telecinetico",
    name: "Proiettile Telecinetico",
    school: "invocazione",
    description: "Scagli un oggetto contro una creatura",
    source: ["occulta"],
    intensified: allLevels,
  },
  arcoElettrico: {
    level: 0,
    url: "/wiki/Incantesimi/Arco_Elettrico",
    name: "Arco Elettrico",
    school: "invocazione",
    description: "Colpisci una o due creature con fulmini",
    source: ["arcana"],
    intensified: allLevels,
  },
  produrreFiamma: {
    level: 0,
    url: "/wiki/Incantesimi/Produrre_Fiamma",
    name: "Produrre Fiamma",
    school: "invocazione",
    description: "Accendi piccole fiamme per attaccare da vicino o a distanza",
    source: ["infernale"],
    intensified: allLevels,
  },
  fiottoAcido: {
    level: 0,
    url: "/wiki/Incantesimi/Fiotto_Acido",
    name: "Fiotto Acido",
    school: "invocazione",
    description: "Infliggi danni da acido alle creature",
    source: ["primeva"],
    intensified: allLevels,
  },
  frastornare: {
    level: 0,
    url: "/wiki/Incantesimi/Frastornare",
    name: "Frastornare",
    school: "ammaliamento",
    description:
      "Infliggi danni alla mente di una creatura, possibilmente fino a stordirla",
    source: ["nera"],
    intensified: allLevels,
  },
  toccoGelido: {
    level: 0,
    url: "/wiki/Incantesimi/Tocco_Gelido",
    name: "Tocco Gelido",
    school: "necromanzia",
    description: "Il tuo tocco ferisce i viventi o disorienta i non morti",
    source: ["blasfema"],
    intensified: allLevels,
  },
};

const combatSpells = {
  impedimento: {
    level: 0,
    url: "/wiki/Incantesimi/Impedimento",
    name: "Impedimento",
    school: "evocazione",
    description: "Evochi un rampicante per intralciare una creatura",
    source: ["primeva"],
    intensified: [2, 4],
  },
  scudo: {
    level: 0,
    url: "/wiki/Incantesimi/Scudo",
    name: "Scudo",
    school: "abiurazione",
    description:
      "Uno scudo di forza magica blocca gli attacchi e dardo incantato",
    source: ["arcana", "fatata", "occulta", "nera"],
    intensified: [3, 5, 7, 9],
  },
  stabilizzare: {
    level: 0,
    url: "/wiki/Incantesimi/Stabilizzare",
    name: "Stabilizzare",
    school: "necromanzia",
    description: "Stabilizzi una creatura morente.",
    source: ["divina", "primeva", "runica"],
  },
  interdizioneMinaccia: {
    level: 0,
    url: "/wiki/Incantesimi/Interdizione_alla_Minaccia",
    name: "Interdizione alla Minaccia",
    school: "abiurazione",
    description: "Proteggi un alleato da un nemico specifico",
    source: ["divina", "occulta", "runica"],
    intensified: [6],
  },
  guida: {
    level: 0,
    url: "/wikiGuida",
    name: "Guida",
    school: "divinazione",
    description: "Una guida divina fornisce un bonus su un tiro",
    source: ["runica", "blasfema"],
  },
  suonoFantasma: {
    level: 0,
    url: "/wiki/Incantesimi/Suono_Fantasma",
    name: "Suono Fantasma",
    school: "illusione",
    description: "Crei suoni falsi",
    source: ["nera", "fatata", "blasfema", "infernale"],
    intensified: [3, 5],
  },
};

const utilitySpells = {
  luciDanzanti: {
    level: 0,
    url: "/wiki/Incantesimi/Luci_Danzanti",
    name: "Luci Danzanti",
    school: "invocazione",
    description: "Crea quattro luci fluttuanti che puoi muovere",
    source: ["fatata", "arcana", "infernale"],
  },
  luce: {
    level: 0,
    url: "/wiki/Incantesimi/Luce",
    name: "Luce",
    school: "invocazione",
    description: "Fai risplendere un oggetto",
    source: ["arcana", "divina"],
    intensified: [4],
  },
  messaggio: {
    level: 0,
    url: "/wiki/Incantesimi/Messaggio",
    name: "Messaggio",
    school: "divinazione",
    description:
      "Pronunci un messaggio a una creatura distante, la quale può rispondere",
    source: ["divina", "nera", "blasfema", "primeva", "fatata", "infernale"],
    intensified: [3],
  },
  condividerePassati: {
    level: 0,
    url: "/wiki/Incantesimi/Condividere_i_Passati",
    name: "Condividere i Passati",
    school: "divinazione",
    description:
      "Toccando la fronte dei bersagli, metti le loro menti in contatto.",
    source: ["occulta"],
  },
  manoMagica: {
    level: 0,
    url: "/wiki/Incantesimi/Mano_Magica",
    name: "Mano Magica",
    school: "invocazione",
    description: "Dai l'ordine a una mano magica di muovere un oggetto",
    source: ["occulta", "arcana", "blasfema", "infernale", "nera"],
    intensified: [3, 5, 7],
  },
  conoscereDirezione: {
    level: 0,
    url: "/wiki/Incantesimi/Conoscere_Direzione",
    name: "Conoscere Direzione",
    school: "divinazione",
    description: "Sai in quale direzione è il nord",
    source: ["runica", "primeva"],
    intensified: [7],
  },
};

const totalSpells = {
  ...baseSpells,
  ...baseAttackSpells,
  ...combatSpells,
  ...utilitySpells,
};

const spells = Object.keys(totalSpells).map((item) => totalSpells[item]);

export default spells;
