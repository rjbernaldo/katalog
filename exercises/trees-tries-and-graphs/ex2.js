/*
* Given a sorted (increasing order) array with unique elements, write an
* algorithm to create a binary search tree with minimal height.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const minimalTree = (arr) => {
  const root = null;

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];

    if (root === null) {
      root = new Node(elem);
    } else {
      insertAndBalance(root, elem);
    }
  }
};

function insertAndBalance(root, elem) {
  // TODO:
}

/* TESTS */
const arr = [1, 2, 3, 4, 5];
minimalTree(arr);
