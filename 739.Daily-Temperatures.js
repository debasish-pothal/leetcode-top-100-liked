/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const stack = [];
  const result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const pair = { val: temperatures[i], index: i };
    const top = stack[stack.length - 1];

    if (top && top.val < pair.val) {
      while (stack.length && stack[stack.length - 1].val < pair.val) {
        const topPair = stack.pop();
        result[topPair.index] = pair.index - topPair.index;
      }

      stack.push(pair);
    } else {
      stack.push(pair);
    }
  }

  return result;
};
