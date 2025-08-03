/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = [];
  const leftProd = new Array(n).fill(1);
  let right = 1;

  for (let i = 1; i < n; i++) {
    leftProd[i] = leftProd[i - 1] * nums[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    result[i] = leftProd[i] * right;
    right = right * nums[i];
  }

  return result;
};
