import React from 'react';

import TypeIt from 'typeit-react';

export default function BigTypeIt({ text = 'Title text' }) {
  const TypeAnim = ({ children }) => {
    return (
      <span style={{ fontSize: 'calc(70px + 0.390625vw)', color: '#eeeeee' }}>
        {children}
      </span>
    );
  };

  var StringifyText = JSON.stringify(text);
  return (
    <TypeAnim>
      <TypeIt
        options={{
          strings: [JSON.parse(StringifyText)],
          // speed: 10,
          waitUntilVisible: true,
        }}
      ></TypeIt>
    </TypeAnim>
  );
}
