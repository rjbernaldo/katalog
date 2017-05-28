/*
* Implement a function to check if a binary tree is balanced. For the purposes
* of this question, a balanced tree is defined to be a tree such that the
* heights of the two subtrees of any node never differ by more than one.
*/

const checkBalanced = (node) => {
  if (node === null) return true;

  const heightDiff = getHeight(node.left) - getHeight(node.right);

  if (Math.abs(heightDiff) > 1) return false;

  return checkBalanced(node.left) && checkBalanced(node.right);
};

function getHeight(node) {
  if (node === null) return -1;

  return Math.max(
    getHeight(node.left),
    getHeight(node.right),
  ) + 1;
}
