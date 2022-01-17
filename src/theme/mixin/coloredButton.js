import { css } from "styled-components";
import chroma from "chroma-js";

// DECLINAZIONE COLORAZIONI BOTTONI
const coloredButton = (
  color,
  background,
  border,
  colorHover = null,
  backgroundHover = null,
  borderHover = null
) => {
  const theColorHover = colorHover === null ? color : colorHover;

  let theBackgroundHover =
    background === "transparent" ? background : chroma(background).darken(1);
  theBackgroundHover = backgroundHover === null ? background : backgroundHover;

  let theBorderHover =
    border === "transparent" ? border : chroma(border).darken(1);
  theBorderHover = borderHover === null ? borderHover : borderHover;

  return {
    base: css`
      &,
      &:visited,
      &:focus,
      &:active {
        color: ${color};
        background: ${background};
        border: 1px solid ${border};
        stroke: ${color};
        fill: ${color};
      }
    `,
    hover: css`
      &:hover,
      &.bz-active {
        color: ${theColorHover};
        background: ${theBackgroundHover};
        border: 1px solid ${theBorderHover};

        stroke: ${theColorHover};
        fill: ${theColorHover};
        i {
          color: ${theColorHover};
        }
      }
    `,
  };
};

export default coloredButton;
