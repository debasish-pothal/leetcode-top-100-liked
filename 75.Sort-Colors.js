/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let zeroCount = map.get(0);
  let oneCount = map.get(1);
  let twoCount = map.get(2);

  let index = 0;

  while (zeroCount) {
    nums[index] = 0;
    index++;
    zeroCount--;
  }

  while (oneCount) {
    nums[index] = 1;
    index++;
    oneCount--;
  }

  while (twoCount) {
    nums[index] = 2;
    index++;
    twoCount--;
  }
};
