/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i in nums) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));

//Time complexity : O(n)
//Space Complexity :O(1)
