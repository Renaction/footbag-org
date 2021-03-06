class PageOneColumn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const style = `
      slot {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: minmax(44px, auto);
        grid-gap: var(--grid-gap);
        margin: 0 var(--grid-gap) var(--grid-gap) var(--grid-gap);
        
        max-width: 765px;
        margin: 0 auto;
        margin-top: 2rem;
      }
      ::slotted(.header) {
        background-color: var(--color-blue);
        color: var(--color-white);
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-boldest);
        max-width: 100vw;
        text-transform: uppercase;
        grid-column: 1 / -1;
        padding: 0 var(--grid-panel-padding);
        margin: 0 var(--grid-gap-negative);
      }
      ::slotted(.header.red) {
        background-color: var(--color-red);
      }
      ::slotted(h2) {
        font-size: var(--font-size-medium);
        margin: 0;
      }
    `;

    const html = `
    <slot></slot>`;

    this.shadowRoot.innerHTML = `
    <style>
      ${style}
    </style>
    ${html}
    `;
  }
}

customElements.define('page-one-column', PageOneColumn);
