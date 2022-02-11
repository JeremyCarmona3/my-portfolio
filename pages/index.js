import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import TypeIt from 'typeit-react'

import Navbar from '../comps/global/navbar'
import Title from '../comps/text/title'
import Subtitle from '../comps/text/subtitle'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jeremy Carmona</title>
        <meta name="description" content="Jeremy Carmona's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.center}>
          <Navbar />
          <Title text='Jeremy Carmona' />
          <Subtitle text='My roadmap as a Front-end Developer' />
        </div>
        <div className={styles.lol}>
          <Subtitle text='import { Term01, Term02, Term03, Term04 } from ‘BCIT’;'/>

          <Subtitle text='export default function JeremyCarmona() {'/>
          <Subtitle text='return ('/>

          <Subtitle text='<Term01>'/>
          <Subtitle text='</Term01>'/>

          <Subtitle text='<Term02>'/>
          <Subtitle text='</Term02>'/>

          <Subtitle text='<Term03>'/>
          <Subtitle text='</Term03>'/>

          <Subtitle text='<Term04>'/>
          <Subtitle text='</Term04>'/>

          <Subtitle text=');'/>
          <Subtitle text='}'/>

        </div>
      </div>
    </div>
  )
}
