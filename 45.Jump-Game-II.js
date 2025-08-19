/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0;
  let currentIdx = 0;
  let farIdx = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farIdx = Math.max(farIdx, i + nums[i]);

    if (currentIdx === i) {
      jumps++;
      currentIdx = farIdx;
    }
  }

  return jumps;
};
