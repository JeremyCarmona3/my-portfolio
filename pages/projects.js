import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../comps/global/navbar'
import Title from '../comps/text/title'
import Subtitle from '../comps/text/subtitle'
import Footer from '../comps/global/footer'

export default function Projects() {
  return (
    <div>
      <Head>
        <title>My Projects</title>
        <meta name="keywords" content="Jeremy Carmona Front-end Developer portfolio, BCIT Digital Design and Development (D3) 2022" />
        <meta name="description" content="This portfolio includes projects in front-end development. Jeremy Carmona graduated from the D3 program at BCIT in 2022." />
        <meta name="author" content="Jeremy Carmona" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheets" href="/styles/globals.css" />
      </Head>

      <div className={styles.container}>
        <div className={styles.center}>
          <Navbar projects='#C792EA' />
          <Title text='My projects' />
          <Subtitle text='Some projects I have worked on' />
        </div>
        <div className={styles.onetab}>
          <Subtitle text='OnMe' />
          <div className={styles.row}>
            <div className={styles.colProjects}>
              <p>{'"'}Create a connection, with a little liquid courage.{'"'}</p>

              <p>
                OnMe is a cross-platform mobile app dedicated to the lonely residents of Metro Vancouver. 
                It allows the user to order anyone inside the current restaurant a food or drink item based on their table and seat number.
                It was created by D3 BCIT students as our 3rd semester final project. 
                The proof of concept was presented to 200 people, including students, faculty, and industry experts.
              </p>

              <p>Designers: Alicia Yien, Arielle Castro, Charlene Tran, and Min Chun</p>

              <p>Developers: Danny Nguyen and Jeremy Carmona</p>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/aI62tiJApfI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className={styles.colProjects}>
              <p>
                The following video is a screen recording of a live demo of the OnMe application through a simulator in Xcode.
                Steps in the video include:
              </p>
              <ul>
                <li>Signing up</li>
                <li>Selecting a restaurant</li>
                <li>Selecting a drink</li>
                <li>Selecting a recipient</li>
                <li>Adding a message</li>
                <li>Paying for the order</li>
                <li>Send another drink ;)</li>
              </ul>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/1NiF7avZNEI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>

          <Subtitle text='Moji Meals' />
          <div className={styles.row}>
            <div className={styles.colProjects}>
              <p>Description</p>

              <p>Designers: Alicia Plesich, Maharlika Clomata, and William McDonald</p>

              <p>Developers: Iori Takeshita and Jeremy Carmona</p>
              <div>
                <Image 
                  src='/MojiMeals-Assets/MojiMealsLogo.png' 
                  alt="Moji Meals Logo"
                  width={243} 
                  height={122} 
                />
              </div>
            </div>
            <div className={styles.colProjects}>
              <p>Pictures</p>
            </div>
          </div>
          
          {/* <Subtitle text='Project 2' />
          <Subtitle text='Project 3' />
          <Subtitle text='Project 4' /> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}