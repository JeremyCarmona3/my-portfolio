import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../comps/global/navbar'
import Title from '../comps/text/title'
import Subtitle from '../comps/text/subtitle'
import Text from '../comps/text/text'


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

          <div className={styles.lol}>
            <Subtitle text='return ('/>
          </div>

          <div className={styles.lols}>
            <Subtitle text='<Term01>'/>
              <div className={styles.lol}>
                <Text text='
                  My first term at BCIT, we learned how to utilize HTML and CSS to create basic web templates.
                '/>
              </div>
            <Subtitle text='</Term01>'/>
          </div>
          
          <div className={styles.lols}>
            <Subtitle text='<Term02>'/>
              <div className={styles.lol}>
                <Text />
              </div>
            <Subtitle text='</Term02>'/>
          </div>

          <div className={styles.lols}>
            <Subtitle text='<Term03>'/>
              <div className={styles.lol}>
                <Text />
              </div>
            <Subtitle text='</Term03>'/>
          </div>

          <div className={styles.lols}>
            <Subtitle text='<Term04>'/>
              <div className={styles.lol}>
                <Text />
              </div>
            <Subtitle text='</Term04>'/>
          </div>

          <div className={styles.lol}>
            <Subtitle text=');'/>
          </div>
          <Subtitle text='}'/>

        </div>
      </div>
    </div>
  )
}
