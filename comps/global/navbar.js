import React from 'react';
import styled from 'styled-components';

const NavbarCont = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const NavbarText = styled.a`
  font-size: 24px;
  padding-right: 40px;
  color: ${props => props.linkcolor};
  &:hover {
    color: #ffcb6b; // <Thing> when hovered
  }
  &:active {
    color: #c3e88d;
  }
`;

export default function Navbar({
  home='#EEEEEE',
  projects='#EEEEEE',
  about='#EEEEEE',
  github='#EEEEEE'
}) {
  return (
    <NavbarCont>
      <NavbarText linkcolor={home} href='/'>Home()</NavbarText>
      <NavbarText linkcolor={projects} href='/projects'>Projects()</NavbarText>
      <NavbarText linkcolor={about}href='/about'>About()</NavbarText>
      <NavbarText linkcolor={github}href='https://github.com/JeremyCarmona3/' target="_blank">Github()</NavbarText>
    </NavbarCont>
  )
}