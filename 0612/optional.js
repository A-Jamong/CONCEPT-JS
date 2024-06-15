/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */

const portableFan = {
  maker: "fromB",
  brand: "FD221",
  type: "neckband",
  photo: {
    static: "https://bit.ly/3OS50UD",
    animate: "https://bit.ly/3P8646q",
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

//sync(동기) async(비동기) web
//JS는 싱글스레드 동기식인데 멀티스레드로 하려고 web api 가 제공해준다.
//근데 시간을 보장해줄 수 없다. 싱글스레드라서 피보나치 같은 게 계속 돌고있으면 콜백 큐에 가만히 들어있다.

// window.setTimeout(){
//   console.log(3)
// }

const button = document.querySelector(".my-button");

const id = setTimeout(() => {
  const template = /* html */ `
    <button type="button" class="my-button">my-utton</button>
  `;
  document.body.insertAdjacentHTML("beforeend", template);
}, 3000);

button?.addEventListener("click", () => {
  console.log("clicked~!");
}); // -> 버튼이 있으면 해주는 거긴 한데 그냥 생긴 후에 쓰면 안 돼? 싶으니 setTimeout() 에 넣어버려도 됨
// 근데 사실상 setTimeout() 에서 만들었으니까 너 실행해! 하고 신호를 주면 하는 게 젤 적합한데 비동기라서 실행이 안됨!!!

let count = 0;
// 일정시간동안 주기적으로 호출해주는 애. 얘도 Web api
const id2 = setInterval(() => {
  console.log(++count);

  document.querySelector(
    "h1"
  ).style.transform = `translateY(${count}px) rotate(${count}deg)`;

  if (count >= 500) {
    clearInterval(id2);
  }
}, 10);

//제거할 때
//clearTimeout(id2)
//clearInterval(id2)
