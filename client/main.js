
class UserCard extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = `
    <button type="button">btn</button>
    `

    this.button = this.shadowRoot.querySelector('button');
  }

  // 생성되는 순간 실행되고 그럼 브라우저 돔에 연결이 확실히 되는 순간 호출되는 거라서 돔 이벤트 조작할 거면 여기에 모아주는 게 좋다.
  connectedCallback(){
    // console.log(this)
    this.addEventListener('click',this.clickMe)
    //* this.button.addEventListener('click',this.clickMe)
    // 위에서 this를 출력하면 button 이 나온다. 근데 usercard가 나와야 한다.

    // 화살표 함수 사용하기
    this.button.addEventListener('click',()=>this.clickMe())
    // 화살표함수에서 () 대신에 쓰게 해보기 bind
    this.button.addEventListener('click',()=>this.clickMe.bind(this))
  }

  clickMe(){
    console.log(this);
  }
}

customElements.define('user-card', UserCard)