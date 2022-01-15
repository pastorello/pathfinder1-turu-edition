var isValidInt = (theNumber) => {
  return !isNaN(parseFloat(theNumber)) && isFinite(theNumber);
};

export default isValidInt;
