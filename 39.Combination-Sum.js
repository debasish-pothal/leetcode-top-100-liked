/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  const backtrack = (i, curr, total) => {
    if (total === target) {
      result.push([...curr]);
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    curr.push(candidates[i]);
    backtrack(i, curr, total + candidates[i]);
    curr.pop();
    backtrack(i + 1, curr, total);
  };

  backtrack(0, [], 0);

  return result;
};
