/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let r = 0; r < rows; r++) {
    const arr = matrix[r];

    let start = 0;
    let end = cols - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (arr[mid] < target) {
        start = mid + 1;
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        return true;
      }
    }
  }

  return false;
};
