import React from "react";
import { Column, Row } from "../../components/Grid";

const SearchStats = (props) => {
  const totalResults = props.main.length + props.intensified.length;

  return (
    <>
      <Row>
        <Column small={2}>
          <div>Totali</div>
        </Column>
        <Column small={1}>{totalResults}</Column>
        <Column small={2}>
          <div>Di livello</div>
        </Column>
        <Column small={1}>{props.main.length}</Column>
        <Column small={2}>
          <div>Intensificati</div>
        </Column>
        <Column small={1}>{props.intensified.length}</Column>
      </Row>
    </>
  );
};

export default SearchStats;
