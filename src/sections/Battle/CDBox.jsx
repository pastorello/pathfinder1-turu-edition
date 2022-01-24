import React, { useState } from "react";

import abilities from "../../data/abilities";

import { Row, Column } from "../../components/Grid";
import getCDResult from "../../tools/getCDResult";
import CDRoller from "../../components/CDRoller";
import Selector from "../../components/Selector";
import getBonus from "../../tools/getBonus";

const checkTypes = [
  {
    label: "Tiro Salvezza",
    value: "saveThrow",
  },
  {
    label: "Prova di Abilità",
    value: "abilityCheck",
  },
  {
    label: "Prova di Classe",
    value: "classCheck",
  },
  {
    label: "Prova Semplice",
    value: "baseCheck",
  },
];

const saveThrowTypes = [
  {
    label: "Tempra",
    value: "tsTempra",
  },
  {
    label: "Riflessi",
    value: "tsRiflessi",
  },
  {
    label: "Volonta",
    value: "tsVolonta",
  },
];

const CDBox = (props) => {
  const [actualCheckType, setActualCheckType] = useState(checkTypes[0]);
  const [actualsaveThrowType, setsaveThrowType] = useState(saveThrowTypes[0]);
  const [actualRoll, setActualRoll] = useState({ value: 1, label: 1 });
  const [actualAbility, setActualAbility] = useState({
    value: Object.keys(abilities)[0],
    label: abilities[Object.keys(abilities)[0]].name,
  });
  const [actualCD, setActualCD] = useState(5);

  const statGetters = {
    abilityCheck: props.actualPG.abilityCheck[actualAbility.value],
    saveThrow: props.actualPG[actualsaveThrowType.value],
    classCheck: props.actualPG.classCheck,
    baseCheck: { bonus: 0, malus: 0 },
  };

  const actualStat = statGetters[actualCheckType.value];

  const theProps = {
    abilitySelect: {
      options: Object.keys(abilities).map((item) => ({
        value: item,
        label: abilities[item].name,
      })),
      onChange: (event) => setActualAbility(event),
      value: actualAbility,
    },
    checkTypeSelect: {
      options: checkTypes,
      onChange: (event) => setActualCheckType(event),
      value: actualCheckType,
    },
    saveThrowTypeSelect: {
      options: saveThrowTypes,
      onChange: (event) => setsaveThrowType(event),
      value: actualsaveThrowType,
    },
    cdRoller: {
      stat: actualStat,
      roll: actualRoll,
      setRoll: setActualRoll,
    },
  };

  return (
    <Row className="mb20 collapse">
      <Column small={6}>
        <Row>
          <Column small={6}>
            <Selector {...theProps.checkTypeSelect} />
          </Column>
          <Column small={6}>
            {actualCheckType.value === "abilityCheck" && (
              <Selector {...theProps.abilitySelect} />
            )}
            {actualCheckType.value === "saveThrow" && (
              <Selector {...theProps.saveThrowTypeSelect} />
            )}
          </Column>
        </Row>
      </Column>
      <Column small={6}>
        <Row>
          <Column small={7}>
            <CDRoller {...theProps.cdRoller} />
          </Column>
          <Column small={3}>
            <Row>
              <Column className="shrink center-content">
                <div className="label">
                  <div>vs</div>
                </div>
              </Column>
              <Column>
                <input
                  value={actualCD}
                  onChange={(event) => setActualCD(event.target.value)}
                />
              </Column>
            </Row>
          </Column>
          <Column small={2} className="center-content">
            <div className="label">
              {getCDResult(actualRoll.value, actualStat, actualCD)}
            </div>
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default CDBox;
