/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

console.log("총 합 = ", 10000 + 8900 + 1360 + 2100);
console.log("총 합 = ", 21500 + 3200 + 9800 + 4700);
console.log("총 합 = ", 3800 + 15200 - 500 + 80200);
console.log("총 합 = ", 560 + 5000 + 27100 + 10200);
console.log("총 합 = ", 9000 - 2500 + 5000 + 11900);

// 함수 선언

// 함수 호출

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;

function rem(pxValue, base = 16) {
  return parseInt(pxValue) / base + "rem";
}
console.log(rem("30px", 10));

// css(node: string, prop: string, value: number|strung) : string;
let css;

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.

function setStyle(classname, changestyle, stylevalue) {
  const classnames = document.querySelector(classname);
  classnames.style[changestyle] = stylevalue;
  classnames.style.changestyle = "pink";
  return console.log(classnames.style[changestyle]);
}
console.log(document.querySelector(".first").style);
setStyle(".first", "color", "blue");

let obj = {
  name: "John",
  age: 30,
};

console.log(obj._name); // "John"
