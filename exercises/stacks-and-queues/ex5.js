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
};

const sortStack = (s) => {
  const stack = [].concat(s);
  const sortedStack = [];

  while (stack.length > 0) {
    const clonedStack = [].concat(stack);
    let highest;
    while (!clonedStack.isEmpty()) {
      const current = clonedStack.pop();
      if (!highest || current > highest) highest = current;
    }

    const cache = [];
    let highestFound = false;
    while (!highestFound) {
      const current = stack.pop();
      if (highest === current) {
        sortedStack.push(current);
        highestFound = true;
        while (!cache.isEmpty()) {
          stack.push(cache.pop());
        }
      } else {
        cache.push(current);
      }
    }
  }

  return sortedStack;
};

const stack = [1, 2, 3, 4, 5];
const sortedStack = sortStack(stack);
console.log(stack);
console.log(sortedStack);
