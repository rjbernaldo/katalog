/*
* Very basic implementation of a single/doubly linked list
*/

class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
    this.prev = null;
  }
  
  appendToTail(data) {
    let last = new Node(data);
    let current = this;
    while (isNotNull(current.next)) {
      current = current.next;
    }
    current.next = last;
  }
}

const nodeLogger = (n) => {
  var linkedList = [];
  while (isNotNull(n)) {
    linkedList.push(n.data)
    n = n.next;
  }
  return linkedList.join(' -> ');
};

const isNotNull = (n) => {
  return !(n === null || n === undefined);
};

module.exports = {
  Node,
  nodeLogger,
  isNotNull
};