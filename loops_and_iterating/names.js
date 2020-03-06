// names.js
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let i = 0; i < names.length; i += 1) {
  if (names[i] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[i].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']