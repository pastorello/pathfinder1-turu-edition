import buffConditions from "./buffConditions";
import healthConditions from "./healthConditions";
import mentalConditions from "./mentalConditions";
import mobilityConditions from "./mobilityConditions";
import physicalConditions from "./physicalConditions";
import visibilityConditions from "./visibilityConditions";

const conditions = {
  ...healthConditions,
  ...mentalConditions,
  ...mobilityConditions,
  ...physicalConditions,
  ...buffConditions,
};

export default conditions;
