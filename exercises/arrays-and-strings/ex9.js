/*
* Assume you have a method isSubstring which checks if one word is a substring
* of another. Given two strings, s1 and s2, write code to check if s2 is a
* rotation of s1 using only one call to isSubstring.
*/

// O(1) ?
const isRotation = (s1, s2) => {
  return (s1 + s1).indexOf(s2) > - 1;
};

console.log(isRotation('testing', 'ingtest'));
console.log(isRotation('testing', 'ingtest2'));