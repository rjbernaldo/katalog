/*
* There are three types of edits that can be performed on strings: Insert,
* remove, or replace a character. Given two strings, write a function to check
* if they are one edit away.
*/

// O(longerString) ?
const oneEditAway = (s1, s2) => {
  if (Math.abs(s1.length - s2.length) > 1) return false;
  const shorter = s1.length < s2.length ? s1 : s2;
  const longer = s1.length > s2.length ? s1 : s2;

  let sIndex = 0;
  let lIndex = 0;
  let foundDiff = false;
  while (sIndex < shorter.length && lIndex < longer.length) {
    if (shorter[sIndex] !== longer[lIndex]) {
      if (foundDiff) return false;
      foundDiff = true;

      if (shorter.length === longer.length) sIndex += 1; // replace
    } else {
      sIndex += 1;
    }
    lIndex += 1;
  }

  return true;
};

console.log(oneEditAway('test', 'est'));
console.log(oneEditAway('test', 'zest'));
console.log(oneEditAway('est', 'zest'));
console.log(oneEditAway('zesta', 'est'));
