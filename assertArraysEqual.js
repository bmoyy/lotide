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