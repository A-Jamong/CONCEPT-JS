

export function copy(text) { //then을 이어서 써야해서 프라미스가 되어야 한다. > return 적어주기
  return navigator.clipboard.writeText(text)
}

