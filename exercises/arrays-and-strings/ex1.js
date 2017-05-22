/*
* Implement an algorithm to determine if a string has all unique
* characters. What if you cannot use additional data structures?
*/

// O(N)
const isUnique = (str) => {
  const hash = {};

  for (let i = 0; i < str.length; i += 1) {
    if (hash[str[i]]) {
      return false;
    }

    hash[str[i]] = true;
  }

  return true;
};

/* TESTS */
console.log(isUnique('abcdefghijklm'));
console.log(isUnique('abcdeafghijklm'));
