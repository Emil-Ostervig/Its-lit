import {CodeSnippet} from '@components/CodeSnippet/CodeSnippet';
import React from 'react';

type Props = {};

export const AttributesPage = (props: Props) => {
  return (
    <div>
      <h1>Lit attributes</h1>
      <p>Inspect the LIT component and see how state and properties change.</p>
      <p>
        The LIT element takes a property called "text-color", which defines the
        text color of some internal styling.
      </p>
      <br />
      <br />
      <h3>The default font on the website is Times New Roman</h3>
      <div className="clear"></div>
      <CodeSnippet language="css">
        {`body, h1, h2 {
    font-family: 'Times New Roman', serif !important;
}`}
      </CodeSnippet>
      <div className="clear"></div>
      <br />
      <br />
      <p>
        The LIT element uses the text-color property to set styles in the Shadow
        Root.
      </p>
      <p>
        H1 and H3 are set to use the text-color from the property and inherit
        font-family from the parent document. The css variable is defined on
        it's root element.
      </p>
      <p>H2 is has no defined color and is set to use system-ui font.</p>
      <div className="clear"></div>
      <CodeSnippet language="typescript">
        {`
static get styles() {
  return css\`
    /* We're using the property as color and inhering font-family */
    h1,
    h3 {
      color: var(--prop-color, black);
      font-family: inherit;
    }
    /* I'm choosing my own font */
    h2 {
      font-family: system-ui;
    }
    
  \`;
}
    `}
      </CodeSnippet>
      <div className="clear"></div>
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
