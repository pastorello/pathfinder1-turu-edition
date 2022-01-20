import addBonus from "../../tools/addBonus";

const buffConditions = {
  inCoperturaInferiore: {
    name: "In Copertura Inferiore",
    removesCondition: ["inCoperturaSuperiore", "inCopertura"],
    effect: (player) => ({
      ...player,
      armorClass: addBonus(player.armorClass, "circostanza", 1),
    }),
  },
  inCopertura: {
    removesCondition: ["inCoperturaSuperiore", "inCoperturaInferiore"],
    name: "In Copertura",
    effect: (player) => ({
      ...player,
      armorClass: addBonus(player.armorClass, "circostanza", 2),
      tsRiflessi: addBonus(player.tsRiflessi, "circostanza", 2),
      abilityCheck: {
        ...player.abilityCheck,
        furtivita: addBonus(player.abilityCheck.furtivita, "circostanza", 2),
      },
    }),
  },
  inCoperturaSuperiore: {
    removesCondition: ["inCopertura", "inCoperturaInferiore"],
    name: "In Copertura Superiore",
    effect: (player) => ({
      ...player,
      armorClass: addBonus(player.armorClass, "circostanza", 4),
      tsRiflessi: addBonus(player.tsRiflessi, "circostanza", 4),
      abilityCheck: {
        ...player.abilityCheck,
        furtivita: addBonus(player.abilityCheck.furtivita, "circostanza", 4),
      },
    }),
  },
  scudoAlzato: {
    hasValue: true,
    name: "Scudo Alzato",
    effect: (player, value) => ({
      ...player,
      armorClass: addBonus(player.armorClass, "circostanza", value),
    }),
  },
};

export default buffConditions;
