function earth() {
  let water = true;
  let gravity = 10;

  function tiger(value) { 
    gravity = value; // -> 진짜 gravity 변해버림
    return [water, gravity];
  }

  return tiger;
}

const ufo = earth();

ufo(-10);

// ----?
// 안쪽함수를 바깥에서 쓸 수 있게만 하면 됨.
function earth() {
  let water = true;
  let gravity = 10;

  // return function (value) {
  //   gravity = value; // -> 진짜 gravity 변해버림 => 다른 ufo가 다른 호랑이 납치하면 평행 우주
  //   return [water, gravity];
  // }
  return (value)=> {
    gravity = value;

    return [water,gravity]; 
  }

}

const ufo1 = earth();

ufo(1-10);

const counter = () => { let count = 0; return ()=> ++count}

const button = document.querySelector('button');




/* normal function */
// function handleClick(){

//   let isClicked = false;

  
//   function inner() {
//     if(!isClicked){

//       document.body.style.background = 'orange'
//     }else{
  
//       document.body.style.background = 'white'
//     }
  
//     isClicked = !isClicked;
//   }

//   return inner;
// }

// IIFE
/* arrow function */
const handleClick = (() => {

  let isClicked = false;
  
  return () => {
    if(!isClicked){

      document.body.style.background = 'orange'
    }else{
  
      document.body.style.background = 'white'
    }
  
    isClicked = !isClicked;
  }

})()


button.addEventListener('click',handleClick)


function state(init){
  let value = init;

  function read(){
    return value;
  }

  function write(newValue){
    value = newValue;
  }

  return [read,write]; // 함수 본문 두 개가 들어가있다. 
}

const result = state(10);

const getter = result[10]
const setter = result[1]