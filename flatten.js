function eqArrays (array1,array2) {

  for (let i = 0; i < array2.length; i++){
    if (array1[i] !== array2[i]) { 
      return false;
    }
  }
  return true;
}
const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual,expected)) return console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  return console.log(`🛑Assertion failed: ${actual} !== ${expected}`);

};

function flatten (array) {

  let finalArray = [];
  for (let i = 0; i < array.length; i++) {

    if (Array.isArray(array[i])) {

      for (let j = 0; j < array[i].length; j++) {

        finalArray.push(array[i][j]);

      }
    } else {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));