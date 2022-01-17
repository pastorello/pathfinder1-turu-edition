const visibilityConditions = {
  osservato: {
    removesCondition: ["nascosto", "nonIndividuato", "inosservato"],
    showTag: false,
    name: "Osservato",
    effect: (player) => ({
      ...player,
    }),
  },
  nascosto: {
    removesCondition: ["nonIndividuato", "inosservato", "osservato"],
    showTag: false,
    name: "Nascosto",
    effect: (player) => ({
      ...player,
    }),
  },
  nonIndividuato: {
    removesCondition: ["nascosto", "inosservato", "osservato"],
    showTag: false,
    name: "Non Individuato",
    effect: (player) => ({
      ...player,
    }),
  },
  inosservato: {
    removesCondition: ["nascosto", "nonIndividuato", "osservato"],
    showTag: false,
    name: "Inosservato",
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
  invisibile: {
    name: "Invisibile",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "Sei Non Individuato da chiunque.",
        "se una creatura supera prova Percezione vs CD della tua Furtività, diventi Nascosto a quella creatura finché non ti Muovi Furtivamente",
      ],
    }),
  },
};

export default visibilityConditions;
