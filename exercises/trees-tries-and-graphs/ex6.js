/*
* Write an algorithm to find the "next" node (i.e., in-order successor)
* of a given node in a binary search tree. You may assume that each node has
* a link to it's parent.
*/

const successor = (query, node) => {
  if (node === null) return false;

  let current = node;
  if (typeof current === 'undefined') current = query;
  if (query.value < current.value) return current;
  if (current.right === null) return successor(query, current.parent); // go up to parent

  return successor(query, current.right); // go to right
};
