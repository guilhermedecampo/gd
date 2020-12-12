import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Guilherme Decampo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Guilherme Decampo" />
        <p className="description">
          Hello! 
        </p>
      </main>

      <Footer />
    </div>
  )
}
