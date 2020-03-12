let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(string, array) {
  for (let i = 0; i < array.length; i += 1) {
    if (string === array[i]) {
      return true;
    }
  }
  return false;
}