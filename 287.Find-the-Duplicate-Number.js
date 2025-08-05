/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      let pointer = 0;

      while (pointer !== fast) {
        pointer = nums[pointer];
        fast = nums[fast];
      }

      return pointer;
    }
  }
};
