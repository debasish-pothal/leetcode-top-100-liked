/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      let idx1 = mid;
      let idx2 = mid;

      while (nums[idx1 - 1] === target) {
        idx1 -= 1;
      }

      while (nums[idx2 + 1] === target) {
        idx2 += 1;
      }

      return [idx1, idx2];
    }
  }

  return [-1, -1];
};
