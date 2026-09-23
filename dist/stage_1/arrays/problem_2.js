"use strict";
// Second Largest Element — Brute Force
Object.defineProperty(exports, "__esModule", { value: true });
const findSecondLargestBF = (arr) => {
    if (arr.length < 2) {
        throw new Error("Array must contain at least 2 elements");
    }
    const sorted = [...arr].sort((a, b) => b - a);
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] !== sorted[0]) {
            return sorted[i];
        }
    }
    throw new Error("No second largest distinct element exists");
};
console.log(findSecondLargestBF([3, 7, 2, 9, 4]));
console.log(findSecondLargestBF([5, 5, 5, 3]));
console.log(findSecondLargestBF([5, 5, 5]));
// Second Largest Element — Optimized
const findSecondLargest = (arr) => {
    let largest = arr[0];
    let secondLargest = -Infinity;
    if (arr.length < 2) {
        throw new Error("Array must contain 2 elements");
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    if (secondLargest === -Infinity) {
        throw new Error("No second largest distinct element exists");
    }
    return secondLargest;
};
//# sourceMappingURL=problem_2.js.map