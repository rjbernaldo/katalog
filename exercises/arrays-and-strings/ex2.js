/*
* Given two strings, write a method to decide if one is a permutations
* of the other.
*/

// O(a+b)
const isPermutation = (a, b) => {
  if (a.length !== b.length) return false;

  const cache = {};

  for (let i = 0; i < a.length; i += 1) {
    cache[a[i]] = true;
  }

  for (let j = 0; j < b.length; j += 1) {
    if (cache[b[j]]) {
      cache[b[j]] = false;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPermutation('abc', 'bca'));
console.log(isPermutation('abc', 'baa'));
console.log(isPermutation('abc', 'bax'));
console.log(isPermutation('abc', 'ba'));
console.log(isPermutation('abc', 'bcaz'));
