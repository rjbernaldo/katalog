/*
* Implement a function to check if a binary tree is balanced. For the purposes
* of this question, a balanced tree is defined to be a tree such that the
* heights of the two subtrees of any node never differ by more than one.
*/

const checkBalanced = node => getHeight(node) !== -1;

function getHeight(node) {
  if (node === null) return -1;

  const leftHeight = getHeight(node.left);
  if (leftHeight === -1) return -1;

  const rightHeight = getHeight(node.right);
  if (rightHeight === -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  return Math.max(leftHeight, rightHeight) + 1;
}
