import React from 'react';

type Props = {};

export const LitInReactPage = (props: Props) => {
  return (
    <div>
      <h1>Hello, this is a page about using lit in react</h1>
      <p>
        This page shows an example of using a webcomponet vs a lit element in a
        React component.
      </p>
      <p>Lit is able to update itself when the react component changes.</p>
      <p>
        Web components by default does not have reactivity, so they will just
        render once when the JS is loaded.
      </p>
      <div className="borderBox" data-title="Native word counter">
        <h2>Native word counter inside ReactComponent</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          mollitia cupiditate obcaecati vero aspernatur repellat non ratione
          sit. Temporibus minima illum facere consequuntur, porro voluptatum ut
          incidunt fugit deserunt voluptas.
        </p>
        <p is="word-count"></p>
      </div>
      <div className="borderBox" data-title="Lit word counter">
        <h2>Lit word counter inside ReactComponent</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          mollitia cupiditate obcaecati vero aspernatur repellat non ratione
          sit. Temporibus minima illum facere consequuntur, porro voluptatum ut
          incidunt fugit deserunt voluptas.
        </p>
        <lit-word-count />
      </div>
    </div>
  );
};
