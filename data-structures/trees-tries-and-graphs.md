# `Trees, Tries, & Graphs`

## Trees

A tree is a data structure composed of nodes.
```
// Example
class Node {
  constructor() {
    this.name = null;
    this.children = [];
  }
}
```

## Binary Trees

A binary tree is a tree in which each node has up to two children. A node without any children is called a `leaf` node.

### Binary Search Trees

A binary search tree is a tree in which every node fits a specific ordering property:

  - all left descendents <= n < all right descendents

This must be true for all nodes.

### Balanced vs. Unbalanced

Balanced "enough" to ensure O(log n) times for insert and find, but not necessarily as balanced as it could be.

  - Red-Black Trees
  - AVL Trees

### Complete Binary Trees

A complete binary tree is a binary tree in which every level of the tree is fully filled, except for perhaps the last level. To the extent that the last level is filled, it is filled left to right.

### Full Binary Trees

A full binary tree is a binary tree in which each node has either zero or two children. No nodes have only one child.

### Perfect Binary Trees

A perfect binary tree is one that is both full and complete.

### Binary Tree Traversal

  - In-Order Traversal
  ```
  const inOrderTraversal = (node) => {
    if (node !== null) {
      inOrderTravesal(node.left);
      visit(node);
      inOrderTravesal(node.right);
    }
  };
  ```

  - Pre-Order Traversal

  ```
  const preOrderTraversal = (node) => {
    if (node !== null) {
      visit(node);
      inOrderTravesal(node.left);
      inOrderTravesal(node.right);
    }
  };
  ```
  
  - Post-Order Traversal

  ```
  const postOrderTraversal = (node) => {
    if (node !== null) {
      inOrderTravesal(node.left);
      inOrderTravesal(node.right);
      visit(node);
    }
  };
  ```
  
### Binary Heaps (Min-Heaps and Max-Heaps)

A min-heap is an ascending complete binary tree (totally filled other than the rightmost elements on the last level) where each node is smaller than it's children. The root is the minimum element in the tree.

  - Insert
  
  - Extract Minimum Element

## Exercises
- [ ] [routeBetweenNodes](https://github.com/rjbernaldo/katalog/blob/master/exercises/trees-tries-and-graphs/ex1.js)
- [ ] [minimalTree](https://github.com/rjbernaldo/katalog/blob/master/exercises/trees-tries-and-graphs/ex2.js)
- [ ] [listOfDepths](https://github.com/rjbernaldo/katalog/blob/master/exercises/trees-tries-and-graphs/ex3.js)
- [ ] [checkBalanced](https://github.com/rjbernaldo/katalog/blob/master/exercises/trees-tries-and-graphs/ex4.js)
- [ ] [validateBST](https://github.com/rjbernaldo/katalog/blob/master/exercises/trees-tries-and-graphs/ex5.js)
- [ ] [successor](https://github.com/rjbernaldo/katalog/blob/master/exercises/trees-tries-and-graphs/ex6.js)
- [ ] [buildOrder](https://github.com/rjbernaldo/katalog/blob/master/exercises/trees-tries-and-graphs/ex7.js)
- [ ] [firstCommonAncestor](https://github.com/rjbernaldo/katalog/blob/master/exercises/trees-tries-and-graphs/ex8.js)
- [ ] [bstSequences](https://github.com/rjbernaldo/katalog/blob/master/exercises/trees-tries-and-graphs/ex9.js)
- [ ] [checkSubtree](https://github.com/rjbernaldo/katalog/blob/master/exercises/trees-tries-and-graphs/ex10.js)
- [ ] [randomNode](https://github.com/rjbernaldo/katalog/blob/master/exercises/trees-tries-and-graphs/ex11.js)
- [ ] [pathsWithSum](https://github.com/rjbernaldo/katalog/blob/master/exercises/trees-tries-and-graphs/ex12.js)
