import {
  attr,
  clearContents,
  diceAnimation,
  endScroll,
  getNode,
  getNodes,
  insertLast,
} from "./lib/index.js";

// 1. 주사위 애니메이션
// 2. 주사위 굴리기 버튼 클릭하면 diceAnimation() 실행되게

const [rollingButton, recordButton, resetButton] = getNodes(
  ".buttonGroup > button"
);
const recordListWrapper = getNode(".recordListWrapper");

let count = 0;
let totalValue = 0;
function createItem(value) {
  const template = `
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${(totalValue += value)}</td>
  </tr>
  `;
  return template;
}

function renderRecordItem() {
  // const diceValue = getNode('#cube').getAttribute('dice')
  const diceValue = +attr(getNode("#cube"), "dice");

  insertLast(getNode(".recordList tbody"), createItem(diceValue)); //element.insertAdjustHTML

  endScroll(recordListWrapper);
}

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 300);
      //! let stopAnimation = setInterval(diceAnimation,100) 하면 아이디 반환해주는 줄 알았는데 블록스코프라서 clear까지 넘어가지 못 한다!
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
}
function handleReset() {
  recordListWrapper.hidden = true;
  clearContents('tbody');
  count = 0;
  total = 0;
}

rollingButton.addEventListener("click", handleRollingDice);
recordButton.addEventListener("click", handleRecord);
resetButton.addEventListener("click", handleReset);
