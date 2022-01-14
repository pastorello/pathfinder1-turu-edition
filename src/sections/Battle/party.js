import abilities from "../../data/abilities";

const party = [
  {
    conditions: [],
    activeEffects: [],
    id: "0",
    name: "Argon de Belimarius",
    hitPoints: 10,
    level: 1,
    strWeaponAttack: {
      bonus: {
        status: 0,
      },
      malus: {
        status: 0,
      },
    },
    dexWeaponAttack: {
      bonus: {
        status: 0,
      },
      malus: {
        status: 0,
      },
    },
    spellAttack: {
      bonus: {
        status: 0,
      },
      malus: {
        status: 0,
      },
    },
    speed: 0,
    strDamage: {
      bonus: {
        status: 0,
      },
      malus: {
        status: 0,
      },
    },
    dexDamage: {
      bonus: {
        status: 0,
      },
      malus: {
        status: 0,
      },
    },
    armorClass: {
      bonus: {
        base: 10,
        armor: 2,
        magic: 0,
        status: 0,
      },
      malus: {
        status: 0,
      },
    },
    initiative: {
      bonus: {
        status: 0,
      },
      malus: {
        status: 0,
      },
    },
    perception: {
      bonus: {
        status: 0,
      },
      malus: {
        status: 0,
      },
    },
    tsTempra: {
      bonus: {
        status: 0,
      },
      malus: {
        status: 0,
      },
    },
    tsRiflessi: {
      bonus: {
        status: 0,
      },
      malus: {
        status: 0,
      },
    },
    tsVolonta: {
      bonus: {
        status: 0,
      },
      malus: {
        status: 0,
      },
    },
    abilityCheck: Object.keys(abilities).reduce(
      (acc, item) => ({
        ...acc,
        [item]: {
          bonus: {
            status: 0,
          },
          malus: {
            status: 0,
          },
        },
      }),
      {}
    ),
    skillCheck: {
      fo: {
        bonus: {
          status: 0,
        },
        malus: {
          status: 0,
        },
      },
      de: {
        bonus: {
          status: 0,
        },
        malus: {
          status: 0,
        },
      },
      co: {
        bonus: {
          status: 0,
        },
        malus: {
          status: 0,
        },
      },
      in: {
        bonus: {
          status: 0,
        },
        malus: {
          status: 0,
        },
      },
      sa: {
        bonus: {
          status: 0,
        },
        malus: {
          status: 0,
        },
      },
      ca: {
        bonus: {
          status: 0,
        },
        malus: {
          status: 0,
        },
      },
    },
    visibility: "osservato",
    actions: 3,
    terrain: "normale",
    sogliaMorente: 0,
  },
];

export default party;
