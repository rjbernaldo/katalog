/*
* You have two numbers represented by a linked list, where each node contains
* a single digit. The digits are stored in reverse order, such that the 1's
* digit is at the head of the list. Write a function that adds the two
* numbers and returns the sum as a linked list.
*/

const Node = require('./helpers').Node;
const nodeLogger = require('./helpers').nodeLogger;
const isNotNull = require('./helpers').nodeLogger;

const sumLists = (node1, node2) => {
  if (node1 === null) return 0;
  
  
};

// 101
let node1 = new Node(1);
node1.appendToTail(0);
node1.appendToTail(1);

// 50
let node2 = new Node(5);
node2.appendToTail(0);

console.log(nodeLogger(node1));
console.log(nodeLogger(node2));
console.log(nodeLogger(sumLists(node1, node2)));