function fib(num){
  if(num<2){
    return num;
  }
  return fib(num-1)+fib(num-2);
}

console.log(fib(5), 5)
console.log(fib(6), 8)
console.log(fib(8), 21)
console.log(fib(12), 144)

// if (num < 2) { return num; }
// fib(0) = 0
// fib(1) = 1
// fib(2) = 1 -> since 2 is = 2 not not less than 2 --> a recursive call begins
// need to get to the base case of less than 2
// fib(3) = 2
// memoization --> store the results of the recursive calls