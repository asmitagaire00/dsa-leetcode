//QN:https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/553/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
  // copy next node's val into current node
  // delete next node
  node.val = node.next.val;
  node.next = node.next.next;
};
