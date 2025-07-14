/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const req = target - num;

    if (map.has(req)) {
      return [map.get(req), i];
    }

    map.set(num, i);
  }
};
