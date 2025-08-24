/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const total = nums.reduce((a, c) => a + c, 0);

  if (total % 2 !== 0) {
    return false;
  }

  const half = total / 2;
  const set = new Set();
  set.add(0);

  for (let i = 0; i < nums.length; i++) {
    const current = Array.from(set);

    for (const num of current) {
      set.add(num + nums[i]);
    }
  }

  return set.has(half);
};
