import weapons from "../weapons";

const mostriDiProva = [
  {
    id: "m0",
    name: "Orco Combattente",
    feats: ["scurovisione", "Attacco di Opportunità", "Ferocia"],
    hitPoints: {
      bonus: {
        race: 20,
      },
    },
    level: 1,
    spellAttack: {},
    speed: 7.5,
    meleeAttack: {
      bonus: {
        base: 3,
      },
    },
    rangedAttack: {
      bonus: {
        base: 3,
      },
    },
    armorClass: {
      bonus: {
        base: 10,
        armor: 4,
        addestramento: 2,
      },
    },
    perception: {
      bonus: {
        base: 5,
      },
    },
    tsTempra: {
      bonus: {
        base: 5,
      },
    },
    tsRiflessi: {
      bonus: {
        base: 5,
      },
    },
    tsVolonta: {
      bonus: {
        base: 3,
      },
    },
    actions: 3,
    sogliaMorente: 1,
    attackTypes: {
      spezzaColli: {
        ...weapons.spezzaColli,
      },
      spadaCorta: {
        ...weapons.spadaCorta,
      },
      pugno: {
        ...weapons.pugno,
      },
      giavellotto: {
        ...weapons.giavellotto,
      },
    },
    abilityCheck: {
      atletica: {
        bonus: {
          base: 3,
        },
      },
      intimidazione: {
        bonus: {
          base: 4,
        },
      },
      sopravvivenza: {
        bonus: {
          base: 3,
        },
      },
    },
    skillCheck: {
      fo: {
        bonus: {
          skill: 4,
        },
      },
      de: {
        bonus: {
          skill: 2,
        },
      },
      co: {
        bonus: {
          skill: 3,
        },
      },
      in: {
        malus: {
          skill: 1,
        },
      },
      sa: {
        bonus: {
          skill: 1,
        },
      },
    },
  },
];

export default mostriDiProva;
