const mischia = {
  spezzaColli: {
    name: "Spezzacolli orchesco",
    dices: {
      quantity: 1,
      faces: 8,
      bonus: 0,
    },
    weaponType: "t",
    traits: [{ name: "impeto" }, { name: "spazzare" }],
  },
  spadaCorta: {
    name: "Spada corta",
    dices: {
      quantity: 1,
      faces: 6,
      bonus: 0,
    },
    weaponType: "t",
    traits: [
      { name: "agile", value: true },
      { name: "versatile", value: "p" },
    ],
  },
};

export default mischia;
