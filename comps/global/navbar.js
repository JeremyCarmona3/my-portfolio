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
  color: #EEEEEE;
  &:hover {
    color: #C792EA; // <Thing> when hovered
  }
  &:active {
    color: #C792EA;
  }
`;

export default function Navbar()  {
  return (
    <NavbarCont>
      <NavbarText href='/'>Home()</NavbarText>
      <NavbarText href='/projects'>Projects()</NavbarText>
      <NavbarText href='/about'>About()</NavbarText>
      <NavbarText href='https://github.com/JeremyCarmona3/' target="_blank">Github()</NavbarText>
    </NavbarCont>
  )
}