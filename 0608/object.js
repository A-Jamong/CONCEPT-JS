// global isObject
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: 800,
  height: "40vh",
  minHeight: 280,
  transform: "translate(-50%, -50%)",
};

// const keyList = Array.key();

// console.log(keyList);

// function getPropertiesList(obj) {
//   let result = {};

//   for (let key in obj) {
//     // 훼손된 키도 들어올 수 있으니까
//     if ({}.hasOwnProperty.call(obj, key)) {
//       // 조건을 한 번 더 건다.
//       result.push(key);
//       /* result.push(obj[key]); // 이러면 값 출력*/
//     }
//   }

//   return result;
// }

// getPropertiesList(cssMap);

function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  }
}

removeProperty(cssMap, "position");

function deleteProperty(obj, key) {
  if (isObject(obj)) {
    delete obj[key];
  }
}

deleteProperty(cssMap, "position");

// 계산된 프로퍼티 (computed property)
// 키 값에 대괄호가 들어가는 형태 / 변수에 따라서 키 값을 지정한다.
let calculateProperty = "phone";

function createUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  };
}

let name = "선범";

// const student = {
//   name,
//   email,
//   authorization,
//   isLogin,
// };

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0; // 배열로 바꿔서 길이가 0이면 아무것도 없는 거니까
}

isEmptyObject({});

// 배열 구조 분해 할당

const arr = [10, 100, 1000, 10_000];

// const a0 = arr[0];
// const a1 = arr[1]; // 만약 100이 엄청 많이 쓰이면 이렇게 나눠서 변수로 주고 쓴다.

// const [a0, a1, a2, a3] = arr;
const [a0, ...rest] = arr;

// for (let [key, value] of Object.entries(cssMap)) {
//   console.log(key, value);
// }

const first = document.querySelectorAll("span");
console.log(first[0]);

// for (let [key, value] of Object.entries(spanList)) {
//   console.log(key, value);
// }

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
Object.assign(user, permissions1, permissions2);

let user2 = { name: "Johns" };

let permissions3 = { canView: true };
let permissions4 = { canEdit: true };

let user3 = Object.assign({}, user2, permissions1, permissions2);
