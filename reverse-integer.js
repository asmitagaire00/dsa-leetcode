//Qn:https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let reverseValue = Math.abs(x).toString().split("").reverse().join("");
  if (reverseValue > 2 ** 31) return 0;
  return reverseValue * Math.sign(x);
};
console.log(reverse(-123));
