let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']

function allMatches(array, delimiter) {
    let newArray = [];

    array.forEach(function(string) {
      if (string.match(delimiter)) {
      newArray.push(string);
    }
  });

    console.log(newArray);
  }