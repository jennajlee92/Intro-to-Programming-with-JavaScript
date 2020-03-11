function isBlank(string) {
  if (string.trim().length === 0) {
    return true;
  } else {
    return false;
  }
}

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true