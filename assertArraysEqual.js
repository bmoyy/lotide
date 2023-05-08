const eqArrays = require('./eqArrays');

const assertArraysEqual = function (actual, expected) {

  if (eqArrays(actual, expected)) return console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  return console.log(`🛑Assertion failed: ${actual} !== ${expected}`);

};

module.exports = assertArraysEqual;