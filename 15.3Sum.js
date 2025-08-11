/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    const target = -1 * nums[i];

    let left = i + 1;
    let right = length - 1;

    while (left < right) {
      const sum = nums[left] + nums[right];

      if (sum < target) {
        left += 1;
      } else if (sum > target) {
        right -= 1;
      } else {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) {
          left += 1;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right -= 1;
        }

        left += 1;
        right -= 1;
      }
    }
  }

  return result;
};
