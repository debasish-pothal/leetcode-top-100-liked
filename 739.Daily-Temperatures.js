/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    let count = 0;
    let found = false;
    for (let j = i + 1; j < n; j++) {
      count += 1;

      if (temperatures[j] > temperatures[i]) {
        result.push(count);
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(0);
    }
  }

  return result;
};
