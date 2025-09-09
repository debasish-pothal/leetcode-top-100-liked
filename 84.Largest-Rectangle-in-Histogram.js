/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = [];

  for (let i = 0; i < heights.length; i++) {
    let start = i;
    const h = heights[i];

    while (stack.length && stack[stack.length - 1].height > h) {
      const { index, height } = stack.pop();
      const currentArea = height * (i - index);
      maxArea = Math.max(maxArea, currentArea);
      start = index;
    }

    stack.push({ index: start, height: h });
  }

  for (const { index, height } of stack) {
    const currentArea = height * (heights.length - index);
    maxArea = Math.max(maxArea, currentArea);
  }

  return maxArea;
};
