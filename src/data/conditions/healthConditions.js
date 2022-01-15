import physicalConditions from "./physicalConditions";

const healthConditions = {
  condannato: {
    hasValue: true,
    name: "Condannato",
    effect: (player, value) => ({
      ...player,
      sogliaMorente: player.sogliaMorente - value,
    }),
  },
  terrenoPericoloso: {
    hasDices: true,
    name: "Terreno Pericoloso",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "Il terreno pericoloso ti danneggia ogni volta che ti muovi al suo interno.",
      ],
    }),
  },
  dannoPersistente: {
    hasDices: true,
    name: "Danno Persistente",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "prova semplice CD 15 terminare il danno persistente",
      ],
    }),
  },
  ferito: {
    hasValue: true,
    name: "Ferito",
    effect: (player, value) => ({
      ...player,
      ferito: player.ferito || 0 + value,
    }),
  },
  morente: {
    hasValue: true,
    name: "Morente",
    extendsCondition: ["privoDiSensi"],
    effect: (player, value) => {
      let thePlayer = physicalConditions.privoDiSensi.effect(player);

      return {
        ...thePlayer,
        activeEffects: [
          ...player.activeEffects,
          "prova di Recupero per determinare se migliori o peggiori.",
          "Se subisci danni mentre sei morente, la tua condizione morente aumenta di 1, o di 2 se subisci danni dal colpo critico di un nemico o per un fallimento critico su un tuo Tiro Salvezza.",
        ],
      };
    },
  },
};

export default healthConditions;
