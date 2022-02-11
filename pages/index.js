import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../comps/global/navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jeremy Carmona</title>
        <meta name="description" content="Jeremy Carmona's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  )
}
