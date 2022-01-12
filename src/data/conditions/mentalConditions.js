import mobilityConditions from "./mobilityConditions";
import addBonus from "../../tools/addBonus";
import abilities from "../abilities";

const mentalSkills = ["in", "sa", "ca"];

const friendshipConditions = {
  indifferente: {
    name: "Indifferente",
    effect: (player) => ({
      ...player,
    }),
  },
  amichevole: {
    name: "Amichevole",
    effect: (player) => ({
      ...player,
    }),
  },
  collaborativo: {
    name: "Collaborativo",
    effect: (player) => ({
      ...player,
    }),
  },
  maldisposto: {
    name: "Maldisposto",
    effect: (player) => ({
      ...player,
    }),
  },
  ostile: {
    name: "Ostile",
    effect: (player) => ({
      ...player,
    }),
  },
};

const mentalConditions = {
  affascinato: {
    name: "Affascinato",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "non puoi usare azioni con il Tratto Concentrazione a meno che esse o le loro conseguenze previste non siano correlate al soggetto della tua fascinazione",
      ],
      perception: {
        ...player.perception,
        status: -2,
      },
      abilityCheck: Object.keys(player.abilityCheck).reduce(
        (acc, item) => ({
          ...acc,
          [item]: addBonus(player.abilityCheck[item], "status", -2),
        }),
        {}
      ),
    }),
  },
  confuso: {
    name: "Confuso",
    effect: (player) => {
      let thePlayer = mobilityConditions.impreparato.effect(player);

      return {
        ...thePlayer,
        activeEffects: [
          ...thePlayer.activeEffects,
          "non puoi Ritardare, Preparare o usare reazioni",
          "usi tutte le tue azioni per attaccare bersagli casuali",
          "se non hai bersagli, ti colpisci automaticamente senza colpo critico",
          "se non puoi attaccare, sprechi tutte le tue azioni",
        ],
      };
    },
  },
  inFuga: {
    name: "In Fuga",
    effect: (player) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        "devi spendere ogni tua azione per cercare di scappare dalla fonte della condizione in fuga",
        "non puoi Preparare o Ritardare",
      ],
    }),
  },
  sbigottito: {
    name: "Sbigottito",
    effect: (player, value) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        `Lanciare Incantesimi richiede una prova semplice con CD ${5 + value}`,
      ],
      spellAttack: addBonus(player.spellAttack, "status", -value),
      tsVolonta: addBonus(player.tsVolonta, "status", -value),
      skillCheck: {
        ...player.skillCheck,
        in: addBonus(player.skillCheck.in, "status", -value),
        sa: addBonus(player.skillCheck.sa, "status", -value),
        ca: addBonus(player.skillCheck.ca, "status", -value),
      },
      abilityCheck: {
        ...Object.keys(player.abilityCheck).reduce(
          (acc, item) => ({
            ...acc,
            [item]: mentalSkills.some((item) => (item = abilities[item].skill))
              ? addBonus(player.abilityCheck[item], "status", -value)
              : player.abilityCheck[item],
          }),
          {}
        ),
      },
    }),
  },
  spaventato: {
    name: "Spaventato",
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
    }),
  },
};

export default mentalConditions;
