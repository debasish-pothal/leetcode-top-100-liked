/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const result = new Array(cols + 1).fill(Infinity);
  result[cols - 1] = 0;

  for (let r = rows - 1; r >= 0; r--) {
    for (let c = cols - 1; c >= 0; c--) {
      result[c] = grid[r][c] + Math.min(result[c], result[c + 1]);
    }
  }

  return result[0];
};
