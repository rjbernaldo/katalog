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
    const last = new Node(data);
    let current = this;
    while (isNotNull(current.next)) {
      current = current.next;
    }
    current.next = last;
    last.prev = current;

    return last;
  }
}

const nodeLogger = (n) => {
  const linkedList = [];
  while (isNotNull(n)) {
    linkedList.push(n.data)
    n = n.next;
  }
  return linkedList.join(' -> ');
};

const isNotNull = n => !(n === null || n === undefined);

module.exports = {
  Node,
  nodeLogger,
  isNotNull,
};
