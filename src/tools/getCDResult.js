import getBonus from "./getBonus";
import isValid from "./isValid";
const getCDResult = (roll, modificators, CD, versusStat) => {
  const result = roll - 10 + getBonus(modificators);
  let resultMessage = "";
  let additionalMessage = "";

  const theCD = parseInt(CD);

  if (result >= theCD + 10) {
    resultMessage = "crit succ!";
  }

  if (result < theCD) {
    resultMessage = result <= theCD - 10 ? "crit fail!" : "fail";
    if (isValid.dataObj(versusStat)) {
      Object.keys(versusStat.bonus).reduce((acc, item) => {
        if (acc >= result) {
          additionalMessage = item;
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
