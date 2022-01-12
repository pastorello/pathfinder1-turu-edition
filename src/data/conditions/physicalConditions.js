import addBonus from "../../tools/addBonus";
import abilities from "../abilities";
import mobilityConditions from "./mobilityConditions";

const basePhysicalConditions = {
  nauseato: {
    name: "Nauseato",
    effect: (player, value) => ({
      ...player,
      strWeaponAttack: addBonus(player.strWeaponAttack, "status", -value),
      dexWeaponAttack: addBonus(player.dexWeaponAttack, "status", -value),
      skillCheck: {
        ...Object.keys(player.skillCheck).reduce(
          (acc, item) => ({
            ...acc,
            [item]: addBonus(player.skillCheck[item], "status", -value),
          }),
          {}
        ),
      },
      abilityCheck: {
        ...Object.keys(player.abilityCheck).reduce(
          (acc, item) => ({
            ...acc,
            [item]: addBonus(player.abilityCheck[item], "status", -value),
          }),
          {}
        ),
      },
      activeEffects: [
        ...player.activeEffects,
        "non puoi ingerire nulla volontariamente (pozioni ed elisir compresi)",
      ],
    }),
  },
  indebolito: {
    name: "Indebolito",
    effect: (player, value) => ({
      ...player,
      strDamage: addBonus(player.saveThrows, "status", -value),
      strWeaponAttack: addBonus(player.strWeaponAttack, "status", -value),
      skillCheck: {
        ...player.skillCheck,
        fo: addBonus(player.skillCheck.fo, "status", -value),
      },
      abilityCheck: {
        ...Object.keys(player.abilityCheck).reduce(
          (acc, item) => ({
            ...acc,
            [item]:
              abilities[item].skill === "fo"
                ? addBonus(player.abilityCheck[item], "status", -value)
                : player.abilityCheck[item],
          }),
          {}
        ),
      },
    }),
  },
  maldestro: {
    name: "Maldestro",
    effect: (player, value) => ({
      ...player,
      dexDamage: addBonus(player.dexDamage, "status", -value),
      dexWeaponAttack: addBonus(player.dexWeaponAttack, "status", -value),
      tsRiflessi: addBonus(player.tsRiflessi, "status", -value),
      armorClass: addBonus(player.armorClass, "status", -value),
      skillCheck: {
        ...player.skillCheck,
        de: addBonus(player.skillCheck.de, "status", -value),
      },
      abilityCheck: {
        ...Object.keys(player.abilityCheck).reduce(
          (acc, item) => ({
            ...acc,
            [item]:
              abilities[item].skill === "de"
                ? addBonus(player.abilityCheck[item], "status", -value)
                : player.abilityCheck[item],
          }),
          {}
        ),
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
    effect: (player) => ({
      ...player,
      terrain: "difficile",
      activeEffects: [
        ...player.activeEffects,
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
      initiative: addBonus(player.initiative, "status", -2),
    }),
  },
};

const physicalConditions = {
  ...basePhysicalConditions,
  accelerato: {
    name: "Accelerato",
    effect: (player, value) => ({
      ...player,
      actions: player.actions + value,
    }),
  },
  rallentato: {
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
  risucchiato: {
    name: "Risucchiato",
    effect: (player, value) => ({
      ...player,
      tsTempra: addBonus(player.tsTempra, "status", -value),
      hitPoints: player.hitPoints - value * player.level,
      skillCheck: {
        ...player.skillCheck,
        co: addBonus(player.skillCheck.co, "status", -value),
      },
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