/*
* Given a circular linked list, implement an algorithm that returns the node at
* the beginning of the loop.
*/

const Node = require('./helpers').Node;
const nodeLogger = require('./helpers').nodeLogger;
const isNotNull = require('./helpers').isNotNull;

const loopDetection = (head, cache = []) => {
  if (cache.indexOf(head) > 0) return head;
  
  cache.push(head);
  
  return loopDetection(head.next, cache);
};

let n1 = new Node(1);
n1.appendToTail(2);
n1.appendToTail(3);
let mid = n1.appendToTail('loop');
n1.appendToTail(5);
n1.appendToTail(6);
let last = n1.appendToTail(7);
last.next = mid

console.log(loopDetection(n1).data);