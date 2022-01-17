import isValidDataObject from "./isValidObject";

const getBonus = (stat) => {
  let theValue = 0;

  if (isValidDataObject(stat)) {
    if (isValidDataObject(stat.bonus)) {
      theValue =
        theValue +
        Object.keys(stat.bonus).reduce(
          (acc, item) => stat.bonus[item] + acc,
          0
        );
    }
    if (isValidDataObject(stat.malus)) {
      theValue =
        theValue +
        Object.keys(stat.malus).reduce(
          (acc, item) => stat.malus[item] + acc,
          0
        );
    }
  }

  return theValue;
};

export default getBonus;
