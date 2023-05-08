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

module.exports = findKeyByValue;