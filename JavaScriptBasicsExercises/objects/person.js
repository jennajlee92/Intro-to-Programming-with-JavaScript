let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let nestedPerson = Object.entries(person);

let newObject = Object.fromEntries(nestedPerson);
// Or:
newObject = {};
for (let i = 0; i < nestedPerson.length; i += 1) {
  newObject[nestedPerson[i][0]] = [nestedPerson[i][1]];
}