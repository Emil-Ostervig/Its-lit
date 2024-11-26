import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('lit-word-count')
export class LitWordCounter extends LitElement {
  private countWords(node: typeof this.parentElement) {
    const text = node?.innerText ?? node?.textContent;
    if (!node || !text) return 0;
    const trimmedText = text
      .trim()
      .split(/\s+/g)
      .filter((a) => a.trim().length > 0);

    return trimmedText.length;
  }

  render() {
    return html` <p>Words: ${this.countWords(this.parentElement)}</p> `;
  }
}
