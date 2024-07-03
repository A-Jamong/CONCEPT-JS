/*class MyElement extends HTMLElement{
  
  constructor(){
    super();
  }

  connectedCallback(){
    console.log('탄생함')
  }
  disconnectedCallback(){
    console.log('죽음!');
  }
}

customElements.define('c-element', MyElement);

const elem = document.createElement('c-element');
const app = document.getElementById('app');

app.appendChild(elem)
*/
class Button extends HTMLElement {
  constructor() {
    super();
    // c-button의 섀도우 돔을 열어줘.
    this.attachShadow({ mode: "open" });

    // 그리고 그 안에 내가 원하는 태그 집어넣을거야
    this.shadowRoot.innerHTML =`
      <button>hello</button>
    `
  }
  connetedCallback() {}
  disconnetedCallback() {}
} 

customElements.define("c-button", Button);
console.log(document.querySelector('button'));
console.log(document.querySelector('c-button').shadowRoot.querySelector('button'));
