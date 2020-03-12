let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...

for (let i = 0; i < vocabulary.length; i += 1) {
  for (let n = 0; n < vocabulary[i].length; n += 1) {
    console.log(vocabulary[i][n]);
  }
}

// Checks if value is an array
function filter(input) {
  Array.isArray(input);
}