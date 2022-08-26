import React from 'react';
import styled from 'styled-components';

const SubtitleText = styled.p`
  font-size: calc(16px + 0.390625vw);
  color: #eeeeee;
`;

export default function Subtitle({ text = 'Subtitle Text' }) {
  return <SubtitleText>{text}</SubtitleText>;
}
