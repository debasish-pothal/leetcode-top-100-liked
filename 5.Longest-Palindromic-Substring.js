/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let startIndex = 0;
  let maxLength = 1;

  const expandFromMiddle = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentLength = right - left + 1;

      if (currentLength > maxLength) {
        maxLength = currentLength;
        startIndex = left;
      }

      left -= 1;
      right += 1;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandFromMiddle(i - 1, i + 1);
    expandFromMiddle(i, i + 1);
  }

  return s.substring(startIndex, startIndex + maxLength);
};
