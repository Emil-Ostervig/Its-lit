import {CodeSnippet} from '@components/CodeSnippet/CodeSnippet';
import React from 'react';

type Props = {};

export const LifecyclePage = (props: Props) => {
  return (
    <>
      <h1>Lifecycles and events in LIT</h1>
      <p>Try interacting with the buttons to see how the state changes.</p>
      <p>Updating shallow state will trigger an immediate re-render.</p>
      <p>
        Updating deep state will require calling a <i>requestUpdate</i> method
        to trigger a re-render.
      </p>
      <br />
      <div className="clear"></div>
      <CodeSnippet language="typescript">
        {`
@state({})
someState = 1;

// Reflect means that the property of the custom-element will be updated if value is changed internally
@property({type: Number, attribute: 'some-property', reflect: true})
someProperty: number | null = 1;

@state()
deepState = {
  someProperty: 1,
};
        `}
      </CodeSnippet>
      <div className="clear"></div>
      <br />
      <br />
      <p>
        Notice how updating the deep state won't show in UI before state is
        otherwise altered.
      </p>
      <br />
      <div className="borderBox">
        <callback-display />
      </div>
    </>
  );
};
