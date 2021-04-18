import Head from "next/head";
import Prismic from "prismic-javascript";
import { Client } from "./api/prismic-configuration";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reading List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="hero">
          <div>
            <h1 className="mb-8">Reading List</h1>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const readingItems = await Client().query(
    Prismic.Predicates.at("document.type", "reding_item")
  );
  console.log(readingItems);
  return { props: {} };
}
