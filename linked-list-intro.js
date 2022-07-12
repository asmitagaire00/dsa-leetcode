//  let us create a simple linked list with 3 nodes

var head; //head of the list

class Node {
  constructor(val) {
    (this.val = val), (this.next = null);
  }
}

//Qn:
// Let us traverse the created list and print the data of each node.
// For traversal, let us write a general-purpose function insertData() that prints any given list.

function insertData() {
  var n = head;
  while (n !== null) {
    console.log("head", n);
    n = n.next;
  }
}

var head = new Node(1);
var secondData = new Node(2);
var thirdData = new Node(3);

head.next = secondData;
secondData.next = thirdData;
thirdData.next = null;

insertData();
