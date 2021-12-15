import React from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { StyledRow, StyledColumn } from './style';

function getColumnClass(s, m, l, xl, xxl) {
  const small = s === null ? 12 : s;
  const medium = m === null ? small : m;
  const large = l === null ? medium : l;
  const xlarge = xl === null ? large : xl;
  const xxlarge = xxl === null ? xlarge : xxl;

  if (s === null && m === null && l === null && xl === null && xxl === null) {
    // se non viene impostato nulla, le colonne vanno in autosize
    return null;
  }
  return `small-${small} medium-${medium} large-${large} xlarge-${xlarge} xxlarge-${xxlarge}`;
}

function Row(props) {
  const theProps = {
    className: classnames('row', props.className)
  };

  return <StyledRow {...theProps}>{props.children}</StyledRow>;
}

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

Row.defaultProps = {
  className: null,
  children: null
};

function Column(props) {
  const theProps = {
    className: classnames(
      getColumnClass(
        props.small,
        props.medium,
        props.large,
        props.xlarge,
        props.xxlarge
      ),
      props.className,
      'columns'
    )
  };

  if (typeof props.id === 'string') {
    theProps.id = props.id;
  }

  if (props.keyIndex != null && typeof props.keyIndex === 'string') {
    theProps.key = props.keyIndex;
  }

  return <StyledColumn {...theProps}>{props.children}</StyledColumn>;
}

Column.propTypes = {
  keyIndex: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  xlarge: PropTypes.number,
  xxlarge: PropTypes.number,
  children: PropTypes.node
};

Column.defaultProps = {
  keyIndex: null,
  className: null,
  small: null,
  medium: null,
  large: null,
  xlarge: null,
  xxlarge: null,
  id: null,
  children: null
};

const FlexRow = styled.div`
  position: relative;
  display: flex;
  justify-content: ${props => props.justify};
  align-content: ${props => props.align};
  flex-flow: ${props => props.flow};

  ${props =>
    props.height
      ? css`
          height: ${props2 => props2.height};
        `
      : ``};

  ${props =>
    props.width
      ? css`
          width: ${props2 => props2.width};
        `
      : ``};

  ${props =>
    props.alignItems
      ? css`
          align-items: ${props2 => props2.alignItems};
        `
      : ``};

  ${props =>
    props.childrenMargin
      ? css`
          > * {
            margin: ${props2 => props2.childrenMargin};
          }
        `
      : ``};
`;

FlexRow.propTypes = {
  className: PropTypes.string,
  flow: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  childrenMargin: PropTypes.string
};
FlexRow.defaultProps = {
  flow: 'row wrap',
  justify: 'flex-start',
  align: 'inherit'
};

const FlexCol = styled.div`
  position: relative;
  width: ${props => props.width};
  flex: ${props => props.flex};

  ${props =>
    props.alignSelf
      ? css`
          align-self: ${props2 => props2.alignSelf};
        `
      : ``};
  ${props =>
    props.justifySelf
      ? css`
          justify-self: ${props2 => props2.justifySelf};
        `
      : ``};
`;

FlexCol.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  flex: PropTypes.string,
  alignSelf: PropTypes.string,
  justifySelf: PropTypes.string
};
FlexCol.defaultProps = {
  width: 'auto',
  flex: '1'
};
export { Row, Column, FlexRow, FlexCol };
