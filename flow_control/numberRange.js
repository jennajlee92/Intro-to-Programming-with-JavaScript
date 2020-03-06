function numberRange(num) {
  if (Number(num) < 0) {
    console.log(`${num} is less than 0`);
  } else if (Number(num) <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (Number(num) <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else if (Number(num) > 100) {
    console.log(`${num} is greater than 100`);
  }
}

numberRange(25);   // '25 is between 0 and 50'
numberRange(75);   // '75 is between 51 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'