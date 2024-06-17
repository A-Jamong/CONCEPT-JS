/* -------------------- */
/* String Type          */
/* -------------------- */

let message = "Less is more.";

// length 프로퍼티
let stringTotalLengt = message.length;

console.log(stringTotalLengt);

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];

console.log("extratCharacter : ", extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = "P" + message.slice(1);

// enumerable 열거 가능한
// iterable 반복 가능한
// immutable 불변의
// mutable 변경 가능한
// mutant 돌연변이

// 부분 문자열 추출
let slice = message.slice(4);
console.log("slice: ", slice);

let subString = message.substring(2, 5);
console.log("substring: ", subString);

let subStr = message.substr(2);
console.log("subStr: ", subStr);

// 문자열 포함 여부 확인
let indexOf = message.indexOf("is");
console.log("indexOf: ", indexOf);

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf("edg") > -1:
      browserName: "MS Edge";
      break;
    case agent.indexOf("chrome") > -1 && !!window.chrome:
      browserName = "Chrome";
      break;
    case agent.indexOf("safari") > -1:
      browserName = "Safari";
      break;
    case agent.indexOf("firefox") > -1:
      browserName = "Firefox";
      break;
    case agent.indexOf("trident") > -1:
      browserName = "IE";
      break;
    default:
      browserName = "뭐야 무슨 브라우저 쓰는 거야";
  }
  return console.log(browserName);
}

checkBrowser();

let lastIndexOf;
let includes;
let startsWith;
let endsWith;

// 공백 잘라내기
let trimLeft;
let trimRight;
let trim;

// 텍스트 반복
let repeat = message.repeat(3);
console.log("repeat: ", repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log("toLowerCase: ", toLowerCase);

let toUpperCase = message.toUp;

console.clear();

// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim() // 공백제거
      .replace(/(-|_)+/, "") // - _ 제거 
      .toUpperCase() // 남은 애들 대문자로 
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

