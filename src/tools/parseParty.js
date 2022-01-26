import weapons from "../data/weapons";
import isValid from "./isValid";
import addBonus from "./addBonus";
import getBonus from "./getBonus";

const getAttackTypes = (player) => {
  const availableWeapons = isValid.dataObj(player.attackTypes)
    ? Object.keys(player.attackTypes)
    : [];

  const baseAttackTypes = availableWeapons.map((item) => ({
    value: item,
    label: weapons[item].name,
  }));

  if (getBonus(player.spellAttack) > 0) {
    baseAttackTypes.unshift({
      value: "incantesimo",
      label: "Incantesimo",
    });
  }

  if (availableWeapons.indexOf("pugno") < 0) {
    baseAttackTypes.push({
      value: "pugno",
      label: weapons.pugno.name,
    });
  }

  return baseAttackTypes;
};

const parseParty = (party) => {
  const theParty = party.map((item) => ({
    ...item,
    ferito: 0,
    actualPF: getBonus(
      addBonus(item.hitPoints, "co", getBonus(item.skillCheck.co))
    ),
    conditions: [],
    activeEffects: [],
    attackTypes: getAttackTypes(item),
    selectedAttack: 0,
    lastTarget: item.id,
  }));

  return theParty;
};

export default parseParty;
