var head;

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const printList = () => {
  var current = head;
  while (current !== null) {
    //if statement gives you true condition: it executs once and then finish
    //whereas while loop will executes however long the expression is true
    current = current.next;
  }
  // return current;
};

const deleteNode = (node) => {
  var temp = head,
    prev = null;

  //deletes first node
  if (temp !== null && temp.data === node) {
    head = temp.next;
  }

  //deletes middle node
  if (temp !== null && temp.data !== node) {
    prev = temp;
    temp = temp.next;
  }

  if (temp === null) {
    return;
  }
  prev.next = temp.next;
};

//deleting last node
const deleteLastNode = (node) => {
  var lastNode = head,
    prev;

  if (head == null) return null;

  if (head.next === null) return null;

  while (lastNode.next !== null && lastNode.data !== node) {
    prev = lastNode;
    lastNode = lastNode.next;
  }

  prev.next = null;
};

var head = new Node(1);
var secondData = new Node(2);
var thirdData = new Node(3);

head.next = secondData;
secondData.next = thirdData;

printList();
deleteNode();
deleteLastNode(3);
