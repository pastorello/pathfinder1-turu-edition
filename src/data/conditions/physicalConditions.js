import addBonus from "../../tools/addBonus";
import getBonus from "../../tools/getBonus";
import abilities from "../abilities";
import mobilityConditions from "./mobilityConditions";

const basePhysicalConditions = {
  nauseato: {
    hasValue: true,
    name: "Nauseato",
    effect: (player, value) => ({
      ...player,
      skillCheck: {
        ...Object.keys(player.skillCheck).reduce(
          (acc, item) => ({
            ...acc,
            [item]: addBonus(player.skillCheck[item], "status", -value),
          }),
          {}
        ),
      },
      hitPoints: addBonus(player.hitPoints, "nauseatoFix", value),
      strDamage: addBonus(player.strDamage, "nauseatoFix", value),
      dexDamage: addBonus(player.dexDamage, "nauseatoFix", value),
      activeEffects: [
        ...player.activeEffects,
        "non puoi ingerire nulla volontariamente (pozioni ed elisir compresi)",
      ],
    }),
  },
  indebolito: {
    hasValue: true,
    name: "Indebolito",
    effect: (player, value) => ({
      ...player,
      skillCheck: {
        ...player.skillCheck,
        fo: addBonus(player.skillCheck.fo, "status", -value),
      },
    }),
  },
  maldestro: {
    hasValue: true,
    name: "Maldestro",
    effect: (player, value) => ({
      ...player,
      skillCheck: {
        ...player.skillCheck,
        de: addBonus(player.skillCheck.de, "status", -value),
      },
    }),
  },
  abbagliato: {
    name: "Abbagliato",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "prova semplice CD 5 per compiere le azioni che hanno un bersaglio",
      ],
    }),
  },
  accecato: {
    name: "Accecato",
    removesCondition: ["abbagliato"],
    effect: (player) => ({
      ...player,
      terrain: "difficile",
      activeEffects: [
        ...player.activeEffects,
        "tutte le creature e gli oggetti sono invisibili nei tuoi confronti.",
        "fallimento critico automatico nelle prove di Percezione che richiedono la vista",
        "Immune agli effetti visivi",
      ],
      perception: addBonus(player.perception, "status", -4),
    }),
  },
  assordato: {
    name: "Assordato",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "fallimento critico automatico nelle prove di Percezione che richiedono l'uso dell'udito",
        "Se compi un'azione con il tratto uditivo, prova semplice CD 5 o l'azione è perduta",
      ],
      perception: addBonus(player.perception, "status", -2),
    }),
  },
};

const physicalConditions = {
  ...basePhysicalConditions,
  accelerato: {
    hasValue: true,
    name: "Accelerato",
    effect: (player, value) => ({
      ...player,
      actions: player.actions + value,
    }),
  },
  rallentato: {
    hasValue: true,
    name: "Rallentato",
    effect: (player, value) => ({
      ...player,
      actions: player.actions - value,
    }),
  },
  affaticato: {
    name: "Affaticato",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "non puoi svolgere un'Attività in Esplorazione mentre viaggi",
      ],
      armorClass: addBonus(player.armorClass, "status", -1),
      tsTempra: addBonus(player.tsTempra, "status", -1),
      tsRiflessi: addBonus(player.tsRiflessi, "status", -1),
      tsVolonta: addBonus(player.tsVolonta, "status", -1),
    }),
  },
  ingombrato: {
    name: "Ingombrato",
    effect: (player) => {
      const thePlayer = basePhysicalConditions.maldestro.effect(player, 1);
      return {
        ...thePlayer,
        speed: player.speed - 3,
      };
    },
  },
  armaturaRotta: {
    hasValue: true,
    name: "Armatura Rotta",
    effect: (player, value) => {
      return {
        ...player,
        armorClass: addBonus(player.armorClass, "broken", -value),
      };
    },
  },
  privoDiSensi: {
    name: "Privo di Sensi",
    description: ["non puoi agire"],
    effect: (player) => {
      let thePlayer = basePhysicalConditions.accecato.effect(player);
      thePlayer = mobilityConditions.impreparato.effect(player);
      thePlayer = mobilityConditions.prono.effect(player);

      return {
        ...thePlayer,
        tsRiflessi: addBonus(player.tsRiflessi, "status", -4),
        armorClass: addBonus(player.armorClass, "status", -4),
        perception: addBonus(player.perception, "status", -4),
      };
    },
  },
};

export default physicalConditions;
