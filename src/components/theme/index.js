import { css } from "styled-components";
import coloredButton from "./mixin/coloredButton";
import colorPalette from "./colors";
import baseStyle from "./variables";

const sizes = {
  widescreen: baseStyle.breakpointXlarge,
  desktop: baseStyle.breakpointLarge,
  tablet: baseStyle.breakpointMedium,
  phone: baseStyle.breakpointSmall,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

// USAGE
// ${media.desktop`background: dodgerblue;`}
// ${media.tablet`background: mediumseagreen;`}
// ${media.phone`background: palevioletred;`}

const buttonsDeclination = {
  primaryButton: coloredButton(
    colorPalette.fullWhite,
    colorPalette.persistentPurple,
    colorPalette.persistentPurple,
    null,
    colorPalette.persistentPurpleDark,
    colorPalette.persistentPurpleDark
  ),
  facebook: coloredButton(
    colorPalette.fullWhite,
    colorPalette.facebookColor,
    colorPalette.facebookColor
  ),
  blog: coloredButton(
    colorPalette.fullWhite,
    colorPalette.blogColor,
    colorPalette.blogColor
  ),
  twitter: coloredButton(
    colorPalette.fullWhite,
    colorPalette.twitterColor,
    colorPalette.twitterColor
  ),
  instagram: coloredButton(
    colorPalette.fullWhite,
    colorPalette.instagramColor,
    colorPalette.instagramColor
  ),
  linkedin: coloredButton(
    colorPalette.fullWhite,
    colorPalette.linkedinColor,
    colorPalette.linkedinColor
  ),
  googleplus: coloredButton(
    colorPalette.fullWhite,
    colorPalette.googleplusColor,
    colorPalette.googleplusColor
  ),
  youtube: coloredButton(
    colorPalette.fullWhite,
    colorPalette.youtubeColor,
    colorPalette.youtubeColor
  ),
  vkontakte: coloredButton(
    colorPalette.fullWhite,
    colorPalette.vkontakteColor,
    colorPalette.vkontakteColor
  ),
  tumblr: coloredButton(
    colorPalette.fullWhite,
    colorPalette.tumblrColor,
    colorPalette.tumblrColor
  ),
  tiktok: coloredButton(
    colorPalette.fullWhite,
    colorPalette.tiktokColor,
    colorPalette.tiktokColor
  ),
  snapchat: coloredButton(
    colorPalette.fullWhite,
    colorPalette.snapchatColor,
    colorPalette.snapchatColor
  ),
  yellow: coloredButton(
    colorPalette.fullWhite,
    colorPalette.fullYellow,
    colorPalette.fullYellow
  ),
  orangeReverse: coloredButton(
    colorPalette.fullOrange,
    colorPalette.fullWhite,
    colorPalette.fullOrange,
    colorPalette.fullWhite,
    colorPalette.fullOrange,
    colorPalette.fullOrange
  ),
  yellowReverse: coloredButton(
    colorPalette.fullYellow,
    colorPalette.fullWhite,
    colorPalette.fullYellow,
    colorPalette.fullWhite,
    colorPalette.fullYellow,
    colorPalette.fullYellow
  ),
  yellowPurple: coloredButton(
    colorPalette.persistentPurple,
    colorPalette.fullYellow,
    colorPalette.fullYellow
  ),
  goldReverse: coloredButton(
    colorPalette.fullGold,
    colorPalette.fullWhite,
    colorPalette.fullGold,
    colorPalette.fullWhite,
    colorPalette.fullGold,
    colorPalette.fullGold
  ),
  darkGreen: coloredButton(
    colorPalette.fullWhite,
    colorPalette.darkGreen,
    colorPalette.darkGreen
  ),
  darkGreenReverse: coloredButton(
    colorPalette.darkGreen,
    colorPalette.fullWhite,
    colorPalette.darkGreen,
    colorPalette.fullWhite,
    colorPalette.darkGreen,
    colorPalette.darkGreen
  ),
  fullGreen: coloredButton(
    colorPalette.fullWhite,
    colorPalette.fullGreen,
    colorPalette.fullGreen
  ),
  fullRed: coloredButton(
    colorPalette.fullWhite,
    colorPalette.fullRed,
    colorPalette.fullRed
  ),
  fullGreenReverse: coloredButton(
    colorPalette.fullGreen,
    colorPalette.fullWhite,
    colorPalette.fullGreen,
    colorPalette.fullWhite,
    colorPalette.fullGreen,
    colorPalette.fullGreen
  ),
  fullRedReverse: coloredButton(
    colorPalette.fullRed,
    colorPalette.fullWhite,
    colorPalette.fullRed,
    colorPalette.fullWhite,
    colorPalette.fullRed,
    colorPalette.fullRed
  ),
  gray: coloredButton(
    colorPalette.black70,
    colorPalette.black20,
    colorPalette.black20,
    colorPalette.fullWhite
  ),
  darkGray: coloredButton(
    colorPalette.fullWhite,
    colorPalette.black50,
    colorPalette.black50
  ),
  darkGrayReverse: coloredButton(
    colorPalette.black50,
    colorPalette.fullWhite,
    colorPalette.black50,
    colorPalette.fullWhite,
    colorPalette.black50,
    colorPalette.black50
  ),
  neutral: coloredButton(
    colorPalette.fullWhite,
    colorPalette.black20,
    colorPalette.black20
  ),
  transparent: coloredButton(
    colorPalette.black50,
    colorPalette.fullWhite,
    colorPalette.black20,
    colorPalette.fullWhite,
    colorPalette.black50,
    colorPalette.black20
  ),
  disabled: coloredButton(
    colorPalette.black30,
    colorPalette.fullWhite,
    colorPalette.black30,
    colorPalette.black30,
    colorPalette.fullWhite,
    colorPalette.black30
  ),
  neutralYellow: coloredButton(
    colorPalette.fullYellow,
    "transparent",
    "transparent"
  ),
  neutralWhite: coloredButton(
    colorPalette.fullWhite,
    "transparent",
    "transparent"
  ),
  minimal: coloredButton(
    colorPalette.black50,
    "transparent",
    "transparent",
    colorPalette.black90,
    "transparent",
    "transparent"
  ),
  brightMinimal: coloredButton(
    colorPalette.black20,
    "transparent",
    "transparent",
    colorPalette.black50,
    "transparent",
    "transparent"
  ),
  mnml: coloredButton(
    colorPalette.fullWhite,
    "transparent",
    "transparent",
    colorPalette.fullWhite,
    "transparent",
    "transparent"
  ),
  neutralBlack: coloredButton(
    colorPalette.fullBlack,
    "transparent",
    "transparent",
    colorPalette.persistentPurple,
    "transparent",
    "transparent"
  ),
  naturalGold: coloredButton(
    colorPalette.fullGold,
    "transparent",
    "transparent"
  ),
};

const theTheme = {
  colors: colorPalette,
  vars: baseStyle,
  buttonsDeclination,
  // widescreen | desktop | tablet | phone
  breakpoint: media, // usage: ${theme.breakpoint.tablet`background: theme.colors.fullBlack;`}
  screenSize: sizes,
};

export default theTheme;
