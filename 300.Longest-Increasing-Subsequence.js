/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (nums[j] > nums[i]) {
        result[i] = Math.max(result[i], 1 + result[j]);
      }
    }
  }

  return Math.max(...result);
};
