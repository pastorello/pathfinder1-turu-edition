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
  const result = roll - 10 + getBonus(modificators);
  let resultMessage = "";
  let additionalMessage = "";

  const theCD = parseInt(CD);

  if (result >= theCD + 10) {
    resultMessage = "crit succ!";
  }

  if (result < theCD) {
    if (result <= theCD - 10) {
      resultMessage = "crit fail!";
    }
    if (result < 0) {
      resultMessage = "Manchi il bersaglio";
    } else {
      stats.reduce((acc, item) => {
        if (acc >= result) {
          additionalMessage = protectionsMessage.hasOwnProperty(item)
            ? protectionsMessage[item]
            : item;
        }
        return acc - versusStat.bonus[item];
      }, getBonus(versusStat));
    }
  } else {
    resultMessage = "success";
  }

  return (
    <>
      <div>{resultMessage}</div>
      <div>{additionalMessage}</div>
    </>
  );
};

export default getCDResult;
