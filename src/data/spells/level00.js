const primeviSpells = [
  {
    level: 0,
    url: "/wiki/Impedimento",
    name: "Impedimento",
    school: "evocazione",
    description: "Evochi un rampicante per intralciare una creatura",
    source: ["primeva"],
  },
  {
    level: 0,
    url: "/wiki/Conoscere_Direzione",
    name: "Conoscere Direzione",
    school: "divinazione",
    description: "Sai in quale direzione è il nord",
    source: ["occulta", "primeva", "runica"],
  },
];

const occultSpells = [
  {
    level: 0,
    url: "/wiki/Condividere_i_Passati",
    name: "Condividere i Passati",
    school: "divinazione",
    description:
      "Toccando la fronte dei bersagli, metti le loro menti in contatto.",
    source: ["occulta"],
  },
];

const divineSpells = [
  {
    level: 0,
    url: "/wiki/Distruggere_Non_Morti",
    name: "Distruggere Non Morti",
    school: "necromanzia",
    description: "Infliggi danni da energia positiva ai non morti",
    source: ["bianca"],
  },
  {
    level: 0,
    url: "/wiki/Incantesimi/Guida",
    name: "Guida",
    school: "divinazione",
    description: "Una guida divina fornisce un bonus su un tiro",
    source: ["demoniaca", "runica", "occulta"],
  },
  {
    level: 0,
    url: "/wiki/Interdizione_alla_Minaccia",
    name: "Interdizione alla Minaccia",
    school: "abiurazione",
    description: "Proteggi un alleato da un nemico specifico",
    source: ["bianca"],
  },
  {
    level: 0,
    url: "/wiki/Lancia_Divina",
    name: "Lancia Divina",
    school: "invocazione",
    description:
      "Scagli energia divina che infligge danni in base all'allineamento della tua divinità",
    source: ["demoniaca", "nera"],
  },
  {
    level: 0,
    url: "/wiki/Stabilizzare",
    name: "Stabilizzare",
    school: "necromanzia",
    description: "Stabilizzi una creatura morente.",
    source: ["bianca", "primeva"],
  },
];

const arcaneSpells = [
  {
    level: 0,
    url: "/wiki/Arco_Elettrico",
    name: "Arco Elettrico",
    school: "invocazione",
    description: "Colpisci una o due creature con fulmini",
    source: ["primeva"],
  },
  {
    level: 0,
    url: "/wiki/Fiotto_Acido",
    name: "Fiotto Acido",
    school: "invocazione",
    description: "Infliggi danni da acido alle creature",
    source: ["demoniaca"],
  },
  {
    level: 0,
    url: "/wiki/Frastornare",
    name: "Frastornare",
    school: "ammaliamento",
    description:
      "Infliggi danni alla mente di una creatura, possibilmente fino a stordirla",
    source: ["satanica"],
  },
  {
    level: 0,
    url: "/wiki/Individuazione_del_Magico",
    name: "Individuazione del Magico",
    school: "divinazione",
    description: "Percepisci la vicinanza della magia",
    source: [
      "bianca",
      "arcana",
      "occulta",
      "satanica",
      "runica",
      "nera",
      "demoniaca",
      "primeva",
    ],
  },
  {
    level: 0,
    url: "/wiki/Leggere_Aura",
    name: "Leggere Aura",
    school: "divinazione",
    description:
      "Vieni a sapere se un oggetto è magico e ne determini la scuola di magia",
    source: [
      "bianca",
      "arcana",
      "occulta",
      "satanica",
      "runica",
      "nera",
      "primeva",
    ],
  },
  {
    level: 0,
    url: "/wiki/Luce",
    name: "Luce",
    school: "invocazione",
    description: "Fai risplendere un oggetto",
    source: ["arcana", "bianca", "elementale"],
  },
  {
    level: 0,
    url: "/wiki/Luci_Danzanti",
    name: "Luci Danzanti",
    school: "invocazione",
    description: "Crea quattro luci fluttuanti che puoi muovere",
    source: ["elementale", "arcana"],
  },
  {
    level: 0,
    url: "/wiki/Mano_Magica",
    name: "Mano Magica",
    school: "invocazione",
    description: "Dai l'ordine a una mano magica di muovere un oggetto",
    source: ["occulta"],
  },
  {
    level: 0,
    url: "/wiki/Messaggio",
    name: "Messaggio",
    school: "divinazione",
    description:
      "Pronunci un messaggio a una creatura distante, la quale può rispondere",
    source: ["satanica"],
  },
  {
    level: 0,
    url: "/wiki/Prestidigitazione",
    name: "Prestidigitazione",
    school: "invocazione",
    description: "Esegui un trucco magico minore",
    source: ["elementale", "arcana"],
  },
  {
    level: 0,
    url: "/wiki/Produrre_Fiamma",
    name: "Produrre Fiamma",
    school: "invocazione",
    description: "Accendi piccole fiamme per attaccare da vicino o a distanza",
    source: ["elementale", "demoniaca"],
  },
  {
    level: 0,
    url: "/wiki/Proiettile_Telecinetico",
    name: "Proiettile Telecinetico",
    school: "invocazione",
    description: "Scagli un oggetto contro una creatura",
    source: ["elementale"],
  },
  {
    level: 0,
    url: "/wiki/Raggio_di_Gelo",
    name: "Raggio di Gelo",
    school: "invocazione",
    description: "Infliggi danni da freddo a una creatura",
    source: ["elementale", "nera"],
  },
  {
    level: 0,
    url: "/wiki/Scudo",
    name: "Scudo",
    school: "abiurazione",
    description:
      "Uno scudo di forza magica blocca gli attacchi e dardo incantato",
    source: ["arcana", "runica"],
  },
  {
    level: 0,
    url: "/wiki/Sigillo",
    name: "Sigillo",
    school: "trasmutazione",
    description: "Apponi un marchio magico",
    source: ["runica", "nera", "demoniaca", "satanica"],
  },
  {
    level: 0,
    url: "/wiki/Suono_Fantasma",
    name: "Suono Fantasma",
    school: "illusione",
    description: "Crei suoni falsi",
    source: ["satanica"],
  },
  {
    level: 0,
    url: "/wiki/Tocco_Gelido",
    name: "Tocco Gelido",
    school: "necromanzia",
    description: "Il tuo tocco ferisce i viventi o disorienta i non morti",
    source: ["nera"],
  },
];

const spells = [
  ...divineSpells,
  ...arcaneSpells,
  ...occultSpells,
  ...primeviSpells,
];

export default spells;
