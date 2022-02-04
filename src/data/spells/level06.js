const baseAttackSpells = {
  disintegrazione: {
    level: 6,
    url: "/wiki/Disintegrazione",
    name: "Disintegrazione",
    school: "invocazione",
    description: "Riduci in polvere una creatura o un oggetto",
    source: ["arcana", "nera"],
  },
  rianimareMorti: {
    level: 6,
    url: "/wiki/Rianimare_Morti",
    name: "Rianimare Morti",
    school: "necromanzia",
    description: "Riporti in vita una creatura morta",
    source: ["bianca", "runica"],
  },
  campoVita: {
    level: 6,
    url: "/wiki/Campo_di_Vita",
    name: "Campo di Vita",
    school: "necromanzia",
    description:
      "Crei un campo di energia positiva che guarisce chi vi si trova all'interno",
    source: ["bianca", "runica"],
  },
  catenaFulmini: {
    level: 6,
    url: "/wiki/Catena_di_Fulmini",
    name: "Catena di Fulmini",
    school: "invocazione",
    description: "Un fulmine rimbalza da una creatura all'altra",
    source: ["arcana", "primeva"],
  },
  semiFuoco: {
    level: 6,
    url: "/wiki/Semi_di_Fuoco",
    name: "Semi di Fuoco",
    school: "invocazione",
    description: "Crei quattro ghiande esplosive",
    source: ["primeva", "fatata", "demoniaca"],
  },
  metamorfosiFunesta: {
    level: 6,
    url: "/wiki/Metamorfosi_Funesta",
    name: "Metamorfosi Funesta",
    school: "trasmutazione",
    description: "Trasformi una creatura in un animale innocuo",
    source: ["fatata", "primeva", "bianca"],
  },
  carnePietra: {
    level: 6,
    url: "/wiki/Carne_in_Pietra",
    name: "Carne in Pietra",
    school: "trasmutazione",
    description: "Trasformi una creatura vivente in una statua di pietra",
    source: ["fatata", "arcana", "runica"],
  },
  barrieraLame: {
    level: 6,
    url: "/wiki/Barriera_di_Lame",
    name: "Barriera di Lame",
    school: "invocazione",
    description: "Formi un muro di lame fatte di forza",
    source: ["demoniaca", "occulta"],
  },
  pungiglionePurpureo: {
    level: 6,
    url: "/wiki/Pungiglione_del_Verme_Purpureo",
    name: "Pungiglione del Verme Purpureo",
    school: "necromanzia",
    description:
      "Infliggi danni a una creatura e la infetti con il veleno del verme purpureo",
    source: ["demoniaca"],
  },
  esplosioneSpirito: {
    level: 6,
    url: "/wiki/Esplosione_dello_Spirito",
    name: "Esplosione dello Spirito",
    school: "necromanzia",
    description: "Infliggi danni all'essenza spirituale di una creatura",
    source: ["nera", "occulta"],
  },
  dissanguamentoVampiro: {
    level: 6,
    url: "/wiki/Dissanguamento_del_Vampiro",
    name: "Dissanguamento del Vampiro",
    school: "necromanzia",
    description: "Estrai sangue e forza vitale dalle creature in un cono",
    source: ["nera"],
  },
  dominare: {
    level: 6,
    url: "/wiki/Dominare",
    name: "Dominare",
    school: "ammaliamento",
    description: "Un umanoide deve obbedire ai tuoi ordini",
    source: ["satanica"],
  },
  regressioneMentale: {
    level: 6,
    url: "/wiki/Regressione_Mentale",
    name: "Regressione Mentale",
    school: "ammaliamento",
    description: "Riduci permanentemente le facoltà mentali di una creatura",
    source: ["satanica"],
  },
  allucinazioneCatastrofica: {
    level: 6,
    url: "/wiki/Allucinazione_Catastrofica",
    name: "Allucinazione Catastrofica",
    school: "illusione",
    description:
      "Infliggi danni alla mente di una creatura con visioni di  un'apocalisse",
    source: ["satanica"],
  },
};

