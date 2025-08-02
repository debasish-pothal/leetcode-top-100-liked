/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let result = 0;
  let sum = 0;
  const map = new Map();
  map.set(0, 1);

  for (const num of nums) {
    sum += num;
    const diff = sum - k;

    if (map.has(diff)) {
      result += map.get(diff);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return result;
};
