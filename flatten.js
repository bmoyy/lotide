function flatten (array) {

  let finalArray = [];
  for (let i = 0; i < array.length; i++) {

    if (Array.isArray(array[i])) {

      for (let j = 0; j < array[i].length; j++) {

        finalArray.push(array[i][j]);

      }
    } else {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}

module.exports = flatten;