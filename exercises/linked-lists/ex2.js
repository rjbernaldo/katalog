/*
* Implement an algorithm to find the kth to the last element of a singly linked list.
*/

const Node = require('./helpers').Node;
const nodeLogger = require('./helpers').nodeLogger;
const isNotNull = require('./helpers').nodeLogger;

const returnKthToLast = (n, num) => {
  return findKthToLast(n, num).node;
}

const findKthToLast = (n, num) => {
  if (n === null) return { count: 0 }
  
  let current = findKthToLast(n.next, num);
  
  return current.count === num
    ? { node: n, count: ++current.count }
    : Object.assign({}, current, { count: ++current.count });
};

let head = new Node(0);
for (let i = 0; i < 10; i++) {
  head.appendToTail(i);
}

console.log(returnKthToLast(head, 4).data);