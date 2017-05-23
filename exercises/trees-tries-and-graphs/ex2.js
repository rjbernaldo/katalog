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

const minimalTree = (arr, start = 0, end = arr.length - 1) => {
  if (end < start) return null;

  const mid = Math.floor((start + end) / 2);
  const node = new Node(arr[mid]);
  node.left = minimalTree(arr, start, mid - 1);
  node.right = minimalTree(arr, mid + 1, end);

  return node;
};

/* TESTS */
const arr = [1, 2, 3, 4, 5];
minimalTree(arr);
