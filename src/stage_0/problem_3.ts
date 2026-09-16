//Reverse a Number
const reverseNumber = (num: number): number => {
  let reverse = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    reverse = reverse * 10 + lastDigit;
  }
  return reverse;
};

const num1: number = 12345;
const num2: number = 1429240;

console.log(reverseNumber(num1));
console.log(reverseNumber(num2));
console.log(reverseNumber(0));

// Output:
// 54321
// 429241
// 0
