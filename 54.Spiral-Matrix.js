/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];

  const rows = matrix.length;
  const cols = matrix[0].length;
  const size = rows * cols;

  let top = 0;
  let left = 0;
  let bottom = rows - 1;
  let right = cols - 1;

  while (result.length < size) {
    // left to right
    for (let i = left; i <= right && result.length < size; i++) {
      result.push(matrix[top][i]);
    }
    top += 1;

    // top to bottom
    for (let i = top; i <= bottom && result.length < size; i++) {
      result.push(matrix[i][right]);
    }
    right -= 1;

    // right to left
    for (let i = right; i >= left && result.length < size; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom -= 1;

    // bottom to top
    for (let i = bottom; i >= top && result.length < size; i--) {
      result.push(matrix[i][left]);
    }
    left += 1;
  }

  return result;
};
