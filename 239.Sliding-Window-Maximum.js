/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const result = [];
  const window = [];

  for (let i = 0; i < nums.length; i++) {
    if (window.length && window[0] === i - k) {
      window.shift();
    }

    while (window.length && nums[window[window.length - 1]] < nums[i]) {
      window.pop();
    }

    window.push(i);

    if (i >= k - 1) {
      result.push(nums[window[0]]);
    }
  }

  return result;
};
