/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d) {
  //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 0000이라 불리는 변수 : 아규먼트
  // for (const i of arguments) {
  //   console.log(i);
  // }
  // // for (let i = 0; i < arguments.length; i++) {
  // //   console.log(arguments[i]);
  // // }
  // console.log(arguments);
  // return a + b + c + d;
};

const result = calculateTotal(100, 200, 300, 400, 500);

// const arr = [10, 100, 1000];

// arr.map(function (item, index) {
//   console.log(index);
//   console.log(item);
// });

const arr = ["a", "b", "c"];

arr.map(function (item) {
  return console.log("yap-" + item);
});

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let callbackFunctionExpression;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

function movePage(url, success, fail) {
  if (url) {
    success(url);
  } else {
    fail();
  }
}

// movePage(
//   "https://www.naver.com",
//   function (url) {
//     console.log(`정확한 주소를 입력했습니다. ${url} 3초 후 이동합니다`);
//     // location.href='https://www.naver.com'
//   },
//   function () {
//     console.log("잘못된 주소를 입력하셨습니다. 다시 입력해주세요.");
//   }
// );

const MASTER =
  (function (word) {
    console.log(word);
    let uuid = "azxcqwASFqjKJ112314!23";

    return {
      getKey() {
        return uuid;
      },
      setKey(value) {
        uuid = value;
      },
    };
  })('a')


