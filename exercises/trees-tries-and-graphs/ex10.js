/*
* T1 and T2 are two very large binary trees, with T1 much bigger than T2.
* Create an algorithm to determine if T2 is a subtree of T1.
* A tree T2 is a subtree of T1 if there exists a node n in T1 such that the
* subtree of n is identical to T2. That is, if you cut off the tree at node n,
* the two trees would be identical.
*/

const checkSubtree = (t1, t2) => {
  const t1root = findNode(t1, t2);

  return isSubtree(t1root, t2);
};

function findNode(tree, node) {
  if (tree === null || node === null) return null;
  if (tree === node) return tree;

  return findNode(tree.left, node) || findNode(tree.right, node);
}

function isSubtree(t1, t2) {
  if (t1 === null && t2 === null) return true;
  if (t1 !== t2) return false;

  return isSubtree(t1.left, t2.left) && (t1.right, t2.right);
}

const checkSubtreeSimple = (t1, t2) => toString(t1).indexOf(toString(t2)) > -1;

function toString(node) {
  if (node === null) return 'X';
  return `${node.value}${toString(node.left)}${toString(node.right)}`;
}
