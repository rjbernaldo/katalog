/*
* Design an algorithm and write code to find the first common ancestor of two
* nodes in a binary tree. Avoid storing additional nodes in a data structure.
* NOTE: This is not necessarily a binary search tree.
*/

const firstCommonAncestor = (n1, n2) => {
  if (isFound(n1, n2)) return n1;
  if (isFound(n2, n1)) return n2;

  let sibling = getSibling(n1);
  let parent = n1.parent;

  while (!isFound(sibling, n2)) {
    sibling = getSibling(parent);
    parent = parent.parent;
  }

  return parent;
};

function getSibling(node) {
  if (node === null || node.parent === null) return null;

  const parent = node.parent;

  return parent.left === node
    ? parent.right
    : parent.left;
}

function isFound(root, node) {
  if (root === null) return false;
  if (root === node) return true;

  return isFound(root.left, node) || isFound(root.right, node);
}
