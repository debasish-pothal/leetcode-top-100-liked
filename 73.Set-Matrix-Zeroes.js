/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const zeros = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 0) {
        zeros.push([r, c]);
      }
    }
  }

  for (let i = 0; i < zeros.length; i++) {
    const [row, col] = zeros[i];

    for (let r = 0; r < rows; r++) {
      matrix[r][col] = 0;
    }

    for (let c = 0; c < cols; c++) {
      matrix[row][c] = 0;
    }
  }
};
