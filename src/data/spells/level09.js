const baseAttackSpells = {
  gridoBanshee: {
    level: 9,
    url: "/wiki/Grido_della_Banshee",
    name: "Grido della Banshee",
    school: "necromanzia",
    description: "Il tuo grido infligge danni e risucchia le creature.",
    source: ["blasfema"],
    intensified: [10],
  },
  implosione: {
    level: 9,
    url: "/wiki/Implosione",
    name: "Implosione",
    school: "invocazione",
    description: "Fai collassare una creatura su sé stessa",
    source: ["arcana"],
    intensified: [10],
  },
  sciameMeteore: {
    level: 9,
    url: "/wiki/Sciame_di_Meteore",
    name: "Sciame di Meteore",
    school: "invocazione",
    description: "Evochi quattro meteore infuocate che esplodono",
    source: ["infernale"],
    intensified: [10],
  },
  armaGiudizio: {
    level: 9,
    url: "/wiki/Arma_del_Giudizio",
    name: "Arma del Giudizio",
    school: "invocazione",
    description: "Formi un'arma che rafforza la guerra o la pace",
    source: ["runica"],
    intensified: [10],
  },
  canzoneIncomprensibile: {
    level: 9,
    url: "/wiki/Canzone_Incomprensibile",
    name: "Canzone Incomprensibile",
    school: "ammaliamento",
    description: "Una canzone debilita le creature in strani modi",
    source: ["occulta", "fatata", "infernale"],
  },
  naturaOstile: {
    level: 9,
    url: "/wiki/Natura_Ostile",
    name: "Natura Ostile",
    school: "ammaliamento",
    description:
      "Animali, piante e condizioni atmosferiche diventano ostili nei confronti di creature a tua scelta",
    source: ["primeva"],
  },
  tempestaVendetta: {
    level: 9,
    url: "/wiki/Tempesta_di_Vendetta",
    name: "Tempesta di Vendetta",
    school: "invocazione",
    description: "Crei un'enorme tempesta pericolosa",
    source: ["occulta"],
    intensified: [10],
  },
  trasformazione: {
    level: 9,
    url: "/wiki/Trasformazione",
    name: "Trasformazione",
    school: "trasmutazione",
    description: "Ti trasformi ripetutamente in una forma di tua scelta",
    source: ["primeva", "fatata"],
  },
  parolaUccidere: {
    level: 9,
    url: "/wiki/Parola_del_Potere,_Uccidere",
    name: "Parola del Potere, Uccidere",
    school: "ammaliamento",
    description: "Pronunci una parola che uccide una creatura",
    source: ["nera"],
    intensified: [10],
  },
  massacro: {
    level: 9,
    url: "/wiki/Massacro",
    name: "Massacro",
    school: "necromanzia",
    description: "Uccidi più creature all'istante",
    source: ["blasfema"],
    intensified: [10],
  },
  fatale: {
    level: 9,
    url: "/wiki/Fatale",
    name: "Fatale",
    school: "illusione",
    description:
      "Spaventi e infliggi danni mentali a un grande numero di creature, anche al punto di ucciderle",
    source: ["nera"],
  },
  richiestaTelepatica: {
    level: 9,
    url: "/wiki/Richiesta_Telepatica",
    name: "Richiesta Telepatica",
    school: "ammaliamento",
    description:
      "Invii un messaggio mentale che spinge una creatura a seguire una linea d'azione",
    source: ["nera"],
  },
};

const combatSpells = {
  sferaPrismatica: {
    level: 9,
    url: "/wiki/Sfera_Prismatica",
    name: "Sfera Prismatica",
    school: "abiurazione",
    description: "Crei una sfera protettiva composta di sette strati cromatici",
    source: ["arcana"],
  },
  disgiunzione: {
    level: 9,
    url: "/wiki/Disgiunzione",
    name: "Disgiunzione",
    school: "abiurazione",
    description: "Disattivi o distruggi un oggetto magico",
    source: ["runica", "arcana", "divina"],
  },
  previsione: {
    level: 9,
    url: "/wiki/Previsione",
    name: "Previsione",
    school: "divinazione",
    description:
      "Percepisci quando una creatura è in pericolo e la proteggi con buona sorte",
    source: ["occulta"],
  },
  crociata: {
    level: 9,
    url: "/wiki/Crociata",
    name: "Crociata",
    school: "ammaliamento",
    description: "Le creature diventano dedite a una causa di tua scelta",
    source: ["runica", "divina"],
    intensified: [10],
  },
  presenzaSoverchiante: {
    level: 9,
    url: "/wiki/Presenza_Soverchiante",
    name: "Presenza Soverchiante",
    school: "ammaliamento",
    description: "Assumi gli aspetti maestosi di un dio",
    source: ["divina", "fatata"],
  },
};

const utilitySpells = {
  legareAnima: {
    level: 9,
    url: "/wiki/Legare_Anima",
    name: "Legare Anima",
    school: "necromanzia",
    description: "Imprigioni l'anima di una creatura morta",
    source: ["blasfema", "infernale"],
  },
  reggiaGloriosa: {
    level: 9,
    url: "/wiki/Reggia_Gloriosa",
    name: "Reggia Gloriosa",
    school: "evocazione",
    description: "Evochi una reggia che dura 1 giorno",
    source: ["fatata"],
  },
};

const totalSpells = {
  ...baseAttackSpells,
  ...combatSpells,
  ...utilitySpells,
};

const spells = Object.keys(totalSpells).map((item) => totalSpells[item]);

export default spells;
