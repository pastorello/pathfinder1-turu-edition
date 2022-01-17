const getRemovesCondition = (condition) =>
  Object.keys(terrainConditions).filter((item) => item !== condition);

const terrainConditions = {
  terrenoNormale: {
    showTag: false,
    name: "Terreno Normale",
    effect: (player) => ({
      ...player,
    }),
  },
  terrenoAccidentato: {
    showTag: false,
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
  terrenoDifficile: {
    showTag: false,
    name: "Terreno Difficile",
    effect: (player) => ({
      ...player,
      speed: (Math.round((player.speed / 2) * 2) / 2).toFixed(1),
      activeEffects: [...player.activeEffects, "Non puoi fare Passi"],
    }),
  },
  terrenoDifficileSuperiore: {
    showTag: false,
    name: "Terreno Difficile Superiore",
    effect: (player) => ({
      ...player,
      speed: (Math.round((player.speed / 3) * 2) / 2).toFixed(1),
      activeEffects: [...player.activeEffects, "Non puoi fare Passi"],
    }),
  },
  superficeStretta: {
    showTag: false,
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
    showTag: false,
    name: "Declivio",
    extendsCondition: ["impreparato"],
    effect: (player) => ({
      ...player,
    }),
  },
};

Object.keys(terrainConditions).forEach((item) => {
  terrainConditions[item].removesCondition = getRemovesCondition(item);
});

export default terrainConditions;
