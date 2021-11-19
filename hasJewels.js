// the Two Sum problem

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3


// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

//

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.



// function hasJewels (jewels, stones) {
//   // you will get two strings with no numbers or special charactors
//   // return how many stones you have
//   // return if any are the stones are jewels
//   let count = 0

//   for (jewel of jewels) {
//     for (stone of stones) {
//       if (jewel === stone) {
//         count++
//       }
//     }
//   }
//   return count
// }


function hasJewels (jewels, stones) {
  // you will get two strings with no numbers or special charactors
  // return how many stones you have
  // return if any are the stones are jewels
  // writing to an object happens in constant time
  // this is 2n and 2n is the same as O of n
  let count = 0
  map = {}

  for (const jewel of jewels) {
    map[jewel] = true
  }
  for (stone of stones) {
    if (map[stone]) {
      count++
    }
  }
  return count
}

console.log(hasJewels("aA", "aAAbbbb"), 3)
console.log(hasJewels("z", "ZZ"), 0)
console.log(hasJewels("abce", "abbccdd"), 5)