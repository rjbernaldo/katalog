/*
* Write an algorithm to find the "next" node (i.e., in-order successor)
* of a given node in a binary search tree. You may assume that each node has
* a link to it's parent.
*/

const successor = (query, node) => {
  if (node === null) return false;

  if (typeof node === 'undefined') node = query;
  if (query.value < node.value) return node;
  if (node.right === null) return successor(query, node.parent); // go up to parent

  return successor(query, node.right); // go to right
};
