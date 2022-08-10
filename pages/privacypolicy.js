import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Navbar from '../comps/global/navbar';
import BigTypeIt from '../comps/text/title';
import Subtitle from '../comps/text/subtitle';
import Footer from '../comps/global/footer';

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy</title>
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
          <Navbar />
          <BigTypeIt text='Privacy Policy' />
          <div>
            <p>
              This policy applies to Jeremy Carmona{"'"}s Web site only. It is
              designed to inform you of how and why Jeremy Carmona gathers
              personal and non-personal information about you. This policy
              complies with provisions of the British Columbia Freedom of
              Information and Protection of Privacy Act.
            </p>
            <p>
              This may be Web site connected by {'"'}hyperlinks{'"'} to other
              Web sites. We are not responsible in any way for the privacy
              practices on other Web sites and suggest that you review the
              privacy policies on those linked Web sites before using them.
            </p>
            <p>
              We are accountable for this Privacy Policy and these practices on
              this Web site, including the Privacy Code set out below. If you
              have any questions or concerns regarding the privacy practices on
              this Web site, please e-mail us.
            </p>
            <p>What Information Is Collected?</p>
            <p>
              When you visit this site, information about your visit (e.g. how
              you navigate the site) may be collected and stored. This
              information may include the length of your visit, the date and
              time of your visit, the pages you look at and the sites you visit
              before and after leaving this site. It does not include personally
              identifiable information such as your name, mailing or e-mail
              address or telephone number. We use this non-identifiable and
              aggregate information to better design this Web site and develop
              an efficient Web marketing plan. We also may share this
              information with our Web designer, board of directors and
              sponsors.
            </p>
            <p>
              Jeremy Carmona may collect the following non-identifiable
              information when you visit this Web site:
            </p>
            <ul className={styles.list}>
              <li>Your Internet Service Provider (ISP)</li>
              <li>Time of your visit</li>
              <li>Pages you visited</li>
              <li>Web Browser Used</li>
            </ul>
            <p>What If I Do Not Agree With this Privacy Policy?</p>
            <p>
              By visiting this Web site and voluntarily providing personal
              information to Jeremy Carmona{"'"}s Web site, you agree to the
              terms of this online User Agreement and the Privacy Policy
              contained herein. However, We welcome your comments and/or
              suggestions on improving this Web site and policies.
            </p>
            <p>Jeremy Carmona + Digital Design and Development BCIT </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
