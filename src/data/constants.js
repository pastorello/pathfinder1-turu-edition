const constants = {
  maxSpellsPerLevel: {
    mago: {
      trucchetti: 5,
      lowSpell: 3,
      maxSpell: 3,
    },
    0: {
      spells: 11,
      //base 5, + 1 specializz, + 1 famiglio, +2 fusione incantesimi, +2 trucchetti aggiuntivi
      focalized: 0,
    },
    1: {
      spells: 5, //base: 3, spec: 1, famiglio: 1,
      focalized: 1,
    },
    2: {
      spells: 5,
      focalized: 0,
    },
    3: {
      spells: 5,
      focalized: 0,
    },
    4: {
      spells: 5,
      focalized: 0,
    },
    5: {
      spells: 5,
      focalized: 0,
    },
    6: {
      spells: 5,
      focalized: 0,
    },
    7: {
      spells: 5,
      focalized: 0,
    },
    8: {
      spells: 4,
      focalized: 0,
    },
    9: {
      spells: 4,
      focalized: 0,
    },
    10: {
      spells: 3,
      focalized: 0,
    },
  },
};

export default constants;
