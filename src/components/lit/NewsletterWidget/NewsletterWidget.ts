import {LitElement, html, css, nothing} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {live} from 'lit/directives/live.js';
import type {FormEvent} from 'react';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

@customElement('newsletter-widget')
export class NewsletterWidget extends LitElement {
  constructor() {
    super();
  }

  private readonly _submitForm = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    this.isError = false;
    this.isLoading = true;
    const email = this.inputValue;

    try {
      const endpoint = `${this.endpoint}`.replace('{{email}}', email);
      const res = await fetch(`${endpoint}`);
      // simaluating a slower network
      await sleep(500);
      if (!res.ok) {
        throw new Error('Failed to subscribe');
      }
      this.isSuccessful = true;
      this.isError = false;
      this.inputValue = '';
    } catch (e) {
      console.error(e);
      this.isError = true;
    }
    this.isLoading = false;
  };

  private readonly _onInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    this.inputValue = target.value;
    this.isSuccessful = false;
    this.isError = false;
    this.isLoading = false;
  };

  @state()
  inputValue = '';

  @state()
  isLoading = false;

  @state()
  isSuccessful = false;

  @state()
  isError = false;

  @property({type: String, attribute: 'brand-color', reflect: false})
  color: string | null = '#edbd76';

  @property({type: String, attribute: 'mode', reflect: false})
  mode: string | null = 'light';

  @property({type: String, attribute: 'headline', reflect: false})
  headline: string | null = 'Sign up';

  @property({type: String, attribute: 'description', reflect: false})
  description: string | null = 'And enjoy the benefits';

  @property({type: String, attribute: 'position', reflect: false})
  position: string | null = 'bottom';

  @property({type: String, attribute: 'side', reflect: false})
  side: string | null = 'right';

  @property({type: String, attribute: 'endpoint', reflect: false})
  endpoint: string | null = 'https://dummyjson.com';

  static get styles() {
    return css`
      // :host is the element itself in the "parent" DOM.
      // You can even add styles based on the parent like :host[hidden] { display: none; }
      :host {
        position: fixed;
        z-index: 99999;
        box-shadow: 0 0 15px 7px rgba(0, 0, 0, 0.15);
        background-color: #f5f5f5;
        color: #3a3a3a;
        top: 10%;
        left: 0;
        max-width: 300px;
      }

      :host([mode='dark']) {
        background-color: #3a3a3a;
        color: #f5f5f5;
      }

      :host([side='right']) {
        right: 0;
        left: unset;
      }
      :host([position='top']) {
        top: 10%;
        bottom: unset;
      }

      :host([position='bottom']) {
        bottom: 10%;
        top: unset;
      }

      .headline {
        padding: 10px;
        background-color: var(--brand-color);
      }

      .content {
        padding: 10px;
      }

      h1,
      h2,
      h3,
      h4 {
        margin: 0;
      }
    `;
  }

  render() {
    return html`
      <div style="--brand-color: ${this.color};">
        <div class="headline">
          <h3>${this.headline}</h3>
        </div>
        <div class="content">
          <p>${this.description}</p>
          <form @submit=${this._submitForm}>
            <input
              @input="${this._onInputChange}"
              type="email"
              required
              .value=${live(this.inputValue)}
              placeholder="Fill in your email"
            />
            <button type="submit">Subscribe</button>
            ${this.isLoading ? html`<p>Loading...</p>` : nothing}
            ${this.isError ? html`<p>An error occurred</p>` : nothing}
            ${this.isSuccessful
              ? html`<p>Thank you for subscribing</p>`
              : nothing}
          </form>
        </div>
      </div>
    `;
  }
}
