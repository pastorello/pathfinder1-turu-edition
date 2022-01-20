const tiro = {
  balestra: {
    name: "Balestra",
    dices: {
      quantity: 1,
      faces: 8,
      bonus: 0,
    },
    weaponType: "p",
    traits: [{ name: "aDistanza", value: 36 }],
  },
  balestraAMano: {
    name: "Balestra a Mano",
    dices: {
      quantity: 1,
      faces: 6,
      bonus: 0,
    },
    weaponType: "p",
    traits: [{ name: "aDistanza", value: 18 }],
  },
  balestraPesante: {
    name: "Balestra Pesante",
    dices: {
      quantity: 1,
      faces: 10,
      bonus: 0,
    },
    weaponType: "p",
    traits: [{ name: "aDistanza", value: 36 }],
  },
};

export default tiro;
