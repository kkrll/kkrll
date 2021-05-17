import React, { useState } from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { Box } from "../components/Box";
import ReadingItem from "../components/ReadingItem";
import { Client } from "./api/prismic-configuration";
import { RichText } from "prismic-reactjs";
import Article from "../components/Article";
import { Tag } from "../components/Tag";
import { Button } from "../components/Button";

export default function Home({ readingItems }) {
  const [readingItemsList, setReadingItemsList] = useState(
    readingItems.results
  );

  const [activeItem, setActiveItem] = useState(0);

  const [filterTag, setFilterTag] = useState(0);

  const filterByTag = (type, content) => {
    setFilterTag({ type: type, content: content });
    let results = [];
    if (type === "hashtag") {
      Object.entries(readingItemsList).forEach((item) => {
        item[1].data.tags.includes(content) ? results.push(item[1]) : null;
      });
    } else {
      Object.entries(readingItemsList).forEach((item) => {
        item[1].data.type.includes(type) ? results.push(item[1]) : null;
      });
    }
    setReadingItemsList(results);
  };

  const clearFilters = () => {
    setReadingItemsList(readingItems.results);
    setFilterTag(0);
  };

  return (
    <div>
      <Head>
        <title>Reading List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box
          css={{
            paddingTop: "$64",
          }}
        >
          <h1 className="mb-8">Reading List</h1>
        </Box>
        <section className="row">
          <Box
            css={{
              padding: "0 $16 $16 0",
            }}
          >
            <div>
              {filterTag ? (
                <Box
                  css={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "$8",
                  }}
                >
                  <Box
                    css={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <p className="mr-1">only </p>
                    {filterTag.type === "hashtag" ? (
                      <p>
                        <span className="bold-it">{filterTag.content}</span>{" "}
                        staff:
                      </p>
                    ) : (
                      <p className="bold-it">{filterTag.type}s:</p>
                    )}
                  </Box>
                  <Button
                    onClick={() => clearFilters()}
                    css={{
                      padding: "$4 $8",
                      backgroundColor: "$white",
                      borderRadius: "$8",
                      border: "0px",
                      transition: "$inOut1",

                      "&:hover": {
                        backgroundColor: "$grey1",
                        cursor: "pointer",
                      },
                    }}
                  >
                    clear
                  </Button>
                </Box>
              ) : null}
              {readingItemsList.map((readingItem) => (
                <ReadingItem
                  item={readingItem}
                  active={readingItem === activeItem ? true : false}
                  select={() => {
                    console.log("reading item:" + readingItem);
                    setActiveItem(readingItem);
                  }}
                  filter={filterByTag}
                />
              ))}
            </div>
          </Box>
          <Box
            css={{
              width: "$full",
              height: "$full",
            }}
          >
            {activeItem ? (
              <Article
                item={activeItem}
                close={() => setActiveItem(0)}
                filter={filterByTag}
              />
            ) : (
              <p className="mx-auto centred">
                Please select any to see what I think about it
              </p>
            )}
          </Box>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const readingItems = await Client().query(
    Prismic.Predicates.at("document.type", "reding_item")
  );
  return { props: { readingItems } };
}
