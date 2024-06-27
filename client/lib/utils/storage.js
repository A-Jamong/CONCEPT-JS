import { isString } from "../utils/type.js";

const { localStorage: storage } = window;

// /* ---------------------⬇️----------------------- */
// // localStorage.setItem('user', user); // [object Object] 문자로 들어간다.

// localStorage.setItem("user", JSON.stringify(user));

// const data = localStorage.getItem("user");
// console.log(data); // {"":""} string 형태로 나옴!

// console.log(JSON.parse(data)); // 객체 형태로 잘 나옴!
// /* ---------------------⬆️----------------------- */

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject();
    }
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject();
    }
  });
}

export function deleteStorage(key){

  return new Promise((resolve,reject)=>{
    !key ? storage.clear() : storage.removeItem(key);
    resolve()
  })
}

// deleteStorage('user') 


// console.log(getStorage("user"));

// setStorage("user", user);
