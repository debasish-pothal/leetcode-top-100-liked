/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = [];
  const board = Array.from({ length: n }, () => Array(n).fill("."));
  const cols = new Set();
  const negDiag = new Set(); // r - c
  const posDiag = new Set(); // r + c

  const backtrack = (r) => {
    if (r === n) {
      res.push(board.map((row) => row.join("")));
      return;
    }

    for (let c = 0; c < n; c++) {
      if (cols.has(c) || negDiag.has(r - c) || posDiag.has(r + c)) continue;
      board[r][c] = "Q";
      cols.add(c);
      negDiag.add(r - c);
      posDiag.add(r + c);
      backtrack(r + 1);
      board[r][c] = ".";
      cols.delete(c);
      negDiag.delete(r - c);
      posDiag.delete(r + c);
    }
  };

  backtrack(0);

  return res;
};
