const middle = function(array) {

  let finalArray = [];
  if (array.length <= 2) return finalArray;

  if (array.length % 2 === 0) {
    finalArray = [array[array.length/2-1], array[array.length/2]];

    return finalArray;
  }
  finalArray = [array[(array.length-1)/2]];
  
  return finalArray;
}

module.exports = middle;