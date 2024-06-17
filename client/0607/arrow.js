/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {
  // for(let count=0;count<rest.length;count++){
  //   console.log(rest[count]);
  // }

  // for(let value of rest){
  //   console.log(value);
  // }

  // rest.forEach(function(value){console.log(value);})
  // rest.forEach((value)=>console.log(value));

  return rest.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
};
console.log(calcAllMoney(100, 200, 300, 400));

// 화살표 함수와 this

const user = {
  name: "jam",
  total: 0,
  grades: [10, 20, 30],
  totalGrades() {
    this.grades.forEach((item)=>{
      console.log(this);
    });
    sayHi();
  },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric, powerCount){
//   let result = 1;
//   for(let i = 0; i<powerCount; i++){
//     result *= numeric
//   }
//   return result;
// }

// --
// pow(numeric: number, powerCount: number): number;
// let pow = (numeric,powerCount)=>{

//   let result = 1;

//   for(let i = 0; i < powerCount; i++){
//     result *= numeric
//   }
//   return result;
// }; 

// 표현식

// const pow = (numeric,powerCount) => {
  
//   return Array(powerCount).fill(null).reduce((acc)=>{
//     return acc *= numeric
//   },1)

// }

// ----------
// const pow = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc => acc *= numeric,1)

// repeat(text: string, repeatCount: number): string;
let repeat = function(text, count) {
  let result = '';
  for(let i=0; i<count; i++){
    result += text;
  }
  return result;
};

let repeat1 = (text, count)=> {
  let result = '';
  for(let i=0; i<count; i++){
    result += text;
  }
  return result;
};
let repeat2 = (text, count)=>{
  return Array(count).fill(null).reduce((acc)=>{return acc+text}, '')
}


repeat2('안녕⭐️', 3);

function pow(x, n){
  if(n==1){
    return x;
  } else {
    return x * pow(x, n-1);
  }
}

pow(2,3)
