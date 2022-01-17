import buffConditions from "./buffConditions";
import healthConditions from "./healthConditions";
import illuminationConditions from "./illuminationConditions";
import mentalConditions from "./mentalConditions";
import mobilityConditions from "./mobilityConditions";
import physicalConditions from "./physicalConditions";
import terrainConditions from "./terrainConditions";
import visibilityConditions from "./visibilityConditions";

const conditions = {
  ...healthConditions,
  ...mentalConditions,
  ...mobilityConditions,
  ...physicalConditions,
  ...buffConditions,
  ...terrainConditions,
  ...visibilityConditions,
  ...illuminationConditions,
};

export default conditions;
