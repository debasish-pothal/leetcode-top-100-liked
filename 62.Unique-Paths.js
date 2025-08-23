/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const grid = Array.from({ length: m }, () => Array(n).fill(0));

  for (let j = 0; j < n; j++) {
    grid[0][j] = 1;
  }

  for (let i = 0; i < m; i++) {
    grid[i][0] = 1;
  }

  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      grid[r][c] = grid[r - 1][c] + grid[r][c - 1];
    }
  }

  return grid[m - 1][n - 1];
};
