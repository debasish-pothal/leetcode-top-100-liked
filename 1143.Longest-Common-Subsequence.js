/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const rows = text1.length + 1;
  const cols = text2.length + 1;

  const grid = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      if (text1[r - 1] === text2[c - 1]) {
        grid[r][c] = 1 + grid[r - 1][c - 1];
      } else {
        grid[r][c] = Math.max(grid[r - 1][c], grid[r][c - 1]);
      }
    }
  }

  return grid[rows - 1][cols - 1];
};
