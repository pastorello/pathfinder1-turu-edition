const addBonus = (item, type, value) => ({
  bonus: {
    ...item.bonus,
    [type]: value > 0 && item.bonus[type] < value ? value : item.bonus[type],
  },
  malus: {
    ...item.malus,
    [type]: value < 0 && value < item.bonus[type] ? value : item.bonus[type],
  },
});

export default addBonus;
