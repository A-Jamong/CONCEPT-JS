/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  // setEat(food) {
  //   this.stomach.push(food);
  // },
  // getEat() {
  //   return this.stomach;
  // },

  /* -------------------------------------------------------------------------- */
  /*              get, set 같은 메서드를 만들 때는 기본 제공하는 게 있다! -> 속성처럼 된다!    */
  /* -------------------------------------------------------------------------- */

  set eat(food) {
    this.stomach.push(food);
  },
  get eat() {
    return this.stomach;
  }, // animal.eat = '고기' / animal.eat 처럼 쓴다.
};

animal.setEat("고기");
animal.getEat;

const tiger = {
  pattern: "호랑이무늬",
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
};

// 생성자 함수

const user = {
  sayHi() {
    // let self = this;
    function sayBye(...args) {
      console.log(this);
    }
    sayBye.call(this);
  },
};
