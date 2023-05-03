const countLetters = function(string) {
  let result = {};
  for (let char of string) {
    if (char === ' ') continue;
    if (result[char]){
      result[char] = result[char] + 1;
      continue;
    }
    result[char] = 1;
  }
  return result;
}
