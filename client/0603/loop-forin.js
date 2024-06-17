const javaScript = {
  creator: "Brenden",
  createAt: "1005.05",
  standardName: "ECMAScript",
  currenVersion: 2023,
};

Object.prototype.nickName = "호랑이";

// console.log( 'valueOf' in javaScript);

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

//call - function의 메서드 call 도 매개변수 받음
//call(a, b) a: 누가 빌려쓸 건데 b: 매개변수
//hasOwnProperty -> 객체에서 쓰면 훼손될 여지(함수로 정의해버린다던가)가 있으므로 조상에서 가져와서 쓴다. -> '빌려와서 쓴다' 개념 -> call 메서드 사용. -> call(a,b) a: 빌려쓸 객체 이름, b: 매개변수
//Call -> 조상 아니더라도 쓸 수 있음. string 이 array의 능력을 쓰고 싶다던가. Array.prototype.forEach.call('hello', ()=>{})

// console.log(Object.prototype.hasOwnProperty.call(javaScript, "creator"));

Object.defineProperty(Object.prototype, "nickName", {
  enumerable: false,
});

for (let key in javaScript) {
  console.log(javaScript[key]);
}
