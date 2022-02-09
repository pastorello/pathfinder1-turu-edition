const isValidInt = (theNumber) => {
  return !isNaN(parseFloat(theNumber)) && isFinite(theNumber);
};

const elementExists = (element) => {
  return typeof element !== "undefined" && element !== null;
};

const isValidDataArray = (dataArray) => {
  return (
    elementExists(dataArray) && Array.isArray(dataArray) && dataArray.length > 0
  );
};

const isValidObject = (dataObject) => {
  return (
    typeof dataObject === "object" &&
    elementExists(dataObject) &&
    Object.keys(dataObject).length > 0
  );
};

const isValidString = (theString) =>
  typeof theString === "string" && theString.length > 0;

const isValid = {
  num: isValidInt,
  elem: elementExists,
  dataArray: isValidDataArray,
  dataObj: isValidObject,
  word: isValidString,
};

export default isValid;
