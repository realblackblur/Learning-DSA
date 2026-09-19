"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Print N to 1 in Recursive
const printNTo1Recursive = (n) => {
    if (n > 0) {
        console.log(n);
        printNTo1Recursive(n - 1);
    }
};
printNTo1Recursive(5);
//# sourceMappingURL=problem_6.js.map