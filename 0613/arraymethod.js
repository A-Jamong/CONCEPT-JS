/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

// const isArray = (data) =>
//   Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === "array";

// const isNull = (data) => Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

// // isNull(data)

// function typeOf(data){
//   return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
// }
// const isArray = (data) => typeOf(data) === 'array'
// const isNull = (data) => typeOf(data) === 'null'
// const isNumber = (data) => typeOf(data) === 'number'
/* 요소 순환 ---------------------------- */

const people = [
  {
    id: 0,
    name: "안재명",
    age: 25,
    job: "물음표살인마",
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
    imgAlt: "대체 텍스트입니다.",
  },
  {
    id: 1,
    name: "황선우",
    age: 51,
    job: "요식업 사장님",
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    imgAlt: "대체 텍스트입니다.",
  },
  {
    id: 2,
    name: "유진",
    job: "디스코드 봇",
    age: 12,
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    imgAlt: "대체 텍스트입니다.",
  },
  {
    id: 3,
    name: "김한울",
    job: "비둘기",
    age: 39,
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/78.jpg",
    imgAlt: "대체 텍스트입니다.",
  },
];

const [a, b] = people;
console.log(b);

// forEach
people.forEach((user) => {
  console.log(user.job);
});

// const first = document.querySelector('.first');

// first.addEventListener('click', ()=>{console.log('first를 클릭하셨습니다')});

// const second = document.querySelector('.second');

// second.addEventListener('click', ()=>{console.log('second를 클릭하셨습니다')});

// const third = document.querySelector('.third');

// third.addEventListener('click',()=>{console.log('third를 클릭하셨습니다.')})

const span = document.querySelectorAll("span");
span.forEach((tag) => {
  tag.addEventListener("click", function () {
    this.style.color = "dodgerblue";
  });
}); // this찾으려고 일반함수
//이벤트 여러개 거는 거 -> event delegation (이벤트 위임)

/* 원형 파괴 ----------------------------- */

// push
// people.push('aa');

// pop
// people.pop();

// unshift
// shift

// reverse -> toReversed

// people.reverse()
// const arr = [...people]; //-> 귀찮...  -> 아래 있는 애들 나옴

// splice ->toSpliced
// people.splice(0,2,'안녕','잘가')

// sort
// function compare({ age: a }, { age: b }) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }
// people.sort(compare);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed

// const toReversed = people.toReversed();

// toSpliced
// map

// 이름만 담은 배열 반환
const nameList = people.map((user) => {
  return user.name;
});

const ageList = people.map((user) => user.age);

// const nameTag = people.map((user) => {
//   let template = `<li>이름: ${user.name}</li>`

//   return template
// });
//구조분해할당하기

const cardTag = people.map(({ name, age, job, imgSrc, imgAlt }) => {
  let template = /* html */ `
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li> <span class="strong">이름</span> : ${name}</li>
        <li> <span class="strong">나이</span> : ${age}</li>
        <li> <span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `;
  return template;
});

const ul = document.querySelector("ul");
cardTag.forEach((tag) => {
  ul.insertAdjacentHTML("beforeend", tag);
});

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

const 황 = people.find((item) => {
  return item.name === "황선우";
});

// findIndex

/* 요소 걸러내기 --------------------------- */

// filter
people.filter((item) => {
  return item.age > 20;
});

// console.log(...filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

//초기값 설정안해주면 초기값에 사람 객체가 먼저 담겨서 그걸 숫자랑 더하려면 형변환해야하니까 객체.toString 하면 [object Object] 돼서 이걸 숫자랑 더하면 이상한 결과값이 나옴
const reduce = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);

const template = people.reduce((acc, cur) => {
  return acc + `<li class="userCard"> ${cur.name} : ${cur.age} </li>`;
}, "");

ul.insertAdjacentHTML("beforeend", template);

// reduceRight

/* string ←→ array 변환 ------------------ */

const str = "유진 정민 현주 재명";

// split : 문자 -> 배열

const stringToArray = str.split(" ");
console.log(stringToArray);

// join : 배열 -> 문자

const arrayToString = stringToArray.join("/");
console.log(arrayToString);

const forEach = (f, i) => {
  for (const a of i) {
    f(a);
  }
};

// forEach((item) => {
//   console.log(item)}, [1, 2, 3]
// );

const map = (f, i) => {
  let result = [];
  for (let a of i) {
    result.push(f(a));
  }
  return result;
};

// map(
//   (n) => {
//     n + 2;
//   },
//   [1, 2, 3]
// );

const _filter = (f, i) => {
  let result = [];
  for (const a of i) {
    if (f(a)) {
      result.push(a);
    }
    return result;
  }
};

console.log(_filter(n => n > 1, [1, 2, 3, 4, 5]))

//filter(n=>n>3, [1,2,3,4,5]) -> 4,5 기대

const _reduce = (f, acc, i) => {

  if(!i){
    i = acc;
    acc = i.shift(); // shift는 원본을 파괴하는 건데 reduce는 어차피 앞에 있는 걸 빼고(초기값) 돌려야 하니까 쓰일 수 있다.
    //아래는 아직 안 배운 이터레이터로 하는 방법
    // i = acc[Symbol.iterator]();
    // acc = i.next().value
  }

  for(const a of i){
    acc = f(acc, a);
  }

  return acc;
}

console.log( _reduce( (t,p) => t + p.price,0 ,products) );


console.log( 


  _reduce(
    add,
    map(p => p.price,
      _filter(p => p.price < 10000,products)),
  )
  
);