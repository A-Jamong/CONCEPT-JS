import { getNode, setStorage, getStorage, deleteStorage, clearContents } from "./lib/index.js";

const textFiled = getNode('#textField');
const clear = getNode('button[data-name="clear"]');

getStorage('text').then((res)=>{
  textFiled.value = res;
})

function handleTextField(){
  const value = this.value;

  setStorage('text', value);
}

function handClear(){
  deleteStorage('text')
  clearContents(textFiled)
}

textFiled.addEventListener('input', handleTextField);

// clear.addEventListener('click', handClear)