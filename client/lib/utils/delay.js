import { getNode } from "../dom/getNode.js";
import { isObject, isNumber } from "../utils/type.js";

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode(".first");
const second = getNode(".second");
/* -------------------------------------------- */
// delay(() => {
//   first.style.top = "-100px";
//   delay(() => {
//     first.style.transform = "rotate(360deg)";
//     console.log("2");
//     delay(() => {
//       first.style.top = "0px;";
//       second.style.top = "0px;";
//     });
//     second.style.transform = "rotate(-360deg)";
//   });
//   second.style.top = "100px";
// });
//~ 이거 이렇게 바뀐다!!
// delayP()
//   .then((res) => {
//     console.log(res);
// first.style.top = "-100px";
// second.style.top = "100px";

//     return delayP();
//   })

//   .then((res) => {
//     console.log(res);
//     first.style.transform = "rotate(360deg)";
//     second.style.transform = "rotate(-360deg)";

//     return delayP();
//   })
//   .then((res) => {
//     first.style.top = "0px";
//     second.style.top = "0px";
//     console.log(res);
//   });
/* -------------------------------------------- */
const shouldRejected = false;

const p = new Promise((resolve, reject) => {
  if (!shouldRejected) {
    resolve("성공!!");
  } else {
    reject("실패!");
  }
});
const defaultOptions = {
  shouldRejected: false,
  data: "성공",
  errorMessage: "알 수 없는 오류",
  timeout: 1000,
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }
  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  let { shouldRejected, data, errorMessage, timeout } = config;

  // const config = { ...defaultOptions, ...options };
  // console.log(config);
  // const { shouldRejected, data, errorMessage, timeout } = config;

  // const p = new Promise((resolve, reject) => {});
  // return p;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP({
  shouldRejected: false,
  data: "xptmxm",
  errorMessage: "알 수 없는 오류",
});
//~ delayP({timeout:5000}) -> delayP(5000) 으로 편하게 하고 싶은디.
delayP(3000);
// delayP().then((result) => {
//   //delayP를 통해 떨어진 객체에 then을 통해서 연결이 된다!
//   console.log(result);
// });
// console.log(p);

// console.log(delayP());
delayP()
  .then((res) => {
    // console.log(res);
    first.style.top = "-100px";
    second.style.top = "100px";
    return delayP();
  })
  .then((res) => {
    // console.log(res);
    first.style.transform = "rotate(360deg)";
    second.style.transform = "rotate(-360deg)";
    return delayP();
  })
  .then((res) => {
    // console.log(res);
    first.style.top = "0px";
    second.style.top = "0px";
  });
