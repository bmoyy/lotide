
//ASSERTION FUNCTIONS
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


//MIDDLE FUNCTION

const middle = function(array) {

  let finalArray = [];

  if (array.length % 2 === 0) {

    finalArray = [array[array.length/2-1], array[array.length/2]];

    return finalArray;
  }

  finalArray = [array[(array.length-1)/2]];
  return finalArray;
}