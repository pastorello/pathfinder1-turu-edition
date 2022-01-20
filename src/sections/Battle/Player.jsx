import React, { useState } from "react";
import styled from "styled-components";
import CDRoller from "../../components/CDRoller";

import { Row, Column } from "../../components/Grid";
import getBonus from "../../tools/getBonus";
import Selector from "../../components/Selector";
import ConditionTag from "../../components/ConditionTag";
import visibilityConditions from "../../data/conditions/visibilityConditions";
import terrainConditions from "../../data/conditions/terrainConditions";
import conditions from "../../data/conditions";
import isValid from "../../tools/isValid";
import illuminationConditions from "../../data/conditions/illuminationConditions";

const Wrapper = styled(Row)`
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
  margin-bottom: 10px;
  .selected-label {
    display: flex;
    ${(props) => props.isSelected === true && "background: #999;"}
    padding: 5px;
  }
`;

const getSelectOptions = (optionsObject) => {
  return Object.keys(optionsObject)
    .filter((item) => {
      const theCondition = conditions[item];
      return (
        theCondition.hasOwnProperty("showTag") && theCondition.showTag === false
      );
    })
    .map((item) => ({
      value: item,
      label: optionsObject[item].name,
    }));
};
const availableTerrainConditions = getSelectOptions(terrainConditions);
const availableVisibilityConditions = getSelectOptions(visibilityConditions);
const availableIlluminationConditions = getSelectOptions(
  illuminationConditions
);

const Player = (props) => {
  const [initiativeRoll, setInitiativeRoll] = useState({ value: 1, label: 1 });
  const [PFinput, setPfInput] = useState(0);

  const getActualCondition = (availableConditions, defaultCondition) => {
    const selectedCondition = props.conditions.find((item) =>
      availableConditions.some((item2) => item2.value === item.name)
    );
    return isValid.dataObj(selectedCondition)
      ? {
          value: selectedCondition.name,
          label: conditions[selectedCondition.name].name,
        }
      : {
          value: defaultCondition,
          label: conditions[defaultCondition].name,
        };
  };

  const actualTerrain = getActualCondition(
    availableTerrainConditions,
    "terrenoNormale"
  );
  const actualVisibility = getActualCondition(
    availableVisibilityConditions,
    "inosservato"
  );
  const actualIllumination = getActualCondition(
    availableIlluminationConditions,
    "luceIntensa"
  );

  const theProps = {
    upButton: {
      onClick: () => props.moveAction(props.id, "up"),
      children: "up",
      className: "small-button",
    },
    downButton: {
      onClick: () => props.moveAction(props.id, "down"),
      children: "down",
      className: "small-button",
    },
    outButton: {
      onClick: () => props.moveAction(props.id, "out"),
      children: "out",
      className: "small-button",
    },
    inButton: {
      onClick: () => props.moveAction(props.id, "in"),
      children: "in",
      className: "small-button",
    },
    cdRoller: {
      stat: props.perception,
      roll: initiativeRoll,
      setRoll: (value) => {
        setInitiativeRoll(value);
        props.setInitiativeRollAction(props.id, value.value);
      },
    },
    PFinput: {
      onChange: (event) => setPfInput(event.target.value),
      value: PFinput,
    },
    addHeal: {
      onClick: () =>
        props.setStatAction(
          props.id,
          "actualPF",
          props.actualPF + parseInt(PFinput)
        ),
      children: "+",
    },
    addDamage: {
      onClick: () =>
        props.setStatAction(
          props.id,
          "actualPF",
          props.actualPF - parseInt(PFinput)
        ),
      children: "-",
    },
    visibilitySelect: {
      options: availableVisibilityConditions,
      onChange: (value) => {
        props.addConditionAction(props.id, { name: value.value, duration: 0 });
      },
      value: actualVisibility,
    },
    illuminationSelect: {
      options: availableIlluminationConditions,
      onChange: (value) => {
        props.addConditionAction(props.id, { name: value.value, duration: 0 });
      },
      value: actualIllumination,
    },
    terrainSelect: {
      options: availableTerrainConditions,
      onChange: (value) => {
        props.addConditionAction(props.id, { name: value.value, duration: 0 });
      },
      value: actualTerrain,
    },
  };

  const conditionsToShow = props.conditions.filter((item) => {
    const theCondition = conditions[item.name];
    return (
      !theCondition.hasOwnProperty("showTag") || theCondition.showTag === true
    );
  });

  return (
    <Wrapper isSelected={props.isActive}>
      <Column small={3}>
        <label className="selected-label mb10">
          {props.name} {props.level}° <br />
        </label>
        <Row>
          <Column small={4}>
            <button {...theProps.upButton} />
          </Column>
          <Column small={4}>
            <button {...theProps.downButton} />
          </Column>
          <Column small={4}>
            {props.isOutOfCombat === true ? (
              <button {...theProps.inButton} />
            ) : (
              <button {...theProps.outButton} />
            )}
          </Column>
        </Row>
        <hr />
        <Row className="align-center center">
          <Column small={6}>
            <div>Percezione</div>
            <div>{getBonus(props.perception)}</div>
          </Column>
          <Column small={6}>
            <div>Iniziativa</div>
            <div>
              <strong>{props.initiativeRoll}</strong>
            </div>
          </Column>
        </Row>
        <hr />
        <CDRoller {...theProps.cdRoller} />
      </Column>
      <Column small={9}>
        <Row>
          <Column>
            <div>CA: {getBonus(props.armorClass)}</div>
            <Row className="collapse">
              <Column small={4} className="center-content">
                <div className="label">
                  PF: <br /> <strong>{props.actualPF}</strong>/
                  {getBonus(props.hitPoints)}
                </div>
              </Column>
              <Column>
                <button {...theProps.addDamage} />
              </Column>
              <Column small={4}>
                <input {...theProps.PFinput} />
              </Column>
              <Column>
                <button {...theProps.addHeal} />
              </Column>
            </Row>
            <hr />
            <Row className="collapse">
              <Column small={4}>Ferito {props.ferito}</Column>
              <Column small={8}>
                (morte a Morente {props.ferito + props.sogliaMorente})
              </Column>
            </Row>
          </Column>
          <Column>
            <Selector {...theProps.illuminationSelect} />
            <Selector {...theProps.visibilitySelect} />
          </Column>
          <Column>
            <div>Azioni: {props.actions}</div>
            <div>Velocità: {props.speed}</div>
            <Selector {...theProps.terrainSelect} />
          </Column>
        </Row>
        {conditionsToShow.length > 0 && <hr />}
        <Row>
          {conditionsToShow.map((item) => {
            const theProps = {
              name: item.name,
              value: item.value,
              duration: item.duration,
              removeAction: () =>
                props.removeConditionAction(props.id, item.name),
            };

            return (
              <Column key={item.name} small={4}>
                <ConditionTag {...theProps} />
              </Column>
            );
          })}
        </Row>
        <hr />
        <ul>
          {props.activeEffects.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Column>
    </Wrapper>
  );
};

export default Player;
