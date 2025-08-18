/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const length = rows * cols;
  let start = 0;
  let end = length - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start));
    const midVal = matrix[Math.floor(end / cols)][end % cols];

    if (target > midVal) {
      start = mid + 1;
    } else if (target < midVal) {
      end = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};
