export const colors = {
  almostBlack: '#3D0000',
  white: '#FFFFFF',
  gray: '#DBDBDB',
  grayShadow: '#00000047',
  salmon: '#F35D5D',
  orange: '#FF9233',
};

const {
  almostBlack, white, gray, grayShadow, salmon, orange,
} = colors;

export const baseTheme = {
  textColor: almostBlack,
  backgroundColor: gray,
  fontFamily: '"Montserrat", sans-serif',
  timerFontSize: '120px',
  timerColor: almostBlack,
  timerTypeLabelColor: almostBlack,
  labelFontSize: '43px',
  labelColor: almostBlack,
  timerControlLabelFontSize: '15px',
  iconColor: almostBlack,
  buttonBackground: white,
  buttonShadow: grayShadow,
  sliderButtonColor: almostBlack,
  sliderLineColor: almostBlack,
};

export const sessionTheme = {
  ...baseTheme,
  timerColor: white,
  timerTypeLabelColor: white,
  backgroundColor: salmon,
  sliderButtonColor: white,
};

export const breakTheme = {
  ...baseTheme,
  timerColor: white,
  timerTypeLabelColor: white,
  backgroundColor: orange,
  sliderButtonColor: white,
};
