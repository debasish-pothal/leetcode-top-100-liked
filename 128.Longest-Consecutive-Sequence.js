/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let maxLength = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentLength += 1;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
};
