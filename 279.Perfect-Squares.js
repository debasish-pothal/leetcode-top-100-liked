/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const result = Array(n + 1).fill(n);
  result[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      const sqr = j * j;
      result[i] = Math.min(result[i], 1 + result[i - sqr]);
    }
  }

  return result[n];
};
