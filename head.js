const assertEqual = function(actual, expected) {
  if (actual !== expected) return console.log(`🛑Assertion failed: ${actual} !== ${expected}`);
  return console.log(`✅Assertion Passed: ${actual} === ${expected}`);
};

const head = function (array) {
  return array[0];
}

//test case for returning undefined
assertEqual(head([]), );
