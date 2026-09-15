//Sum of Digits
const sumOfDigits = (num: number): number => {
  let sum = 0;

  while(num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    sum = sum + lastDigit;
  }

  return sum;
};

const num1: number = 12345;
const num2: number = 1429240;

console.log(sumOfDigits(num1));
console.log(sumOfDigits(num2));
console.log(sumOfDigits(0));
