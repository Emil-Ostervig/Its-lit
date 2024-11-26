import React from 'react';

type Props = {};

export const AttributesPage = (props: Props) => {
  return (
    <div>
      <h1>I'm a plain old boring H1 in Times New Roman</h1>

      <div className="clear"></div>

      <pre>
        <code>
          {`body, h1, h2 {
    font-family: 'Times New Roman', serif !important;
}`}
        </code>
      </pre>

      <div className="clear"></div>
      <div className="borderBox" data-title="Lit element with attributes">
        <my-element
          names='["World", "Unit 2", "Entire FE community"]'
          text-color="red"
        ></my-element>
      </div>
    </div>
  );
};
