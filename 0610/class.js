/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.
class User {
  static options = {
    version: "0.1",
  };

  static read1() {
    console.log("why");
  }

  readss() {
    console.log("hello");
  }

  #write() {
    console.log("wow");
  }
}

const me = new User();
console.log(me.readss());
console.log(me.read1());
console.log(me.write());



function Animal(){
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function (){
    return this.stomach
  }
  this.setEat = function (food){
    this.stomach.push(food)
  }
}

// const a1 = new Animal();

function Tiger(name){
  Animal.call(this)
  this.name = name;
  this.pattern = '호랑이무늬'
  this.hunt = function(target){
    return `${target}에게 조용히 접근한다.`
  }
}

Tiger.bark = function (sound){
  return sound
}

// Tiger.prototype = Object.create(Animal.prototype);
// Tiger.prototype.constructor = Tiger
// Tiger.prototype = a1

const 금강산호랑이 = new Tiger('금순이');


const 시베리아호랑이 = Tiger('시순이');