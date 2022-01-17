const terrainConditions = {
  normale: {
    name: "Terreno Normale",
    effect: (player) => ({
      ...player,
    }),
  },
  accidentato: {
    name: "Terreno Accidentato",
    extendsCondition: ["impreparato"],
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "devi Bilanciarti o rischiare di cadere Prono e farti male, a seconda delle specifiche del terreno",
        "se sei colpito da un attacco o fallisci un Tiro Salvezza, TS su Riflessi (CD Bilanciarsi) o cadi",
      ],
    }),
  },
  difficile: {
    name: "Difficile",
    effect: (player) => ({
      ...player,
      speed: (Math.round((player.speed / 2) * 2) / 2).toFixed(1),
      activeEffects: [...player.activeEffects, "Non puoi fare Passi"],
    }),
  },
  difficileSuperiore: {
    name: "Terreno Difficile Superiore",
    effect: (player) => ({
      ...player,
      speed: (Math.round((player.speed / 3) * 2) / 2).toFixed(1),
      activeEffects: [...player.activeEffects, "Non puoi fare Passi"],
    }),
  },
  superficeStretta: {
    name: "Superfice Stretta",
    extendsCondition: ["impreparato"],
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "Hai bisogno di Bilanciarti o rischi di cadere",
        "Ogni volta che vieni colpito da un attacco o fallisci un Tiro Salvezza su una superficie stretta, devi superare un TS su Riflessi (con la stessa CD della prova di Acrobazia per Bilanciarti) per evitare di cadere.",
      ],
    }),
  },
  declivio: {
    name: "Declivio",
    extendsCondition: ["impreparato"],
    effect: (player) => ({
      ...player,
    }),
  },
};

export default terrainConditions;
