const ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const user = {
  name: "tiger",
  age: 40,
  gender: "male",
};

// 객체 합성(mixin)

/* -------------------------------------------- */
/*                   xhr 콜백 방식                  */
/* -------------------------------------------- */

function xhr({
  method = "GET",
  url = "",
  onsuceess = null,
  onfail = null,
  body = null,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
}) {
  // const{method='GET', url='', onsuceess=null, onfail=null, body=null} = options;

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  // xhr.setRequestHeader("Content-Type", "application/json");
  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  // console.log( xhr.response ); // 응답하는 시간이 있어서 바로 안 찍힘 -> 타임아웃에 넣어보면 찍힘!

  // setTimeout(() => {
  //   console.log( xhr.response );
  // }, 1000);

  // [readystate] Get, post 같은 게
  // 0: uninitailized -> 오픈 전에
  // 1: loading -> 이벤트리스너 전에
  // 2: loaded
  // 3: interactive
  // 4: complete -> 통신이 완료됐어! (성공을 의미하는 건 아님) -> 그럼 성공햇을 때만 하고 싶은데. => .status 200~399까진 성공!

  // console.log(xhr);
  xhr.addEventListener("readystatechange", () => {
    //어 객체다 노나
    const { readyState, status, response } = xhr;
    // console.log( xhr.response ); 2, 3, 4 를 보여줌
    // readyState === 4: xhr.response 데이터가 완전히 떨어지는 순간에 가져올 수 있지 않을까.
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response); //~ 이거 어케 갖고옴. 시간 걸려서 변수 설정해도 못 가져옴 -> 콜백
        onsuceess(data);
      } else {
        console.log("실패!");
      }
    }
  });
  xhr.send(JSON.stringify(body));
}
// xhr('POST', ENDPOINT, user)

// xhr(
//   "GET",
//   ENDPOINT,
//   user,
//   (data) => console.log(data),
//   (err) => console.log(err)
// );

// xhr({
//   method: "POST",
//   url: ENDPOINT,
//   body: user,
//   onsuceess(data) {
//     console.log(data);
//   },
//   onfail(err) {
//     console.log(err);
//   },
// });

/* -------------------------------------------- */
/* ------------------ 썜꺼 훔쳐옴 ------------------ */
// xhr({
//   성공(data) {
//     console.log(data);
//   },
//   body: user,
//   실패() {},
//   url: ENDPOINT,
// });

// const options = {
//   method: "POST",
//   url: ENDPOINT,
//   body: user,
//   성공() {},
//   실패() {},
// };
// "POST", ENDPOINT, user, (data) => console.log(data), (err) => console.log(err);

xhr.get = (url, onsuceess, onfail) => {
  xhr({ url, onsuceess, onfail });
};

xhr.post = (url, body, onsuceess, onfail) => {
  xhr({
    method: "POST",
    body,
    url,
    onsuceess,
    onfail,
  });
};

xhr.put = (url, body, onsuceess, onfail) => {
  xhr({
    method: "PUT",
    body,
    url,
    onsuceess,
    onfail,
  });
};

xhr.delete = (url, onsuceess, onfail) => {
  xhr({
    method: "DELETE",
    url,
    onsuceess,
    onfail,
  });
};

/* -------------------------------------------- */
/*                  xhr 프로미스 방식                 */
/* -------------------------------------------- */

const defaultOptions = {
  method: "GET",
  url: "",
  body: null,
  errorMessage: "서버와의 통신이 원활하지 않습니다.",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export function xhrPromise(options) {
  const config = { ...defaultOptions, ...options };

  const { method, url, body, headers, errorMessage } = config;

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}

// xhrPromise.get = (url) => {
//   xhrPromise({ url });
// };

xhrPromise.get = (url) => xhrPromise({ url });
xhrPromise.post = (url, body) => xhrPromise({ url, body, method: "POST" });
xhrPromise.put = (url, body) => xhrPromise({ url, body, method: "PUT" });
xhrPromise.delete = (url) => xhrPromise({ url, method: "DELETE" });
