/*
* Given a binary tree, design an algorithm which creates a linked list of all
* the nodes at each depth (e.g., if you have a tree with depth D, you'll
* have D linked lists)
*/

const listOfDepthsDFS = (node, depth = 1) => {
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

listOfDepthsBFS([root]);
