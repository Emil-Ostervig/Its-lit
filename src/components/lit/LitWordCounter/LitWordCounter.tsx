import {LitElement, html, type PropertyValues} from 'lit';
import {customElement, state} from 'lit/decorators.js';

@customElement('lit-word-count')
export class LitWordCounter extends LitElement {
  constructor() {
    super();
  }

  firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.countWords();
  }
  @state()
  wordCount = 0;

  private countWords() {
    const node = this.parentElement;
    const text = node?.innerText ?? node?.textContent;
    if (!node || !text) return 0;
    const trimmedText = text
      .trim()
      .split(/\s+/g)
      .filter((a) => a.trim().length > 0);
    this.wordCount = trimmedText.length;
  }

  render() {
    return html`
      <div>
        <slot></slot>
        <p>Words: ${this.wordCount}</p>
      </div>
    `;
  }
}
