let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  return arr.reduce(function(acc, elem) {
    if (elem.length % 2 !== 0) {
      acc.push(elem.length);
    }
    return acc;
  }, [])
};