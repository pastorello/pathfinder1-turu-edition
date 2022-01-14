const availableDices = [4, 6, 8, 10, 12, 20, 100];

const specialDices = {
  directions: [
    "Nord",
    "Nord Est",
    "Est",
    "Sud Est",
    "Sud",
    "Sud Ovest",
    "Ovest",
    "Nord Ovest",
  ],
  reactions: ["Malissimo", "Male", "Niente Male", "Bene", "Molto Bene"],
};

const dices = availableDices.reduce(
  (acc, item) => ({
    ...acc,
    [`d${item}`]: [...Array.from(Array(item).keys())],
  }),
  {}
);

export default dices;
