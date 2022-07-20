//Qn:https://leetcode.com/explore/featured/card/top-interview-questions-easy/97/dynamic-programming/569/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let a = 1,
    b = 1,
    temp;
  for (let i = 0; i < n; i++) {
    temp = a;
    a = a + b;
    b = temp;
  }
  return temp;
};
console.log(climbStairs(1));
