const isLeapYear = (nb) => {

  return nb % 4 !== 0
}

const isEven = (nb) => {
  return !isLeapYear(nb)
}
console.log(isLeapYear(1))