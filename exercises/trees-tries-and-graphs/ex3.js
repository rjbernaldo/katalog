/*
* Given a binary tree, design an algorithm which creates a linked list of all
* the nodes at each depth (e.g., if you have a tree with depth D, you'll
* have D linked lists)
*/

const listOfDepthsDFS = (node, lists = [], level = 0) => {
  if (node === null) return node;

  if (lists.length === level) {
    lists.push([]);
  }

  // pre-order traversal
  lists[level].push(node);
  listOfDepthsDFS(node.left, lists, level + 1);
  listOfDepthsDFS(node.right, lists, level + 1);

  return lists;
};

const listOfDepthsBFS = (node) => {
  const results = [];

  let current = [];
  current.push(node);

  while (current.length > 0) {
    results.push(current);
    const parents = current;
    current = [];

    for (let i = 0; i < parents.length; i++) {
      const parent = parents[i];
      if (parent.left) current.push(parent.left);
      if (parent.right) current.push(parent.right);
    }
  }

  return results;
};
