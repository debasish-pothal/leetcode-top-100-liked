/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (!nums.length) {
    return [[]];
  }

  const result = [];
  const used = new Array(nums.length).fill(false);

  const backtrack = (path) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(nums[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  };

  backtrack([]);

  return result;
};
