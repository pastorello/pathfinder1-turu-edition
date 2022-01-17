import React from "react";

import { Row, Column } from "../Grid";
import getBonus from "../../tools/getBonus";
import Selector from "../Selector";
import dices from "../../data/dices";

const CDRoller = (props) => {
  const theProps = {
    rollSelect: {
      options: dices.d20.map((item) => ({ value: item, label: item })),
      onChange: (event) => props.setRoll(event),
      value: props.roll,
    },
    rollButton: {
      onClick: () => {
        const newValue = Math.floor(Math.random() * 20 + 1);
        props.setRoll({
          label: newValue,
          value: newValue,
        });
      },
      children: "ROLL",
    },
  };
  return (
    <Row>
      <Column className="shrink center-content">
        <div className="label">{getBonus(props.stat)} +</div>
      </Column>
      <Column>
        <Selector {...theProps.rollSelect} />
      </Column>
      <Column className="shrink">
        <button {...theProps.rollButton} />
      </Column>
    </Row>
  );
};
export default CDRoller;
