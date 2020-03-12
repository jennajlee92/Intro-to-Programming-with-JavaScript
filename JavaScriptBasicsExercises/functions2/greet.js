function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(greeting() + ', ' + recipient() + '!');
}

greet();              // logs: undefined, world!
                      // should log: Hello, world!