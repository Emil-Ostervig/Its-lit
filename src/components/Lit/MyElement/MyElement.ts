import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  private _shuffleName() {
    if (!this.names) return;
    this.nameIndex = (this.nameIndex + 1) % this.names.length;
  }

  constructor() {
    super();
    setInterval(() => {
      this._shuffleName();
    }, 2500);
  }

  // State is mutable.
  @state()
  nameIndex = 0;

  // Properties can have a seperate attribute used on the HTML element.
  // Properties can be be changed inside the component itself like state. Using reflect we can create a 2-way binding of the dom attributes.
  @property({type: String, attribute: 'text-color', reflect: true})
  color: string | null = null;

  // Array means the property is parsed as JSON.
  @property({
    type: Array,
  })
  names = ['World', 'Unit 2', 'Entire FE Community'];

  static get styles() {
    return css`
      // :host is the element itself in the "parent" DOM.
      // You can even add styles based on the parent like :host[hidden] { display: none; }
      :host {
        margin: 1em 0;
        padding: 1em;
        display: inline-block;
        border: 1px solid orange;
        border-radius: 8px;
      }

      h1,
      h3 {
        color: var(--prop-color, black);
        font-family: inherit;
      }

      h2 {
        font-family: system-ui;
      }
    `;
  }

  render() {
    return html`
      <div style="--prop-color: ${this.color}">
        <p>Changing reactive properties aren't reflected on the properties:</p>
        <h1>&lt;h1&gt; Hello, ${this.names?.[this.nameIndex]}</h1>
        <button @click="${this._shuffleName}">Change Name</button>

        <p>Style inheritance in shadow root:</p>
        <h2>
          &lt;h2&gt; I'm using system UI font. I also don't care about color.
        </h2>
        <h3>&lt;h3&gt; I can also inherit font from parent if I want to</h3>

        <button @click="${() => (this.color = 'blue')}">
          Change text-color to blue
        </button>
        <button @click="${() => (this.color = 'red')}">
          Change text-color to red
        </button>
      </div>
    `;
  }
}
