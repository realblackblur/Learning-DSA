"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Reverse a Number
const reverseNumber = (num) => {
    let reverse = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        num = Math.floor(num / 10);
        reverse = reverse * 10 + lastDigit;
    }
    return reverse;
};
const num1 = 12345;
const num2 = 1429240;
console.log(reverseNumber(num1));
console.log(reverseNumber(num2));
console.log(reverseNumber(0));
// Output:
// 54321
// 429241
// 0
//# sourceMappingURL=problem_3.js.map