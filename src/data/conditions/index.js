import buffConditions from "./buffConditions";
import healthConditions from "./healthConditions";
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
};

export default conditions;
