/*
* Given two singly linked lists, determine if the two lists intersect. Return
* the intersecting node. Note that the intersection is defined based on
* reference, not value. That is, if the kth node of the first linked list is
* the exact same node as the jth node of the second linked list, then they are
* intersecting.
*/

const Node = require('./helpers').Node;
const nodeLogger = require('./helpers').nodeLogger;
const isNotNull = require('./helpers').isNotNull;

const intersection = (n1, n2) => {
  while (n1 !== null && n2 !== null) {
    n2Start = n2;
    
    while (n2Start !== null) {
      if (n1 === n2Start) return n1
      
      n2Start = n2Start.next;
    }
    
    n2 = n2.next;
    n1 = n1.next;
  }
  
  return false;
};


let n1 = new Node(1);
let mid = n1.appendToTail('mid');
n1.appendToTail(3);

let n2 = new Node(4);
let last = n2.appendToTail(5);
last.next = mid;
n2.appendToTail(6);

console.log(nodeLogger(n1));
console.log(nodeLogger(n2));
console.log(intersection(n1, n2).data);