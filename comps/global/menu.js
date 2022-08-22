import React from 'react';
import styled from 'styled-components';

import { HiOutlineX } from 'react-icons/hi';
import Head from 'next/head';

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
  padding: 0 4rem;
`;

const NavbarText = styled.a`
  font-size: 24px;
  color: ${(props) => props.linkcolor};
  &:hover {
    color: #ffcb6b; // <Thing> when hovered
  }
  &:active {
    color: #c3e88d;
  }
`;

export default function Menu({
  close,
  home = '#EEEEEE',
  projects = '#EEEEEE',
  resume = '#EEEEEE',
  github = '#EEEEEE',
}) {
  return (
    <Cont>
      <HiOutlineX
        onClick={close}
        style={{
          position: 'absolute',
          top: '2rem',
          right: '5rem',
        }}
        color='#EEEEEE'
        size={35}
      />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <NavbarText onClick={close} linkcolor={home} href='/'>
        Home()
      </NavbarText>
      <NavbarText onClick={close} linkcolor={projects} href='/projects'>
        Projects()
      </NavbarText>
      <NavbarText
        onClick={close}
        linkcolor={resume}
        href='/Resume.pdf'
        target='_blank'
      >
        Resume()
      </NavbarText>
      <NavbarText
        onClick={close}
        linkcolor={github}
        href='https://github.com/JeremyCarmona3/'
        target='_blank'
      >
        Github()
      </NavbarText>
    </Cont>
  );
}
