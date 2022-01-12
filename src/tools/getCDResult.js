import getBonus from "./getBonus";

const getCDResult = (roll, modificators, CD, type) => {
  const result = roll + getBonus(modificators);
  let resultMessage = "";

  if (result >= CD + 10) {
    return "crit succ!";
  }
  if (result <= CD - 10) {
    return "crit fail!";
  }

  if (result < CD) {
    resultMessage = "fail";
    if (type === "attack") {
      Object.keys(modificators.bonus).reduce((acc, item) => {
        if (acc >= CD) {
          resultMessage = item;
        }
        return acc - modificators.bonus[item];
      }, result);
    }
  } else {
    resultMessage = "success";
  }

  return resultMessage;
};

export default getCDResult;
