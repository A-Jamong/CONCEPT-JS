// named export ( 이름 내보내기 ) as 를 이용해 이름을 바꿔줄 수 있다.
import { attr, clearContents, getNode, insertLast} from "./lib/index.js";

// default export ( 기본 내보내기 ) 무조건 1개 얘만 중괄호 없이 받을 수 있다. import (바꾸고싶은이름) 하면 이름 바꿀 수 있다.
import clearContents from "./lib/dom/clearContents.js";

// 1. ipnut value 값 가져오기
//    - input 선택하기
//    - input에게 input 이벤트를 걸어준다.
//    - input.value 값을 가져온다.

//2. 숫자 더하기
//    - 숫자 형변환

//3. result 내용 비우기
//    - clearContents

// let first = document.querySelector('#firstNumber');
// console.log(first.value)

// first.addEventListener('input', (e)=>{console.log(e.target.value)})

const first = getNode("#firstNumber");
const second = getNode("#secondNumber");
const result = getNode(".result");

/* global clearContents */

function handleInput() {
  const firstValue = Number(first.value); //* 명시적 형변환
  const secondValue = +second.value; //* 암시적 형변환
  const total = firstValue + secondValue;

  // result.textContent = ''; //* first, second 칠 때마다 inserthtml이 되어서 결과값이 이상해지니까 비워준다.
  clearContents(result);

  insertLast(result, total);
}

function handleClear(e) {
  e.preventDefault();

  clearContents(first);
  clearContents(second);
  result.textContent = "-";
}

first.addEventListener("input", handleInput); //~ 코드의 확장성을 고려해서 함수를 분리시켜주기 ()=>{} 보다는!
second.addEventListener("input", handleInput); //* debounce(handleInput)처럼 넣어주는 게 좋다.
clear.addEventListener("click", handleClear);

/* -------------------------------------------- */

function phase2() {
  const calculator = getNode(".calculator");
  const results = getNode(".result");
  const clears = getNode("#clear");
  const numberInput = [...document.querySelector("input:not(#clear)")];

  console.log(numberInput);

  function handleInputs() {
    const total = numberInput.reduce((acc, cur) => acc + Number(cur.value), 0);

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    numberInput.forEach(clearContents);
    results.textContent = "-";
  }

  calculator.addEventListener("input", handleInput);
  clears.addEventListener("click", handleClear);
}
