import React from 'react';
import styled from 'styled-components';

import { useRouter } from 'next/router';

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 100px;
  padding: 0rem 2rem;
`;

const Line = styled.hr`
  margin: 1rem 2rem;
`;

const FooterText = styled.p`
  cursor: pointer;
  &:hover {
    color: #ffcb6b; // <Thing> when hovered
  }
  &:active {
    color: #c3e88d;
  }
`;

const Section = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  // border: 1px solid #fff;
`;

const BottomText = styled.p`
  text-align: center;
  font-size: 14px;
`;

export default function Footer({}) {
  const router = useRouter();
  return (
    <div>
      <Line />
      <Cont>
        <Section>
          <FooterText onClick={() => router.push('/')}>Home</FooterText>
          <FooterText onClick={() => router.push('/about')}>About</FooterText>
        </Section>
        <Section>
          <FooterText onClick={() => router.push('/projects')}>
            Projects
          </FooterText>
          <FooterText
            onClick={() => router.push('https://github.com/JeremyCarmona3/')}
          >
            Github
          </FooterText>
        </Section>
        <Section>
          <FooterText
            onClick={() =>
              router.push(
                'https://www.linkedin.com/in/jeremy-carmona-0685731bb/'
              )
            }
          >
            LinkedIn
          </FooterText>
          <FooterText
            onClick={() => router.push('mailto:jeremycarmona115@gmail.com')}
          >
            Email
          </FooterText>
        </Section>
        <Section>
          <FooterText onClick={() => router.push('/termsofuses')}>
            Terms of uses
          </FooterText>
          <FooterText onClick={() => router.push('/privacypolicy')}>
            Privacy Policy
          </FooterText>
        </Section>
      </Cont>
      <BottomText>
        &copy; Copyright 2022 Jeremy Carmona. All right{"'"}s reserved.
      </BottomText>
    </div>
  );
}
