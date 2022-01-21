const typography = {
  fontLight: 200,
  fontNormal: 400,
  fontSemibold: 600,
  fontBold: 700,
};

const breakpoints = {
  breakpointSmall: 0,
  breakpointMedium: 640,
  breakpointLarge: 1024,
  breakpointXlarge: 1200,
  breakpointXxlarge: 1440,
};

const zDimensions = {
  zElement: 100,
  zCalendar: 500,
  zLoader: 700,
  zDockedMenu: 750,
  zHeader: 800,
  zPopover: 850,
  zOverlay: 900,
  zModal: 998,
  zBootstrapModal: 1040,
  zMorphSearch: 1200,
  zToolTip: 1300,
};

const xyDimensions = {
  columnGutter: 10,
  gridWidth: "1060px",
};

const themeVariables = {
  ...typography,
  ...xyDimensions,
  ...zDimensions,
  ...breakpoints,
};
export default themeVariables;
