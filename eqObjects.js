const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;