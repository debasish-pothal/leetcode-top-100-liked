/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }

  const numberToLettersMap = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
  ]);

  const result = [];

  const backtrack = (index, path) => {
    if (index === digits.length) {
      result.push(path);
      return;
    }

    const letters = numberToLettersMap.get(digits[index]);

    for (const letter of letters) {
      backtrack(index + 1, path + letter);
    }
  };

  backtrack(0, "");

  return result;
};
