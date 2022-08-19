import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const NavbarCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Cont = styled.div`
  display: flex;
`;

const NavbarText = styled.a`
  font-size: 24px;
  padding-right: 40px;
  color: ${(props) => props.linkcolor};
  &:hover {
    color: #ffcb6b; // <Thing> when hovered
  }
  &:active {
    color: #c3e88d;
  }
`;

export default function Navbar({
  home = '#EEEEEE',
  projects = '#EEEEEE',
  resume = '#EEEEEE',
  github = '#EEEEEE',
}) {
  return (
    <NavbarCont>
      <Cont>
        <Image src='/JC_Light.svg' alt='JC Logo' width={60} height={60} />
      </Cont>
      <Cont>
        <NavbarText linkcolor={home} href='/'>
          Home()
        </NavbarText>
        <NavbarText linkcolor={projects} href='/projects'>
          Projects()
        </NavbarText>
        <NavbarText linkcolor={resume} href='/Resume.pdf' target='_blank'>
          Resume()
        </NavbarText>
        <NavbarText
          linkcolor={github}
          href='https://github.com/JeremyCarmona3/'
          target='_blank'
        >
          Github()
        </NavbarText>
      </Cont>
    </NavbarCont>
  );
}
