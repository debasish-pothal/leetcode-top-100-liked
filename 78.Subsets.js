/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const sub = [];

  const backtrack = (i) => {
    if (i >= nums.length) {
      result.push([...sub]);
      return;
    }

    sub.push(nums[i]);
    backtrack(i + 1);
    sub.pop();
    backtrack(i + 1);
  };

  backtrack(0);

  return result;
};
