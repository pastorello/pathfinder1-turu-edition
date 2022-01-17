import React, { useState } from "react";

import { Row, Column } from "../Grid";
import Selector from "../Selector";
import dices from "../../data/dices";
import isValidInt from "../../tools/isValidInt";

const DiceRoller = (props) => {
  const [quantity, setQuantity] = useState({ value: 1, label: 1 });
  const [faces, setFaces] = useState({
    value: Object.keys(dices)[0],
    label: Object.keys(dices)[0],
  });
  const [bonus, setBonus] = useState(0);
  const [result, setResult] = useState(0);
  const [actualMultiplier, setActualMultiplier] = useState(1);

  const theProps = {
    quantitySelect: {
      options: [...Array.from(Array(30).keys())].map((item) => ({
        value: item + 1,
        label: item + 1,
      })),
      onChange: (event) => setQuantity(event),
      value: quantity,
    },
    facesSelect: {
      options: Object.keys(dices).map((item) => ({
        value: item,
        label: item,
      })),
      onChange: (event) => setFaces(event),
      value: faces,
    },
    bonusInput: {
      onChange: (event) => {
        const newValue = isValidInt(event.target.value)
          ? parseInt(event.target.value)
          : 0;
        setBonus(newValue);
      },
      value: bonus,
    },
    rollButton: {
      onClick: () => {
        let newValue = parseInt(bonus);

        for (let i = 0; i < quantity.value; i++) {
          newValue += Math.floor(
            Math.random() * Object.keys(dices[faces.value]).length + 1
          );
        }
        setResult(newValue);
        props.onDiceRolled(newValue);
      },
      children: "ROLL",
    },
    x2Button: {
      onClick: () => setActualMultiplier(actualMultiplier !== 2 ? 2 : 1),
      children: "X2",
      className: actualMultiplier === 2 ? "bg-selected" : "",
    },
    x3Button: {
      onClick: () => setActualMultiplier(actualMultiplier !== 3 ? 3 : 1),
      children: "X2",
      className: actualMultiplier === 3 ? "bg-selected" : "",
    },
    div2Button: {
      onClick: () => setActualMultiplier(actualMultiplier !== 0.5 ? 0.5 : 1),
      children: "/2",
      className: actualMultiplier === 0.5 ? "bg-selected" : "",
    },
  };
  return (
    <Row className="mb20">
      <Column>
        <Selector {...theProps.quantitySelect} />
      </Column>
      <Column>
        <Selector {...theProps.facesSelect} />
      </Column>
      <Column>
        <input {...theProps.bonusInput} />
      </Column>
      <Column>
        <button {...theProps.rollButton} />
      </Column>
      <Column>
        Risultato: <strong>{result}</strong>
      </Column>
    </Row>
  );
};
export default DiceRoller;
