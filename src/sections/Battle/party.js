const party = [
  {
    conditions: [],
    activeEffects: [],
    id: "0",
    name: "Argon de Belimarius",
    classSkill: "in",
    hitPoints: {
      bonus: {
        race: 8,
        PGClass: 4,
      },
    },
    level: 1,
    classCheck: {
      bonus: {
        base: 10,
        addestramento: 3,
      },
    },
    strWeaponAttack: {
      bonus: {
        addestramento: 2,
      },
    },
    dexWeaponAttack: {
      bonus: {
        addestramento: 2,
      },
    },
    spellAttack: {
      bonus: {
        addestramento: 2,
      },
    },
    speed: 7.5,
    strDamage: {},
    dexDamage: {},
    armorClass: {
      bonus: {
        base: 10,
        addestramento: 2,
        armor: 2,
      },
    },
    initiative: {},
    perception: {
      bonus: {
        addestramento: 2,
      },
    },
    tsTempra: {
      bonus: {
        addestramento: 2,
      },
    },
    tsRiflessi: {
      bonus: {
        addestramento: 2,
      },
    },
    tsVolonta: {
      bonus: {
        addestramento: 4,
      },
    },
    abilityCheck: {
      arcano: {
        bonus: {
          addestramento: 2,
        },
      },
      diplomazia: {
        bonus: {
          addestramento: 2,
        },
      },
      furtività: {
        bonus: {
          addestramento: 2,
        },
      },
      società: {
        bonus: {
          addestramento: 2,
        },
      },
      artigianato: {
        bonus: {
          addestramento: 2,
        },
      },
      sapienza: {
        bonus: {
          addestramento: 2,
        },
      },
    },
    skillCheck: {
      fo: {},
      de: {
        bonus: {
          base: 1,
        },
      },
      co: {
        bonus: {
          status: 1,
        },
      },
      in: {
        bonus: {
          base: 3,
        },
      },
      sa: {
        bonus: {
          base: -1,
        },
      },
      ca: {
        bonus: {
          status: 1,
        },
      },
    },
    visibility: "inosservato",
    actions: 3,
    terrain: "normale",
    sogliaMorente: 4,
  },
  {
    conditions: [],
    activeEffects: [],
    id: "m0",
    name: "Mostro Brtt",
    hitPoints: {
      bonus: {
        base: 15,
      },
    },
    level: 1,
    strWeaponAttack: {},
    dexWeaponAttack: {},
    spellAttack: {},
    speed: 0,
    strDamage: {},
    dexDamage: {},
    armorClass: {
      bonus: {
        base: 10,
        armor: 2,
      },
    },
    initiative: {},
    perception: {},
    tsTempra: {},
    tsRiflessi: {},
    tsVolonta: {},
    abilityCheck: {},
    skillCheck: {
      fo: {},
      de: {},
      co: {},
      in: {},
      sa: {},
      ca: {},
    },
    visibility: "inosservato",
    actions: 3,
    terrain: "normale",
    sogliaMorente: 1,
  },
];

export default party;
