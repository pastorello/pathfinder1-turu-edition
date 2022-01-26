import getBonus from "./getBonus";
import isValid from "./isValid";

const protectionsOrder = ["skill", "addestramento", "magic", "armor"];
const protectionsMessage = {
  skill: "Schivato",
  addestramento: "Parato",
  magic: "Magicamente Deviato",
  armor: "Assorbito dall'armatura",
};
const getStatsOrder = (bonusObject) =>
  Object.keys(bonusObject).sort(
    (a, b) => protectionsOrder.indexOf(a) - protectionsOrder.indexOf(b)
  );

const getCDResult = (roll, modificators, CD, versusStat) => {
  const stats = isValid.dataObj(versusStat)
    ? getStatsOrder(versusStat.bonus)
    : [];
  const theResult = roll + getBonus(modificators);
  const theCD = parseInt(CD);

  let resultMessage = theResult >= theCD + 10 ? "CRIT SUCCESS!" : "Success";
  let additionalMessage = "";

  if (theResult < theCD) {
    if (stats.length > 0) {
      stats.reduce((acc, item) => {
        if (acc >= theResult) {
          additionalMessage = protectionsMessage.hasOwnProperty(item)
            ? protectionsMessage[item]
            : item;
        }
        return acc - versusStat.bonus[item];
      }, 10 + getBonus(versusStat));
      resultMessage =
        theResult < 10 ? "Manchi il bersaglio" : additionalMessage;
    } else {
      resultMessage = "Fail";
    }
    resultMessage = theResult <= theCD - 10 ? "CRIT FAIL!" : resultMessage;
  }

  return <div>{resultMessage}</div>;
};

export default getCDResult;
