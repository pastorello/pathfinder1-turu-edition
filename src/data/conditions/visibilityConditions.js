const visibilityConditions = {
  inosservato: {
    name: "Inosservato",
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
  invisibile: {
    name: "Invisibile",
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
  osservato: {
    name: "Nascosto",
    effect: (player) => ({
      ...player,
    }),
  },
  occultato: {
    name: "Occultato",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "quando qualcuno ti bersaglia con un attacco, incantesimo o altro effetto deve superare prima una prova semplice CD 5",
      ],
    }),
  },
};

export default visibilityConditions;
