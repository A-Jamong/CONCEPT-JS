const aList = document.querySelectorAll("nav a");
const depthList = document.querySelectorAll(".depth");
const header = document.querySelector("#header");

const h = (t) => (t.style.height = 0);

//* .forEach(e=>console.log(e)) -> .forEach(console.log) : 전달받은 인자 자체를 그대로 다른 함수에다가 넣겠다 하면 그냥 함수만 붙여서 쓸 수 있다.

console.log(alert);

/*aList.forEach((a) => {
  a.addEventListener("mouseenter", () => {
    // console.log(a);
    // console.log(a.lastElementChild) //메뉴123 잡기!

    //~ 이러면 메뉴끼리 겹친다 
    //~ 내가 선택한 뎊스 제외 항목 0 으로 만드는 것 대신 모든 뎊스 높이를 0으로 만들면 아래서 내가 선택한 것만 높이가 생기니까 코드가 간결하다.
    // depthList.forEach((t)=>{t.style.height=0;}) //~ -> 이거 함수 뜯어서 밖에 둬도 됨.
    depthList.forEach(h);
    const target = a.lastElementChild;
    target.style.height = '100px'
  });
});

header.addEventListener('mouseleave', ()=>depthList.forEach(h))*/
/* ------------------------------- gsap으로 만들기------------------------------- */
aList.forEach((a) => {
  const target = a.lastElementChild;
  const tl = gsap.timeline({paused:true}).to(target, { height: 100 });
  a.addEventListener("mouseenter", () => tl.play());
  a.addEventListener("mouseleave", () => tl.reverse());
});
