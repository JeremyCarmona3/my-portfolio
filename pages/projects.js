import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Navbar from '../comps/global/navbar';
import BigTypeIt from '../comps/text/title';
import Subtitle from '../comps/text/subtitle';
import Footer from '../comps/global/footer';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>My Projects</title>
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
          <Navbar projects='#C792EA' />
          <BigTypeIt text='My projects' />
          <Subtitle text='Some projects I have worked on' />
        </div>
        <div className={styles.onetab}>
          <Subtitle text='OnMe' />
          <div className={styles.row}>
            <div className={styles.colProjects}>
              <p>
                The following video is a screen recording of a live demo of the
                OnMe application through a simulator in Xcode. Steps in the
                video include: Signing up, Selecting a restaurant, Selecting a
                drink, Selecting a recipient, Adding a message, Paying for the
                order, and Send another drink ;).
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <iframe
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/1NiF7avZNEI'
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className={styles.colProjects}>
              <p>
                {'"'}Create a connection, with a little liquid courage.{'"'}
              </p>

              <p>
                OnMe is a cross-platform mobile app dedicated to the lonely
                residents of Metro Vancouver. It allows the user to order anyone
                inside the current restaurant a food or drink item based on
                their table and seat number. It was created by D3 BCIT students
                as our 3rd semester final project. The proof of concept was
                presented to 200 people, including students, faculty, and
                industry experts.
              </p>

              <p>
                Designers: Alicia Yien, Arielle Castro, Charlene Tran, and Min
                Chun
              </p>

              <p>Developers: Danny Nguyen and Jeremy Carmona</p>
            </div>
          </div>

          <Subtitle text='Moji Meals' />
          <div className={styles.row}>
            <div className={styles.colProjects}>
              <div>
                <Image
                  src='/MojiMeals-Assets/MojiMeals-1.png'
                  alt='Moji Meals Logo'
                  width={2880}
                  height={1637}
                />
                <Image
                  src='/MojiMeals-Assets/MojiMeals-2.png'
                  alt='Moji Meals Logo'
                  width={2880}
                  height={1637}
                />
              </div>
            </div>
            <div className={styles.colProjects}>
              <p>
                MojiMeals is an application that will display a list of emojis
                from our chosen dataset. When a user clicks an emoji, it will
                lead to the next page and show the nutrition data of the emoji
                ingredient or food. It features other pages such as Find Recipe,
                Settings, and Calculator.
              </p>

              <p>
                <a href='https://moji-meals.vercel.app/'>
                  Live Site: MojiMeals
                </a>
              </p>

              <p>
                Designers: Alicia Plesich, Maharlika Clomata, and William
                McDonald
              </p>

              <p>Developers: Iori Takeshita and Jeremy Carmona</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
