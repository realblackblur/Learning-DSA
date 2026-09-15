//Digit Count
const digitCount = (num: number) => {

  let count: number = 0;

  if (num === 0) {
    return 1;
  }
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
};

const num1: number = 832006;
const num2: number = 1429240;

console.log(digitCount(num1));
console.log(digitCount(num2));
console.log(digitCount(0));

// Output:
// 6
// 7
// 1
