/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress===undefined || emailAddress ===null ? 'user@company.io' : emailAddress;


// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io'

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const isActive = false;

console.log(null || WIDTH); // -> 10px
console.log(null ?? WIDTH); // -> 10px

console.log(0 || WIDTH); // -> 10px
console.log(0 ?? WIDTH); // -> 0

console.log( undefined || WIDTH );// -> 10px
console.log( undefined ?? WIDTH ); // -> 10px

console.log(''||WIDTH); // -> 10px
console.log(''??WIDTH); // -> ''

a ||= b a가 false일 때 b값을 a에 할당
a &&= b a가 true일 때 b값을 a에 할당
a ??= b a가 할당된 값을 때 a를 a에 할당