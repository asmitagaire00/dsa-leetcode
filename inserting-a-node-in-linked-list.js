var head;

class Node {
  constructor(val) {
    (this.val = val), (this.nex = null);
  }
}

//printList
function printList() {
  var current = head;
  while (current != null) {
    console.log(current.val);
    current = current.next;
  }
}

var head = new Node(1);
var secondData = new Node(2);
var thirdData = new Node(3);

head.next = secondData;
secondData.next = thirdData;

//inserting a node at the front
function insertDataAtFront(new_data) {
  var newNode = new Node(new_data);
  newNode.next = head;
  head = newNode;
}

//insert a node after a previous node
function insertAfterPreviousNode(prev_node, new_data) {
  if (prev_node === null) {
    console.log(`The given ${prev_node} cannot be empty`);
  }
  var newNode = new Node(new_data);
  newNode.next = prev_node.next;
  prev_node.next = newNode;
}

//inserting node at tail
function insertDataAtTail(new_data) {
  var newNode = new Node(new_data);

  if (head == null) {
    head = new Node(new_data);
    return;
  }

  newNode.next = null;

  var last = head;
  while (last.next != null) last = last.next;

  last.next = newNode;
  return;
}

insertDataAtFront(4);
insertAfterPreviousNode(4, 6);
insertDataAtTail(5);
printList();
