/*
* Impelement a method to perform basic string compression using the counts of
* repeated characters. For example, the string aabcccccaaa would become a2b1c5a3.
* If the compressed string would not become smaller then return the original string.
*/

// O(N)
const compressString = (str) => {
  const strLen = str.length;
  const cache = [];
  let lastChar = null;

  for (let i = 0; i < strLen; i += 1) {
    const char = str[i];

    if (lastChar) {
      if (lastChar.char === char) {
        lastChar.count += 1;
      } else {
        cache.push(`${lastChar.char}${lastChar.count}`);

        lastChar = { char, count: 1 };
      }
    } else {
      lastChar = { char, count: 1 };
    }

    if (i + 1 === strLen) cache.push(`${lastChar.char}${lastChar.count}`);
  }

  const newStr = cache.join('');

  return newStr.length >= str.length
    ? str
    : newStr;
};

/* TESTS */
console.log(compressString('aabcccccaaa'));
console.log(compressString('aabbccdd'));
console.log(compressString('aaabbccdd'));
