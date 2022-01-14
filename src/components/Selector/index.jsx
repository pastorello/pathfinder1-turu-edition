import React from "react";
import Select from "react-select";

const defaultStyle = {
  control: (provided, state) => ({
    ...provided,
    height: 36,
  }),
  input: (provided, state) => ({
    ...provided,
    height: 36,
    margin: 0,
    padding: 0,
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: 36,
  }),
};

const Selector = (props) => {
  const theProps = {
    ...props,
    styles: defaultStyle,
  };
  return <Select {...theProps} />;
};

export default Selector;
