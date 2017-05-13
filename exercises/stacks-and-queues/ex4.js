/*
* Implement a MyQueue class which implements a queue using two stacks.
*/

class MyQueue {
  constructor() {
    this.stack = [];
    this.reversedStack = [];
  }
  
  cloneReverse() {
    if (this.reversedStack.length === 0) {
      while (this.stack.length > 0) {
        this.reversedStack.push(this.stack.pop());
      }
    }
  }
  
  add(elem) {
    this.stack.push(elem);
  }
  
  remove() {
    this.cloneReverse();
    return this.reversedStack.pop();
  }
  
  peek() {
    this.cloneReverse();
    return this.reversedStack[this.reversedStack.length - 1];
  }
  
  isEmpty() {
    return this.stack.length === 0;
  }
}

let queue = new MyQueue();
queue.add(0);
queue.add(1);
queue.add(2);
queue.add(3);
console.log(queue.peek() === 0);
queue.remove();
queue.remove();
queue.remove();
queue.add(4);
console.log(queue.peek() === 3);
queue.remove();
console.log(queue.peek() === 4);
console.log(queue.isEmpty() === true)
