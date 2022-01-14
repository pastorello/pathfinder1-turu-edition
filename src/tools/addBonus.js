const addBonus = (item, type, value) => ({
  bonus: {
    ...item.bonus,
    [type]:
      value > 0 && (item.bonus[type] || 0) < value
        ? value
        : item.bonus[type] || 0,
  },
  malus: {
    ...item.malus,
    [type]:
      value < 0 && value < (item.malus[type] || 0)
        ? value
        : item.malus[type] || 0,
  },
});

export default addBonus;
