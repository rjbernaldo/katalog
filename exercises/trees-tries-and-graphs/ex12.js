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

const optimizedPathsWithSum = (node, targetSum, runningSum, pathCount) => {
  if (node === null) return 0;

  const sum = (runningSum + node.data) - targetSum;
  let totalPaths = pathCount[sum] || 0;
  if (runningSum === targetSum) totalPaths += 1;

  incrementCache(pathCount, runningSum, 1);
  totalPaths += optimizedPathsWithSum(node.left, targetSum, runningSum, pathCount);
  totalPaths += optimizedPathsWithSum(node.right, targetSum, runningSum, pathCount);
  incrementCache(pathCount, runningSum, -1);

  return totalPaths;
};

function incrementCache(pathCount, key, delta) {
  const currentCount = pathCount[key] || 0;
  const newCount = currentCount + delta;

  const pc = pathCount;
  if (newCount === 0) {
    delete pc[key];
  } else {
    pc[key] = newCount;
  }
}

const contiguousSum = (arr, targetSum) => {
  let total = 0;
  let runningSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (runningSum + arr[i] > targetSum) {
      runningSum = 0;
    } else if (runningSum + arr[i] === targetSum) {
      total += 1;
      runningSum = 0;
    } else {
      runningSum += arr[i];
    }
  }

  return total;
};

const arr = [10, 5, 1, 2, 7, 1, 2];
console.log(contiguousSum(arr, 8) === 2);
