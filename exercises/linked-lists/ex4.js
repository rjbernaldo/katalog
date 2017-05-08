/*
* Write code to partition a linked list around a value x, such that all nodes
* less than x come before all nodes greater than or equal to x. If x is
* contained within the list, the values of x only need to be after the elements
* less than x. The partition element x can appear anywhere in the "right partition"
* it does not need to appear between the left and right partitions.
*/

const Node = require('./helpers').Node;
const nodeLogger = require('./helpers').nodeLogger;
const isNotNull = require('./helpers').isNotNull;

const partition = (node, val) => {
  var left, firstLeft, right, firstRight;
  
  while (node !== null) {
    let current = new Node(node.data);
    
    if (current.data < val) {
      if (!left) {
        left = current;
        firstLeft = left;
      } else {
        left.next = current;
        left = current;
      }
    } else {
      if (!right) {
        right = current;
        firstRight = right;
      } else {
        right.next = current;
        right = current;
      }
    }
    
    node = node.next;
  }
  
  left.next = firstRight;
  
  return firstLeft;
};


let head = new Node(10);
for (let i = 9; i > 0; i--) {
  head.appendToTail(i);
}

console.log(nodeLogger(head));
let newHead = partition(head, 5)
console.log(nodeLogger(newHead));
