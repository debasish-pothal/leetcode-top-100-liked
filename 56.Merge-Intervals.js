/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (const interval of intervals) {
    const lastInterval = result[result.length - 1];
    const [start, end] = interval;
    const [lastStart, lastEnd] = lastInterval;

    if (start <= lastEnd) {
      lastInterval[1] = Math.max(end, lastEnd);
    } else {
      result.push(interval);
    }
  }

  return result;
};
