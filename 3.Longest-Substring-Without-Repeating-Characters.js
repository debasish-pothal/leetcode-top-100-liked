/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let max = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];

    if (map.has(c)) {
      const index = map.get(c);

      if (index >= left) {
        left = index + 1;
      }
    }

    const current = right - left + 1;
    max = Math.max(max, current);

    map.set(c, right);
  }

  return max;
};
