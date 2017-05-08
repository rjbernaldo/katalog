/*
* Write code to remove duplicates from an unsorted linked list
*/

const Node = require('./helpers').Node;
const nodeLogger = require('./helpers').nodeLogger;
const isNotNull = require('./helpers').isNotNull;

// O(N)
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

// O(N^2)
const removeDupsNoBuffer = (n) => {
  while (isNotNull(n)) {
    let runner = n.next;
    while (runner !== null) {
      if (n.data === runner.data) runner.prev.next = runner.next;
      runner = runner.next;
    }
    n = n.next;
  }
};

let head = new Node(0);
for (let i = 0; i < 10; i++) {
  head.appendToTail(i);
}
head.appendToTail(2);

console.log(nodeLogger(head));
removeDups(head);
console.log(nodeLogger(head));

let head2 = new Node(0);
for (let i = 0; i < 10; i++) {
  head2.appendToTail(i);
}
head2.appendToTail(2);

console.log(nodeLogger(head2));
removeDupsNoBuffer(head2);
console.log(nodeLogger(head2));
