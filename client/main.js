
class UserCard extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = `
    <div> nickName : kind-tiger </div>
    <slot name="username">hello</slot>
    <slot name="email">any@naver.com</slot>
    `
  }
}

customElements.define('user-card', UserCard)