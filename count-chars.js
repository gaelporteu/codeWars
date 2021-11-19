// count all the occurring characters in a string

function countChars(str) {
  // create the obj
  let countObj = {}


  // loop -> check to see in obj -> +1 -> if not add value of 1
  for (const c of str) {
    if (countObj[c]) {
      countObj[c]++
    } else {
      countObj[c] = 1
    }
  }
  //return the obj
  return countObj
}

console.log(countChars('aba'), {'a':2, 'b': 1})
console.log(countChars(''), {})