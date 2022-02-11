import React from 'react';
import styled from 'styled-components';

const NavbarCont = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
  width: 100vw;
  margin: 0;
  padding: 0;
`;

const NavbarText = styled.a`
  padding-right: 20px;
  color: #EEEEEE;
`;

export default function Navbar()  {
  return (
    <NavbarCont>
      <NavbarText>Home()</NavbarText>
      <NavbarText>Projects()</NavbarText>
      <NavbarText>About()</NavbarText>
      <NavbarText>Github()</NavbarText>
    </NavbarCont>
  )
}