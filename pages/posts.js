import Head from 'next/head'
import BlogPost from '../components/BlogPost'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Writing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <section className="hero">
      <div>
        <h1 className="mb-8">
          Posts
        </h1>
        <BlogPost />
      </div>
    </section>
        </main>

        
    </div>
  )
}
