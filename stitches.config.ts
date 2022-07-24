import { createStitches, globalCss } from "@stitches/react"

export const { styled, css, getCssText, createTheme } = createStitches({
  theme: {
    colors: {
      white: "#fff",
      black: "#060c0e",

      grey9: "#14181A",
      grey8: "#485F67",
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

      text_primary: "$grey1",
      background_primary: "$black",
      text_secondary: "$grey3",
      background_secondary: "$grey9",
      background_tertiary: "$grey8",

      // text_primary: "$grey9",
      // background_primary: "$grey1",
      // text_secondary: "$grey6",
      // background_secondary: "$white",
      // background_tertiary: "$white",
    },
    fonts: {
      sans: `"Inter", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      serif: `"Newsreader", "Bitter", "Georgia", Cambria,
      "Times New Roman", Times, serif`,
    },
    fontSizes: {
      12: "12px",
      14: "14px",
      16: "16px",
      20: "20px",
      24: "24px",
      32: "32px",
      48: "48px",
    },
    space: {
      2: "2px",
      4: "4px",
      5: "5px",
      8: "8px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      32: "32px",
      48: "48px",
      64: "64px",
      128: "128px",
      third: "30%",
      half: "50%",
    },
    sizes: {
      2: "2px",
      4: "4px",
      5: "5px",
      8: "8px",
      16: "16px",
      24: "24px",
      32: "32px",
      48: "48px",
      64: "64px",
      128: "128px",
      320: "320px",
      512: "512px",
      640: "640px",
      full: "100%",
      max: "1244px",
    },
    radii: {
      2: "2px",
      4: "4px",
      8: "8px",
      16: "16px",
      32: "32px",
      round: "9999px",
    },
    fontWeights: {
      200: "200",
      400: "400",
      500: "500",
      600: "600",
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
  media: {
    bp1: "(max-width: 640px)",
    bp2: "(max-width: 768px)",
    bp3: "(max-width: 1024px)",
  },
  utils: {
    marginX: value => ({ marginLeft: value, marginRight: value }),
    marginY: value => ({ marginTop: value, marginBottom: value }),
  },
})

// export const darkTheme = createTheme("dark-theme", {
//   colors: {
//     text_primary: "$gray1",
//     background_primary: "$black",
//     text_secondary: "$grey6",
//     background_secondary: "$grey9",
//     background_tertiary: "$grey8",
//   },
// })

export const globalStyles = globalCss({
  body: {
    backgroundColor: "$background_primary",
    fontFamily: "$sans",
    lineHeight: "1.4",
  },
  "*": { color: "$text_primary" },

  h4: {
    marginBottom: "$4",
  },
})
