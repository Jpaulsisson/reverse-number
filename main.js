// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go         outside  the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21


const number = 123;

///////// first attempt ///////////
function reverseNumber(num) {
  let numString = num.toString();
  let numArray = Array.from(numString);
  numArray.reverse();
  console.log(numArray);
  numArray.forEach((value, index) => {
    if (value == '0' && index === 0) {        /////solved. this was really fun
      numArray.shift();
    };
    if (value === '-' && index === numArray.length - 1) {
      numArray.pop();
      numArray.unshift('-');
    };
  });
  let newString = numArray.join('');
  if (newString > (Math.pow(2, 31) - 1) || newString < (Math.pow(2, 31) * -1)) {
    return 0;
  } else {
    return newString;
  }
  }
console.log(reverseNumber(number));
console.log(reverseNumber(-250));
console.log(reverseNumber(1534236469));
console.log(reverseNumber(-1534236469));

////solution was in the 99th percentile for runtime!