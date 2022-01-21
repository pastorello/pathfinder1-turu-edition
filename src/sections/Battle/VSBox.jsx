import React from "react";
import { Row, Column } from "../../components/Grid";

import Selector from "../../components/Selector";

const VsBox = (props) => {
  const theProps = {
    PGSelect: {
      options: props.actualParty.map((item) => ({
        value: item.id,
        label: item.name,
      })),
      onChange: (value) => props.editSelectedPG(value),
      value: {
        value: props.vsPG.id,
        label: props.vsPG.name,
      },
    },
  };

  return (
    <Row>
      <Column small={12} className="mb10">
        <div>
          <strong>{props.selectedPG.name}</strong>
        </div>
        <div>vs</div>
      </Column>
      <Column small={12}>
        <Selector {...theProps.PGSelect} />
      </Column>
    </Row>
  );
};

export default VsBox;
