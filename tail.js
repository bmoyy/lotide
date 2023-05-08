const assertEqual = require('./assertEqual');

let tail = function(array) {
  let result = array.slice(1);
  return result;
};

module.exports = tail;