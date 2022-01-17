const typography = {
  baseFontStack: '"Open Sans", sans-serif',
  titleFontStack: "akzidenz-grotesk",
  fontLight: 200,
  fontNormal: 400,
  fontSemibold: 600,
  fontBold: 700,
  baseFontSize: "16px",
  labelFontSize: "12px",
  inputsFontSize: "12px",
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
  columnGutter: 20,
  gridWidth: "1060px",
  globalPadding: "16px",
  globalMargin: "16px",
  iconButtonWidth: "36px",
  iconButtonWidthBig: "50px",
  sidebarLeftWidth: "200px",
  sidebarRightWidth: "280px",
};

const animations = {
  hoverAnimationTiming: "0.25s",
  hoverAnimationType: "ease-out",
};

const buttons = {
  buttonFontSize: "16px",
};

const themeVariables = {
  ...typography,
  ...buttons,
  ...animations,
  ...xyDimensions,
  ...zDimensions,
  ...breakpoints,
};
export default themeVariables;
