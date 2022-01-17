const buffConditions = {
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

export default buffConditions;
