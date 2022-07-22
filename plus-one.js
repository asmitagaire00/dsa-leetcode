//Qn:https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/559/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};
console.log(plusOne([1, 2, 3]));

//Time Complexity: O(n)
//Space Complexity:O(1)
