import React from 'react';

type Props = {};

export const SlotExamplePage = (props: Props) => {
  return (
    <div className="borderBox">
      <slot-example>
        <h3 slot="header">This is a header</h3>
        <div slot="content">
          <p>This is the content.</p>
          <p>Lorem ipsum and stuff.</p>
        </div>
      </slot-example>
    </div>
  );
};
