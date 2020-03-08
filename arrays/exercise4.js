let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
console.log(myArray.map(function(elem) {
  if (elem % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}))

// Desired result:
//  [
//    'odd', 'odd', 'even', 'odd',
//    'even', 'even', 'even', 'odd',
//    'odd', even', 'even',
//  ]