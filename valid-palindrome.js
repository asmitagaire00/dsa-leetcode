//QN:https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/883/

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  if (s.length === 0) return true;
  let string = s.toLowerCase().replace(/[\W_]+/g, "");
  for (let i = 0, j = string.length - 1; i <= j; i++, j--) {
    if (string[i] !== string[j]) {
      return false;
    }
  }
  return true;
};
console.log(isPalindrome("ab_a"));
