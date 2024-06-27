const ENDPOINT = "https://jsonplaceholder.typicode.com/users";

/*
얘는 실행시키면 프로미스 객체 나옴 (result : response)
const jjam = async () => {
  const data = fetch(ENDPOINT);
  console.log(data);
};
*/
/*
얘는 response 객체가 나옴
const jjam = async () => {
  const response = await fetch(ENDPOINT);
  console.log(response.json());
};
*/

//~ 드디어 궁금한 result 가져옴
// const jjam = async () => {
//   const response = await fetch(ENDPOINT);
//   let data;

//   if (response.ok) {
//     data = response.json();
//   }
//   return data;
// };

// console.log(await jjam()); // await 밖에 쓰는 거 찜찜하면 IIFE 쓰면 된다. 거대한 즉시실행함수 만들어서 안에 await 넣기

/* -------------------------------------------- */
// const jjam = async () => {
//   const response = await fetch(ENDPOINT); //reponse 객체가 나옴
//   let data;

//   if (response.ok) {
//     data = await response.json(); //
//   }
//   return data;
// };
// console.log( jjam());
/* ------------------------⬇️⬇️⬇️------------------- */

const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}
export const jjam = async (options) => {
  // const config = { //~ config 를 쓰거나 하지는 않으니까 구조분해할당
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    },
  };

  /* --------------------1---------------------- */
  // const { url, method, headers, body } = config; // ~ 근데 여기 url이랑 나머지랑 다 따로따로 나가는데 어떻게 못 뭉치나?
  // const response = await fetch(url, {  // * method, headrs, body 를 ...나머지 로 전달해주자.
  //   method,
  //   headers,
  //   body,
  // });
  /* ------------------------------------------ */

  // const { url, ...restOptions } = config;

  const response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }
  return response;
};

const result = await jjam({ url: ENDPOINT });

// const result = await jjam.get(ENDPOINT);

jjam.get = (url, options) => {
  return jjam({
    url,
    ...options,
  });
};

jjam.post = (url, body, options) => {
  return jjam({
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

jjam.delete = (url, options) => {
  return jjam({
    url,
    ...options,
  });
};

jjam.put = (url, body, options) => {
  return jjam({
    method: "PUT",
    url,
    ...options,
    body: JSON.stringify(body),
  });
};

jjam.patch = (url, body, options) => {
  return jjam({
    method: "PATCH",
    url,
    ...options,
    body: JSON.stringify(body),
  });
};
