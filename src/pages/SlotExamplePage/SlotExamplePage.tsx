import {CodeSnippet} from '@components/CodeSnippet/CodeSnippet';
import React from 'react';

type Props = {};

export const SlotExamplePage = (props: Props) => {
  return (
    <div>
      <h1>This is an example of a component that uses slots</h1>
      <p>Because it's rendered by a React SPA it doesn't have SSR at all.</p>
      <p>
        Visit <a href="/ssr.html">the slot example html page</a> to see an
        example of it being server rendered.
      </p>
      <br />
      <br />
      <h3>In the HMTL markup</h3>
      <p>
        Content can be assigned to the slot of a LIT element by using the slot
        attribute
      </p>
      <br />
      <CodeSnippet language="html">
        {`
<slot-example>
  <h3 slot="headline">This is a header</h3>
  <div slot="content">
    <p>This is the content.</p>
    <p>Lorem ipsum and stuff.</p>
  </div>
</slot-example>
        `}
      </CodeSnippet>
      <div className="clear"></div>
      <br />
      <br />
      <h3>In the LIT component</h3>
      <p>
        In the LIT component slots are rendered using the {'<slot>'} element
      </p>
      <br />
      <CodeSnippet language="typescript">
        {`
render() {
  return html\`<div>
    <div className="header">
      <slot name="headline"></slot>
    </div>
    <div className="content">
      <slot name="content"></slot>
    </div>
  </div>\`;
}
        `}
      </CodeSnippet>
      <div className="clear"></div>
      <br />
      <h3>The LIT Component in use:</h3>
      <div className="borderBox">
        <slot-example>
          <h3 slot="headline">This is a header</h3>
          <div slot="content">
            <p>This is the content.</p>
            <p>Lorem ipsum and stuff.</p>
          </div>
        </slot-example>
      </div>
    </div>
  );
};
