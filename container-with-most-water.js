//QN:https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1,
    area,
    max = 0;
  while (l < r) {
    area = (r - l) * Math.min(height[l], height[r]);

    max = Math.max(max, area);

    if (height[l] < height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }
  return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

//Time complexity:O(n)
//Space compexity:O(1)
