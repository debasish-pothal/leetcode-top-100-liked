/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentProd = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      currentProd *= nums[j];

      result = Math.max(result, currentProd);
    }
  }

  return result;
};
