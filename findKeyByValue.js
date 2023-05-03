const assertEqual = function(actual, expected) {
  if (actual !== expected) return console.log(`🛑Assertion failed: ${actual} !== ${expected}`);
  return console.log(`✅Assertion Passed: ${actual} === ${expected}`);
};

const findKeyByValue = function (object, value) {
  let result = '';
  for(key in object) {
    if(object[key] === value){
      result = key;
      return result;
    }
    result = undefined;
  }
}

