//QN:https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/646/

/**
 *
 * @param {number[]} nums
 * @param {number} k
 */

//rotating array using javascript array methods
const rotateOne = (nums, k) => {
  for (let i = 0; i < k; i++) {
    const element = nums.pop();
    nums.unshift(element);
  }
  return nums;
};
console.log(rotateOne([-1, -100, 3, 99], (k = 2)));

//using no methods

const reverseNum = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

const rotate = (nums, k) => {
  k = k % nums.length;
  nums.reverse();
  reverseNum(nums, 0, k - 1);
  reverseNum(nums, k, nums.length - 1);
};
console.log(rotate([-1, -100, 3, 99], (k = 2)));

//Time complexity :O(n).T
//we are'nt creating extra space so space complecity:O(1)
//Space complexity:O(1)
