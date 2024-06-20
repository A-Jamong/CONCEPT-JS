/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode(".first");

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
console.log(first.className);

// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

first.classList.add("bye");
first.classList.remove("bye");
first.classList.toggle("hello");
// first.className = 'hello' //~ 통으로 바뀜! first.className=''로 지울 때는 유용할듯

console.log(first.classList.contains("hello"));

/*-----------불편하니까 함수 만들기-------------*/
//addClass
/*function addClass(node,...className){
  if(typeof node === 'string') node = document.querySelector(node)
  
  if(isArray(className)){
    console.log(className);
    className.forEach( c => node.classList.add(c))
    return;
  }
  
  if(isObject(className)){
    className = Object.values(className);
  }
    
  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  node.classList.add(className);
}

function removeClass(node, className){
  if(typeof node ==='string') node = document.querySelector(node)

    if(!className){
      node.className = ''
      return;
    }
    if(typeof className !== 'string'){
      throw new TypeError('removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
    }

    node.classList.remove(className)
}

function toggleClass(node,className){
  if(typeof node === 'string') node = document.querySelector(node)

  if(typeof className !== 'string'){
    throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }
  
  return node.classList.toggle(className); //~ 토글이 true false 반환하니까 얘도 똑같이 반환해주려고!
}*/


function getStyle(node,prop){
  
  if(isString(node)) node = getNode(node);

  if(!(prop in document.body.style)){
    throw new SyntaxError('getStyle 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.');
  }

  return getComputedStyle(node)[prop]
}

function setStyle(node,prop,value){
  if(isString(node)) node = getNode(node);

  if(!(prop in document.body.style)){
    throw new SyntaxError('setStyle 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.');
  }

  if(!value) throw new ReferenceError('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.');

  node.style[prop] = value;
  
}



/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.background = "dodgerblue";

first.style.cssText = `
color:white;
padding:1rem;
border:1px solid red`; //~ 얘가 위에 있는 background 덮어버림! cssText의 위험성

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */


console.log( getComputedStyle(first)['font-size'])

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`