/*
* Write an algorithm to find the "next" node (i.e., in-order successor)
* of a given node in a binary search tree. You may assume that each node has
* a link to it's parent.
*/

const successor = (query, node) => {
  if (node === null) return null;

  let current = node;
  if (typeof current === 'undefined') current = query;
  current.visited = true;

  if (query.value < current.value) return current;
  if (current.right === null && !current.visited) {
    current.visited = true;
    return successor(query, current.parent); // go up to parent
  }

  return successor(query, current.right); // go to right
};
