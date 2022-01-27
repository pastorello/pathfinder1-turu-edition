const primeviSpells = [
  {
    level: 9,
    url: "/wiki/Natura_Ostile",
    name: "Natura Ostile",
    school: "ammaliamento",
    description:
      "Animali, piante e condizioni atmosferiche diventano ostili nei confronti di creature a tua scelta",
    source: ["primeva"],
  },
  {
    level: 9,
    url: "/wiki/Tempesta_di_Vendetta",
    name: "Tempesta di Vendetta",
    school: "invocazione",
    description: "Crei un'enorme tempesta pericolosa",
    source: ["primeva", "fatata"],
  },
];

const occultSpells = [
  {
    level: 9,
    url: "/wiki/Canzone_Incomprensibile",
    name: "Canzone Incomprensibile",
    school: "ammaliamento",
    description: "Una canzone debilita le creature in strani modi",
    source: ["satanica", "occulta"],
  },
];

const divineSpells = [
  {
    level: 9,
    url: "/wiki/Arma_del_Giudizio",
    name: "Arma del Giudizio",
    school: "invocazione",
    description: "Formi un'arma che rafforza la guerra o la pace",
    source: ["runica", "bianca"],
  },
  {
    level: 9,
    url: "/wiki/Crociata",
    name: "Crociata",
    school: "ammaliamento",
    description: "Le creature diventano dedite a una causa di tua scelta",
    source: ["bianca"],
  },
  {
    level: 9,
    url: "/wiki/Legare_Anima",
    name: "Legare Anima",
    school: "necromanzia",
    description: "Imprigioni l'anima di una creatura morta",
    source: ["nera"],
  },
  {
    level: 9,
    url: "/wiki/Presenza_Soverchiante",
    name: "Presenza Soverchiante",
    school: "ammaliamento",
    description: "Assumi gli aspetti maestosi di un dio",
    source: ["demoniaca"],
  },
];

const arcaneSpells = [
  {
    level: 9,
    url: "/wiki/Disgiunzione",
    name: "Disgiunzione",
    school: "abiurazione",
    description: "Disattivi o distruggi un oggetto magico",
    source: ["arcana", "runica", "demoniaca", "fatata"],
  },
  {
    level: 9,
    url: "/wiki/Fatale",
    name: "Fatale",
    school: "illusione",
    description:
      "Spaventi e infliggi danni mentali a un grande numero di creature, anche al punto di ucciderle",
    source: ["satanica"],
  },
  {
    level: 9,
    url: "/wiki/Implosione",
    name: "Implosione",
    school: "invocazione",
    description: "Fai collassare una creatura su sé stessa",
    source: ["arcana"],
  },
  {
    level: 9,
    url: "/wiki/Massacro",
    name: "Massacro",
    school: "necromanzia",
    description: "Uccidi più creature all'istante",
    source: ["nera"],
    energy: "negativa",
  },
  {
    level: 9,
    url: "/wiki/Parola_del_Potere,_Uccidere",
    name: "Parola del Potere, Uccidere",
    school: "ammaliamento",
    description: "Pronunci una parola che uccide una creatura",
    source: ["nera"],
    energy: "negativa",
  },
  {
    level: 9,
    url: "/wiki/Previsione",
    name: "Previsione",
    school: "divinazione",
    description:
      "Percepisci quando una creatura è in pericolo e la proteggi con buona sorte",
    source: ["occulta"],
    energy: "positiva",
  },
  {
    level: 9,
    url: "/wiki/Reggia_Gloriosa",
    name: "Reggia Gloriosa",
    school: "evocazione",
    description: "Evochi una reggia che dura 1 giorno",
    source: ["occulta"],
  },
  {
    level: 9,
    url: "/wiki/Richiesta_Telepatica",
    name: "Richiesta Telepatica",
    school: "ammaliamento",
    description:
      "Invii un messaggio mentale che spinge una creatura a seguire una linea d'azione",
    source: ["satanica"],
  },
  {
    level: 9,
    url: "/wiki/Sciame_di_Meteore",
    name: "Sciame di Meteore",
    school: "invocazione",
    description: "Evochi quattro meteore infuocate che esplodono",
    source: ["fatata"],
  },
  {
    level: 9,
    url: "/wiki/Sfera_Prismatica",
    name: "Sfera Prismatica",
    school: "abiurazione",
    description: "Crei una sfera protettiva composta di sette strati cromatici",
    source: ["arcana", "runica", "bianca"],
  },
  {
    level: 9,
    url: "/wiki/Trasformazione",
    name: "Trasformazione",
    school: "trasmutazione",
    description: "Ti trasformi ripetutamente in una forma di tua scelta",
    source: ["primeva", "demoniaca"],
  },
];

const spells = [
  ...divineSpells,
  ...arcaneSpells,
  ...occultSpells,
  ...primeviSpells,
];

export default spells;
