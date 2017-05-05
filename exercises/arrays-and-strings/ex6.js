/*
* Impelement a method to perform basic string compression using the counts of
* repeated characters. For example, the string aabcccccaaa would become a2b1c5a3.
* If the compressed string would not become smaller then return the original string.
*/

// O(N)
const compressString = (str) => {
  let strLen = str.length;
  var cache = [];
  var lastChar;
  
  for (var i = 0; i < strLen; i++) {
    let char = str[i];
    
    if (lastChar) {
      if (lastChar.char === char) {
        lastChar.count++;
      } else {
        cache.push(`${lastChar.char}${lastChar.count}`);
        
        lastChar = { char: char, count: 1 };
      }
    } else {
      lastChar = { char: char, count: 1 };
    }
    
    if (i + 1 === strLen) cache.push(`${lastChar.char}${lastChar.count}`);
  }
  
  let newStr = cache.join('');
  
  return newStr.length >= str.length
    ? str
    : newStr;
};

console.log(compressString('aabcccccaaa'));
console.log(compressString('aabbccdd'));
console.log(compressString('aaabbccdd'));