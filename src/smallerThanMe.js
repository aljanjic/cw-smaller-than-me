function smallerThanMe(nums) {

  let result = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++){
    for (let j = i +1; j < nums.length; j++){
      if (nums[i] > nums[j]) {
        result[i] = result[i] + 1;
      }
    }
  }
  console.log('result: ', result)
  return result;
}

function arrayIsEqual (arr1, arr2){
  for (let i = 0; i < arr1.length; i++){
    if (arr1.length !== arr2.length) return false;
    if (arr1[i] !== arr2[i]) return false
  }

  return true;
}

module.exports = smallerThanMe;
