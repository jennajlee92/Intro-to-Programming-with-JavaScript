function calculateBMI(height, weight) {
  console.log((weight / ((height / 100)**2)).toFixed(2));
}

calculateBMI(180, 80); // "24.69"