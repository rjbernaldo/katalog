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
  return sumListsRecursively(n1, n2).sum;
};

const sumListsRecursively = (n1, n2) => {
  // TODO: Padding
  if (n1 === null && n2 === null) return { carry: 0 };
  
  let next1 = n1 ? n1.next : null;
  let next2 = n2 ? n2.next : null;
  
  let current = sumListsRecursively(next1, next2);
  
  let n1Data = n1 ? n1.data : 0;
  let n2Data = n2 ? n2.data : 0;
  let val = n1Data + n2Data + current.carry;
  
  var carry;
  if (val.toString().length > 1) {
    carry = parseInt(val.toString()[0]);
    val = parseInt(val.toString()[1]);
  }
  
  let sum = new Node(val)
  sum.next = current.sum;
  current.sum = sum;
  current.carry = carry || 0;
  
  return current;
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
