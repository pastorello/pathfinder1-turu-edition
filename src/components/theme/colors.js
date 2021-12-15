import chroma from 'chroma-js';

// PALETTA ORIGINALE DI BELLISSIMO, NON TOCCARE
export const thePalette = {
  // purple
  persistentPurpleDark: '#801D93',
  persistentPurple: '#9d27b4',
  persistentPurple2: '#CE93D9',
  persistentPurple3: '#EBD4F0',
  // dark green
  darkGreen: '#004d59',
  darkGreen2: '#7FA6AC',
  darkGreen3: '#CCDCDE',
  // pink
  fullPink: '#fba2ba',
  fullPink2: '#FDD0DC',
  fullPink3: '#FEECF1',
  // gold
  fullGold: '#bd9a5f',
  fullGold2: '#DECCAF',
  fullGold3: '#F2EBDF',
  // red
  fullRed: '#f3426c',
  fullRed2: '#F9A0B5',
  fullRed3: '#FDD9E2',
  // light green
  fullGreen: '#00c3b3',
  fullGreen2: '#7FE1D9',
  fullGreen3: '#CCF3F0',
  // yellow
  fullYellow: '#ffc600',
  fullYellow2: '#FFE27F',
  fullYellow3: '#FFF4CC'
};

// BACKGROUND COLORS DERIVATI DALLA PALETTA
export const theAlphaPalette = {
  alphaPurple: thePalette.persistentPurple3,
  alphaPurple60: 'rgba(157, 39, 180, 0.6)',
  alphaPurple80: 'rgba(157, 39, 180, 0.8)',
  alphaYellow: thePalette.fullYellow3,
  alphaGreen: thePalette.fullGreen2,
  alphaRed: thePalette.fullRed2
};

// COLORI AGGIUNTIVI INTRODOTTI DAGLI ART NELLE LORO LAVORAZIONI
export const extraPalette = {
  fullOrange: '#ff8200',
  lightPurple: thePalette.persistentPurple3
};

// PALETTA ORIGINALE DI BELLISSIMO, NON TOCCARE
export const theGrayScale = {
  fullWhite: '#ffffff',
  black05: '#F7F7F7',
  black10: '#EBEBEB',
  black20: '#E5E5E5',
  black30: '#CCCCCC',
  black40: '#B2B2B2',
  black50: '#999999',
  black60: '#7F7F7F',
  black70: '#666666',
  black80: '#4C4C4C',
  black90: '#333333',
  black95: '#191919',
  fullBlack: '#000000'
};

export const alphaGrayScale = {
  black10Alpha: 'rgba(0, 0, 0, 0.03)',
  black20Alpha: 'rgba(0, 0, 0, 0.2)',
  black60Alpha: 'rgba(0, 0, 0, 0.6)',
  black75Alpha: 'rgba(0, 0, 0, 0.75)',
  black80Alpha: 'rgba(0, 0, 0, 0.8)'
};

// COLORI UFFICIALI CANALI
export const socialPalette = {
  iconYellow: '#fade2c',
  blogColor: '#ff8200',
  facebookColor: '#3b5998',
  twitterColor: '#1da1f2',
  instagramColor: '#c13584',
  linkedinColor: '#0077B5',
  googleplusColor: '#dd4b39',
  youtubeColor: '#cd201f',
  vkontakteColor: '#45668e',
  tumblrColor: '#35465c',
  tiktokColor: '#000000',
  snapchatColor: '#fffc00'
};

// PALETTA COLORI POLIGONO
export const chartPalette = {
  paletteChart1: thePalette.fullYellow,
  paletteChart2: chroma(thePalette.fullYellow).brighten(0.5),
  paletteChart3: chroma(thePalette.fullYellow).brighten(1),
  paletteChart4: thePalette.fullGreen,
  paletteChart5: chroma(thePalette.fullGreen).brighten(0.5),
  paletteChart6: chroma(thePalette.fullGreen).brighten(1),
  paletteChart7: thePalette.fullPink,
  paletteChart8: chroma(thePalette.fullPink).brighten(0.5)
};

// SEMANTICA DEGLI ALERTS
export const alertPalette = {
  successGreen: thePalette.fullGreen,
  successBackground: theAlphaPalette.alphaGreen,
  errorRed: thePalette.fullRed,
  errorBackground: theAlphaPalette.alphaRed,
  warningYellow: thePalette.fullYellow,
  warningBackground: theAlphaPalette.alphaYellow
};

// SEMANTICA DEI SENTIMENT
export const sentimentPalette = {
  positiveSentiment: thePalette.fullGreen,
  neutralSentiment: theGrayScale.black60,
  negativeSentiment: thePalette.fullRed
};

// SEMANTICA DEI CONTROLLI DI INPUT
export const inputsPalette = {
  inputsBackgroundColor: theGrayScale.fullWhite,
  inputsBackgroundColorDisabled: theGrayScale.black05,
  inputsBorderColor: theGrayScale.black50,
  inputsHoverBorderColor: theGrayScale.black50,
  inputsValueColor: theGrayScale.fullBlack,
  inputsValueColorDisabled: theGrayScale.black70,
  inputsPlaceHolderColor: theGrayScale.black70
};

export default {
  ...thePalette,
  ...theAlphaPalette,
  ...extraPalette,
  ...theGrayScale,
  ...alphaGrayScale,
  ...socialPalette,
  ...sentimentPalette,
  ...alertPalette,
  ...chartPalette,
  ...inputsPalette
};
