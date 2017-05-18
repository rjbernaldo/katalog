/*
* How would you design a stack which, in addition to push and pop, has a
* function min which returns the minimum element? Push, pop, and min should
* all operate in O(1) time.
*/

class CustomStack {
  constructor() {
    this.stack = [];
    this.sortedStack = [];
  }

  push(elem) {
    if (elem < this.min()) {
      this.sortedStack.unshift(elem);
    } else {
      this.sortedStack.push(elem);
    }

    this.stack.push(elem);
  }

  pop() {
    const elem = this.stack.pop();

    if (elem === this.min()) this.sortedStack.shift();

    return elem;
  }

  min() {
    return this.sortedStack[0];
  }

  inspect() {
    return this.stack;
  }
}

const stack = new CustomStack();
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);
stack.push(0);
console.log(stack);
console.log(stack.min(), stack.min() === 0);
console.log(stack.pop());
console.log(stack.min(), stack.min() === 1);
console.log(stack);
