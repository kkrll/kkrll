import React from "react";
import { styled } from "../stitches.config";
import { RichText } from "prismic-reactjs";
import Divider from "./Divider";
import { Box } from "./Box";
import Link from "next/link";
import { Tag } from "./Tag";

const ArticleContainer = styled("div", {
  borderRadius: "$16",
  fontSize: "$3",
  padding: "$32",
  backgroundColor: "$white",
  marginBottom: "$8",
  transition: "$inOut1",
  width: "$full",
});

const LinkContainer = styled("a", {
  backgroundColor: "$grey1",
  borderRadius: "$8",
  padding: "$16",

  "&:hover": {
    backgroundColor: "$grey2",
  },

  "&:active": {
    backgroundColor: "$grey3",
  },
});

const Close = styled("button", {
  marginTop: "$16",
  padding: "$8",
  backgroundColor: "$white",
  borderRadius: "$8",
  border: "0px",
  transition: "$inOut1",

  "&:hover": {
    backgroundColor: "$grey1",
    cursor: "pointer",
  },
});

const Article = ({ item, close, filter }) => {
  const tags = item.data.tags.split(", ");
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <ArticleContainer>
      <Box
        css={{
          display: "flex",
          width: "$full",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "$16",
          height: "$full",
        }}
      >
        <Box>
          <h2 className="mb-1">{RichText.asText(item.data.title)}</h2>
          <p>
            {capitalize(item.data.type)} by {RichText.asText(item.data.author)}
          </p>
        </Box>

        <Link href={item.data.url.url} passHref>
          <LinkContainer target="_blank">Open Source</LinkContainer>
        </Link>
      </Box>
      <p>{RichText.render(item.data.review)}</p>
      {tags.map((tag) => {
        return <Tag type="hashtag" content={tag} action={filter} />;
      })}
      <Close onClick={close}> Close </Close>
    </ArticleContainer>
  );
};

export default Article;
