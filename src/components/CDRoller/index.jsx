import React from "react";

import { Row, Column } from "../Grid";
import getBonus from "../../tools/getBonus";
import Selector from "../Selector";

const d20 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const CDRoller = (props) => {
  const theProps = {
    rollSelect: {
      options: d20.map((item) => ({ value: item, label: item })),
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
      <Column className="shrink">{getBonus(props.stat)} +</Column>
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
