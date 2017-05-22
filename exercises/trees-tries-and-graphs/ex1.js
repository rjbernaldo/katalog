/*
* Given a directed graph, design an algorithm to find out whether there is a
* route between two nodes.
*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
}

const routeBetweenNodes = (n1, n2) => {
  for (let i = 0; i < n1.children.length; i++) {
    const child = n1.children[i];

    if (child === n2) {
      return true;
    } else if (child.children.length > 0) {
      const childResult = routeBetweenNodes(child, n2);
      if (childResult) return childResult;
    } else {
      return false;
    }
  }

  return false;
};

/* TESTS */
const root = new Node('root');
const child1 = new Node('child1');
const child2 = new Node('child2');

root.children.push(child1);
child1.children.push(child2);

console.log(routeBetweenNodes(root, child2), routeBetweenNodes(root, child2) === true);
