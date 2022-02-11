import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import TypeIt from 'typeit-react'

import Navbar from '../comps/global/navbar'
import Title from '../comps/text/title'
import Subtitle from '../comps/text/subtitle'

export default function About() {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Jeremy Carmona's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.center}>
          <Navbar />
          <Title text='About Me' />
          <Subtitle text='Some things about me' />
        </div>
      </div>
    </div>
  )
}