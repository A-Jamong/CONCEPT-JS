const template = document.createElement("template");

template.innerHTML = `
  <div>bye</div>
  <div>javascript</div>
`;

const app = document.querySelector("#app");
const temp = document.querySelector("#temp");

const clone = temp.content.cloneNode(true);
// temp.content 가 훼손되면 전부 훼손되니까 한번 깔끔하게 클론해서 쓰는 게 낫다.

app.appendChild(clone);
