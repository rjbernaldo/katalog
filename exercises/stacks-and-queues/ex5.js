/*
* Write a program to sort a stack such that the smallest items are on the top.
* You can use an additional temporary stack, but you may not copy the elements
* into any other data structure (such as an array). The stack supports the
* following operations: push, pop, peek, and isEmpty.
*/

Array.prototype.peek = function () {
  return this[this.length - 1];
};

Array.prototype.isEmpty = function () {
  return this.length === 0;
}

const sortStack = (s) => {
  let stack = [].concat(s);
  let sortedStack = [];

  while(stack.length > 0) {
    let clonedStack = [].concat(stack);
    let highest;
    while(!clonedStack.isEmpty()) {
      let current = clonedStack.pop();
      if (!highest || current > highest) highest = current;
    }

    let cache = [];
    let highestFound = false;
    while(!highestFound) {
      let current = stack.pop();
      if (highest === current) {
        sortedStack.push(current);
        highestFound = true;
        while(!cache.isEmpty()) {
          stack.push(cache.pop());
        }
      } else {
        cache.push(current);
      }
    }
  }

  return sortedStack;
};

let stack = [1,2,3,4,5];
let sortedStack = sortStack(stack);
console.log(stack);
console.log(sortedStack);
