import traditions from "./traditions";

const baseSpells = {
  prestidigitazione: {
    level: 0,
    url: "/wiki/Prestidigitazione",
    name: "Prestidigitazione",
    school: "invocazione",
    description: "Esegui un trucco magico minore",
    source: traditions.all,
  },
  individuazioneMagico: {
    level: 0,
    url: "/wiki/Individuazione_del_Magico",
    name: "Individuazione del Magico",
    school: "divinazione",
    description: "Percepisci la vicinanza della magia",
    source: traditions.all,
  },
  leggereAura: {
    level: 0,
    url: "/wiki/Leggere_Aura",
    name: "Leggere Aura",
    school: "divinazione",
    description:
      "Vieni a sapere se un oggetto è magico e ne determini la scuola di magia",
    source: traditions.all,
  },
  sigillo: {
    level: 0,
    url: "/wiki/Sigillo",
    name: "Sigillo",
    school: "trasmutazione",
    description: "Apponi un marchio magico",
    source: traditions.all,
  },
};

const baseAttackSpells = {
  raggioGelo: {
    level: 0,
    url: "/wiki/Raggio_di_Gelo",
    name: "Raggio di Gelo",
    school: "invocazione",
    description: "Infliggi danni da freddo a una creatura",
    source: ["arcana"],
  },
  distruggereNonMorti: {
    level: 0,
    url: "/wiki/Distruggere_Non_Morti",
    name: "Distruggere Non Morti",
    school: "necromanzia",
    description: "Infliggi danni da energia positiva ai non morti",
    source: ["bianca"],
  },
  lanciaDivina: {
    level: 0,
    url: "/wiki/Lancia_Divina",
    name: "Lancia Divina",
    school: "invocazione",
    description:
      "Scagli energia divina che infligge danni in base all'allineamento della tua divinità",
    source: ["runica"],
  },
  proiettileTelecinetico: {
    level: 0,
    url: "/wiki/Proiettile_Telecinetico",
    name: "Proiettile Telecinetico",
    school: "invocazione",
    description: "Scagli un oggetto contro una creatura",
    source: ["occulta"],
  },
  arcoElettrico: {
    level: 0,
    url: "/wiki/Arco_Elettrico",
    name: "Arco Elettrico",
    school: "invocazione",
    description: "Colpisci una o due creature con fulmini",
    source: ["primeva"],
  },
  produrreFiamma: {
    level: 0,
    url: "/wiki/Produrre_Fiamma",
    name: "Produrre Fiamma",
    school: "invocazione",
    description: "Accendi piccole fiamme per attaccare da vicino o a distanza",
    source: ["demoniaca"],
  },
  fiottoAcido: {
    level: 0,
    url: "/wiki/Fiotto_Acido",
    name: "Fiotto Acido",
    school: "invocazione",
    description: "Infliggi danni da acido alle creature",
    source: ["fatata"],
  },
  frastornare: {
    level: 0,
    url: "/wiki/Frastornare",
    name: "Frastornare",
    school: "ammaliamento",
    description:
      "Infliggi danni alla mente di una creatura, possibilmente fino a stordirla",
    source: ["satanica"],
  },
  toccoGelido: {
    level: 0,
    url: "/wiki/Tocco_Gelido",
    name: "Tocco Gelido",
    school: "necromanzia",
    description: "Il tuo tocco ferisce i viventi o disorienta i non morti",
    source: ["nera"],
  },
};

const combatSpells = {
  impedimento: {
    level: 0,
    url: "/wiki/Impedimento",
    name: "Impedimento",
    school: "evocazione",
    description: "Evochi un rampicante per intralciare una creatura",
    source: ["primeva", "arcana", "fatata"],
  },
  scudo: {
    level: 0,
    url: "/wiki/Scudo",
    name: "Scudo",
    school: "abiurazione",
    description:
      "Uno scudo di forza magica blocca gli attacchi e dardo incantato",
    source: ["arcana", "runica"],
  },
  stabilizzare: {
    level: 0,
    url: "/wiki/Stabilizzare",
    name: "Stabilizzare",
    school: "necromanzia",
    description: "Stabilizzi una creatura morente.",
    source: ["bianca", "primeva"],
  },
  interdizioneMinaccia: {
    level: 0,
    url: "/wiki/Interdizione_alla_Minaccia",
    name: "Interdizione alla Minaccia",
    school: "abiurazione",
    description: "Proteggi un alleato da un nemico specifico",
    source: ["bianca", "occulta", "nera", "demoniaca"],
  },
  guida: {
    level: 0,
    url: "/wiki/Incantesimi/Guida",
    name: "Guida",
    school: "divinazione",
    description: "Una guida divina fornisce un bonus su un tiro",
    source: ["runica", "occulta", "satanica", "nera", "demoniaca"],
  },
  suonoFantasma: {
    level: 0,
    url: "/wiki/Suono_Fantasma",
    name: "Suono Fantasma",
    school: "illusione",
    description: "Crei suoni falsi",
    source: ["satanica", "fatata"],
  },
};

const utilitySpells = {
  luciDanzanti: {
    level: 0,
    url: "/wiki/Luci_Danzanti",
    name: "Luci Danzanti",
    school: "invocazione",
    description: "Crea quattro luci fluttuanti che puoi muovere",
    source: ["fatata", "arcana", "primeva", "demoniaca"],
  },
  luce: {
    level: 0,
    url: "/wiki/Luce",
    name: "Luce",
    school: "invocazione",
    description: "Fai risplendere un oggetto",
    source: ["arcana", "runica"],
  },
  messaggio: {
    level: 0,
    url: "/wiki/Messaggio",
    name: "Messaggio",
    school: "divinazione",
    description:
      "Pronunci un messaggio a una creatura distante, la quale può rispondere",
    source: ["bianca", "satanica", "nera"],
  },
  condividerePassati: {
    level: 0,
    url: "/wiki/Condividere_i_Passati",
    name: "Condividere i Passati",
    school: "divinazione",
    description:
      "Toccando la fronte dei bersagli, metti le loro menti in contatto.",
    source: ["bianca", "occulta", "nera"],
  },
  manoMagica: {
    level: 0,
    url: "/wiki/Mano_Magica",
    name: "Mano Magica",
    school: "invocazione",
    description: "Dai l'ordine a una mano magica di muovere un oggetto",
    source: ["occulta", "fatata", "satanica"],
  },
  conoscereDirezione: {
    level: 0,
    url: "/wiki/Conoscere_Direzione",
    name: "Conoscere Direzione",
    school: "divinazione",
    description: "Sai in quale direzione è il nord",
    source: ["runica", "primeva", "demoniaca"],
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
