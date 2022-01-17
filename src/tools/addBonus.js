import isValidDataObject from "./isValidObject";

const addBonus = (item, type, value) => {
  const newObject = isValidDataObject(item)
    ? { ...item }
    : { bonus: {}, malus: {} };
  const newBonus = isValidDataObject(newObject.bonus) ? newObject.bonus : {};
  const newMalus = isValidDataObject(newObject.malus) ? newObject.malus : {};

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
