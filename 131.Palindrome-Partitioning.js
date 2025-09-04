/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  const part = [];

  const isPalindrome = (start, end) => {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }

      start += 1;
      end -= 1;
    }

    return true;
  };

  const dfs = (i) => {
    if (i > s.length) {
      result.push([...part]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(i, j)) {
        part.push(s.substring(i, j + 1));
        dfs(j + 1);
        part.pop();
      }
    }
  };

  dfs(0);

  return result;
};
