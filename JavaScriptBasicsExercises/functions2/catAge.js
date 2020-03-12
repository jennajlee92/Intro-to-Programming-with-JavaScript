function catAge(humanYears) {
  switch(humanYears) {
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}

console.log(catAge(4));