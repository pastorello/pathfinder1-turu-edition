const terrainConditions = {
  normale: {
    name: "Terreno Normale",
    effect: (player) => ({
      ...player,
    }),
  },
  accidentato: {
    name: "Terreno Accidentato",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "È necessario Bilanciarsi per non cadere quando si attraversa un terreno accidentato.",
      ],
    }),
  },
  difficile: {
    name: "Difficile",
    effect: (player) => ({
      ...player,
      speed: (Math.round((player.speed / 2) * 2) / 2).toFixed(1),
      activeEffects: [
        ...player.activeEffects,
        "Non puoi fare Passi nel terreno difficile.",
      ],
    }),
  },
  difficileSuperiore: {
    name: "Terreno Difficile Superiore",
    effect: (player) => ({
      ...player,
      speed: (Math.round((player.speed / 3) * 2) / 2).toFixed(1),
      activeEffects: [
        ...player.activeEffects,
        "Non puoi fare Passi nel terreno difficile.",
      ],
    }),
  },
  superficeStretta: {
    name: "Superfice Stretta",
    extendsCondition: ["impreparato"],
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "Non puoi fare Passi nel terreno difficile.",
        "Hai bisogno di Bilanciarti o rischi di cadere.",
        "Ogni volta che vieni colpito da un attacco o fallisci un Tiro Salvezza su una superficie stretta, devi superare un TS su Riflessi (con la stessa CD della prova di Acrobazia per Bilanciarti) per evitare di cadere.",
      ],
    }),
  },
  inosservato: {
    name: "Inosservato",
    effect: (player) => ({
      ...player,
    }),
  },
};

export default terrainConditions;
