let readlineSync = require('readline-sync');

let getName = function() {
  let firstName = readlineSync.question('What is your first name? ');
  let lastName = readlineSync.question('What is your last name? ');
  return firstName + ' ' + lastName;
}

console.log(`Hello, ${getName()}!`);