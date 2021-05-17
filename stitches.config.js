import { createCss } from "@stitches/react";

export const { styled } = createCss({
  theme: {
    colors: {
      white: "#fff",
      black: "#060c0e",

      grey9: "#12242b",
      grey8: "#19323c",
      grey6: "#87969e",
      grey3: "#d1d7da",
      grey2: "#e8edef",
      grey1: "#f2f3f4",

      copper7: "#8a5c56",
      copper5: "#a16f68",

      red8: "#cc2c00",
      red4: "#ff6f47",
      red3: "#ff8360",

      azure7: "#3c7e90",
      azure5: "#448fa3",
    },
    fonts: {
      sans: "Inter, sans-serif",
      serif: "Newsreader, Bitter, Verdana, serif",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
    },
    space: {
      2: "2px",
      4: "4px",
      5: "5px",
      8: "8px",
      16: "16px",
      32: "32px",
      64: "64px",
      128: "128px",
      third: "30%",
    },
    sizes: {
      2: "2px",
      4: "4px",
      5: "5px",
      8: "8px",
      16: "16px",
      32: "32px",
      64: "64px",
      128: "128px",
      320: "320px",
      full: "100%",
    },
    radii: {
      2: "2px",
      4: "4px",
      8: "8px",
      16: "16px",
      round: "9999px",
    },
    fontWeights: {
      200: "200",
      400: "400",
      500: "500",
    },
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {
      inOut1: "0.2s",
      inOut2: "0.3s",
      inOut3: "0.4s",
    },
  },
});
