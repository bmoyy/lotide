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

module.exports = without;

// console.log(without([1, 2, 3], [1]));
// console.log(without([1, 2, 3], [1, 2, 4, 5]));
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);