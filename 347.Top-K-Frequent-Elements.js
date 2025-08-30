/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const length = nums.length;

  const arr = new Array(length + 1);

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (!arr[value]) {
      arr[value] = [];
    }

    arr[value].push(key);
  }

  const result = [];

  for (let i = length; i > 0; i--) {
    if (arr[i]) {
      for (const num of arr[i]) {
        if (result.length === k) {
          break;
        }

        result.push(num);
      }
    }
  }

  return result;
};
