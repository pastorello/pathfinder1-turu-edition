import mobilityConditions from "./mobilityConditions";
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
      sogliaMorente: player.sogliaMorente - value,
    }),
  },
  morente: {
    hasValue: true,
    name: "Morente",
    effect: (player, value) => {
      let thePlayer = physicalConditions.privoDiSensi.effect(player);

      return {
        ...thePlayer,
        activeEffects: [
          ...player.activeEffects,
          " tentare una prova per il Recupero per determinare se migliori o peggiori.",
        ],
      };
    },
  },
};

export default healthConditions;
