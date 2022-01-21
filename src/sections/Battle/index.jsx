import React, { useState } from "react";

import { Row, Column } from "../../components/Grid";
import conditions from "../../data/conditions";
import addBonus from "../../tools/addBonus";
import getBonus from "../../tools/getBonus";
import sortOnKey from "../../tools/sortOnKey";
import assignSkillBonus from "./assignSkillBonus";
import AttackBox from "./AttackBox";
import CDBox from "./CDBox";
import ConditionsBox from "./ConditionsBox";
import DamageRoller from "./DamageRoller";
import party from "./party";
import Player from "./Player";
import VsBox from "./VSBox";

const parseParty = (item) =>
  item.map((item2) => ({
    ...item2,
    ferito: 0,
    actualPF: getBonus(
      addBonus(item2.hitPoints, "co", getBonus(item2.skillCheck.co))
    ),
    conditions: [],
    activeEffects: [],
  }));

const Battle = (props) => {
  const [actualTurn, setActualTurn] = useState(0);
  const [theParty, setParty] = useState(parseParty(party));
  const [actualPlayer, setActualPlayer] = useState(party[0].id);
  const [panchina, setPanchina] = useState([]);
  const [actualRollResult, setActualRollResult] = useState(0);
  const [selectedPG, setSelectedPG] = useState({
    value: party.length > 0 ? party[0].id : "no players",
    label: party.length > 0 ? party[0].name : "no players",
  });

  const resetBattle = () => {
    setActualTurn(0);
    setActualPlayer(theParty[0].id);
  };

  const reloadParty = () => {
    setParty(parseParty(party));
    setPanchina([]);
    setActualPlayer(party[0].id);
  };

  const addCondition = (playerID, condition) => {
    const getAdditionalConditions = (item, recursion = []) => {
      if (conditions[item].hasOwnProperty("extendsCondition")) {
        const newConditions = conditions[item].extendsCondition.filter(
          (item2) => !recursion.some((item3) => item3 === item2)
        );
        return newConditions.reduce((acc, item2) => {
          return [item2, ...getAdditionalConditions(item2, acc)];
        }, recursion);
      }
      return recursion;
    };

    const getConditionsToRemove = (conditionsArray) => {
      return conditionsArray.reduce(
        (acc, item) =>
          conditions[item.name].hasOwnProperty("removesCondition")
            ? [...acc, ...conditions[item.name].removesCondition]
            : acc,
        []
      );
    };

    const additionalConditions = getAdditionalConditions(condition.name);
    const conditionsToAdd = [
      condition,
      ...additionalConditions.map((item) => ({
        name: item,
        value: 0,
        duration: 0,
      })),
    ];

    const conditionsToRemove = getConditionsToRemove(conditionsToAdd);

    setParty(
      theParty.map((item) => {
        if (item.id === playerID) {
          const resultConditions = [];
          const newConditions = [
            ...item.conditions.filter((item2) => {
              const asd = 2;
              return (
                item2.name !== condition.name &&
                !conditionsToRemove.some((item3) => {
                  const asd = 4;
                  return item2.name === item3;
                })
              );
            }),
            ...conditionsToAdd,
          ];

          newConditions.forEach((item2) => {
            if (!resultConditions.some((item3) => item3.name === item2.name)) {
              resultConditions.push(item2);
            }
          });

          return {
            ...item,
            conditions: resultConditions,
          };
        }
        return item;
      })
    );
  };

  const removeCondition = (playerID, condition) => {
    setParty(
      theParty.map((item) => ({
        ...item,
        conditions:
          item.id === playerID
            ? [...item.conditions.filter((item2) => item2.name !== condition)]
            : item.conditions,
      }))
    );
  };

  const setInitiativeRoll = (playerID, initiative) => {
    setParty(
      theParty.map((item) => ({
        ...item,
        initiativeRoll:
          item.id === playerID
            ? getBonus(item.perception) + parseInt(initiative)
            : item.initiativeRoll,
      }))
    );
  };

  const setStat = (playerID, statName, value) => {
    setParty(
      theParty.map((item) => ({
        ...item,
        [statName]: item.id === playerID ? value : item[statName],
      }))
    );
  };

  const sortInitiative = () => {
    const newSort = theParty.sort(sortOnKey("initiativeRoll", "number", true));
    setParty(newSort);
    setActualPlayer(newSort[0].id);
    setSelectedPG({
      value: newSort[0].id,
      label: newSort[0].name,
    });
  };

  const nextTurn = () => {
    setActualTurn(actualTurn + 1);
    if (theParty.length > 1) {
      const lastPlayer = theParty[0];
      const newParty = [...theParty];
      newParty.shift();
      setParty([...newParty, lastPlayer]);
      setActualPlayer(newParty[0].id);
    }
  };

  const movePG = (playerID, direction) => {
    if (direction === "in") {
      setParty([
        ...theParty,
        ...panchina.filter((item) => item.id === playerID),
      ]);
      setPanchina([...panchina.filter((item) => item.id !== playerID)]);
    }
    if (direction === "out") {
      setParty([...theParty.filter((item) => item.id !== playerID)]);
      setPanchina([
        ...panchina,
        ...theParty.filter((item) => item.id === playerID),
      ]);
    }
    if (direction === "up") {
      const newParty = [...theParty];
      const playerIndex = theParty.findIndex((item) => item.id === playerID);
      if (playerIndex > 0) {
        const playerToMove = {
          ...theParty[playerIndex - 1],
        };
        newParty[playerIndex - 1] = newParty[playerIndex];
        newParty[playerIndex] = playerToMove;
      }
      setParty(newParty);
    }
    if (direction === "down") {
      const newParty = [...theParty];
      const playerIndex = theParty.findIndex((item) => item.id === playerID);
      if (playerIndex < theParty.length - 1) {
        const playerToMove = {
          ...theParty[playerIndex + 1],
        };
        newParty[playerIndex + 1] = newParty[playerIndex];
        newParty[playerIndex] = playerToMove;
      }
      setParty(newParty);
    }
  };

  const buffedParty = theParty.map((item) => {
    let conditionedPG = assignSkillBonus(
      item.conditions.reduce(
        (acc, item2) => conditions[item2.name].effect(acc, item2.value),
        item
      )
    );

    return conditionedPG;
  });
  const actualPG = buffedParty.reduce(
    (item, acc) => (item.id === selectedPG.value ? item : acc),
    {}
  );
  const actualTurnPG = buffedParty.reduce(
    (item, acc) => (item.id === actualPlayer ? item : acc),
    {}
  );

  const thePlayers = buffedParty.map((item) => {
    const theProps = {
      ...item,
      key: item.id,
      isActive: item.id === actualPlayer,
      moveAction: movePG,
      removeConditionAction: removeCondition,
      setInitiativeRollAction: setInitiativeRoll,
      setStatAction: setStat,
      addConditionAction: addCondition,
    };
    return <Player {...theProps} />;
  });

  const outOfCombatPlayers = panchina.map((item) => {
    const theProps = {
      ...item,
      key: item.id,
      isActive: false,
      isOutOfCombat: true,
      moveAction: movePG,
    };
    return <Player {...theProps} />;
  });

  const theProps = {
    vsBox: {
      actualParty: buffedParty,
      selectedPG: actualTurnPG,
      vsPG: actualPG,
      editSelectedPG: setSelectedPG,
    },
    conditionsBox: {
      addConditionAction: addCondition,
      actualParty: buffedParty,
      selectedPG: selectedPG,
      editSelectedPG: setSelectedPG,
    },
    attackBox: {
      actualPG: actualTurnPG,
      vsPG: actualPG,
    },
    cdBox: {
      actualPG: actualPG,
    },
    damageRoller: {
      onDiceRolled: setActualRollResult,
      roll: actualRollResult,
      onAssignRoll: (type) =>
        setStat(
          selectedPG.value,
          "actualPF",
          buffedParty.reduce(
            (acc, item) => (item.id === selectedPG.value ? item.actualPF : acc),
            0
          ) +
            (type === "heal" ? 1 : -1) * parseInt(actualRollResult)
        ),
    },
  };
  return (
    <Row>
      <Column small={12}>
        <Row>
          <Column small={4}>
            <h1>The Battle</h1>
          </Column>
          <Column small={1}>
            <h3>
              Round <strong>{actualTurn}</strong>
            </h3>
          </Column>
          <Column>
            <button type="button" onClick={nextTurn}>
              Prossimo turno
            </button>
          </Column>
          <Column>
            <button type="button" onClick={sortInitiative}>
              Ordina Iniziativa
            </button>
          </Column>
          <Column className="shrink">
            <button type="button" onClick={reloadParty}>
              Ricarica Party
            </button>
          </Column>
          <Column className="shrink">
            <button type="button" onClick={resetBattle}>
              Resetta Turni
            </button>
          </Column>
        </Row>
        <hr className="mb20" />
        {thePlayers.length > 0 && (
          <>
            <Row className="collapse">
              <Column small={3}>
                <VsBox {...theProps.vsBox} />
              </Column>
              <Column small={9}>
                <AttackBox {...theProps.attackBox} />
                <DamageRoller {...theProps.damageRoller} />
                <CDBox {...theProps.cdBox} />
                <ConditionsBox {...theProps.conditionsBox} />
              </Column>
            </Row>
            <hr />
            {thePlayers}
          </>
        )}
        <h2 className="mt40">Fuori dal combattimento</h2>
        {outOfCombatPlayers}
      </Column>
    </Row>
  );
};

export default Battle;
