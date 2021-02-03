export const COLORS = {
  PRIMARY: "steelblue",
  // this hardcoded value should be here once in my app
  // it enforces people to use the same color, fonts, paddings,
  // border size, shadows, hover effect animations times

  // if I only have this hardcode once, it is really easy tp change

  SECONDARY: "#654321",
  ALERT: "#FF0000",
  SUCCESS: "#00FF00",
};

export const PADDING = {
  SMALL: "8px",
  MEDIUM: "12px",
  LARGE: "16px",
};

export const FONT_SIZES = {
  EXTRASMALL: ".5em",
  DEFAULT: "1.5em",
  SMALL: "2em",
  LARGE: "4em",
};

export const STYLES = {
  CONTAINER: {
    padding: PADDING.MEDIUM,
    border: `1px solid ${COLORS.PRIMARY}`,
  },
};

const size = (screenWidth) => {
  // do some logic on screenWidth
};

// if you want your app to look good
// 1. it needs to be consistent

// if your using css, the nice thing about inline style,
// they will override your css styles
