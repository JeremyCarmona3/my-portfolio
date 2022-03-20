import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import TypeIt from 'typeit-react'
import { SiFigma } from "react-icons/si";

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
          <p>Hi there, my name is Jeremy Carmona. I am a Front-end Developer.</p>

          <Subtitle text='Experience' />
          <p>
            I have 2 years of experience in developing and designing cross-platform web and mobile applications.
            This experience comes from BCIT{"'"}s Digital Design and Development (D3) program. 
          </p>

          <Subtitle text='My skills' />
          <p>I possess various soft and technical skills. These make me the developer I am today.</p>
          
          <div className={styles.row}>
            <div className={styles.col}>
              <p>My soft skills include:</p>
              <ul>
                <li>Adaptability</li>
                <li>Communicating</li>
                <li>Critical Thinking</li>
                <li>Problem Solving</li>
                <li>Time management</li>
              </ul>
            </div>

            <div className={styles.col}>
            <p>My technical skills include:</p>
              <ul>
                <li>Coding (HTML, CSS, JavaScript, jQuery, SASS, styled-components, React, Next.js, Storybook.js, React Native, Expo, PHP, MySQL, Firebase, Node.js, Express.js, and MongoDB)</li>
                <li>Git Version Control</li>
                <li>Responsive Design</li>
                <li>Problem Solving</li>
                <li>UX/UI Design</li>
              </ul>
            </div>
          </div>

          <Subtitle text='Tools' />
          <p>Here is a list of tools I use when developing and designing. These include:</p>
          <div className={styles.row}>
            <div className={styles.col}>
              <p> Developing Tools</p>
              <p> - Visual Studio Code</p>
              <p> - Chrome DevTools</p>
              <p> - Stack Overflow</p>
              <p> - GitHub</p>
              <p> - Postman</p>
            </div>
            <div className={styles.col}>
              <p> Designing Tool</p>
              <div className={styles.rowSkills}>
                <p> - Figma</p> 
                <SiFigma color='#EEEEEE'/>
              </div>
              <div className={styles.rowSkills}>
                <p> - After Effects</p>
              </div>
              <div className={styles.rowSkills}>
                <p> - Illustrator</p>
              </div>
              <div className={styles.rowSkills}>
                <p> - Indesign</p>
              </div>
              <div className={styles.rowSkills}>
                <p> - Photoshop</p>
              </div>
              <div className={styles.rowSkills}>
                <p> - Premiere Pro</p>
              </div>
            </div>
          </div>




          <Subtitle text='Other' />
          <p> You can downlaod my resume here.</p>
          <p> You can contact me at: </p>
          <input type='form'></input>
        </div>
      </div>
    </div>
  )
}