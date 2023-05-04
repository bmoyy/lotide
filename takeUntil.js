// function eqArrays(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array2.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// const assertArraysEqual = function (actual, expected) {

//   if (eqArrays(actual, expected)) return console.log(`✅Assertion Passed: ${actual} === ${expected}`);
//   return console.log(`🛑Assertion failed: ${actual} !== ${expected}`);

// };

function isTruthy(element) {
  if (element == true) return true;
  return false;
}

const takeUntil = function (array, callback) {
  let result = [];
  for (element of array) {
    if (callback(element)) return result;
    result.push(element);
  }
  return result;
}

// const data1 = [42, "false", 5, 0, null, 3.14, 1, false, 1, 0];
// const result1 = takeUntil(data1, isTruthy);

// assertArraysEqual(result1, [42, "false", 5, 0, null, 3.14])