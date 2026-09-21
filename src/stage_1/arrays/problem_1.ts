//Largest Element in an Array
const findLargest = (arr: number[]): number => {
  if (arr.length === 0) {
    throw new Error("Array cannot be empty");
  }

  let largest = arr[0]!;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i]! > largest) {
      largest = arr[i]!;
    }
  }
  return largest;
};

console.log(findLargest([3, 7, 2, 9, 4]));
console.log(findLargest([-5, -3, -9, -1]));
console.log(findLargest([42]));

//Output:
// 9
// -1
// 42
