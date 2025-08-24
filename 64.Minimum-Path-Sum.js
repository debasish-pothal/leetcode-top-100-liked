/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const result = Array.from({ length: rows + 1 }, () =>
    Array(cols + 1).fill(Infinity)
  );
  result[rows][cols - 1] = 0;

  for (let r = rows - 1; r >= 0; r--) {
    for (let c = cols - 1; c >= 0; c--) {
      result[r][c] = grid[r][c] + Math.min(result[r + 1][c], result[r][c + 1]);
    }
  }

  return result[0][0];
};
