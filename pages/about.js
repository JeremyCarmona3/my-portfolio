import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Navbar from '../comps/global/navbar';
import Title from '../comps/text/title';
import Subtitle from '../comps/text/subtitle';
import Footer from '../comps/global/footer';
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiFigma,
} from 'react-icons/si';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta
          name='keywords'
          content='Jeremy Carmona Front-end Developer portfolio, BCIT Digital Design and Development (D3) 2022'
        />
        <meta
          name='description'
          content='This portfolio includes projects in front-end development. Jeremy Carmona graduated from the D3 program at BCIT in 2022.'
        />
        <meta name='author' content='Jeremy Carmona' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='google-site-verification'
          content='6Ydm5F2LXehzE-WSRujTL_t_TecSLbMEqmwRAsf3im0'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheets' href='/styles/globals.css' />
      </Head>

      <div className={styles.container}>
        <div className={styles.center}>
          <Navbar about='#C792EA' />
          <Title text='About Me' />
          <Subtitle text='Some things about me' />
        </div>
        <div className={styles.onetab}>
          <Subtitle text='Who I am' />
          <div className={styles.row}>
            <div className={styles.col}>
              <p>
                Hi there, my name is Jeremy Carmona and I was born in the
                Philippines. In April 2009, my family and I immigrated to
                Canada. As a child, I enjoyed solving the Rubik{"'"}s cube and
                playing chess. I started my interest in coding when I took a
                graphic design course in highschool. During this course, we used
                Notepad++ to learn how to code in HTML and CSS to create
                websites. In addition, we also were taught how to utilize
                Photoshop to create graphic design content to add to our
                website. After learning HTML and CSS, I proceeded to take an
                introduction course in computer programming where we learned how
                to code in Java. We covered topics such as logic, loops, arrays,
                etc. to create various projects. Some of the projects we made
                were an interest calculator, a spaceship game, a simple language
                translator, and a basic weather app.
              </p>

              <p>
                In 2020, I got accepted for the Digital Design and Development
                program at BCIT. During 2 years at BCIT, I learned many things
                ranging from design work to development work. Although I like
                designing, developing web and mobile cross-platform applications
                was something I was mroe passionate about. I learned various
                coding languages, frameworks, and libraries during my time at
                BCIT.
              </p>

              <p>
                During my free time, I like to play the guitar and play video
                games with my friends.
              </p>
            </div>
            <div className={styles.col}>
              <div className={styles.profilepic}>
                <div className={styles.avatar}>
                  <Image
                    src='/ProfilePic.JPG'
                    alt='image'
                    width={336}
                    height={421}
                  />
                  <p>Hi there, I am Jeremy and I like to code!</p>
                  <p>
                    GitHub:{' '}
                    <a
                      href='https://github.com/JeremyCarmona3/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      JeremyCarmona3
                    </a>
                  </p>
                  <p>
                    LinkedIn:{' '}
                    <a
                      href='https://www.linkedin.com/in/jeremy-carmona-0685731bb/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Jeremy Carmona
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Subtitle text='My skills' />

          <div className={styles.row}>
            <div className={styles.col}>
              <p>My technical skills include:</p>
              <ul className={styles.list}>
                <li>Coding</li>
                <ul className={styles.list}>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>SASS</li>
                  <li>styled-components</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Storybook.js</li>
                  <li>React Native</li>
                  <li>Expo</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                  <li>Firebase</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                </ul>
                <li>Git Version Control</li>
                <li>Responsive Design</li>
                <li>Problem Solving</li>
                <li>UX/UI Design</li>
              </ul>
            </div>

            <div className={styles.col}>
              <p>My soft skills include:</p>
              <ul className={styles.list}>
                <li>Adaptability</li>
                <li>Communicating</li>
                <li>Critical Thinking</li>
                <li>Problem Solving</li>
                <li>Time management</li>
              </ul>
              <Image
                src='/SoftSkills.webp'
                alt='Soft skills image'
                width={500}
                height={333}
              />
            </div>
          </div>

          <Subtitle text='Tools' />
          <div className={styles.row}>
            <div className={styles.col}>
              <p> Developing Tools</p>
              <ul className={styles.list}>
                <li>Visual Studio Code</li>
                <li>Chrome DevTools</li>
                <li>Stack Overflow</li>
                <li>GitHub</li>
                <li>Postman</li>
              </ul>
            </div>
            <div className={styles.col}>
              <p> Designing Tools</p>
              <ul className={styles.list}>
                <div className={styles.rowTools}>
                  <li>Figma</li>
                  <SiFigma />
                </div>
                <div className={styles.rowTools}>
                  <li>After Effects</li>
                  <SiAdobeaftereffects />
                </div>
                <div className={styles.rowTools}>
                  <li>Illustrator</li>
                  <SiAdobeillustrator />
                </div>
                <div className={styles.rowTools}>
                  <li>Indesign</li>
                  <SiAdobeindesign />
                </div>
                <div className={styles.rowTools}>
                  <li>Photoshop</li>
                  <SiAdobephotoshop />
                </div>
                <div className={styles.rowTools}>
                  <li>Premiere Pro</li>
                  <SiAdobepremierepro />
                </div>
              </ul>
            </div>
          </div>

          {/* <Subtitle text='Other' />
          <p> You can downlaod my resume here.</p>
          <p> You can contact me at: </p>
          <input type='form'></input> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
