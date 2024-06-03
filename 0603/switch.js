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

function getDay() {
  /*const random_number = Math.random() * 6 + 1;
  // math.random 은 소수점까지 출력해준다. -> math.floor 써도 된다.*/
  const random_number = Math.floor(Math.random() * 7);
  console.log(random_number);

  switch (random_number) {
    case 0: {
      console.log(alert("일"));
      break;
    }
    case 1: {
      console.log(alert("월"));
      break;
    }
    case 2: {
      console.log(alert("화"));
      break;
    }
    case 3: {
      console.log(alert("수"));
      break;
    }
    case 4: {
      console.log(alert("목"));
      break;
    }
    case 5: {
      console.log(alert("금"));
      break;
    }
    case 6: {
      console.log(alert("토"));
      break;
    }
  }
}
