function cookingTime(eggs) {
  // TODO
  if (eggs > 8) {
    return Math.ceil(eggs / 8) * 5
  } else if (eggs >= 1) {
    return 5
  }
  return 0
}

console.log(cookingTime(5), 5)
console.log(cookingTime(10), 10)
console.log(cookingTime(24), 15)
console.log(cookingTime(0), 0)
console.log(cookingTime(3), 5)