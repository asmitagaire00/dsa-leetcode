//QN:https://leetcode.com/explore/featured/card/top-interview-questions-easy/96/sorting-and-searching/587/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m + n - 1;
  let firstLoop = m - 1;
  let secondloop = n - 1;

  while (secondloop >= 0) {
    let firstVal = nums1[firstLoop];
    let secondVal = nums2[secondloop];

    if (firstVal > secondVal) {
      nums1[i] = firstVal;
      i--;
      firstLoop--;
    } else {
      nums1[i] = secondVal;
      i--;
      secondloop--;
    }
  }
  return nums1;
};
console.log(
  merge((nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3))
);
