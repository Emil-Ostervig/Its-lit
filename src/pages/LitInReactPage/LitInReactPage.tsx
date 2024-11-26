import React, {useState} from 'react';

type Props = {};
const defaultText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
mollitia cupiditate obcaecati vero aspernatur repellat non ratione
sit. Temporibus minima illum facere consequuntur, porro voluptatum ut
incidunt fugit deserunt voluptas.`;
export const LitInReactPage = (props: Props) => {
  const [text, setText] = useState(defaultText);
  return (
    <div>
      <h1>Hello, this is a page about using lit in react</h1>

      <p>
        This page shows an example of using a webcomponet vs a lit element in a
        React component.
      </p>
      <p>
        Lit is able to render in a React componet but will not render if content
        changes.
      </p>
      <p>
        As a workaround a key can be added to the Lit element to force a
        re-render, but this is probably not a good approach.
      </p>
      <p>
        Web components by default does not have reactivity, so they will just
        render once when the JS is loaded.
      </p>
      <br />
      <br />
      <textarea
        rows={5}
        cols={50}
        onInput={(e) => setText(e.currentTarget.value)}
        defaultValue={text}
      ></textarea>
      <br />
      <br />

      <div className="borderBox" data-title="Native word counter">
        <h2>Native word counter inside ReactComponent</h2>
        <p>{text}</p>
        <p is="word-count"></p>
      </div>

      <div className="borderBox" data-title="Lit word counter">
        <lit-word-count>
          <h2>Lit word counter inside ReactComponent</h2>
          <p>{text}</p>
        </lit-word-count>
      </div>
      <div className="borderBox" data-title="Lit word counter using key">
        <lit-word-count key={text.length}>
          <h2>Lit word counter inside ReactComponent</h2>
          <p>{text}</p>
        </lit-word-count>
      </div>
    </div>
  );
};
