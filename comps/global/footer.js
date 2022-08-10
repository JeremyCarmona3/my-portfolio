import React from 'react';
import styled from 'styled-components';

import { useRouter } from 'next/router';

const MainCont = styled.div`
  padding: 2rem 0;
`;

const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Line = styled.hr``;

const FooterTextCont = styled.div`
  display: flex;
  justify-content: center;
  min-width: 200px;
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

const BottomText = styled.p`
  text-align: center;
  font-size: 14px;
`;

export default function Footer({}) {
  const router = useRouter();
  return (
    <MainCont>
      <Line />
      <Cont>
        <FooterTextCont>
          <FooterText onClick={() => router.push('/termsofuses')}>
            Terms of uses
          </FooterText>
        </FooterTextCont>
        <FooterTextCont>
          <FooterText onClick={() => router.push('/privacypolicy')}>
            Privacy Policy
          </FooterText>
        </FooterTextCont>
      </Cont>
      <BottomText>
        &copy; Copyright 2022 Jeremy Carmona. All right{"'"}s reserved.
      </BottomText>
    </MainCont>
  );
}
