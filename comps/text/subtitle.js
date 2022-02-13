import React from 'react';
import styled from "styled-components";

const SubtitleText = styled.p`
  font-size: 24px;
  color: #EEEEEE;
`;

export default function Subtitle({
  text = 'Subtitle Text'
}) {
  return (
    <SubtitleText>
      {text}
    </SubtitleText>
  )
}