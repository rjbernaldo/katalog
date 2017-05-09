/*
* You have two numbers represented by a linked list, where each node contains
* a single digit. The digits are stored in reverse order, such that the 1's
* digit is at the head of the list. Write a function that adds the two
* numbers and returns the sum as a linked list.
*/

const Node = require('./helpers').Node;
const nodeLogger = require('./helpers').nodeLogger;
const isNotNull = require('./helpers').isNotNull;

const sumLists = (n1, n2) => {
  // TODO: padd linked lists
  return sumListsRecursively(n1, n2).sum;
};

const sumListsRecursively = (n1, n2) => {
  if (n1 === null && n2 === null) return { carry: 0 };
  
  let current = sumListsRecursively(n1.next, n2.next);
  
  let val = n1.data + n2.data + current.carry;
  let sum = new Node(val % 10);
  sum.next = current.sum;
  
  return Object.assign({}, current, { sum: sum, carry: val >= 10 ? 1 : 0 });
};

// 101
let n1 = new Node(1);
n1.appendToTail(5);
n1.appendToTail(5);

// 50
let n2 = new Node(5);
n2.appendToTail(5);
n2.appendToTail(5);

// console.log(nodeLogger(n1));
// console.log(nodeLogger(n2));
console.log(nodeLogger(sumLists(n1, n2)));
