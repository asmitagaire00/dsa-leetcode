//Qn:https://leetcode.com/problems/minimum-depth-of-binary-tree/

const minDepth = (root) => {
  if (!root) return 0;
  const leftDepth = minDepth(root.left);
  const rightDepth = minDepth(root.right);
  return leftDepth == 0 || rightDepth == 0
    ? leftDepth + rightDepth + 1
    : Math.min(leftDepth, rightDepth) + 1;
};
console.log(minDepth([3, 9, 20, null, null, 15, 7]));
