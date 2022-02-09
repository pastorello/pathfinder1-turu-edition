import React, { useState } from "react";

import isValid from "../../tools/isValid";
import spellsDB from "../../data/spells";
import { Row, Column } from "../../components/Grid";

import schoolFilters from "./schoolsFilter";
import SearchStats from "./SearchStats";
import Selector from "../../components/Selector";
import SpellCard from "./SpellCard";
import BookStats from "./BookStats";

const optionAll = { value: "all", label: "all" };

const schoolOptions = [
  { value: "all", label: "all" },
  { value: "abiurazione", label: "abiurazione" },
  { value: "ammaliamento", label: "ammaliamento" },
  { value: "evocazione", label: "evocazione" },
  { value: "illusione", label: "illusione" },
  { value: "invocazione", label: "invocazione" },
  { value: "necromanzia", label: "necromanzia" },
  { value: "trasmutazione", label: "trasmutazione" },
  { value: "divinazione", label: "divinazione" },
];

const colorOptions = [
  { value: "all", label: "all" },
  { value: "arcaneMagic", label: "Arcana" },
  { value: "blackMagic", label: "Blasfema" },
  { value: "whiteMagic", label: "Divina" },
  { value: "elementalMagic", label: "Fatata" },
  { value: "demonicMagic", label: "Infernale" },
  { value: "satanicMagic", label: "Nera" },
  { value: "occultMagic", label: "Occulta" },
  { value: "primeviMagic", label: "Primeva" },
  { value: "runicMagic", label: "Runica" },
];

const SpellBook = (props) => {
  const [levelFilter, setLevelFilter] = useState(optionAll);
  const [schoolFilter, setSchoolFilter] = useState(optionAll);
  const [colorFilter, setColorFilter] = useState(optionAll);
  const [searchValue, setSearchValue] = useState("");

  const filterFunction = (item) => {
    const actualLevel = levelFilter.value;

    const isInLevel =
      actualLevel === "all" ||
      item.level === actualLevel ||
      (isValid.dataArray(item.intensified) &&
        item.intensified.some((item2) => item2 === actualLevel));

    const isInWord =
      searchValue === null ||
      item.name.toLowerCase().includes(searchValue.toLowerCase());

    return (
      isInWord &&
      isInLevel &&
      (schoolFilter.value === "all" || item.school === schoolFilter.value) &&
      (colorFilter.value === "all" || schoolFilters[colorFilter.value](item))
    );
  };

  const mainSpells = [];
  const intensifiedSpells = [];

  spellsDB
    .filter((item) => filterFunction(item))
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      if (a.level < b.level) {
        return -1;
      }
      if (a.level > b.level) {
        return 1;
      }
      return 0;
    })
    .forEach((item) =>
      isValid.dataArray(item.intensified) &&
      item.intensified.some((item2) => item2 === levelFilter.value)
        ? intensifiedSpells.push(item)
        : mainSpells.push(item)
    );

  const SpellCards = mainSpells.map((item) => (
    <SpellCard data={item} key={item.url} />
  ));
  const IntensifiedSpellCards = intensifiedSpells.map((item) => (
    <SpellCard data={item} key={item.url} />
  ));

  const theProps = {
    searchInput: {
      placeholder: "search",
      value: searchValue,
      onChange: (event) => setSearchValue(event.target.value),
    },
    levelSelect: {
      options: [
        optionAll,
        ...Array.from(Array(11).keys()).map((item) => ({
          value: item,
          label: item,
        })),
      ],
      onChange: (value) => setLevelFilter(value),
      value: levelFilter,
    },
    schoolSelect: {
      options: schoolOptions,
      onChange: (value) => setSchoolFilter(value),
      value: schoolFilter,
    },
    colorSelect: {
      options: colorOptions,
      onChange: (value) => setColorFilter(value),
      value: colorFilter,
    },
  };

  return (
    <>
      <Row className="mb20">
        <Column small={3}>
          <h1>SpellBook</h1>
        </Column>
        <Column small={9}>
          <SearchStats main={mainSpells} intensified={intensifiedSpells} />
        </Column>
      </Row>
      <BookStats />
      <Row className="mb20">
        <Column small={1}>
          <Selector {...theProps.levelSelect} />
        </Column>
        <Column small={3}>
          <input {...theProps.searchInput} />
        </Column>
        <Column small={2}>
          <Selector {...theProps.schoolSelect} />
        </Column>
        <Column small={6}>
          <Selector {...theProps.colorSelect} />
        </Column>
      </Row>
      {SpellCards}
      <Row>
        <Column small={12}>
          <hr />
          <h2>Intensificati disponibili</h2>
        </Column>
        <hr />
      </Row>
      {IntensifiedSpellCards}
    </>
  );
};

export default SpellBook;
