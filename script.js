customElements.define(
  'user-card',
  class extends HTMLElement {
    connectedCallback() {
      this.slot = this.tagName.toLowerCase();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
   <button>Hello <slot></slot></button>

    <style>
      button {
        background-color: blue;
        color: lime;
      }
    </style>
  `;
    }
  }
);

function capture() {
  let div = document.getElementById('capture-div');
  console.log('capture', div);
  html2canvas(div).then(function (canvas) {
    console.log('canvas', canvas);
    document.getElementById('output').appendChild(canvas);
  });
}
