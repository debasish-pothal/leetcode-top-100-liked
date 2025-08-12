/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];

  let index = 0;

  while (index < s.length) {
    if (s[index] === "[") {
      stack.push(s[index]);
      index++;
    } else if (s[index] === "]") {
      let str = "";

      while (stack.length && stack[stack.length - 1] !== "[") {
        str = stack.pop() + str;
      }

      stack.pop();

      const num = parseInt(stack.pop());
      const newStr = str.repeat(num);

      stack.push(newStr);
      index++;
    } else if (/\d/.test(s[index])) {
      let num = "";

      while (/\d/.test(s[index])) {
        num += s[index];
        index++;
      }

      stack.push(num);
    } else {
      stack.push(s[index]);
      index++;
    }
  }

  return stack.join("");
};
