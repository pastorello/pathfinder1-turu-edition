import isValid from "./isValid";

const addBonus = (item, type, value) => {
  const newObject = isValid.dataObj(item)
    ? { ...item }
    : { bonus: {}, malus: {} };
  const newBonus = isValid.dataObj(newObject.bonus) ? newObject.bonus : {};
  const newMalus = isValid.dataObj(newObject.malus) ? newObject.malus : {};

  return {
    bonus: {
      ...newBonus,
      [type]:
        value > 0 && (newBonus[type] || 0) < value
          ? value
          : newBonus[type] || 0,
    },
    malus: {
      ...newMalus,
      [type]:
        value < 0 && value < (newMalus[type] || 0)
          ? value
          : newMalus[type] || 0,
    },
  };
};

export default addBonus;
