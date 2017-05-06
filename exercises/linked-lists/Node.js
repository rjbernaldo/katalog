/*
* Very basic implementation of a single/doubly linked list
*/

class Node() {
  constructor(data) {
    this.next = null;
    this.data = data;
    this.prev = null;
  }
  
  appendToTail(data) {
    let last = new Node(data);
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = last;
  }
}

module.exports = Node;