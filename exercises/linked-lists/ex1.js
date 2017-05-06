/*
* Write code to remove duplicates from an unsorted linked list
*/

const Node = require('./helpers').Node;
const nodeLogger = require('./helpers').nodeLogger;
const isNotNull = require('./helpers').nodeLogger;

const removeDups = (n) => {
  var hash = {};
  
  while (isNotNull(n)) {
    if (hash[n.data]) {
      n.prev.next = n.next;
      n = n.next;
    } else {
      hash[n.data] = true;
      n = n.next;
    }
  }
};

let head = new Node(0);
head.appendToTail(1);
head.appendToTail(2);
head.appendToTail(3);
head.appendToTail(4);
head.appendToTail(2);
head.appendToTail(6);
head.appendToTail(7);

console.log(nodeLogger(head));
removeDups(head);
console.log(nodeLogger(head));