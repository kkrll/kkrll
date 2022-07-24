import { styled } from "../../stitches.config"

export const Box = styled("div", {
  variants: {
    flex: {
      column: {
        display: "flex",
        flexDirection: "column",
      },
      row: {
        display: "flex",
        flexDirection: "row",
      },
    },
    align: {
      center: {
        justifyContent: "center",
      },
    },
  },
})
