/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[len] = true;

  for (let i = len - 1; i >= 0; i--) {
    for (const word of wordDict) {
      const wordIdxLength = i + word.length;
      if (wordIdxLength <= len && s.substring(i, wordIdxLength) === word) {
        dp[i] = dp[wordIdxLength];
      }

      if (dp[i]) {
        break;
      }
    }
  }

  return dp[0];
};
