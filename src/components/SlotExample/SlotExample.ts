import {LitElement, css, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('slot-example')
export class SlotExample extends LitElement {
  constructor() {
    super();
  }
  static get styles() {
    return css`
      .header {
        background-color: lightblue;
        padding: 1em;
        color: black;
      }
      .content {
        background-color: lightgrey;
        padding: 1em;
        color: black;
      }
    `;
  }

  render() {
    return html`<div>
      <div className="header">
        <slot name="headline"></slot>
      </div>
      <div className="content">
        <slot name="content"></slot>
      </div>
    </div>`;
  }
}
