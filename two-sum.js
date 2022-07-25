//Qn:https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/546/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 9));

//Time Complexity:O(n)
//Space Complexity:O(1)
