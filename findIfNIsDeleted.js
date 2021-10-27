function findMissingNum (arr, mixArr) {
  // nested for loop is quadratic and that is not good :)
  
  //test 1 with filter
  // return arr.filter(n => mixArr.indexOf(n) === -1)[0] || 0;

  //test 2 with reduce
  if (arr.length === mixArr.length) {
    return 0;
  } else {
    let arrSum = arr.reduce((a,c) => a + c, 0);
    let mixArrSum = mixArr.reduce((a,c) => a + c, 0);
    return arrSum - mixArrSum;
  }
}

console.log(findMissingNum([1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,1,9]), 5)