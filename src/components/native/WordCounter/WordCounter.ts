// Create a class for the element
export class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    const parentElement: HTMLElement | null = this.parentElement;

    function countWords(node: typeof parentElement) {
      const text = node?.innerText || node?.textContent;
      if (!node || !text) return 0;
      const trimmedText = text
        .trim()
        .split(/\s+/g)
        .filter((a) => a.trim().length > 0);

      return trimmedText.length;
    }

    const count = `Words: ${countWords(parentElement)}`;

    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});

    // Create text node and add word count to it
    const text = document.createElement('span');
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);

    // Update count when element content changes
    this.parentNode?.addEventListener('input', () => {
      text.textContent = `Words: ${countWords(parentElement)}`;
    });
  }
}

// Define the new element
customElements.define('word-count', WordCount, {extends: 'p'});
