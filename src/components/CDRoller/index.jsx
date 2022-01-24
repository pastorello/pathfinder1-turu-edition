import React, { useEffect, useState } from "react";

import { Row, Column } from "../Grid";
import getBonus from "../../tools/getBonus";
import Selector from "../Selector";
import dices from "../../data/dices";

const CDRoller = (props) => {
  const [resultClass, setResultClass] = useState("");

  useEffect(() => {
    setResultClass("is-changed");
    setTimeout(() => setResultClass(""), 1000);
  }, [props.roll]);

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
        <div className={"total-result " + resultClass}>
          <strong>{theBonus + props.roll.value}</strong>
        </div>
      </Column>
    </Row>
  );
};
export default CDRoller;
