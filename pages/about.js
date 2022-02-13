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
        <link rel="stylesheets" href="/styles/globals.css" />
      </Head>

      <div className={styles.container}>
        <div className={styles.center}>
          <Navbar />
          <Title text='About Me' />
          <Subtitle text='Some things about me' />
        </div>
        <div className={styles.lol}>
          <Subtitle text='Who I am' />
          <Text text='Hi there, my name is Jeremy Carmona. I am a Front-end Developer.' />

          <Subtitle text='Experience' />
          <Text text="I have 2 years of experience in developing and designing cross-platform web and mobile applications.
            This experience comes from BCIT's Digital Design and Development (D3) program. 
            This experience comes from BCIT's Digital Design and Development (D3) program. 

            This experience comes from BCIT's Digital Design and Development (D3) program. 

            This experience comes from BCIT's Digital Design and Development (D3) program. 

            This experience comes from BCIT's Digital Design and Development (D3) program. 

          " />

          <Subtitle text='My skills' />
          <Text text="I possess various soft and technical skills." />

          <Subtitle text='Tools' />
          <Text text="Here is a list of tools I use when developing and designing. These include: "/>

          <Subtitle text='Other' />
          <Text text="You can downlaod my resume here." />
          <Text text="You can contact me at: " />
          <input type='form'></input>

        </div>
      </div>
    </div>
  )
}