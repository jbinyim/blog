const colors = {
  gray: "#e8ebef",
  brown: "#8c6d45",
};

const mediaSize = {
  xxl: "screen and (max-width: 1450px)",
  xl: "screen and (max-width: 1280px)",
  l: "screen and (max-width: 1080px)",
  m: "screen and (max-width: 710px)",
};

const theme = {
  colors,
  mediaSize,
};

export default theme;
export type Theme = typeof theme;
