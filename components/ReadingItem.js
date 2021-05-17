import React from "react";
import { styled } from "../stitches.config";
import { RichText } from "prismic-reactjs";
import Divider from "./Divider";
import { Tag } from "./Tag";

const ReadingItemContainer = styled("button", {
  borderRadius: "$16",
  fontFamily: "$serif",
  fontSize: "$3",
  padding: "$16",
  marginBottom: "$8",
  transition: "$inOut1",
  width: "$full",
  textAlign: "left",

  "&:hover": {
    border: "1px solid $grey3",
    cursor: "pointer",
  },

  "&:active": {
    backgroundColor: "$grey1",
  },

  variants: {
    state: {
      normal: {
        backgroundColor: "$white",
        border: "1px solid $grey2",
      },
      active: {
        backgroundColor: "$grey2",
        border: "1px solid $grey3",
      },
    },
  },
});

const ReadingItem = ({ item, active, select, filter }) => {
  const tags = item.data.tags.split(", ");
  return (
    <ReadingItemContainer onClick={select} state={active ? "active" : "normal"}>
      <h3 className="mb-1">{RichText.asText(item.data.title)}</h3>
      <p>{RichText.asText(item.data.author)}</p>
      <Divider type="hor" className="mb-4" />
      <div className="row">
        <Tag type={item.data.type} action={filter} />
        <Divider type="vert" />
        {tags.map((tag) => {
          return <Tag type="hashtag" content={tag} action={filter} />;
        })}
      </div>
    </ReadingItemContainer>
  );
};
export default ReadingItem;
