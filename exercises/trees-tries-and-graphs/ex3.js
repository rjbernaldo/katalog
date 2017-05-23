/*
* Given a binary tree, design an algorithm which creates a linked list of all
* the nodes at each depth (e.g., if you have a tree with depth D, you'll
* have D linked lists)
*/

const listOfDepths = (node, depth = 1) => {
  const set = [];

  const currentDepth = [node.left, node.right];
  set.push(currentDepth);

  const nextDepth = []
    .concat(listOfDepths(node.left))
    .concat(listOfDepths(node.right));

  set.push(nextDepth);

  return set;
};
