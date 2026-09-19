//Print N to 1 in Recursive
const printNTo1Recursive = (n: number): void => {
  if (n > 0) {
    console.log(n);
    printNTo1Recursive(n - 1);
  }
};

printNTo1Recursive(5);
