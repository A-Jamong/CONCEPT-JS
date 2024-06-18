/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest -> * 시블링 아님! 조상만! *

/* 문서 대상 확인 */
// - matches
// - contains

/*-------------------------------- 실습 ------------------------------*/
//1. id가 visual-section인 section 태그 요소
//const section = document.querySelector('#visual-section')
let section = document.getElementById("visual-section");
// console.log(tag.insertAdjacentHTML("afterbegin", tag))

//2. class가 list인 ul태그 요소
const list = document.querySelector(".list");
// const list= document.getElementsByClassName('list');

//3. list 요소 안에 about li 태그 요소
// const about = document.querySelector('.list > li:nth-child(2)');
const about = list.querySelector("li:nth-child(2)");

//4. name 속성이 search-box인 form 태그 요소
const form = document.querySelector('form[name = "search-box"]'); //속성 선택자

//5. form 요소 안에 있는 모든 자식 요소
// const children = form.children;
const children = form.querySelectorAll("*");

//6. form 요소 안에 있는 input 태그 요소
// const input = form.querySelector("input");
// const input = form.lastElementChild;
const ipnut = children[children.length - 1];
