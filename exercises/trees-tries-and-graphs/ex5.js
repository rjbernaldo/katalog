/*
* Implement a function to check if a binary tree is a binary search tree.
*/

const validateBST = (node) => {
  if (node === null) return true;
  if (node.left !== null && node.left > node.value) return false;
  if (node.right !== null && node.right <= node.value) return false;

  return validateBST(node.left) && validateBST(node.right);
};
