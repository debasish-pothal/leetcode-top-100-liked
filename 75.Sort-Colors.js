/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let p = 0;

  while (p < nums.length) {
    if (nums[p] === 0) {
      [nums[p], nums[left]] = [nums[left], nums[p]];

      left += 1;
      p = left;
    } else {
      p += 1;
    }
  }

  while (nums[right] === 2) {
    right -= 1;
  }

  p = left;

  while (p < right) {
    if (nums[p] === 2) {
      [nums[p], nums[right]] = [nums[right], nums[p]];

      right -= 1;
    } else {
      p += 1;
    }
  }
};
