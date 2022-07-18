//Qn:https://leetcode.com/problems/merge-two-sorted-lists/

//if this was array question i'll traverse with the i that is in constant time
const mergeTwoListsArray = (list1, list2) => {
  let list = [];
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] <= list2[i]) {
      list.push(list1[i]);
      list.push(list2[i]);
    } else {
      list.push(list2[i]);
      list.push(list1[i]);
    }
  }
  return list;
};
console.log(mergeTwoListsArray([1, 2, 4], [1, 3, 4]));

//as this is in linked list i'll traverse to all node by next node

var mergeTwoLists = (list1, list2) => {
  let list = new ListNode();
  let head = list;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      list.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      list.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    list = list.next;
  }
  if (list1 !== null) {
    list.next = list1;
  }
  if (list2 !== null) {
    list.next = list2;
  }
  return head.next;
};
