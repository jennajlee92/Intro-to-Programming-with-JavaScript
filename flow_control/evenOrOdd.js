function evenOrOdd(arg) {
  if (!Number.isInteger(arg)) {
    console.log('Sorry, the value must be an integer.');
    return;
  }
  
  if (arg % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}