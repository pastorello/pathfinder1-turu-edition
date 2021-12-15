const primeviSpells = [
  {
    level: 6,
    url: "/wiki/Groviglio_di_Rampicanti",
    name: "Groviglio di Rampicanti Groviglio di Rampicanti",
    school: "evocazione",
    description:
      "Intralci le creature in un'esplosione e ti concentri per sprigionare un rampicante per immobilizzarle",
  },
  {
    level: 6,
    url: "/wiki/Semi_di_Fuoco",
    name: "Semi di Fuoco Semi di Fuoco ",
    school: "invocazione",
    description: "Crei quattro ghiande esplosive",
  },
];

const occultSpells = [];

const divineSpells = [
  {
    level: 6,
    url: "/wiki/Barriera_di_Lame",
    name: "Barriera di Lame Barriera di Lame ",
    school: "invocazione",
    description: "Formi un muro di lame fatte di forza",
  },
  {
    level: 6,
    url: "/wiki/Campo_di_Vita",
    name: "Campo di Vita Campo di Vita ",
    school: "necromanzia",
    description:
      "Crei un campo di energia positiva che guarisce chi vi si trova all'interno",
  },
  {
    level: 6,
    url: "/wiki/Convincimento_Zelante",
    name: "Convincimento Zelante Convincimento Zelante ",
    school: "ammaliamento",
    description:
      "Instilli convinzioni e zelo irremovibili nelle creature consenzienti",
  },
  {
    level: 6,
    url: "/wiki/Esplosione_dello_Spirito",
    name: "Esplosione dello Spirito Esplosione dello Spirito ",
    school: "necromanzia",
    description: "Infliggi danni all'essenza spirituale di una creatura",
  },
  {
    level: 6,
    url: "/wiki/Giusto_Potere",
    name: "Giusto Potere Giusto Potere ",
    school: "trasmutazione",
    description: "Ti trasformi in forma da battaglia con armi divine",
  },
  {
    level: 6,
    url: "/wiki/Pietra_in_Carne",
    name: "Pietra in Carne Pietra in Carne",
    school: "trasmutazione",
    description: "Ripristini una creatura pietrificata al suo stato naturale",
  },
  {
    level: 6,
    url: "/wiki/Pietre_Parlanti",
    name: "Pietre Parlanti Pietre Parlanti ",
    school: "divinazione",
    description: "Parli agli spiriti insiti nella pietra naturale",
  },
  {
    level: 6,
    url: "/wiki/Rianimare_Morti",
    name: "Rianimare Morti Rianimare Morti ",
    school: "necromanzia",
    description: "Riporti in vita una creatura morta",
  },
];

const arcaneSpells = [
  {
    level: 6,
    url: "/wiki/Allucinazione_Catastrofica",
    name: "Allucinazione Catastrofica Allucinazione Catastrofica",
    school: "illusione",
    description:
      "Infliggi danni alla mente di una creatura con visioni di  un'apocalisse",
  },
  {
    level: 6,
    url: "/wiki/Carne_in_Pietra",
    name: "Carne in Pietra Carne in Pietra",
    school: "trasmutazione",
    description: "Trasformi una creatura vivente in una statua di pietra",
  },
  {
    level: 6,
    url: "/wiki/Catena_di_Fulmini",
    name: "Catena di Fulmini Catena di Fulmini",
    school: "invocazione",
    description: "Un fulmine rimbalza da una creatura all'altra",
  },
  {
    level: 6,
    url: "/wiki/Disintegrazione",
    name: "Disintegrazione Disintegrazione",
    school: "invocazione",
    description: "Riduci in polvere una creatura o un oggetto",
  },
  {
    level: 6,
    url: "/wiki/Dissanguamento_del_Vampiro",
    name: "Dissanguamento del Vampiro Dissanguamento del Vampiro",
    school: "necromanzia",
    description: "Estrai sangue e forza vitale dalle creature in un cono",
  },
  {
    level: 6,
    url: "/wiki/Dominare",
    name: "Dominare Dominare",
    school: "ammaliamento",
    description: "Un umanoide deve obbedire ai tuoi ordini",
  },
  {
    level: 6,
    url: "/wiki/Incantesimi/Forma_di_Drago",
    name: "Incantesimi/Forma di Drago Forma di Drago",
    school: "trasmutazione",
    description: "Ti trasformi in un drago",
  },
  {
    level: 6,
    url: "/wiki/Fuorviare",
    name: "Fuorviare Fuorviare",
    school: "illusione",
    description:
      "Diventi invisibile e crei un duplicato di te stesso che agisce come te",
  },
  {
    level: 6,
    url: "/wiki/Metamorfosi_Funesta",
    name: "Metamorfosi Funesta Metamorfosi Funesta",
    school: "trasmutazione",
    description: "Trasformi una creatura in un animale innocuo",
  },
  {
    level: 6,
    url: "/wiki/Muro_di_Forza",
    name: "Muro di Forza Muro di Forza",
    school: "invocazione",
    description: "Crei un muro invisibile e durevole di forza magica",
  },
  {
    level: 6,
    url: "/wiki/Pungiglione_del_Verme_Purpureo",
    name: "Pungiglione del Verme Purpureo Pungiglione del Verme Purpureo",
    school: "necromanzia",
    description:
      "Infliggi danni a una creatura e la infetti con il veleno del verme purpureo",
  },
  {
    level: 6,
    url: "/wiki/Regressione_Mentale",
    name: "Regressione Mentale Regressione Mentale",
    school: "ammaliamento",
    description: "Riduci permanentemente le facoltà mentali di una creatura",
  },
  {
    level: 6,
    url: "/wiki/Repulsione",
    name: "Repulsione Repulsione",
    school: "abiurazione",
    description: "Impedisci alle creature di avvicinarsi a te",
  },
  {
    level: 6,
    url: "/wiki/Rovina_Incantesimi",
    name: "Rovina Incantesimi Rovina Incantesimi",
    school: "abiurazione",
    description:
      "Una maledizione su una creatura le fa subire danni quando è colpita da un incantesimo e diminuisce la durata dei suoi incantesimi",
  },
  {
    level: 6,
    url: "/wiki/Scrutare",
    name: "Scrutare Scrutare",
    school: "divinazione",
    description: "Spii una creatura",
  },
  {
    level: 6,
    url: "/wiki/Teletrasporto",
    name: "Teletrasporto Teletrasporto",
    school: "evocazione",
    description:
      "Tu e altre creature consenzienti vi trasportate a grande distanza",
  },
  {
    level: 6,
    url: "/wiki/Trama_Vibrante",
    name: "Trama Vibrante Trama Vibrante",
    school: "illusione",
    description: "Crei una trama di luci che abbaglia ed acceca",
  },
  {
    level: 6,
    url: "/wiki/Trasposizione_Collettiva",
    name: "Trasposizione Collettiva Trasposizione Collettiva",
    school: "evocazione",
    description:
      "Teletrasporti fino a 2 creature in nuove posizioni vicine a te",
  },
  {
    level: 6,
    url: "/wiki/Visione_del_Vero",
    name: "Visione del Vero Visione del Vero",
    school: "divinazione",
    description: "Vedi attraverso illusioni e trasmutazioni",
  },
];

const spells = [
  ...divineSpells,
  ...arcaneSpells,
  ...occultSpells,
  ...primeviSpells,
];

export default spells;