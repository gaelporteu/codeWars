// Given a number as an input, print out every integer from 1 to that number. However, 
// when the integer is divisible by 2, print out “Fizz”; 
// when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

function fizzBuzz(num) {
  if (num % 3 == 0 && num % 2 == 0) {
    return "Fizz Buzz";
  } else if (num % 3 == 0) {
    return "Buzz";
  } else if (num % 2 == 0) {
    return "Fizz";
  } return num;
}

console.log(fizzBuzz(12));