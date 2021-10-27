function getAverage (arr) {
  return Math.floor(arr.reduce((a,c) => a + c) / arr.length)
}

console.log( getAverage([2,2,2,2,2]), 2);
console.log( getAverage([1,2,3,4,5]), 3);
