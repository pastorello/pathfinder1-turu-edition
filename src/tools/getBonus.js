import isValid from "./isValid";

const getBonus = (stat) => {
  let theValue = 0;

  if (isValid.dataObj(stat)) {
    if (isValid.dataObj(stat.bonus)) {
      theValue =
        theValue +
        Object.keys(stat.bonus).reduce(
          (acc, item) => stat.bonus[item] + acc,
          0
        );
    }
    if (isValid.dataObj(stat.malus)) {
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
