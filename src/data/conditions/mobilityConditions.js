import addBonus from "../../tools/addBonus";
const baseMobilityConditions = {
  immobilizzato: {
    name: "Immobilizzato",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "non puoi usare azioni col tratto movimento.",
        "prova semplice CD 5 per compiere le azioni che hanno un bersaglio",
        "se una forza esterna ti muoverebbe fuori dal tuo quadretto, questa deve superare una prova contro la CD dell'effetto che ti blocca o la difesa appropriata (in genere la CD di Tempra) di un mostro che ti blocca.",
      ],
      vista: {
        ...player.vista,
        state: "abbagliato",
      },
    }),
  },
  impreparato: {
    name: "Impreparato",
    effect: (player) => ({
      ...player,
      armorClass: addBonus(player.armorClass, "status", -2),
    }),
  },
};

const mobilityConditions = {
  ...baseMobilityConditions,
  afferrato: {
    name: "Afferrato",
    effect: (player) => {
      let thePlayer = baseMobilityConditions.immobilizzato.effect(player);
      thePlayer = baseMobilityConditions.impreparato.effect(player);

      return {
        ...thePlayer,
        activeEffects: [
          ...thePlayer.activeEffects,
          "Se tenti un'azione Maneggiare, prova semplice con CD 5 o fallisci",
        ],
      };
    },
  },
  prono: {
    name: "Prono",
    effect: (player) => {
      let thePlayer = baseMobilityConditions.impreparato.effect(player);

      return {
        ...thePlayer,
        strWeaponAttack: addBonus(player.strWeaponAttack, "status", -2),
        dexWeaponAttack: addBonus(player.dexWeaponAttack, "status", -2),
        activeEffects: [
          ...thePlayer.activeEffects,
          "Le uniche azioni di movimento che puoi usare da prono sono Andare Carponi e Alzarsi.",
        ],
      };
    },
  },
  paralizzato: {
    name: "Paralizzato",
    effect: (player) => {
      let thePlayer = baseMobilityConditions.impreparato.effect(player);

      return {
        ...thePlayer,
        activeEffects: [
          ...thePlayer.activeEffects,
          "non puoi agire, se non per Ricordare Conoscenze e altre azioni che richiedono solo l'uso della mente",
        ],
      };
    },
  },
  pietrificato: {
    name: "Pietrificato",
    effect: (player) => {
      return {
        ...player,
        activeEffects: [
          ...player.activeEffects,
          "Non puoi agire e non puoi percepire nulla",
          "Volume (12 Media, 6 Piccola), CA 9, Durezza 8",
        ],
      };
    },
  },
  trattenuto: {
    name: "Trattenuto",
    effect: (player) => {
      let thePlayer = baseMobilityConditions.afferrato.effect(player);

      return {
        ...thePlayer,
        activeEffects: [
          ...thePlayer.activeEffects,
          "non puoi fare nulla che abbia i tratti attacco o maneggiare a parte Sfuggire o Forzare ciò che ti trattiene",
        ],
      };
    },
  },
};

export default mobilityConditions;
