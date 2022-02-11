import React from 'react';
import styled from "styled-components";

const TitleText = styled.p`
  font-size: 96px;
  color: #EEEEEE;
  margin: 0;
`;

export default function Title({
  text = 'Title text',
}) {
  return (
    <TitleText>
      {text}
    </TitleText>
  )
}