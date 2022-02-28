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
        <link rel="stylesheets" href="/styles/globals.css" />
      </Head>

      <div className={styles.container}>
        <div className={styles.center}>
          <Navbar />
          <Title text='My projects' />
          <Subtitle text='Some projects I have worked on' />
        </div>
        <div className={styles.lol}>
          <Subtitle text='OnMe' />
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1NiF7avZNEI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/aI62tiJApfI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          {/* <Subtitle text='Project 2' />
          <Subtitle text='Project 3' />
          <Subtitle text='Project 4' /> */}
        </div>
      </div>
    </div>
  )
}