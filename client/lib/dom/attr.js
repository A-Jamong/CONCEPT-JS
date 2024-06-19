function getAttr(node, att){
  node = document.querySelector(node)
  // if(isString(node)){node = getNode(node)};

  if(!isString(att)) throw new TypeError('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  return (node).getAttribute(att);
}

function setAttr(node, prop, text){

  if(isString(node)) node = getNode(node);

  if(!isString(prop)){
    throw new TypeError('setAttr 함수의 두 번쨰 인수는 문자 타입 이어야 합니다.')
  }

  if(value === ''){
    node.removeAttribute(prop);
    return;
  }
  node = getNode(node);
  node.setAttribute(prop, text)

  //prop에 data가 있어? 그럼 data-set으로 넣기

  if(!value) throw new ReferenceError('setAttr 함수의 세 번째 인수는 필수 입력값입니다.');
  node.setAttribute(prop,value);
}

// function attr(node, prop, value){
//   if(!value){
//     return getAttr(node, prop)
//   }else{
//     setAttr(node, prop, value)
//   }
// }

const attr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value)
