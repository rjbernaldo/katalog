/*
* You are implementing a binary tree class from scratch which, in addition
* to insert, find, and delete, has a method getRandomNode() which returns
* a random node from the tree. All nodes should be equally likely to be chosen.
* Design and implement an algorithm for getRandomNode, and explain how you
* would implement the rest of the methods.
*
* NOTE: Each node should have 1/n probability of being selected.
* NOTE: Going left or right should have a probability of leftNodes * 1/n probability.
*/

class CustomBinaryTree {
  constructor(root) {
    this.root = root;
  }

  getRandomNode1(node = this.root) {
    if (node === null) return null;

    return [node]
      .concat(this.getRandomNode1(node.left))
      .concat(this.getRandomNode1(node.right))
      .filter(n => n !== null);
  }
}
