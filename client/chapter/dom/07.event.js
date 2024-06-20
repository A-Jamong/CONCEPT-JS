/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// function handler() {
//   console.log("클릭 이벤트 발생!!");
// }

// 2. DOM 프로퍼티 : element.onclick = handler
// const first = getNode(".first");
// first.onclick = handler; //~ 자스에서 전달할 때는 실행()하지 않고 본문을 전달해줘야한다! html 안에서 할 때는 실행해야됨! handler()!

// 3. 메서드 : element.addEventListener(event, handler[, phase])
// function handleClick() {
//   console.log("클릭 했습니다!");
// }
// first.addEventListener("click", handleClick); //~ 이벤트리스터가 핸들클릭 실행시킨다 + 객체를 반환한다! (이벤트 객체)

//~ 객체 조회해보기 event = evt = e 라고들 한다.
function handleClick(event) {
  console.log(event.type); //click
  console.log(event.target); //<span class='first hell ...
  console.log(event.offsetX); //49
}

// first.addEventListener("click", handleClick);

const second = getNode(".second");

//~ 이벤트 제거할 일? 뭔가 일정 횟수만 해야할 때 :
//~ if문으로 막을 수는 있는데 제거하는 게 아니라서 이벤트는 계속 발생하는 중, button.disabled button.style.pointerEvenets (클릭이 안 되게끔 유도만 하는 거)
//~ -> 성능 저하 발생 가능성있음 => 제거할 수 있는 환경을 만들어줘야 한다.
second.addEventListener("click", () => {
  first.removeEventListener("click", handleClick);
});

function bindEvent(node, type, handler) {
  if (isString(node)) node = getNode(node); // 이벤트 들어가겠지
  node.addEventListener(type, handler);
  return () => node.removeEventListener(type, handler);
}

// const firstEventRemove = bindEvent(".first", "click", handleClick);

// second.addEventListener("click", firstEventRemove);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const ground = getNode(".ground");
const ball = getNode("#ball");

function handleClickBall(e) {
  const { offsetX: x, offsetY: y } = e;
  // let x = e.offsetX;
  // let y = e.offsetY;
  const { offsetWidth: bw, offsetHeight: bh } = ball;
  // let bw = ball.offsetWidth;
  // let bh = ball.offsetHeight;

  console.log(ball.offsetWidth);

  ball.style.transform = `translate(${x - bw / 2}px,${y - bh / 2}px)`;
}

// ground.addEventListener("click", handleClickBall);

function handleMove({ offsetX: x, offsetY: y }) {
  // const { offsetWidth: bw, offsetHeight: bh } = ball;
  // console.log("move!");
  // ball.style.transform = `translate(${x - bw / 2}px,${y - bh / 2}px)`;
  console.log(x, y);

  let template = /*html*/ `
  <div class="emotion" style="top:${y - 16}px; left:${x - 16}px;">💙</div>`;
  insertLast(ground, template);
}
// ground.addEventListener("mousemove", handleMove);
//~ mousemove나 윈도우에 resize 같은 이벤트는 순간순간 이벤트가 너무 많이 발생한다. -> throttle, debounce

function debounce(callback, limit = 500) {
  let timeout;
  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, e);
      // callback(e);
    }, limit);
  };
}
ground.addEventListener("mousemove", debounce(handleMove));
// ground.addEventListener( //~ 디바운스 쓰면 this를 잃어버린다!
//   "mousemove",
//   debounce(function(e){
//     console.log(this)
//   }
// ));

// ground.addEventListener(
//   "mousemove",
//   debounce((e) => {
//     console.log(e);
//     console.log(this);
//   })
// );

function throttle(callback) {
  let waiting = false;

  return function (e) { //~ 안쪽 함수는 내가 누구에 의해 실행이 됐는지 알고있음!!! 
    if (!waiting) {
      callback.call(this, e);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, 2000);
    }
  };
}

// function throttle(callback) {
//   let waiting = false;//~보호하려고 집어넣음 근데 이러면 기억할 수가 없으니까!

//   return function (...args) { //~ 내보낸당.
//     if (!waiting) {
//       callback.apply(this, args);
//       waiting = true;

//       setTimeout(() => {
//         waiting = false;
//       }, 2000);
//     }
//   };
// }

throttle(() => {
  console.log("스로틀이 무엇인고");
});
// ground.addEventListener('mousemove', throttle((e)=>{//~ 얘는 누가 실행했는지 모름(this 모름 window~) 왜냐면 스로틀 함수 안에서 그냥 실행됐기 때문임.
//   console.log(this);
// }))
ground.addEventListener('mousemove', throttle(handleMove))


/*------------------ 지우기 버튼 -----------------*/

const button = document.querySelector('button');
function removeEmoji(){
  // console.log('hello')
  // 클래스가 Emotion인 거 지우기
  const emoji = document.getElementsByClassName('emotion'); //HTMLCollection(2) [div.emotion, div.emotion]
  for(let key of emoji){
    key.remove();
  }
  console.log(emoji)
}

button.addEventListener('click', removeEmoji)