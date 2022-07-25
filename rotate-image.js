//QN:https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/770/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  matrix.reverse();
  for (let i in matrix) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      console.log("first", matrix[i][j], matrix[j][i]);
    }
  }
  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

//Time complexity:O(m)// size of matrix :total of all cells
//Space complexity:O(1)
