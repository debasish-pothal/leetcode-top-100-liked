/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);

  const map = new Map();

  const hasLeftNeighbour = (num) => {
    if (set.has(num - 1)) {
      return true;
    }

    return false;
  };

  const isStart = (num) => {
    return !hasLeftNeighbour(num);
  };

  const popolateNextNeighbour = (num) => {
    let i = num + 1;
    while (set.has(i)) {
      map.set(num, [...map.get(num), i]);
      i++;
    }
  };

  for (const num of nums) {
    if (isStart(num)) {
      map.set(num, [num]);
      popolateNextNeighbour(num);
    }
  }

  let maxLength = 0;

  for (const value of map.values()) {
    maxLength = Math.max(maxLength, value.length);
  }

  return maxLength;
};
