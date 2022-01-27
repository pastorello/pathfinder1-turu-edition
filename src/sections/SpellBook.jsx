import React, { useState } from "react";
import spellsDB from "../data/spells";
import { Row, Column } from "../components/Grid";

const magicSchools = {
  blackMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "nera");
  },
  whiteMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "bianca");
  },
  primeviMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "primeva");
  },
  arcaneMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "arcana");
  },
  occultMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "occulta");
  },
  elementalMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "fatata");
  },
  satanicMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "satanica");
  },
  runicMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "runica");
  },
  demonicMagic: (spell) => {
    const theSource = Array.isArray(spell.source) ? spell.source : [];
    return theSource.some((item) => item === "demoniaca");
  },
};

const SpellBook = (props) => {
  const [levelFilter, setLevelFilter] = useState("all");
  const [schoolFilter, setSchoolFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("all");

  const filterFunction = (item) => {
    return (
      (levelFilter === "all" || item.level === parseInt(levelFilter)) &&
      (schoolFilter === "all" || item.school === schoolFilter) &&
      (colorFilter === "all" || magicSchools[colorFilter](item))
    );
  };

  const theSpells = spellsDB
    .filter((item) => filterFunction(item))
    .sort((a, b) => {
      if (a.level < b.level) {
        return -1;
      }
      if (a.level > b.level) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .map((item) => {
      return (
        <Row className="mb10" key={item.url}>
          <Column small={1}>{item.level}</Column>
          <Column small={3}>
            <h3>
              <a
                href={`https://pf2.altervista.org${item.url}`}
                target={"_blank"}
                rel="noreferrer"
              >
                {item.name}
              </a>{" "}
            </h3>
          </Column>
          <Column small={2}>
            <small>{item.school}</small>
          </Column>
          <Column small={6}>
            <p>{item.description}</p>
          </Column>
        </Row>
      );
    });
  return (
    <Row>
      <Column small={12}>
        <h2>SpellBook</h2>
        <Row className="mb20">
          <Column small={1}>{theSpells.length}</Column>
          <Column small={3}>
            Livello:
            <select onChange={(event) => setLevelFilter(event.target.value)}>
              <option value={"all"}>all</option>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </Column>
          <Column small={3}>
            Scuola:
            <select onChange={(event) => setSchoolFilter(event.target.value)}>
              <option value={"all"}>all</option>
              <option value={"abiurazione"}>abiurazione</option>
              <option value={"ammaliamento"}>ammaliamento</option>
              <option value={"evocazione"}>evocazione</option>
              <option value={"illusione"}>illusione</option>
              <option value={"invocazione"}>invocazione</option>
              <option value={"necromanzia"}>necromanzia</option>
              <option value={"trasmutazione"}>trasmutazione</option>
              <option value={"divinazione"}>divinazione</option>
            </select>
          </Column>
          <Column small={3}>
            Magia:
            <select onChange={(event) => setColorFilter(event.target.value)}>
              <option value={"all"}>all</option>
              <option value={"whiteMagic"}>Magia Bianca</option>
              <option value={"arcaneMagic"}>Magia Arcana</option>
              <option value={"runicMagic"}>Magia Runica</option>
              <option value={"occultMagic"}>Magia Occulta</option>
              <option value={"primeviMagic"}>Magia Primeva</option>
              <option value={"elementalMagic"}>Magia Fatata</option>
              <option value={"demonicMagic"}>Magia Demoniaca</option>
              <option value={"blackMagic"}>Magia Nera</option>
              <option value={"satanicMagic"}>Magia Satanica</option>
            </select>
          </Column>
        </Row>
        {theSpells}
      </Column>
    </Row>
  );
};

export default SpellBook;
