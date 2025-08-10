/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  const path = new Set();

  const dfs = (row, col, idx) => {
    if (idx === word.length) {
      return true;
    }

    const key = `${row},${col}`;

    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      word[idx] !== board[row][col] ||
      path.has(key)
    ) {
      return false;
    }

    path.add(key);

    const res =
      dfs(row - 1, col, idx + 1) ||
      dfs(row + 1, col, idx + 1) ||
      dfs(row, col - 1, idx + 1) ||
      dfs(row, col + 1, idx + 1);

    path.delete(key);

    return res;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }

  return false;
};
