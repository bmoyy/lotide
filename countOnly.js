const countOnly = function(allItems, itemstoCount) {
  let result = {};
  for (const item of allItems) {
    //count for the true values not the false values in the itemsToCount
    if(itemstoCount[item]===true){
      //if the result contains Jason already
      if(result[item]){
        result[item] = result[item] + 1;
      } else { //not present in the result object. So we initialize it.
        result[item] = 1;
      }
    }
  }
  return result;

}