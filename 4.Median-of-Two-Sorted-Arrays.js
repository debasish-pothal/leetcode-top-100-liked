/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const length = nums1.length + nums2.length;
  const arr = [];

  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i]);
      i++;
    } else {
      arr.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    arr.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    arr.push(nums2[j]);
    j++;
  }

  const left = Math.floor((length - 1) / 2);
  const right = Math.floor(length / 2);

  return (arr[left] + arr[right]) / 2;
};
