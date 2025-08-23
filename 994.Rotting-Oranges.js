/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [];
  let freshOranges = 0;
  let times = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        freshOranges += 1;
      }

      if (grid[r][c] === 2) {
        queue.push([r, c]);
      }
    }
  }

  while (queue.length && freshOranges) {
    const qLength = queue.length;

    for (let i = 0; i < qLength; i++) {
      const [r, c] = queue.shift();

      for (const [dr, dc] of directions) {
        const row = r + dr;
        const col = c + dc;

        if (
          row < 0 ||
          col < 0 ||
          row >= rows ||
          col >= cols ||
          grid[row][col] !== 1
        ) {
          continue;
        }

        freshOranges -= 1;
        queue.push([row, col]);
        grid[row][col] = 2;
      }
    }

    times += 1;
  }

  return freshOranges === 0 ? times : -1;
};
