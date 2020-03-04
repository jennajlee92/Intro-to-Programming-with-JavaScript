let readlineSync = require('readline-sync');
let a = readlineSync.question('Enter the first number: ');
let b = readlineSync.question('Enter the second number: ');

function multiply(a, b) {
  console.log(`${a} * ${b} = ${a * b}`);
}

multiply(a, b);