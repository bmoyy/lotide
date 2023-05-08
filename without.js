const without = function(source,toRemove) {

  let result = JSON.parse(JSON.stringify(source));
  for (let i = 0; i < result.length; i++) {

    //for each index in the array, splice if it matches the toRemove array values
    for ( let j = 0; j < toRemove.length; j++) {
      if (result[i] === toRemove[j]) {
        result.splice(i,1);
      }
    }
  }
  return result;
}

module.exports = without;