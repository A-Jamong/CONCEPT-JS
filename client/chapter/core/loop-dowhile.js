/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;

// do{

//   console.log(i);

//   if(i === 3){
//     console.log('3번 입니다.');
//   }

//   i++

// }while(i < 5)

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let count = +prompt('몇번 순환할까용');
// do{
//   if(count<0){
//     console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');
//     break;
//   }
//   console.log(count);
//   count--;
// }while(count>0)

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let count = 0;
// do{
//   console.log(count++);
// }while(result--)

//document -> html문서 객체
//querySelector ->
// let first = document.querySelector(".first");
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
// do{
//   first = first.nextSibling;
// }while(first.nodeType!==1)

function next(node) {
  if (typeof node === 'string') {
    node = document.querySelector(`.${node}`);
  }else if(typeof node !== 'object'){ //first만 입력하고 변수 아니면 넣게.
    node = document.querySelector(`.${node}`);
  }
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);
  return node;
}

console.log(next(first));

function prev(node) {
  if(typeof node === 'string'){
    node = document.querySelector(`.${node}`);
  }
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);
  return node;
}
