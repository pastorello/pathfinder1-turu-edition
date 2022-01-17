import addBonus from "../../tools/addBonus";

const mobilityConditions = {
  immobilizzato: {
    name: "Immobilizzato",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "non puoi usare azioni col tratto movimento.",
        "se una forza esterna ti muoverebbe fuori dal tuo quadretto, questa deve superare una prova contro la CD dell'effetto che ti blocca o la difesa appropriata (in genere la CD di Tempra) di un mostro che ti blocca.",
      ],
    }),
  },
  impreparato: {
    name: "Impreparato",
    effect: (player) => ({
      ...player,
      armorClass: addBonus(player.armorClass, "circostanza", -2),
    }),
  },
  afferrato: {
    name: "Afferrato",
    extendsCondition: ["immobilizzato", "impreparato"],
    effect: (player) => {
      return {
        ...player,
        activeEffects: [
          ...player.activeEffects,
          "Se tenti un'azione Maneggiare, prova semplice con CD 5 o fallisci",
        ],
      };
    },
  },
  prono: {
    name: "Prono",
    extendsCondition: ["impreparato"],
    effect: (player) => {
      return {
        ...player,
        strWeaponAttack: addBonus(player.strWeaponAttack, "circostanza", -2),
        dexWeaponAttack: addBonus(player.dexWeaponAttack, "circostanza", -2),
        activeEffects: [
          ...player.activeEffects,
          "Le uniche azioni di movimento che puoi usare da prono sono Andare Carponi e Alzarsi.",
        ],
      };
    },
  },
  paralizzato: {
    name: "Paralizzato",
    extendsCondition: ["impreparato"],
    effect: (player) => {
      return {
        ...player,
        activeEffects: [
          ...player.activeEffects,
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
          "Volume (12 Media, 6 Piccola), CA 9, Durezza 8, PF attuali",
        ],
      };
    },
  },
  trattenuto: {
    name: "Trattenuto",
    extendsCondition: ["afferrato"],
    effect: (player) => {
      return {
        ...player,
        activeEffects: [
          ...player.activeEffects,
          "non puoi fare nulla che abbia i tratti attacco o maneggiare a parte Sfuggire o Forzare ciò che ti trattiene",
        ],
      };
    },
  },
};

export default mobilityConditions;
