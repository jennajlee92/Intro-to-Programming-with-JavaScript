let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];
let i;

for (let i = 0; i < words.length; i += 1) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
  }

  console.log(capitalizedWords.join(' '));