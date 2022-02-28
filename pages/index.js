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
      <div className={styles.lol}>
        <Subtitle text='import { Term01, Term02, Term03, Term04 } from ‘BCIT’;'/>

        <Subtitle text='export default function JeremyCarmona() {'/>

        <div className={styles.lol}>
          <Subtitle text='return ('/>
        </div>

        <div className={styles.lols}>
          <Subtitle text='<Term01>'/>
            <div className={styles.lol}>
              <p>
                This term marked my journey of wanting to become a front-end developer.
                There were many classes in this program, but the development classes were the ones I was most interested in.
                My first term at BCIT, I learned how to utilize HTML and CSS to create basic web templates.
                I was intrigued with the way coding works and how it is able to display text, images, etc. on a web page.
                During this term, we were assigned to create a mockup business website.
                I collaborated with a partner and we decided to design and develop a website for a tea store.
                We called it Chatea and this company provides proudly serves customers with a variety of tea choices, as well as tea products (tea tables, scales, water boilers, mugs, flavours, pots, etc.).
                For the website, my partner was lead designer and I was the secondary designer. 
                Meanwhile, I was the lead developer and my partner was the secondary developer.
                We worked collaboratively to create Chatea and this was the first website that we created.
                At this point in our education, we only learned the basics of designing and developing a website, so Chatea is not a responsive website.
              </p>
              <Image 
                src='/favicon.ico'
                alt='image'
                width={1200} height={200}
              />
            </div>
          <Subtitle text='</Term01>'/>
        </div>
        
        <div className={styles.lols}>
          <Subtitle text='<Term02>'/>
            <div className={styles.lol}>
              <p>Add text here</p>
            </div>
          <Subtitle text='</Term02>'/>
        </div>

        <div className={styles.lols}>
          <Subtitle text='<Term03>'/>
            <div className={styles.lol}>
              <p>Add text here</p>
            </div>
          <Subtitle text='</Term03>'/>
        </div>

        <div className={styles.lols}>
          <Subtitle text='<Term04>'/>
            <div className={styles.lol}>
              <p>Add text here</p>
            </div>
          <Subtitle text='</Term04>'/>
        </div>

        <div className={styles.lol}>
          <Subtitle text=');'/>
        </div>
        <Subtitle text='}'/>

      </div>
    </div>
  )
}
