"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Palindrome Number
const isPalindrome = (num) => {
    let originalNum = num;
    let reverse = 0;
    if (num === 0) {
        return true;
    }
    while (num > 0) {
        let lastDigit = num % 10;
        num = Math.floor(num / 10);
        reverse = reverse * 10 + lastDigit;
    }
    let palindrome = reverse === originalNum;
    return palindrome;
};
console.log(isPalindrome(121));
console.log(isPalindrome(12345));
console.log(isPalindrome(12321));
console.log(isPalindrome(0));
// Output
// true
// false
// true
// true
//# sourceMappingURL=problem_4.js.map