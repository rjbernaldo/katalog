/*
* Given a string, write a function to check if it is a permutation of a palindrome.
* A palindrome is a word or phrase that is the same forwards and backwards. A
* permutation is a rearrangement of letters. The palindrome does not need to be
* limited to just dictionary words.
*
* INPUT: Tact Coa
* OUTPUT: true
* PALINDROME PERMUTATIONS: 'taco cat', 'atco cta', etc.
*/

// O(N) ?
const permutationPalindrome = (str) => {
  const cache = {};
  const oddCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (char === ' ') continue;

    if (isNaN(cache[char])) {
      cache[char] = 1;
    } else {
      cache[char] += 1;
    }
  }

  for (var char in cache) {
    if (cache[char] % 2 !== 0) oddCount += 1;
  }

  return oddCount === 1;
};

console.log(permutationPalindrome('Tact Coa'));
