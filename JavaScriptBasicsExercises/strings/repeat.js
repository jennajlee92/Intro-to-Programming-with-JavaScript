function repeat(num, str) {
  let final = '';

  for (let i = 1; i <= num; i += 1) {
    final += str;
  }

  console.log(final);
}

repeat(3, 'ha'); // 'hahaha'