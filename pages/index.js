import Head from 'next/head'
import Header from './components/Header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Eat watch repeat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="">
          <Header />
        </h1>
    </main>
    </div>
  )
}
