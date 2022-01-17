const elementExists = (element) => {
  return typeof element !== "undefined" && element !== null;
};

const isValidObject = (dataObject) => {
  return (
    typeof dataObject === "object" &&
    elementExists(dataObject) &&
    Object.keys(dataObject).length > 0
  );
};

export default isValidObject;
