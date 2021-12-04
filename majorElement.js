// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


function majorityElement(nums) {
  let majority = {}
  let max = 0
  for (el of nums) {
    if (majority[el]) {
      majority[el]++
    } else {
      majority[el] = 1
    }
    if (majority[el] > max) {
      max = majority[el]
      majority = el
    }
  }
  return majority
}


console.log(majorityElement([3,2,3]), 3);
console.log(majorityElement([2,2,1,1,1,2,2]), 2);