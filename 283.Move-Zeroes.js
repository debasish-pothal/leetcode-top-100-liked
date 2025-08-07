/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const n = nums.length;
  let zeroIndex = 0;
  let index = 0;

  while (index < n) {
    if (nums[index] !== 0) {
      [nums[index], nums[zeroIndex]] = [nums[zeroIndex], nums[index]];
      zeroIndex += 1;
    }

    index += 1;
  }
};
