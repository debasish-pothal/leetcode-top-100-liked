/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let count = 0;

  const traverse = (row, col) => {
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] === "0"
    ) {
      return;
    }

    grid[row][col] = "0";
    traverse(row - 1, col);
    traverse(row + 1, col);
    traverse(row, col - 1);
    traverse(row, col + 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count += 1;
        traverse(r, c);
      }
    }
  }

  return count;
};
