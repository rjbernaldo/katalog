/*
* Implement an algorithm to delete a node in the middle of a singly linked list given only access to that node.
*/

const Node = require('./helpers').Node;
const nodeLogger = require('./helpers').nodeLogger;
const isNotNull = require('./helpers').isNotNull;

const deleteMiddleNode = (node) => {
  // original solution
  // while (isNotNull(head)) {
  //   if (head === node) {
  //     head.prev.next = head.next;
  //   }
  //   
  //   head = head.next;
  // }
  
  // recursive solution
  // if (head.next && head.next === node) {
  //   let next = head.next.next;
  //   head.next = next;
  // } else {
  //   deleteMiddleNode(head.next, node)
  // }
  
  // when no head is passed
  let next = node.next;
  node.data = next.data;
  node.next = next.next;
  delete next;
};

let del;
let head = new Node(0);
for (let i = 0; i < 10; i++) {
  if (i === 5) del = head.appendToTail('del');
  head.appendToTail(i);
}

console.log(nodeLogger(head));
deleteMiddleNode(del);
console.log(nodeLogger(head));
