const visibilityConditions = {
  osservato: {
    name: "Osservato",
    effect: (player) => ({
      ...player,
    }),
  },
  nascosto: {
    name: "Nascosto",
    effect: (player) => ({
      ...player,
    }),
  },
  nonIndividuato: {
    name: "Non Individuato",
    effect: (player) => ({
      ...player,
    }),
  },
  inosservato: {
    name: "Inosservato",
    effect: (player) => ({
      ...player,
    }),
  },
};

export default visibilityConditions;
