import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Navbar from '../comps/global/navbar';
import BigTypeIt from '../comps/text/title';
import Subtitle from '../comps/text/subtitle';
import Footer from '../comps/global/footer';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiExpo,
  SiPhp,
  SiMysql,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
  SiSocketdotio,
} from 'react-icons/si';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jeremy Carmona</title>
        <meta name='title' content='Jeremy Carmona' />
        <meta
          name='keywords'
          content='Jeremy Carmona, Jeremy Carmona Front-end Developer portfolio, BCIT Digital Design and Development (D3) 2022'
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
          <Navbar home='#C792EA' />
          <div className={styles.typeit}>
            <BigTypeIt text='Hi, my name is Jeremy Carmona and I am a front-end developer.' />
          </div>
        </div>
        <div className={styles.onetab}>
          <Subtitle text='Welcome to my portfolio.' />

          <div className={styles.row}>
            <div className={styles.col}>
              <p>
                Hi there, my name is Jeremy Carmona. I started my interest in
                coding when I took a graphic design course in highschool. During
                this course, we used Notepad++ to learn how to code in HTML and
                CSS to create websites. In addition, we also were taught how to
                utilize Photoshop to create graphic design content to add to our
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
                was something I was more passionate about. I learned various
                coding languages, frameworks, and libraries during my time at
                BCIT. I aspire to be a full-stack developer later on in my
                career.
              </p>
            </div>
            <div className={styles.col}>
              <div className={styles.profilepic}>
                <Image
                  src='/ProfilePic.JPG'
                  alt='image'
                  width={336}
                  height={421}
                />
              </div>
            </div>
          </div>

          {/* <Subtitle text='Chatea' />
          <div className={styles.row}>
            <div className={styles.flexone}>
              <div className={styles.termprojects}>
                <Image
                  src='/Chatea-Assets/Chatea-1.png'
                  alt='Chatea landing page'
                  width={2556}
                  height={1606}
                />
              </div>
            </div>
            <div className={styles.flexone}>
              <div>
                <Subtitle text='Made with' />
                <div className={styles.homeskills}>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiHtml5 />
                    </span>{' '}
                    HTML
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiCss3 />
                    </span>{' '}
                    CSS
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Subtitle text='Giving Hand' />
          <div className={styles.row}>
            <div className={styles.flexone}>
              <div className={styles.termprojects}>
                <Image
                  src='/GivingHand-Assets/GivingHand-1.png'
                  alt='Giving Hand landing page'
                  width={747}
                  height={1327}
                />
              </div>
              <div className={styles.termprojects}>
                <Image
                  src='/GivingHand-Assets/GivingHand-2.png'
                  alt='image'
                  width={747}
                  height={1327}
                />
              </div>
            </div>
            <div className={styles.flexone}>
              <div>
                <Subtitle text='Made with' />
                <div className={styles.homeskills}>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiHtml5 />
                    </span>{' '}
                    HTML
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiCss3 />
                    </span>{' '}
                    CSS
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiJavascript />
                    </span>{' '}
                    JS
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiReact />
                    </span>{' '}
                    React
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiNextdotjs />
                    </span>{' '}
                    Next.js
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiStyledcomponents />
                    </span>{' '}
                    Styled-components
                  </span>
                </div>
              </div>
            </div>
          </div> */}

          <Subtitle text='OnMe' />
          <div className={styles.row}>
            <div className={styles.flexone}>
              <div className={styles.termprojects}>
                <Image
                  src='/OnMe-Assets/OnMe-1.png'
                  alt='OnMe landing page'
                  width={1284}
                  height={2778}
                />
              </div>
              <div className={styles.termprojects}>
                <Image
                  src='/OnMe-Assets/OnMe-2.png'
                  alt='OnMe dashboard'
                  width={1284}
                  height={2778}
                />
              </div>
            </div>
            <div className={styles.flexone}>
              <div>
                <Subtitle text='Made with' />
                <div className={styles.homeskills}>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiReact />
                    </span>{' '}
                    React Native
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiStyledcomponents />
                    </span>{' '}
                    Styled-components
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiExpo />
                    </span>{' '}
                    Expo
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiPhp />
                    </span>{' '}
                    PHP
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiMysql />
                    </span>{' '}
                    MySQL
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiFirebase />
                    </span>{' '}
                    Firebase
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Subtitle text='MojiMeals' />
          <div className={styles.row}>
            <div className={styles.flexone}>
              <div className={styles.termprojects}>
                <Image
                  src='/MojiMeals-Assets/MojiMeals-2.png'
                  alt='MojiMeals moji library'
                  width={2880}
                  height={1637}
                />
              </div>
            </div>
            <div className={styles.flexone}>
              <div>
                <Subtitle text='Made with' />
                <div className={styles.homeskills}>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiJavascript />
                    </span>{' '}
                    JS
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiReact />
                    </span>{' '}
                    React
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiNextdotjs />
                    </span>{' '}
                    Next.js
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiStyledcomponents />
                    </span>{' '}
                    Styled-components
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiNodedotjs />
                    </span>{' '}
                    Node.js
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiMongodb />
                    </span>{' '}
                    MongoDB
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiReact />
                    </span>{' '}
                    React DnD
                  </span>
                  <span className={styles.iconcont}>
                    <span className={styles.icon}>
                      <SiSocketdotio />
                    </span>{' '}
                    Socket.IO
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <Subtitle text='import { Term01, Term02, Term03, Term04 } from ‘BCIT’;' />

            <Subtitle text='// My front-end developer progress during my education in the Digital Design and Development program at BCIT' />
            <Subtitle text='export default function JeremyCarmona() {' />
          </div>
          <div className={styles.onetab}>
            <Subtitle text='return (' />
          </div>

          <div className={styles.twotab}>
            <Subtitle text='<Term01>' />
            <div className={styles.onetab}>
              <Subtitle text='Chatea' />

              <div className={styles.row}>
                <div className={styles.flexone}>
                  <div className={styles.termprojects}>
                    <Image
                      src='/Chatea-Assets/Chatea-1.png'
                      alt='Chatea landing page'
                      width={2556}
                      height={1606}
                    />
                  </div>
                </div>
                <div className={styles.flexone}>
                  <div>
                    <Subtitle text='Made with' />
                    <div className={styles.homeskills}>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiHtml5 />
                        </span>{' '}
                        HTML
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiCss3 />
                        </span>{' '}
                        CSS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Subtitle text='</Term01>' />
          </div>

          <div className={styles.twotab}>
            <Subtitle text='<Term02>' />
            <div className={styles.onetab}>
              <Subtitle text='Giving Hand' />
              <div className={styles.row}>
                <div className={styles.flexone}>
                  <div className={styles.termprojects}>
                    <Image
                      src='/GivingHand-Assets/GivingHand-1.png'
                      alt='Giving Hand landing page'
                      width={747}
                      height={1327}
                    />
                  </div>
                  <div className={styles.termprojects}>
                    <Image
                      src='/GivingHand-Assets/GivingHand-2.png'
                      alt='image'
                      width={747}
                      height={1327}
                    />
                  </div>
                </div>
                <div className={styles.flexone}>
                  <div>
                    <Subtitle text='Made with' />
                    <div className={styles.homeskills}>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiHtml5 />
                        </span>{' '}
                        HTML
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiCss3 />
                        </span>{' '}
                        CSS
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiJavascript />
                        </span>{' '}
                        JS
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiReact />
                        </span>{' '}
                        React
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiNextdotjs />
                        </span>{' '}
                        Next.js
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiStyledcomponents />
                        </span>{' '}
                        Styled-components
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Subtitle text='</Term02>' />
          </div>

          <div className={styles.twotab}>
            <Subtitle text='<Term03>' />
            <div className={styles.onetab}>
              <Subtitle text='OnMe' />
              <div className={styles.row}>
                <div className={styles.flexone}>
                  <div className={styles.termprojects}>
                    <Image
                      src='/OnMe-Assets/OnMe-1.png'
                      alt='OnMe landing page'
                      width={1284}
                      height={2778}
                    />
                  </div>
                  <div className={styles.termprojects}>
                    <Image
                      src='/OnMe-Assets/OnMe-2.png'
                      alt='OnMe dashboard'
                      width={1284}
                      height={2778}
                    />
                  </div>
                </div>
                <div className={styles.flexone}>
                  <div>
                    <Subtitle text='Made with' />
                    <div className={styles.homeskills}>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiReact />
                        </span>{' '}
                        React Native
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiStyledcomponents />
                        </span>{' '}
                        Styled-components
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiExpo />
                        </span>{' '}
                        Expo
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiPhp />
                        </span>{' '}
                        PHP
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiMysql />
                        </span>{' '}
                        MySQL
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiFirebase />
                        </span>{' '}
                        Firebase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Subtitle text='</Term03>' />
          </div>

          <div className={styles.twotab}>
            <Subtitle text='<Term04>' />
            <div className={styles.onetab}>
              <Subtitle text='MojiMeals' />
              <div className={styles.row}>
                <div className={styles.flexone}>
                  <div className={styles.termprojects}>
                    <Image
                      src='/MojiMeals-Assets/MojiMeals-2.png'
                      alt='MojiMeals moji library'
                      width={2880}
                      height={1637}
                    />
                  </div>
                </div>
                <div className={styles.flexone}>
                  <div>
                    <Subtitle text='Made with' />
                    <div className={styles.homeskills}>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiJavascript />
                        </span>{' '}
                        JS
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiReact />
                        </span>{' '}
                        React
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiNextdotjs />
                        </span>{' '}
                        Next.js
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiStyledcomponents />
                        </span>{' '}
                        Styled-components
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiNodedotjs />
                        </span>{' '}
                        Node.js
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiMongodb />
                        </span>{' '}
                        MongoDB
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiReact />
                        </span>{' '}
                        React DnD
                      </span>
                      <span className={styles.iconcont}>
                        <span className={styles.icon}>
                          <SiSocketdotio />
                        </span>{' '}
                        Socket.IO
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Subtitle text='</Term04>' />
          </div>

          <div className={styles.onetab}>
            <Subtitle text=');' />
          </div>
          <Subtitle text='}' /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
