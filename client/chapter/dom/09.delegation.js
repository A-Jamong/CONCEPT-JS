/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

const nav = getNode("nav");
/* 클래스를 사용한 위임 ---------------- */

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
function handleClick(e) {
  // console.log(e.target)
  const target = e.target;
  const name = target.dataset.name;
  const li = target.closest('li');


  // if (target.tagName !== "LI") return;
  if(!li) return;
  /* --------------- 클래스를 사용한 위임 -------------- */
  // //~ 어바웃을 클릭했을 때 조건문을 따로 걸어줄 수 있는 시점
  // if(e.target.classList.contains('about')){
  //   console.log('about !!');
  // }
  // if(e.target.classList.contains('home')){
  //   console.log('home !!');
  // }
  // if(e.target.classList.contains('contact')){
  //   console.log('contach !!');
  // }
  /* ------------------------------------------ */

  /* --------------- 속성을 사용한 위임 --------------- */
  // console.log(target.getAttribute('data-name'));
  // console.log(target.dataset.name); //~속성 가져오는 방법 getAttribute, dataset
  // if(name==='about') console.log('about!!');
  // if(name==='home') console.log('home!!! ');
  // if(name==='contact') console.log('contact!!');
  
  
  /* --------------- 노드를 사용한 위임 --------------- */
  
  //정확히 Li만 조회

  if(li.textContent.includes('ABOUT')) console.log('about!!');
  if(li.textContent.includes('HOME')) console.log('home!!');
  if(li.textContent.includes('CONTACT')) console.log('contact!!');
}

nav.addEventListener("click", handleClick);
