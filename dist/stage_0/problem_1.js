"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Digit Count
const digitCount = (num) => {
    let count = 0;
    if (num === 0) {
        return 1;
    }
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
};
const num1 = 832006;
const num2 = 1429240;
console.log(digitCount(num1));
console.log(digitCount(num2));
console.log(digitCount(0));
// Output:
// 6
// 7
// 1
//# sourceMappingURL=problem_1.js.map