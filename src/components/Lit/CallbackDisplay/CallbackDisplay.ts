import {LitElement, html, type PropertyValues} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

@customElement('callback-display')
export class CallbackDisplay extends LitElement {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    this._addEvent('connectedCallback');
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this._addEvent('disconnectedCallback');
  }
  firstUpdated() {
    this._addEvent('firstUpdated');
  }

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);
    this._addEvent('updated');
  }

  private readonly _addEvent = (name: string) => {
    console.log(name);
  };

  @state({})
  someState = 1;

  @property({type: Number, attribute: 'some-property', reflect: true})
  someProperty: number | null = 1;

  @state()
  deepState = {
    someProperty: 1,
  };

  render() {
    return html`
      <div>
        <div>
          Bump someState: ${this.someState}
          <button @click=${() => (this.someState = this.someState + 1)}>
            Bump
          </button>
        </div>
        <div>
          Bump someProperty: ${this.someProperty}
          <button
            @click=${() => (this.someProperty = (this.someProperty ?? 1) + 1)}
          >
            Bump
          </button>
        </div>
        <div>
          Bump property of deepState object: ${this.deepState.someProperty}
          <button
            @click=${() =>
              (this.deepState.someProperty = this.deepState.someProperty + 1)}
          >
            Bump
          </button>
        </div>
        <div>
          Force update
          <button @click=${() => this.requestUpdate()}>Update</button>
        </div>
        <pre><code>
someState: ${JSON.stringify(this.someState, null, 2)}
deepState: ${JSON.stringify(this.deepState, null, 2)}
someProperty: ${JSON.stringify(this.someProperty, null, 2)}
</code></pre>
      </div>
    `;
  }
}
