import React from "react";
import { styled } from "../stitches.config";
// import { ReactComponent as HashSvg } from "../public/images/hash.svg";

export const TagContaner = styled("button", {
  borderRadius: "$8",
  fontSize: "$3",
  padding: "$5 $8 $4 $8",
  color: "$white",
  marginRight: "$8",
  transition: "$inOut1",
  border: "0px",
  fontFamily: "$serif",

  "&:hover": {
    cursor: "pointer",
  },

  variants: {
    type: {
      hashtag: {
        backgroundColor: "$grey1",
        color: "$black",

        "&:hover": {
          backgroundColor: "$grey2",
        },
      },
      article: {
        backgroundColor: "$azure5",

        "&:hover": {
          backgroundColor: "$azure7",
        },
      },
      book: {
        backgroundColor: "$red3",

        "&:hover": {
          backgroundColor: "$red4",
        },
      },
      video: {
        backgroundColor: "$copper5",

        "&:hover": {
          backgroundColor: "$copper5",
        },
      },
    },
  },
});

export const Tag = ({ type, content, action }) => {
  // action("component", "Reading Item");
  return (
    <TagContaner onClick={() => action(type, content)} type={type}>
      {/* {type === "hashtag" ? <HashSvg /> : null} */}
      {content ? content : type}
    </TagContaner>
  );
};
