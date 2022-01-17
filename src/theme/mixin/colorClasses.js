import { css } from 'styled-components';

import theme from '../index';
import coloredButton from './coloredButton';

// TODO: stampare sta roba in maniera programmatica usando .map
export const baseColors = css`
  &.bz-natural-purple {
    ${props =>
      props.theme && props.theme.primaryColor
        ? coloredButton(
            props.theme.primaryColor,
            'transparent',
            'transparent',
            props.theme.primaryHoverColor,
            'transparent',
            'transparent'
          ).base
        : coloredButton(
            theme.colors.persistentPurple,
            'transparent',
            'transparent',
            theme.colors.persistentPurpleDark,
            'transparent',
            'transparent'
          ).base}
  }
  //CHANNELS declinations
  &.bz-facebook {
    ${theme.buttonsDeclination.facebook.base}
  }
  &.bz-blog {
    ${theme.buttonsDeclination.blog.base}
  }
  &.bz-twitter {
    ${theme.buttonsDeclination.twitter.base}
  }
  &.bz-instagram {
    ${theme.buttonsDeclination.instagram.base}
  }
  &.bz-linkedin {
    ${theme.buttonsDeclination.linkedin.base}
  }
  &.bz-googleplus {
    ${theme.buttonsDeclination.googleplus.base}
  }
  &.bz-youtube {
    ${theme.buttonsDeclination.youtube.base}
  }
  &.bz-vkontakte {
    ${theme.buttonsDeclination.vkontakte.base}
  }
  &.bz-tumblr {
    ${theme.buttonsDeclination.tumblr.base}
  }
  &.bz-tiktok {
    ${theme.buttonsDeclination.tiktok.base}
  }
  &.bz-snapchat {
    ${theme.buttonsDeclination.snapchat.base}
  }
  &.bz-purple {
    ${props =>
      props.theme && props.theme.primaryColor
        ? coloredButton(
            theme.colors.fullWhite,
            props.theme.primaryColor,
            props.theme.primaryColor
          ).base
        : coloredButton(
            theme.colors.fullWhite,
            theme.colors.persistentPurple,
            theme.colors.persistentPurple
          ).base}
  }
  &.bz-neutral-purple {
    ${props =>
      props.theme && props.theme.primaryLabelsColor
        ? coloredButton(
            props.theme.primaryLabelsColor,
            'transparent',
            'transparent'
          ).base
        : coloredButton(
            theme.colors.persistentPurple,
            'transparent',
            'transparent'
          ).base}
  }
  &.bz-orange-reverse {
    ${theme.buttonsDeclination.orangeReverse.base}
  }
  &.bz-yellow {
    ${theme.buttonsDeclination.yellow.base}
  }
  &.bz-yellow-reverse {
    ${theme.buttonsDeclination.yellowReverse.base}
  }

  &.bz-yellow-purple {
    ${theme.buttonsDeclination.yellowPurple.base}
  }
  &.bz-gold-reverse {
    ${theme.buttonsDeclination.goldReverse.base}
  }
  &.bz-dark-green {
    ${theme.buttonsDeclination.darkGreen.base}
  }
  &.bz-dark-green-reverse {
    ${theme.buttonsDeclination.darkGreenReverse.base}
  }
  &.bz-green {
    ${theme.buttonsDeclination.fullGreen.base}
  }
  &.bz-red {
    ${theme.buttonsDeclination.fullRed.base}
  }
  &.bz-full-green-reverse {
    ${theme.buttonsDeclination.fullGreenReverse.base}
  }
  &.bz-red-reverse {
    ${theme.buttonsDeclination.fullRedReverse.base}
  }
  &.bz-gray {
    ${theme.buttonsDeclination.gray.base}
  }
  &.bz-dark-gray {
    ${theme.buttonsDeclination.darkGray.base}
  }
  //ICON ACTION BUTTON (info, share)
  &.bz-dark-gray-reverse {
    ${theme.buttonsDeclination.darkGrayReverse.base}
  }
  &.bz-neutral-black {
    ${theme.buttonsDeclination.neutralBlack.base}
  }
  &.bz-neutral-white {
    ${theme.buttonsDeclination.neutralWhite.base}
  }
  &.bz-neutral-yellow {
    ${theme.buttonsDeclination.neutralYellow.base}
  }
  //??? controllare con che intenzione viene usato
  &.bz-neutral {
    ${theme.buttonsDeclination.neutral.base}
  }
  &.bz-minimal {
    ${theme.buttonsDeclination.minimal.base}
  }
  &.bz-bright-minimal {
    ${theme.buttonsDeclination.brightMinimal.base}
  }
  //classe minimal utilizzata per stampare solo il simbolo bianco dei social sui best post box
  //della dashboard => praticamente sarebbe il bz-minimal su BG nero/colorato
  &.bz-mnml {
    ${theme.buttonsDeclination.mnml.base}
  }
  //??? controllare con che intenzione viene usato
  &.bz-transparent {
    ${theme.buttonsDeclination.transparent.base}
  }
  &.bz-disabled {
    &,
    &:hover,
    &:active,
    &:focus {
      ${theme.buttonsDeclination.disabled.base}
    }

    & .bz-svg-icon,
    & .bz-svg-icon svg {
      fill: ${theme.colors.black30};
      stroke: ${theme.colors.black30};
    }
    cursor: not-allowed;
    &.bz-minimal,
    &.bz-mnml,
    &.bz-neutral-yellow,
    &.bz-neutral-black {
      border-color: transparent;
    }
  }

  //NON SELEZIONATO
  &.bz-unselected {
    opacity: 0.4;
  }
`;
export const hoverColors = css`
  &.bz-natural-purple {
    ${props =>
      props.theme && props.theme.primaryColor
        ? coloredButton(
            props.theme.primaryColor,
            'transparent',
            'transparent',
            props.theme.primaryHoverColor,
            'transparent',
            'transparent'
          ).hover
        : coloredButton(
            theme.colors.persistentPurple,
            'transparent',
            'transparent',
            theme.colors.persistentPurpleDark,
            'transparent',
            'transparent'
          ).hover}
  }
  //CHANNELS declinations
  &.bz-facebook {
    ${theme.buttonsDeclination.facebook.hover}
  }
  &.bz-blog {
    ${theme.buttonsDeclination.blog.hover}
  }
  &.bz-twitter {
    ${theme.buttonsDeclination.twitter.hover}
  }
  &.bz-instagram {
    ${theme.buttonsDeclination.instagram.hover}
  }
  &.bz-linkedin {
    ${theme.buttonsDeclination.linkedin.hover}
  }
  &.bz-googleplus {
    ${theme.buttonsDeclination.googleplus.hover}
  }
  &.bz-youtube {
    ${theme.buttonsDeclination.youtube.hover}
  }
  &.bz-vkontakte {
    ${theme.buttonsDeclination.vkontakte.hover}
  }
  &.bz-tumblr {
    ${theme.buttonsDeclination.tumblr.hover}
  }
  &.bz-snapchat {
    ${theme.buttonsDeclination.snapchat.hover}
  }
  &.bz-purple {
    ${props =>
      props.theme && props.theme.primaryColor
        ? coloredButton(
            theme.colors.fullWhite,
            props.theme.primaryColor,
            props.theme.primaryColor
          ).hover
        : coloredButton(
            theme.colors.fullWhite,
            theme.colors.persistentPurple,
            theme.colors.persistentPurple
          ).hover}
  }
  &.bz-orange-reverse {
    ${theme.buttonsDeclination.orangeReverse.hover}
  }
  &.bz-yellow {
    ${theme.buttonsDeclination.yellow.hover}
  }
  &.bz-yellow-reverse {
    ${theme.buttonsDeclination.yellowReverse.hover}
  }
  &.bz-yellow-purple {
    ${theme.buttonsDeclination.yellowPurple.hover}
  }
  &.bz-gold-reverse {
    ${theme.buttonsDeclination.goldReverse.hover}
  }
  &.bz-dark-green {
    ${theme.buttonsDeclination.darkGreenReverse.hover}
  }
  &.bz-dark-green-reverse {
    ${theme.buttonsDeclination.darkGreenReverse.hover}
  }
  &.bz-green {
    ${theme.buttonsDeclination.fullGreen.hover}
  }
  &.bz-red {
    ${theme.buttonsDeclination.fullRed.hover}
  }
  &.bz-full-green-reverse {
    ${theme.buttonsDeclination.fullGreenReverse.hover}
  }
  &.bz-red-reverse {
    ${theme.buttonsDeclination.fullRedReverse.hover}
  }
  &.bz-gray {
    ${theme.buttonsDeclination.gray.hover}
  }
  &.bz-dark-gray {
    ${theme.buttonsDeclination.darkGray.hover}
  }
  //ICON ACTION BUTTON (info, share)
  &.bz-dark-gray-reverse {
    ${theme.buttonsDeclination.darkGrayReverse.hover}
  }
  &.bz-neutral-black {
    ${theme.buttonsDeclination.neutralBlack.hover}
  }
  &.bz-neutral-white {
    ${theme.buttonsDeclination.neutralWhite.hover}
  }
  &.bz-neutral-yellow {
    ${theme.buttonsDeclination.neutralYellow.hover}
  }
  //??? controllare con che intenzione viene usato
  &.bz-neutral {
    ${theme.buttonsDeclination.neutral.hover}
  }
  &.bz-minimal {
    ${theme.buttonsDeclination.minimal.hover}
  }
  &.bz-bright-minimal {
    ${theme.buttonsDeclination.brightMinimal.hover}
  }
  //classe minimal utilizzata per stampare solo il simbolo bianco dei social sui best post box
  //della dashboard => praticamente sarebbe il bz-minimal su BG nero/colorato
  &.bz-mnml {
    ${theme.buttonsDeclination.mnml.hover}
  }
  //??? controllare con che intenzione viene usato
  &.bz-transparent {
    ${theme.buttonsDeclination.transparent.hover}
  }
`;
