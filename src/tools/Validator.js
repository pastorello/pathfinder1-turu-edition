export const inRange = (value, min, max) => {
  return value >= min && value <= max;
};

export const validateField = (fieldValue, ruleName) => {
  const rules = {
    required: /^\w|-|\d{1,}$/,
    integer: /^\d+$/,
    number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    url: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  };

  if (rules.hasOwnProperty(ruleName)) {
    return !!(
      fieldValue !== null &&
      fieldValue !== undefined &&
      fieldValue.toString().match(rules[ruleName])
    );
  }
  return true;
};

export const elementExists = element => {
  return typeof element !== 'undefined' && element !== null;
};

export const validatePasswordLength = (pwd, pwdLength) => {
  const MIN_CHAR_FOR_PWD = parseInt(pwdLength, 10) ? pwdLength : 8;

  return typeof pwd === 'string' && pwd.length >= MIN_CHAR_FOR_PWD;
};

export const validatePasswordRepeat = (newPassword, repeatPassword) => {
  return newPassword === repeatPassword;
};

export const isObject = obj => {
  return obj !== null && typeof obj === 'object';
};

export const checkProp = (item, itemType = 'isValue') => {
  const propValidator = {
    isArray: theItem => {
      return Array.isArray(theItem);
    },
    isObject: theItem => {
      return isObject(theItem);
    },
    isValue: theItem => {
      return (
        !Array.isArray(theItem) &&
        !isObject(theItem) &&
        typeof theItem !== 'undefined'
      );
    }
  };

  return (
    propValidator.hasOwnProperty(itemType) && propValidator[itemType](item)
  );
};

export const isValidString = theString => {
  return typeof theString === 'string' && theString.length > 0;
};

// expectedStructure
// [{ prop: string, type: "isArray" | "isObject" | "isValue" }, ...]
export const isValidObject = (theStructure, expectedStructure = []) => {
  if (!isObject(theStructure) || !Array.isArray(expectedStructure)) {
    return false;
  }

  return expectedStructure.reduce((accumulator, currentValue) => {
    const validProp = typeof currentValue.prop === 'string';
    const hasTheProp = theStructure.hasOwnProperty(currentValue.prop);
    const isValidType = checkProp(
      theStructure[currentValue.prop],
      currentValue.type
    );

    const theResult =
      validProp && hasTheProp && isValidType ? accumulator : false;

    return theResult;
  }, true);
};

export const isFullOfTrashObject = (
  obj,
  extraCondition = () => {
    return true;
  }
) => {
  let theResponse = true;
  Object.keys(obj).forEach(key => {
    if (obj[key] !== null && obj[key] !== '' && extraCondition(obj)) {
      theResponse = false;
    }
  });

  return theResponse;
};

export const isNumeric = n => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

// controlla se un oggetto esiste ed ha dati
export const isValidDataObject = dataObject => {
  return (
    typeof dataObject === 'object' &&
    elementExists(dataObject) &&
    Object.keys(dataObject).length > 0
  );
};

// controlla se un array esiste ed ha dati
export const isValidDataArray = dataArray => {
  return (
    elementExists(dataArray) && Array.isArray(dataArray) && dataArray.length > 0
  );
};

export const isPositiveInt = value => {
  return parseInt(value, 10) > 0 || false;
};

export const isValidDateObject = d =>
  isValidObject(d) && d instanceof Date && !isNaN(d.getDate());

export const isValidFunction = f => typeof f === 'function';
