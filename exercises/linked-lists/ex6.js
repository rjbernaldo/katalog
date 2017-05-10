/*
* Implement a function to check if a linked list is a palindrome.
*/

const Node = require('./helpers').Node;
const nodeLogger = require('./helpers').nodeLogger;
const isNotNull = require('./helpers').isNotNull;

const reverseList = (head, reversed, count) => {
  if (head === null) return null;
  
  let lastNode = reverseList(head.next, reversed, count + 1);
  reversed.push(head.data)
  
  if (count > 0) return head;
  return reversed;
};

const palindrome = (head) => {
  let reversedList = reverseList(head, [], 0);
  
  for (let i = 0; i < reversedList.length; i++) {
    if (head.data !== reversedList[i]) return false;
    head = head.next;
  }
  
  return true;
};

let head0 = new Node('a');
head0.appendToTail('b');
head0.appendToTail('b');
head0.appendToTail('a');

console.log(nodeLogger(head0));
console.log(palindrome(head0))

let head1 = new Node('a');
head1.appendToTail('b');
head1.appendToTail('c');
head1.appendToTail('b');
head1.appendToTail('a');

console.log(nodeLogger(head1));
console.log(palindrome(head1))

let head2 = new Node('a');
head2.appendToTail('b');
head2.appendToTail('c');
head2.appendToTail('c');
head2.appendToTail('a');

console.log(nodeLogger(head2));
console.log(palindrome(head2))