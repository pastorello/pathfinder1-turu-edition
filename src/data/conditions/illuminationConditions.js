const illuminationConditions = {
  luceIntensa: {
    removesCondition: ["luceFioca", "oscurità", "oscuritàMagica"],
    showTag: false,
    name: "Luce Intensa",
    effect: (player) => ({
      ...player,
    }),
  },
  luceFioca: {
    removesCondition: ["luceIntensa", "oscurità", "oscuritàMagica"],
    extendsCondition: ["occultato"],
    showTag: false,
    name: "Luce Fioca",
    effect: (player) => ({
      ...player,
    }),
  },
  oscurità: {
    removesCondition: ["luceIntensa", "luceFioca", "oscuritàMagica"],
    extendsCondition: ["accecato"],
    showTag: false,
    name: "Oscurità",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "Se vieni esposto improvvisamente a luce intensa diventi Accecato per un breve periodo",
      ],
    }),
  },
  oscuritàMagica: {
    removesCondition: ["luceIntensa", "luceFioca", "oscurità"],
    showTag: false,
    name: "Oscurità Magica",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "Se vieni esposto improvvisamente a luce intensa diventi Accecato per un breve periodo",
      ],
    }),
  },
};

export default illuminationConditions;
