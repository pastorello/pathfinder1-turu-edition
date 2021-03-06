import React, { useState } from "react";

import conditions from "../../data/conditions";

import { Row, Column } from "../../components/Grid";
import sortOnKey from "../../tools/sortOnKey";
import Selector from "../../components/Selector";
import dices from "../../data/dices";

const durationOptions = dices.d20.map((item) => ({
  value: item,
  label: item === 0 ? "Permanente" : `${item} round`,
}));

const conditionsList = Object.keys(conditions)
  .filter(
    (item) =>
      !conditions[item].hasOwnProperty("showTag") ||
      conditions[item].showTag === true
  )
  .map((item) => ({
    value: item,
    label: conditions[item].name,
  }))
  .sort(sortOnKey("label", "insensitive", false));

const ConditionsBox = (props) => {
  const [selectedValue, editSelectedValue] = useState({
    value: 1,
    label: 1,
  });
  const [selectedDuration, editDuration] = useState({
    value: 0,
    label: "Permanente",
  });
  const [selectedCondition, editSelectedCondition] = useState(
    conditionsList[0]
  );

  const theProps = {
    conditionSelect: {
      options: conditionsList,
      onChange: (value) => editSelectedCondition(value),
      value: selectedCondition,
    },
    valueSelect: {
      options: [1, 2, 3, 4, 5].map((item) => ({
        value: item,
        label: item,
      })),
      onChange: (value) => editSelectedValue(value),
      value: selectedValue,
    },
    roundsSelect: {
      options: durationOptions,
      onChange: (value) => editDuration(value),
      value: selectedDuration,
    },
    addConditionButton: {
      onClick: () =>
        props.addConditionAction(props.selectedPGID, {
          name: selectedCondition.value,
          value: selectedValue.value,
          duration: selectedDuration.value,
        }),
      children: "Aggiungi Condizione",
    },
  };

  return (
    <Row className="mb20">
      <Column small={6}>
        <Row>
          <Column small={8}>
            <Selector {...theProps.conditionSelect} />
          </Column>

          {conditions[selectedCondition.value].hasValue === true && (
            <Column small={4}>
              <Selector {...theProps.valueSelect} />
            </Column>
          )}
        </Row>
      </Column>
      <Column small={3}>
        <Selector {...theProps.roundsSelect} />
      </Column>
      <Column small={3}>
        <button {...theProps.addConditionButton} />
      </Column>
    </Row>
  );
};

export default ConditionsBox;
