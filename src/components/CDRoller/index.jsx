import React from "react";

import { Row, Column } from "../Grid";
import getBonus from "../../tools/getBonus";
import Selector from "../Selector";
import dices from "../../data/dices";

const CDRoller = (props) => {
  const theProps = {
    rollSelect: {
      options: dices.d20.map((item) => ({ value: item, label: item + 1 })),
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

  const theBonus = getBonus(props.stat);
  if (props.rollButtonOnLeft === true) {
    return (
      <Row>
        <Column small={4}>
          <button {...theProps.rollButton} />
        </Column>
        <Column small={5}>
          <Selector {...theProps.rollSelect} />
        </Column>
        <Column small={3}>
          <div>
            {theBonus > 0 && "+"}
            {theBonus}
          </div>
          <div>
            <strong>{theBonus + props.roll.value}</strong>
          </div>
        </Column>
      </Row>
    );
  }

  return (
    <Row>
      <Column className="shrink center-content">
        <div className="label">
          <strong>{theBonus}</strong> +
        </div>
      </Column>
      <Column>
        <Selector {...theProps.rollSelect} />
      </Column>
      <Column className="shrink">
        <button {...theProps.rollButton} />
      </Column>
      <Column className="center-content">
        <div>
          = <strong>{theBonus + props.roll.value}</strong>
        </div>
      </Column>
    </Row>
  );
};
export default CDRoller;
