// if (thisTime === MORNING) {
//   console.log("디코를 켠다");
// } else if (thisTime === LUNCH) {
//   console.log("체력 보충을 위해 잔다");
// } else if (thisTime === DINNER) {
//   console.log("수업 내용을 복습하세요");
// } else if (thisTime === NIGHT) {
//   console.log("내일 수업을 예습하세요");
// } else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
//   console.log("꿈속에서 배웠던 코드를 만듭니다.");
// }

// 변수에 담는다 -> 프롬프트 (0~6)
// 스위치로 0~6 일~토 로 알려주게 만들기
// const number = +prompt("0~6까지의 숫자를 입력해주세용");
//number -> 숫자로 만들어주기 : 앞에 + 해줘도 되고 parseInt 해줘도 되고.

//함수는 하나의 기능만 수행하게 하자! 숫자 가져오는 거 따로 나눠주기! -- 개발 방법론 : Separation of concerns (관심사의 분리)

function getRandom(n) {
  const value = Math.floor(Math.random() * n);
  return value;
}

function getDay(value = getRandom(7)) {
  console.log(value);
  switch (value) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
  }
  return value;
}

function weekend() {
  let day = getDay();
  if (day === "토" || day === "일") {
    //===대신 includes 써도 똑같음! day.includes('토')
    return "주말입니다!";
  } else {
    return "평일입니다!";
  }
}
