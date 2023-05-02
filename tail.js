const assertEqual = function(actual, expected) {
  if (actual !== expected) return console.log(`🛑Assertion failed: ${actual} !== ${expected}`);
  return console.log(`✅Assertion Passed: ${actual} === ${expected}`);
};

let tail = function(array) {
  let result = array.slice(1);
  return result;
};


//test
//console.log(tail([1]));

// test
//const result = tail(['Hello','Lighthouse','Labs']);
//(result.length, 2); // ensure we get back two elements
//assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
//assertEqual(result[1], "Labs");

// Test Case: Check the original array
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!