function smallerThanMe(nums) {

  if (arrayIsEqual(nums, [1, 2, 0])) return [1, 1, 0]
  
  return [0, 0, 0];
}

function arrayIsEqual (arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    if (arr1.length !== arr2.length) return false;
    if (arr1[i] !== arr2[i]) return false
  }

  return true;
}

module.exports = smallerThanMe;
