import deities from "../data/deities";
import clericFeats from "../data/feats/cleric";

const getDeity = (alignment) => ({
  ...deities.reduce(
    (acc, item) => (item.alignment === alignment ? item : acc),
    {}
  ),
  clericFeats: clericFeats.filter((item) =>
    item.alignment.some((item2) => item2 === alignment)
  ),
});

export default getDeity;
