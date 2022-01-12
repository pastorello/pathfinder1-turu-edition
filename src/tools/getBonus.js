const getBonus = (stat) => {
  let theValue = 0;
  theValue =
    theValue +
    Object.keys(stat.bonus).reduce((acc, item) => stat.bonus[item] + acc, 0);
  theValue =
    theValue +
    Object.keys(stat.malus).reduce((acc, item) => stat.bonus[item] + acc, 0);
  return theValue;
};

export default getBonus;
