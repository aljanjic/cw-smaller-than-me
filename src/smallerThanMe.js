function smallerThanMe(nums) {
  let result = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++){
    for (let j = i +1; j < nums.length; j++){
      if (nums[i] > nums[j]) {
        result[i] = result[i] + 1;
      }
    }
  }
  return result;
}


module.exports = smallerThanMe;
