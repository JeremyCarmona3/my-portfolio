import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../comps/global/navbar'
import Title from '../comps/text/title'
import Subtitle from '../comps/text/subtitle'
import Text from '../comps/text/text'


export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Jeremy Carmona</title>
      <meta name="keywords" content="Jeremy Carmona, Front-end Developer" />
      <meta name="description" content="Jeremy Carmona's Portfolio" />
      <meta name="author" content="Jeremy Carmona" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheets" href="/styles/globals.css" />
    </Head>
      <div className={styles.center}>
        <Navbar />
        <Title text='Jeremy Carmona' />
        <Subtitle text='My roadmap as a Front-end Developer' />
      </div>
      <div className={styles.onetab}>
        <Subtitle text='import { Term01, Term02, Term03, Term04 } from ‘BCIT’;'/>

        <Subtitle text='export default function JeremyCarmona() {'/>

        <div className={styles.onetab}>
          <Subtitle text='return ('/>
        </div>

        <div className={styles.twotab}>
          <Subtitle text='<Term01>'/>
            <div className={styles.onetab}>
              <div className={styles.row}>
                <div className={styles.flexone}>
                  <p>Description</p>
                </div>
                <div className={styles.flexone}>
                  <p>Image here</p>
                </div>
              </div>
            </div>
          <Subtitle text='</Term01>'/>
        </div>
        
        <div className={styles.twotab}>
          <Subtitle text='<Term02>'/>
            <div className={styles.onetab}>
              <div className={styles.row}>
                <div className={styles.flexone}>
                  <p>Description</p>
                </div>
                <div className={styles.flexone}>
                  <p>Image here</p>
                </div>
              </div>
            </div>
          <Subtitle text='</Term02>'/>
        </div>

        <div className={styles.twotab}>
          <Subtitle text='<Term03>'/>
            <div className={styles.onetab}>
              <div className={styles.row}>
                <div className={styles.flexone}>
                  {/* <p>
                    OnMe
                  </p> */}
                  <p>Description</p>

                </div>
                <div className={styles.flexone}>  
                  {/* <Image 
                    src='/OnMe-Assets/OnMe-1.png'
                    alt='image'
                    width={1284} height={2778}
                  /> */}
                  {/* <iframe 
                    className={styles.onme_iframe}
                    // style="border: 1px solid rgba(0, 0, 0, 0.1);" 
                    // width="800" 
                    height="450" 
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FB3WPrgbh5Sq2kZvxPYw614%2FOnMe(Demo)%3Fpage-id%3D0%253A1%26node-id%3D2%253A6%26viewport%3D241%252C48%252C0.22%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A2" 
                    allowFullScreen
                  >
                  </iframe> */}
                  <p>Image here</p>
                </div>
              </div>
            </div>
          <Subtitle text='</Term03>'/>
        </div>

        <div className={styles.twotab}>
          <Subtitle text='<Term04>'/>
            <div className={styles.onetab}>
              <div className={styles.row}>
                <div className={styles.flexone}>
                  <p>Description</p>
                </div>
                <div className={styles.flexone}>
                  <p>Image here</p>
                </div>
              </div>
            </div>
          <Subtitle text='</Term04>'/>
        </div>

        <div className={styles.onetab}>
          <Subtitle text=');'/>
        </div>
        <Subtitle text='}'/>

      </div>
    </div>
  )
}
