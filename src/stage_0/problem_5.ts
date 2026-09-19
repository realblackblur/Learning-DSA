//Print N to 1
const printNTo1 = (n: number): number[] => {

  const result: number[] = [];

  for(let i = n; i > 0; i--) {
    result.push(i);
  }

  return result;
};

console.log(printNTo1(5));
