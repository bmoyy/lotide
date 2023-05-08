const letterPositions = function(sentence) {
  const result = {};
  let index = -1;
  for(char of sentence) {
    index = index + 1;
    if(char === ' ') continue;
    if(result[char]) {
      result[char].push(index);
      continue;
    }
    result[char] = [index];
  }
  return result;
}

module.exports = letterPositions;