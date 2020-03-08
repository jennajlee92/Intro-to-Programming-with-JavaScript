let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
myArray.forEach(function (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
})