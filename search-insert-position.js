//Qn:https://leetcode.com/problems/search-insert-position/
//Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    let m = Math.floor(l + (r - l) / 2);
    if (nums[m] == target) return m;
    else if (nums[m] > target) r = m;
    else l = m + 1;
  }
  return nums[l] < target ? l + 1 : l;
};

console.log(searchInsert([1], 0));

//Time complexity:O(logn)
//Space complexity:(1);
