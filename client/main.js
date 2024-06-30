import { getNode, setStorage, getStorage, deleteStorage, clearContents } from "./lib/index.js";

const textFiled = getNode('#textField');
const textFiled2 = getNode('#textField2');
const clear = getNode('button[data-name="clear"]');

getStorage('text').then((res)=>{
  textFiled.value = res;
})
getStorage('text1').then((res)=>{
  textFiled2.value = res;
})

function handleTextField(){
  const value = this.value;
  setStorage('text', value);
}
function handleTextField2(){
  const value = this.value;
  setStorage('text', value);
}
function handClear(){
  deleteStorage('text3')
  clearContents(textFiled)
}

textFiled.addEventListener('input', handleTextField);
textFiled2.addEventListener('input',handleTextField2);

// clear.addEventListener('click', handClear)
clear.addEventListener('click', handClear)