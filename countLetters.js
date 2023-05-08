const countLetters = function(string) {
  let result = {};
  
  for (let char of string) {
    if (char === ' ') continue;

    if (!result[char]){
      result[char] = 0;
    }

    result[char]++;
  }

  return result;
}
