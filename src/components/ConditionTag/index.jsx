import React from "react";
import styled from "styled-components";
import { Column, Row } from "../Grid";
import conditions from "../../data/conditions";

const Wrapper = styled(Row)`
  width: 100%;
  padding: 5px;
  border-radius: 4px;
  margin-bottom: 5px;
  background: #ddd;
  button {
    width: 20px;
    text-align: center;
    float: right;
    padding: 0;
  }
`;

const ConditionTag = (props) => {
  return (
    <Wrapper className="collapse">
      <Column small={8}>
        {conditions[props.name].name}{" "}
        {conditions[props.name].hasValue && props.value}
      </Column>
      <Column small={4}>
        {props.duration > 0 && `(${props.duration}r)`}{" "}
        <button onClick={props.removeAction}>X</button>
      </Column>
    </Wrapper>
  );
};

export default ConditionTag;
