import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import TypeIt from 'typeit-react'

import Navbar from '../comps/global/navbar'
import Title from '../comps/text/title'
import Subtitle from '../comps/text/subtitle'
import Text from '../comps/text/text'

export default function Projects() {
  return (
    <div>
      <Head>
        <title>My Projects</title>
        <meta name="description" content="Jeremy Carmona's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.center}>
          <Navbar />
          <Title text='My projects' />
          <Subtitle text='Some projects I have worked on' />
        </div>
        <div className={styles.lol}>
          <Subtitle text='OnMe' />
          <Text />

          <Subtitle text='Project 2' />
          <Text />

          <Subtitle text='Project 3' />
          <Text />

          <Subtitle text='Project 4' />
          <Text />
        </div>
      </div>
    </div>
  )
}