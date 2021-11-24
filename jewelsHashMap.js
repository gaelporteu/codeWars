// the Two Sum problem // HashMap solution an Object with a key value pair is a Hashmap

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3


// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// This is a linear solution -> happens in constant time

function findJewels(jewels, stones) {
  let count = 0
  const map = {}

  for(const jewel of jewels) {
    map[jewel] = true
  }
  for (const stone of stones) {
    if (map[stone]) {
      count++
    }
  }
  return count
}

console.log(findJewels("aA", "aAAbbbb"), 3)
console.log(findJewels("z", "ZZ"), 0)