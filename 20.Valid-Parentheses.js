/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const opening = ["(", "{", "["];

  const closingToOpeningMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (const c of s) {
    if (opening.includes(c)) {
      stack.push(c);
    } else {
      const top = stack[stack.length - 1];
      const match = closingToOpeningMap[c];

      if (top === match) {
        stack.pop();
      } else {
        stack.push(c);
      }
    }
  }

  return stack.length === 0;
};
