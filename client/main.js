/* global gsap  */
import {
  changeColor,
  jjam,
  getNode,
  delayP,
  renderEmptyCard,
  clearContents,
} from "./lib/index.js";
import { renderUserCard, renderSpinner } from "./lib/index.js";
const ENDPOINT = "http://localhost:3000/users";

// const response = await jjam.get(ENDPOINT);
// console.log(response.data)

// 1. user 데이터 fetch 하기
//   - jjam.get
// 2. fetch 데이터의 유저 이름만 콘솔 출력
//   - 데이터 유형 파악
//     - 적당한 메서드
// 3. 유저 이름 화면에 렌더링

const userCardInner = getNode(".user-card-inner");

async function renderUserLIst() {
  /* ---------------- 로딩스피렌더링 --------------- */

  renderSpinner(userCardInner);
  // await delayP(2000)

  try {
    gsap.to(".loadingSpinner", {
      opacity: 0,
      onComplete() {
        getNode(".loadingSpinner").remove();
        console.log("end");
      },
    });
    const response = await jjam.get(ENDPOINT);
    const data = response.data;
    data.forEach((user) => {
      renderUserCard(userCardInner, user);
    });
    changeColor(".user-card");
    gsap.from(".user-card", {
      x: -100,
      opacity: 0,
      stagger: {
        amount: 1,
        from: "start",
      },
    });
  } catch {
    renderEmptyCard(userCardInner);
    throw console.error("에러 발생~");
  }
}
renderUserLIst();
// const data = await xhrPromise.get("https://jsonplaceholder.typicode.com/users"); // top -level-await
// console.log(data);

/*
/~ -------------------top레벨 아닌 걸로------------------------- ~/
async function getData() {
  const data = await xhrPromise.get("https://jsonplaceholder.typicode.com/users");
  console.log(data);
}
getData();
/~ --------------------화살표함수로----------------------- ~/
const getData = async () => {
  const data = await xhrPromise.get("https://jsonplaceholder.typicode.com/users");
  console.log(data);
};
*/

function handleDeleteCard(e) {
  const button = e.target.closest("button");
  if (!button) return;
  //⬇️ 이게 먹히긴 먹히는데 가짜 데이터라서 진짜 없어지게 보이지는 않는다.
  // jjam.delete(`${ENDPOINT}/1`);
  //⬇️ data-index:'user-1' 갖고 있는 걸 지워주자
  const article = button.closest("article");
  const index = article.dataset.index.slice(5);
  jjam.delete(`${ENDPOINT}/${index}`).then(() => {
    clearContents(userCardInner);
    renderUserLIst();
  });
}
userCardInner.addEventListener("click", handleDeleteCard);

const createButton = getNode(".create");
const cancleButoon = getNode(".cancel");
const doneButoon = getNode(".done");

function handleCreate() {
  gsap.to(".pop", { autoAlpha: 1 });
}
// const cancle = document.querySelector('.create')
function handleCancle(e) {
  // 취소를 누르면 그걸 갖고있는 create 까지 눌리는 거라서 위에 create 이벤트가 같이 실행되기 때문에 안 없어지는 것
  // 그래서 버블링은 멈추게 해주는 게 필요하다! 이벤트 타겟 이상으로 버블링이 되지 않게.
  e.stopPropagation();
  gsap.to(".pop", { autoAlpha: 0 });
}

function handleDone(e) {
  e.preventDefault();

  const name = getNode("#nameField").value;
  const email = getNode("#emailField").value;
  const website = getNode("#siteField").value;

  console.log(name, email, website);
  jjam.post(ENDPOINT, {
    name,
    email,
    website
  }).then(()=>{
    // 1. 팝업 닫기
    // gsap.to('.pop',{autoAlpha:0})
    createButton.classList.remove('open');

    // 2. 카드 컨텐츠 비우기
    clearContents(userCardInner);

    // 3. 유저카드 렌더링하기
    renderUserLIst();
  })
}

createButton.addEventListener("click", handleCreate);
cancleButoon.addEventListener("click", handleCancle);
doneButoon.addEventListener("click", handleDone);
