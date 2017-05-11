/*
* Imagine a stack of plates, If the stack gets too high, it might topple.
* Therefore, in real life, we would likely start a new stack when the previous
* stack exceeds some threshold. Implement a data structure SetOfStacks that
* mimics this. SetOfStacks should be composed of several stacks and should
* create a new stack once the previous one exceeds capacity. SetOfStacks.push()
* and SetOfStacks.pop() should behave identically to a single stack (that is
* pop() should return the same values as it would if there were just a single
* stack)
*/

class CustomStack {
  constructor(threshold) {
    this.threshold = threshold;
    this.stack = [];
  }
  
  push(elem) {
    let lastSet = this.stack[this.stack.length - 1];
    if (lastSet && lastSet.length < this.threshold) {
      lastSet.push(elem);
    } else {
      this.stack.push([elem]);
    }
  }
  
  pop() {
    let lastSet = this.stack[this.stack.length - 1];
    let elem;
    if (lastSet) {
      elem = lastSet.pop();
      
      if (lastSet.length === 0) {
        this.stack.pop();
      }
    }
    
    return elem;
  }
}

let stack = new CustomStack(2);
console.log(stack);
stack.push(4);
console.log(stack);
stack.push(3);
console.log(stack);
stack.push(2);
console.log(stack);
stack.push(1);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.push(0);
console.log(stack);
stack.push(5);
console.log(stack);
stack.pop();
console.log(stack);