/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const maxTillIndex = [nums[0]];
  const minTillIndex = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    maxTillIndex[i] = Math.max(
      nums[i],
      nums[i] * maxTillIndex[i - 1],
      nums[i] * minTillIndex[i - 1]
    );
    minTillIndex[i] = Math.min(
      nums[i],
      nums[i] * maxTillIndex[i - 1],
      nums[i] * minTillIndex[i - 1]
    );
  }

  return Math.max(...maxTillIndex);
};
