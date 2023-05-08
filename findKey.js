// const assertEqual = function(actual, expected) {
//   if (actual !== expected) return console.log(`🛑Assertion failed: ${actual} !== ${expected}`);
//   return console.log(`✅Assertion Passed: ${actual} === ${expected}`);
// };

function isTruthy(element) {
  if (element == true) return true;
  return false;
}

const findKey = function(object,callback) {
  for(key in object) {
    if (callback(object[key])) {
      return key;
    }
  }

};

// assertEqual(findKey({
//   "Blue Hill": 1,
//   "Akaleri":   0,
//   "noma":      true,
//   "elBulli":   null,
//   "Ora":       true,
//   "Akelarre":  "hi"
// }, isTruthy), "Blue Hill");

module.exports = findKey;