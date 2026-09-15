"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Sum of Digits
const sumOfDigits = (num) => {
    let sum = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        num = Math.floor(num / 10);
        sum = sum + lastDigit;
    }
    return sum;
};
const num1 = 12345;
const num2 = 1429240;
console.log(sumOfDigits(num1));
console.log(sumOfDigits(num2));
console.log(sumOfDigits(0));
//# sourceMappingURL=problem_2.js.map