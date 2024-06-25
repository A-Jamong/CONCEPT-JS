import {
  getNode,
  getRandom,
  insertLast,
  clearContents,
  addClass,
  removeClass,
  showAlert,
  isString,
  isNumbericString,
  shake,
  copy,
} from "./lib/index.js";
import data from "./data/data.js";
// import clearContents from "./lib/dom/clearContents.js";

// console.log(data);

const submit = getNode("#submit");
const result = getNode(".result");
function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];
  if (!name || name.replace(/\s*/g, "") === "") {
    showAlert(".alert-error", "공백은 허용하지 않습니다.");
    removeClass('#nameField', 'shake');

    shake('#nameField').restart();
    // addClass('#nameField', 'shake'); 
    //~ ^ removeClass 하면 되는데 동일선상에 있으면 제거되자마자 들어가는 거라서 시간차를 줘야된다.근데 timeout은 시간 보장은 못줌!! 그래서 shake.js 만드는중

    // gsap.fromto('#nameField', {
    //   duration:0.1,
    //   x:-10,
    //   repeat:5,
    //   yoyo:true,
    //   clearProps:'transform'
    // })
    return;
  }

  if(!isNumbericString(name)){
    showAlert('.alert-error', '제대로된 이름을 입력해 주세요.')
  }

  // if(!name||name.replace(/\s*/g,'')===''){ //모듈로~
  //   addClass('.alert-error', 'is-active');
  //   setTimeout(() => {
  //     removeClass('.alert-error', 'is-active');
  //   }, 2000); //~ 시간 보장을 못 해주니까 좋지 않다. 프로미스로 바꾸거나 gsap애니메이션을 사용한다.
  //   console.log('이름을 입력해주세요');
  //   return;
  // }

  clearContents(result);
  // result.textContent = pick; 이렇게 해두 됨!
  insertLast(result, pick);

  // console.log(pick);
}

function handleCopy(){
  const text = result.textContent;
  copy(text).then(()=>{
    showAlert('.alert-success', '클립보드 복사 완료!')
  });
  // showAlert('.alert-success','클립보드 복사 완료!')
}

submit.addEventListener("click", handleSubmit);
result.addEventListener("click", handleCopy);
