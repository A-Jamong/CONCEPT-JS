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
class Button extends HTMLElement{
  constructor(){
    super();
    this.button = document.querySelector('button');
  }
  connetedCallback(){
    this._render();

  }
  disconnetedCallback(){

  }
  static get observedAttributes(){
    return ['id'];
  }

  attributeChangedCallback(name,oldValue,newValue){
    if(oldValue!==newValue){
      this._render()
    }
  }
  _render(){
    this.button.textContent = this.id;
  }
}

customElements.define('c-button', Button); // c-button 은 new Button 을 통해 생성된 객체랑 같다!

const c = document.querySelector('c-button');

let count = 0;

c.addEventListener('click', ()=>{
  c.setAttribute('id', ++count)
})