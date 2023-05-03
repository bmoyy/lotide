function eqArrays(array1, array2) {

  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (!Array.isArray(object1[key])) {
      if (value1 !== value2) {
        return false;
      }
      continue;
    }
    if(!eqArrays(object1[key],object2[key])) {
      return false;
    }
  }
  return true;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual,expected)) return console.log(`🛑Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  return console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] }

assertObjectsEqual(multiColorShirtObject,anotherMultiColorShirtObject);
