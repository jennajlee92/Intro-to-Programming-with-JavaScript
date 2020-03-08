let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83

function sumOfSquares(arr) {
  let squaredArray = arr.map(n => n * n);
  let finalArray = squaredArray.reduce((ac, elem) => ac + elem, 0);
  return finalArray;
};