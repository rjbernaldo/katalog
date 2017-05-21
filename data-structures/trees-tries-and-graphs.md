# `Trees, Tries, & Graphs`

## Trees

  A tree is a data structure composed of nodes.
  ```
  class Node {
    constructor() {
      this.name = null;
      this.children = [];
    }
  }
  ```

## Binary Trees

  A binary tree is a tree in which each node has up to two children. A node without any children is called a `leaf` node.

  - A `Binary Search Tree` is a tree in which every node fits a specific ordering property: `all left descendents <= n < all right descendents`

  - A binary tree is `balanced` if for any two leaves the difference of depth is at most 1. (eg. Red-Black Trees, AVL Trees)

  - A `Complete Binary Tree` is a tree in which every level of the tree is fully filled, except for the last level (left to right filled).

  - A `Full Binary Tree` is a tree in which each node has either zero or two children. No nodes have only one child.

  - A `Perfect Binary Tree` is a tree that is both full and complete.

  - Binary Tree Traversal

    - `In-Order Traversal`
    ```
    const inOrderTraversal = (node) => {
      if (node !== null) {
        inOrderTravesal(node.left);
        visit(node);
        inOrderTravesal(node.right);
      }
    };
    ```

    - `Pre-Order Traversal`

    ```
    const preOrderTraversal = (node) => {
      if (node !== null) {
        visit(node);
        inOrderTravesal(node.left);
        inOrderTravesal(node.right);
      }
    };
    ```
    
    - `Post-Order Traversal`

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

  A `min-heap` is an ascending complete binary tree (totally filled other than the rightmost elements on the last level) where each node is smaller than it's children. The root is the minimum element in the tree.

  - `Insert`
  
    1. Insert element at the rightmost bottom.
    2. Fix the tree by swapping the new element with it's parent until we find an appropriate spot for the element (essentially bubbling up the minimum element).
  
  
  - `Extract Minimum Element`
  
    1. Get the minimum element (root node).
    2. Swap with last element (rightmost bottom element).
    3. Bubble down element (always swap with a child of lower value) in step2 until the min-heap property is restored.

### Tries

  A variant of an n-ary tree in which characters are stored at each node.

  - Sometimes called a `prefix tree`.
  - Each path down the tree may represent a word.
  - `*` nodes (or null nodes) indicate complete words.

### Graphs

  A graph is simply a collection of nodes with edges between (some of) them.

  - Can be `directed` (one-way) or `undirected` (two-way).
  - If there is a path between every pair of vertices it is called a `connected graph`.
  - If there are no cycles it is an `acyclic graph`.
  - Common ways to represent a graph

    - `Adjacency List`

      - Every vertex (or node) stores a list of adjacent vertices. 
      - In a unidirected graph, an edge like (a, b) would be stored twice: once in a's adjacent vertices and once in b's adjacent vertices.

    - `Adjacency Matrix`

      - An adjacency matrix is an NxN boolean matrix (where N is the number of nodes), where a true value at matrix[i][j] indicates an edge from node i to node j.
      - In a unidirected graph, an adjacency matrix with my symmetric.

### Graph Search

  Two most common ways to search a graph are:

  - `Depth-first search` (DFS)

    - DFS starts at the root (or another arbitrarily selected node) and then explores the current branch completely before moving on to the next branch.
    - Goes deep then wide.
    - Preferred when we want to visit every node in the graph.
    - Pre-order traversal is a form of DFS.

  - `Breadth-first search` (BFS)

    - BFS starts at the root and then explores each neighbor before going on to any of their children.
    - Goes wide then deep.
    - Preferred if we want to find the shortest path between nodes.
    - BFS is not recursive - it uses a queue.

  - `Bidirectional Search`

    - Bidirectional search is used to find the shortest path between two nodes.
    - Runs two simultaneous breadth-first searches, one from each node. When their searches collide, we have found a path.

### Related

  - `Topological Sort`

    - Order the list of nodes in such that if `(a, b)` is an edge in the graph then `a` will appear before `b` in the list.
    - Can only be done on directed graphs (no cycles).

  - `Dijkstra's Algorithm`

    - Find the shortest path between two points in a weighted directed graph (that may have cycles, all edges must have positive values).
    - Find the minimum weight path from a start node `s` to `every` node on the graph.
    - Uses a priority queue.

  - `AVL Trees`
  - `Red-Black Trees`

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
