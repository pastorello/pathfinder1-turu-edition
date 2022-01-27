import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Column } from "../Grid";
import Selector from "../Selector";
import dices from "../../data/dices";
import isValid from "../../tools/isValid";
import classNames from "classnames";

const DiceRoller = (props) => {
  const [quantity, setQuantity] = useState({
    value: props.defaultDice.quantity || 1,
    label: 1,
  });
  const [faces, setFaces] = useState({
    value: dices.hasOwnProperty(props.defaultDice.faces)
      ? dices[props.defaultDice.faces]
      : Object.keys(dices)[0],
    label: dices.hasOwnProperty(props.defaultDice.faces)
      ? dices[props.defaultDice.faces]
      : Object.keys(dices)[0],
  });
  const [bonus, setBonus] = useState(props.defaultDice.bonus || 0);
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
        const newValue = isValid.num(event.target.value)
          ? event.target.value
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
      className: classNames("mini-button", {
        "bg-selected": actualMultiplier === 2,
      }),
    },
    x3Button: {
      onClick: () => setActualMultiplier(actualMultiplier !== 3 ? 3 : 1),
      children: "X3",
      className: classNames("mini-button", {
        "bg-selected": actualMultiplier === 3,
      }),
    },
    div2Button: {
      onClick: () => setActualMultiplier(actualMultiplier !== 0.5 ? 0.5 : 1),
      children: "/2",
      className: classNames("mini-button", {
        "bg-selected": actualMultiplier === 0.5,
      }),
    },
  };
  return (
    <Row className="mb20">
      <Column small={5}>
        <Row>
          <Column small={6}>
            <Selector {...theProps.quantitySelect} />
          </Column>
          <Column small={6}>
            <Selector {...theProps.facesSelect} />
          </Column>
        </Row>
      </Column>
      <Column small={2}>
        <input {...theProps.bonusInput} />
      </Column>
      <Column small={2}>
        <button {...theProps.rollButton} />
      </Column>
      <Column small={3}>
        Risultato:{" "}
        <strong>{Math.floor(parseInt(result) * actualMultiplier)}</strong>
        <Row className="collapse">
          <Column small={4}>
            <button {...theProps.x2Button} />
          </Column>
          <Column small={4}>
            <button {...theProps.x3Button} />
          </Column>
          <Column small={4}>
            <button {...theProps.div2Button} />
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

DiceRoller.propTypes = {
  defaultDice: PropTypes.shape({
    quantity: PropTypes.number,
    faces: PropTypes.number,
    bonus: PropTypes.number,
  }),
};
export default DiceRoller;
