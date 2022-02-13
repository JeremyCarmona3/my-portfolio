import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import TypeIt from 'typeit-react'

import Navbar from '../comps/global/navbar'
import Title from '../comps/text/title'
import Subtitle from '../comps/text/subtitle'
import Text from '../comps/text/text'

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
        <div className={styles.lol}>
          <Subtitle text='Who I am' />
          <Text />

          <Subtitle text='Experience' />
          <Text />

          <Subtitle text='My skills' />
          <Text />

          <Subtitle text='Tools' />
          <Text />

          <Subtitle text='Other' />
          <Text />
        </div>
      </div>
    </div>
  )
}