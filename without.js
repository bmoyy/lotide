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


const without = function(source,toRemove) {

  let result = JSON.parse(JSON.stringify(source));
  for (let i = 0; i < result.length; i++) {

    //for each index in the array, splice if it matches the toRemove array values
    for ( let j = 0; j < toRemove.length; j++) {
      if (result[i] === toRemove[j]) {
        result.splice(i,1);
      }
    }
  }
  return result;
}



console.log(without([1, 2, 3], [1]));
console.log(without([1, 2, 3], [1, 2, 4, 5]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);