/*
* Implement an algorithm to determine if a string has all unique
* characters. What if you cannot use additional data structures?
*/

// O(N)
const isUnique = (str) => {
  var hash = {};
  
  for (var i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      return false;
    } else {
      hash[str[i]] = true;
    }
  }
  
  return true;
};

console.log(isUnique('abcdefghijklm'));
console.log(isUnique('abcdeafghijklm'));