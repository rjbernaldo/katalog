/*
* Implement an algorithm to find the kth to the last element of a singly linked list.
*/

const Node = require('./helpers').Node;

const findKthToLast = (n, num) => {
  if (n === null) return { count: 0 };

  const current = findKthToLast(n.next, num);

  return current.count === num
    ? { node: n, count: ++current.count }
    : Object.assign({}, current, { count: ++current.count });
};

/* TESTS */
const head = new Node(0);
for (let i = 0; i < 10; i += 1) {
  head.appendToTail(i);
}

// O(N)
const returnKthToLast = (n, num) => findKthToLast(n, num).node;

console.log(returnKthToLast(head, 4).data);
