/*
* You are given a binary tree in which each node contains an integer value
* (which might be positive or negative). Design an algorithm to count the
* number of paths that sum to a given value. The path does not need to start
* or end at the root or a leaf, but it must go downwards (traveling only
* from parent nodes to child nodes).
*/

const pathsWithSum = (node, sum) => {
  if (node === null) return 0;

  const pathsFromNode = countPaths(node, sum, 0);

  const pathsOnLeft = pathsWithSum(node.left, sum, 0);
  const pathsOnRight = pathsWithSum(node.right, sum, 0);

  return pathsFromNode + pathsOnLeft + pathsOnRight;
};

function countPaths(node, sum, currentSum) {
  if (node === null) return 0;

  const newSum = currentSum + node.value;

  let total = 0;
  if (newSum === sum) total += 1;
  total += countPaths(node.left, sum, newSum);
  total += countPaths(node.right, sum, newSum);

  return total;
}
