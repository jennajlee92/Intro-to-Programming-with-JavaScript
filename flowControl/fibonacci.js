let fibonacci = num => {
  if (num < 0) {
    console.log("The number must be positive.");
  }
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(7));