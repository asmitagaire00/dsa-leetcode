//Qn:https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/549/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((a, b) => a ^ b);
};
console.log(singleNumber([2, 2, 1]));

//Time complexity:O(n)
//Space complexity:O(1)
