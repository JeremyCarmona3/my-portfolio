import React from 'react';
import styled from "styled-components";

import { useRouter } from 'next/router';

const Cont = styled.div`
  display: flex;
  flex-direction: row ;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 100px;
  /* background-color: #fad; */
`;


const Line = styled.hr`
  width: 90%;
`;

const FooterText = styled.p`
  cursor: pointer;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  /* flex: 1; */
  /* border: 1px solid #000000; */
`;

export default function Footer({

}) {
  const router = useRouter();
  return ( <div>
    <Line />
    <Cont>
      <Section>
        <FooterText onClick={() => router.push('https://www.youtube.com/channel/UCcmeyiH334i7tiCLhYIuc3g/featured')}>YouTube</FooterText>
        <FooterText onClick={() => router.push('https://www.linkedin.com/in/jeremy-carmona-0685731bb/')}>LinkedIn</FooterText>
        <FooterText onClick={() => router.push('https://github.com/JeremyCarmona3/')}>jeremycarmona115@gmail.com</FooterText>
      </Section>
      <Section>
        <FooterText onClick={() => router.push('/')}>Home</FooterText>
        <FooterText onClick={() => router.push('/about')}>About</FooterText>
        <FooterText onClick={() => router.push('/projects')}>Projects</FooterText>
        <FooterText onClick={() => router.push('https://github.com/JeremyCarmona3/')}>Github</FooterText>
      </Section>
      <Section>
        <FooterText onClick={() => router.push('/copyright')}>Copyright</FooterText>
        <FooterText onClick={() => router.push('/termsofuses')}>Terms of uses</FooterText>
        <FooterText onClick={() => router.push('/privacypolicy')}>Privacy Policy</FooterText>
      </Section>
    </Cont>
  </div>
  )
}