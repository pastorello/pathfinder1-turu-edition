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
    strWeaponAttack: {},
    dexWeaponAttack: {},
    spellAttack: {},
    speed: 7.5,
    strDamage: {},
    dexDamage: {},
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
    attacks: [
      {
        name: "Spezzacolli orchesco",
        dices: {
          quantity: 1,
          faces: 8,
          bonus: 0,
        },
        attacks: [7, 2, -3],
        weaponType: "t",
        feats: ["impeto", "spazzare"],
      },
      {
        name: "Spada corta",
        dices: {
          quantity: 1,
          faces: 6,
          bonus: 0,
        },
        attacks: [7, 3, -1],
        weaponType: "t",
        feats: ["agile", "versatile (p)"],
      },
      {
        name: "Pugno",
        dices: {
          quantity: 1,
          faces: 4,
          bonus: 0,
        },
        attacks: [7, 3, -1],
        weaponType: "c",
        feats: ["agile", "non letale"],
      },
      {
        name: "Giavellotto",
        dices: {
          quantity: 1,
          faces: 6,
          bonus: 0,
        },
        attacks: [5, 0, -5],
        weaponType: "p",
        feats: ["lancio 9"],
      },
    ],
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
