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

const firstEventRemove = bindEvent(".first", "click", handleClick);

second.addEventListener("click", firstEventRemove);

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener
