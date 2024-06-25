


export function shake(t) {
  const animation = gsap.to(t, { //gsap은 tween이라는 객체를 반환한다. 애니메이션의 모든 정보! tween.play() 처럼 메서드를 쓸 수 있다.
    duration: 0.1,
    x: -10,
    repeat: 5,
    yoyo: true,
  });

  return animation
}

