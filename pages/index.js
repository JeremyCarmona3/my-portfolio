import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../comps/global/navbar'
import Title from '../comps/text/title'
import Subtitle from '../comps/text/subtitle'

import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiStyledcomponents, SiExpo, SiPhp, SiMysql, SiFirebase, SiNodedotjs, SiMongodb, SiSocketdotio } from "react-icons/si";
import Footer from '../comps/global/footer'

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Home</title>
      <meta name="keywords" content="Jeremy Carmona Front-end Developer portfolio, BCIT Digital Design and Development (D3) 2022" />
      <meta name="description" content="This portfolio includes projects in front-end development. Jeremy Carmona graduated from the D3 program at BCIT in 2022." />
      <meta name="author" content="Jeremy Carmona" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheets" href="/styles/globals.css" />
    </Head>
      <div className={styles.center}>
        <Navbar home='#C792EA' />
        <div className={styles.typeit}>
          <Title text="Hi, I'm Jeremy Carmona and I like to code!" />
        </div>
        <Subtitle text='My roadmap as a Front-end Developer' />
      </div>
      <div className={styles.onetab}>
        <Subtitle text='import { Term01, Term02, Term03, Term04 } from ‘BCIT’;'/>

        <Subtitle text='// My front-end developer progress during my education in the Digital Design and Development program at BCIT'/>
        <Subtitle text='export default function JeremyCarmona() {'/>
        <div className={styles.onetab}>
          <Subtitle text='return ('/>
        </div>

        <div className={styles.twotab}>
          <Subtitle text='<Term01>'/>
            <div className={styles.onetab}>
              <Subtitle text='Chatea'/>
              <div className={styles.row}>
                <div className={styles.flexone}>
                  <div className={styles.termprojects}>
                    <Image 
                      src='/Chatea-Assets/Chatea-1.png'
                      alt='Chatea landing page'
                      width={2556} height={1606}
                    />
                  </div>
                </div>
                <div className={styles.flexone}>
                  <div>
                    <Subtitle text='Made with'/>
                    <div className={styles.homeskills}>
                      <span className={styles.iconcont}><span className={styles.icon}><SiHtml5/></span> HTML</span>
                      <span className={styles.iconcont}><span className={styles.icon}><SiCss3/></span> CSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <Subtitle text='</Term01>'/>
        </div>
        
        <div className={styles.twotab}>
          <Subtitle text='<Term02>'/>
            <div className={styles.onetab}>
              <Subtitle text='Giving Hand'/>
              <div className={styles.row}>
                <div className={styles.flexone}>
                  <div className={styles.termprojects}>
                    <Image 
                      src='/GivingHand-Assets/GivingHand-1.png'
                      alt='Giving Hand landing page'
                      width={747} height={1327}
                    />
                  </div>
                  <div className={styles.termprojects}>
                    <Image 
                      src='/GivingHand-Assets/GivingHand-2.png'
                      alt='image'
                      width={747} height={1327}
                    />
                  </div>
                </div>
                <div className={styles.flexone}>
                  <div>
                    <Subtitle text='Made with'/>
                    <div className={styles.homeskills}>
                      <span className={styles.iconcont}><span className={styles.icon}><SiHtml5/></span> HTML</span>
                      <span className={styles.iconcont}><span className={styles.icon}><SiCss3/></span> CSS</span>
                      <span className={styles.iconcont}><span className={styles.icon}><SiJavascript/></span> JS</span>
                      <span className={styles.iconcont}><span className={styles.icon}><SiReact/></span> React</span>
                      <span className={styles.iconcont}><span className={styles.icon}><SiNextdotjs/></span> Next.js</span>
                      <span className={styles.iconcont}><span className={styles.icon}><SiStyledcomponents/></span> Styled-components</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <Subtitle text='</Term02>'/>
        </div>

        <div className={styles.twotab}>
          <Subtitle text='<Term03>'/>
            <div className={styles.onetab}>
              <Subtitle text='OnMe'/>
              <div className={styles.row}>
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
                  <div className={styles.termprojects}>
                    <Image 
                      src='/OnMe-Assets/OnMe-1.png'
                      alt='OnMe landing page'
                      width={1284} height={2778}
                    />
                  </div>
                  <div className={styles.termprojects}>
                    <Image 
                      src='/OnMe-Assets/OnMe-2.png'
                      alt='OnMe dashboard'
                      width={1284} height={2778}
                    />
                  </div>
                  
                </div>
                <div className={styles.flexone}>
                  <div>
                    <Subtitle text='Made with'/>
                    <div className={styles.homeskills}>
                      <span  className={styles.iconcont}><span className={styles.icon}><SiReact/></span> React Native</span>
                      <span  className={styles.iconcont}><span className={styles.icon}><SiStyledcomponents/></span> Styled-components</span>
                      <span  className={styles.iconcont}><span className={styles.icon}><SiExpo/></span> Expo</span>
                      <span  className={styles.iconcont}><span className={styles.icon}><SiPhp/></span> PHP</span>
                      <span  className={styles.iconcont}><span className={styles.icon}><SiMysql/></span> MySQL</span>
                      <span  className={styles.iconcont}><span className={styles.icon}><SiFirebase/></span> Firebase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <Subtitle text='</Term03>'/>
        </div>

        <div className={styles.twotab}>
          <Subtitle text='<Term04>'/>
            <div className={styles.onetab}>
              <Subtitle text='MojiMeals'/>
              <div className={styles.row}>
                <div className={styles.flexone}>
                  <div className={styles.termprojects}>
                    <Image 
                      src='/MojiMeals-Assets/MojiMeals-2.png'
                      alt='MojiMeals moji library'
                      width={2880} height={1637}
                    />
                  </div>
                </div>
                <div className={styles.flexone}>
                  <div>
                    <Subtitle text='Made with'/>
                    <div className={styles.homeskills}>
                      <span className={styles.iconcont}><span className={styles.icon}><SiJavascript/></span> JS</span>
                      <span className={styles.iconcont}><span className={styles.icon}><SiReact/></span> React</span>
                      <span className={styles.iconcont}><span className={styles.icon}><SiNextdotjs/></span> Next.js</span>
                      <span className={styles.iconcont}><span className={styles.icon}><SiStyledcomponents/></span> Styled-components</span>
                      <span className={styles.iconcont}><span className={styles.icon}><SiNodedotjs/></span> Node.js</span>
                      <span className={styles.iconcont}><span className={styles.icon}><SiMongodb/></span> MongoDB</span>
                      <span className={styles.iconcont}><span className={styles.icon}><SiReact/></span> React DnD</span>
                      <span className={styles.iconcont}><span className={styles.icon}><SiSocketdotio/></span> Socket.IO</span>
                    </div>
                  </div>
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
      <Footer />
    </div>
  )
}
