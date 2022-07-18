//Qn:https://leetcode.com/explore/featured/card/top-interview-questions-easy/94/trees/555/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return null;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
