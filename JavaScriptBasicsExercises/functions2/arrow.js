const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template
    .replace('VERB', verb)
    .replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.

let initGame = () => ({
    level: 1,
    score: 0
  });

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);