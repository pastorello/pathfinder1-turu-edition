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
    extendsCondition: ["impreparato"],
    effect: (player) => {
      return {
        ...player,
        activeEffects: [
          ...player.activeEffects,
          "non puoi Ritardare, Preparare o usare reazioni",
          "usi tutte le tue azioni per attaccare bersagli casuali",
          "se non hai bersagli, ti colpisci automaticamente senza colpo critico",
          "se non puoi attaccare, sprechi tutte le tue azioni",
          "Ogni volta che subisci danni da un attacco o incantesimo, prova semplice CD 11",
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
        "spendi ogni azione per cercare di scappare dalla fonte della condizione in fuga",
        "non puoi Preparare o Ritardare",
      ],
    }),
  },
  sbigottito: {
    hasValue: true,
    name: "Sbigottito",
    effect: (player, value) => ({
      ...player,
      activeEffects: [
        ...player.activeEffects,
        `Lanciare Incantesimi richiede una prova semplice con CD ${5 + value}`,
      ],
      skillCheck: {
        ...player.skillCheck,
        in: addBonus(player.skillCheck.in, "status", -value),
        sa: addBonus(player.skillCheck.sa, "status", -value),
        ca: addBonus(player.skillCheck.ca, "status", -value),
      },
    }),
  },
  spaventato: {
    hasValue: true,
    name: "Spaventato",
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
      hitPoints: addBonus(player.hitPoints, "spaventatoFix", value),
    }),
  },
};

export default mentalConditions;
