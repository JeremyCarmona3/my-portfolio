import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../comps/global/navbar'
import Title from '../comps/text/title'
import Subtitle from '../comps/text/subtitle'
import Footer from '../comps/global/footer'

export default function TermsOfUses() {
  return (
    <div>
      <Head>
        <title>Terms of Uses</title>
        <meta name="keywords" content="Jeremy Carmona Front-end Developer portfolio, BCIT Digital Design and Development (D3) 2022" />
        <meta name="description" content="This portfolio includes projects in front-end development. Jeremy Carmona graduated from the D3 program at BCIT in 2022." />
        <meta name="author" content="Jeremy Carmona" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheets" href="/styles/globals.css" />
      </Head>

      <div className={styles.container}>
        <div className={styles.center}>
          <Navbar />
          <Title text='Terms of Uses' />
          <p>Jeremy Carmona welcomes you to his Web site. Using this Web site indicates your consent and agreement to be bound by this User Agreement and any policies or practices contained herein.</p>
        </div>
        <Footer/>
      </div>
    </div>
  )
}