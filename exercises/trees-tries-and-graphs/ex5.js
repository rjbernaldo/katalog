/*
* Implement a function to check if a binary tree is a binary search tree.
*/

const validateBST = (node) => {
  let leftNode = true;
  let rightNode = true;

  if (node.left !== null) {
    if (node.left >= node.value) return false;
    leftNode = validateBST(node.left);
  }

  if (node.right !== null) {
    if (node.right <= node.value) return false;
    rightNode = validateBST(node.right);
  }

  return leftNode && rightNode;
};
