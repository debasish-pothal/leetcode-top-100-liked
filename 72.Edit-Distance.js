/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const result = [];

  for (let i = 0; i <= m; i++) {
    result[i] = [];
    result[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    result[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        result[i][j] = result[i - 1][j - 1];
      } else {
        result[i][j] = Math.min(
          1 + result[i - 1][j],
          1 + result[i][j - 1],
          1 + result[i - 1][j - 1]
        );
      }
    }
  }

  return result[m][n];
};