const combatSpells = {
  trasposizioneCollettiva: {
    level: 6,
    url: "/wiki/Trasposizione_Collettiva",
    name: "Trasposizione Collettiva",
    school: "evocazione",
    description:
      "Teletrasporti fino a 2 creature in nuove posizioni vicine a te",
    source: ["arcana", "occulta", "fatata"],
  },
  repulsione: {
    level: 6,
    url: "/wiki/Repulsione",
    name: "Repulsione",
    school: "abiurazione",
    description: "Impedisci alle creature di avvicinarsi a te",
    source: ["runica", "bianca"],
  },
  muroForza: {
    level: 6,
    url: "/wiki/Muro_di_Forza",
    name: "Muro di Forza",
    school: "invocazione",
    description: "Crei un muro invisibile e durevole di forza magica",
    source: ["arcana", "runica", "occulta"],
  },
  convincimentoZelante: {
    level: 6,
    url: "/wiki/Convincimento_Zelante",
    name: "Convincimento Zelante",
    school: "ammaliamento",
    description:
      "Instilli convinzioni e zelo irremovibili nelle creature consenzienti",
    source: ["satanica", "bianca", "nera"],
  },
  pietraCarne: {
    level: 6,
    url: "/wiki/Pietra_in_Carne",
    name: "Pietra in Carne",
    school: "trasmutazione",
    description: "Ripristini una creatura pietrificata al suo stato naturale",
    source: ["bianca", "runica", "primeva"],
  },
  groviglioRampicanti: {
    level: 6,
    url: "/wiki/Groviglio_di_Rampicanti",
    name: "Groviglio di Rampicanti",
    school: "evocazione",
    description:
      "Intralci le creature in un'esplosione e ti concentri per sprigionare un rampicante per immobilizzarle",
    source: ["primeva"],
  },
  formaDrago: {
    level: 6,
    url: "/wiki/Incantesimi/Forma_di_Drago",
    name: "Forma di Drago",
    school: "trasmutazione",
    description: "Ti trasformi in un drago",
    source: ["fatata", "primeva", "demoniaca"],
  },
  tramaVibrante: {
    level: 6,
    url: "/wiki/Trama_Vibrante",
    name: "Trama Vibrante",
    school: "illusione",
    description: "Crei una trama di luci che abbaglia ed acceca",
    source: ["fatata"],
  },
  giustoPotere: {
    level: 6,
    url: "/wiki/Giusto_Potere",
    name: "Giusto Potere",
    school: "trasmutazione",
    description: "Ti trasformi in forma da battaglia con armi divine",
    source: ["satanica", "demoniaca", "nera", "bianca", "runica", "primeva"],
  },
  ronivaIncantesimi: {
    level: 6,
    url: "/wiki/Rovina_Incantesimi",
    name: "Rovina Incantesimi",
    school: "abiurazione",
    description:
      "Una maledizione su una creatura le fa subire danni quando è colpita da un incantesimo e diminuisce la durata dei suoi incantesimi",
    source: ["satanica", "arcana", "demoniaca", "occulta", "nera"],
  },
  fuorviare: {
    level: 6,
    url: "/wiki/Fuorviare",
    name: "Fuorviare",
    school: "illusione",
    description:
      "Diventi invisibile e crei un duplicato di te stesso che agisce come te",
    source: ["satanica", "occulta", "arcana", "fatata", "demoniaca", "nera"],
  },
};

const utilitySpells = {
  scrutare: {
    level: 6,
    url: "/wiki/Scrutare",
    name: "Scrutare",
    school: "divinazione",
    description: "Spii una creatura",
    source: ["occulta", "bianca", "demoniaca", "nera", "satanica", "fatata"],
  },
  visioneVero: {
    level: 6,
    url: "/wiki/Visione_del_Vero",
    name: "Visione del Vero",
    school: "divinazione",
    description: "Vedi attraverso illusioni e trasmutazioni",
    source: [
      "arcana",
      "bianca",
      "runica",
      "occulta",
      "primeva",
      "nera",
      "satanica",
    ],
  },
  teletrasporto: {
    level: 6,
    url: "/wiki/Teletrasporto",
    name: "Teletrasporto",
    school: "evocazione",
    description:
      "Tu e altre creature consenzienti vi trasportate a grande distanza",
    source: ["arcana", "runica", "demoniaca"],
  },
  pietreParlanti: {
    level: 6,
    url: "/wiki/Pietre_Parlanti",
    name: "Pietre Parlanti",
    school: "divinazione",
    description: "Parli agli spiriti insiti nella pietra naturale",
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
