/*
* There are three types of edits that can be performed on strings: Insert,
* remove, or replace a character. Given two strings, write a function to check
* if they are one edit away.
*/

// O(longerString) ?
const oneEditAway = (s1, s2) => {
  if (Math.abs(s1.length - s2.length) > 1) return false;
  let shorter = s1.length < s2.length ? s1 : s2;
  let longer = s1.length > s2.length ? s1 : s2;
  
  let sIndex = 0, lIndex = 0;
  let foundDiff = false;
  while (sIndex < shorter.length && lIndex < longer.length) {
    if (shorter[sIndex] !== longer[lIndex]) {
      if (foundDiff) return false;
      foundDiff = true;
      
      if (shorter.length === longer.length) sIndex++; // replace
    } else {
      sIndex++;
    }
    lIndex++;
  }
  
  return true;
};

console.log(oneEditAway('test', 'est'));
console.log(oneEditAway('test', 'zest'));
console.log(oneEditAway('est', 'zest'));
console.log(oneEditAway('zesta', 'est'));