import React from 'react';
import styled from "styled-components";

const ParaText = styled.p`
  font-size: 14px;
  color: #EEEEEE;
`;

export default function Text({
  text = 'Paragraph text'
}) {
  return (
    <ParaText>
      {text}
    </ParaText>
  )
}