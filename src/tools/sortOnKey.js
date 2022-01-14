const sortOnKey = (key, mode, desc) => {
  const caseInsensitive = mode === "insensitive";
  return (a, b) => {
    a = caseInsensitive ? a[key].toLowerCase() : a[key];
    b = caseInsensitive ? b[key].toLowerCase() : b[key];
    if (mode !== "number") {
      return desc ? b.localeCompare(a) : a.localeCompare(b);
    }
    return desc ? b - a : a - b;
  };
};

export default sortOnKey;
