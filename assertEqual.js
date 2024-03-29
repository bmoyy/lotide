const assertEqual = function(actual, expected) {
  if (actual !== expected) return console.log(`🛑Assertion failed: ${actual} !== ${expected}`);
  return console.log(`✅Assertion Passed: ${actual} === ${expected}`);
};

module.exports = assertEqual;
