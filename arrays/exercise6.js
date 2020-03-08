let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  let lengthsArray = arr.map(elem => elem.length);
  oddsArr = lengthsArray.filter(elem => elem % 2 !== 0);
  return oddsArr;
};