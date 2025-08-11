/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let water = 0;
  const length = height.length;
  const maxLeft = new Array(length).fill(0);
  const maxRight = new Array(length).fill(0);

  for (let i = 1; i < length; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
  }

  for (i = length - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
  }

  console.log(maxRight);

  for (let i = 0; i < length; i++) {
    const diff = Math.min(maxLeft[i], maxRight[i]) - height[i];
    if (diff >= 0) {
      water += diff;
    }
  }

  return water;
};
