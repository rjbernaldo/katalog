/*
* Given a smaller string s and a bigger string b, find s within b and return
* the index.
*/

// Brute force: O(sb)
const search = (s, b) => {
  for (var i = 0; i < b.length; i++) {
    var found = false;
    
    for (var j = i; j < i + s.length; j++) {
      let sChar = s[j - i];
      let bChar = b[j];
      
      found = bChar === sChar
        ? true
        : false;
    }
    
    if (found) return i;
  }
  
  return -1;
};

console.log(search('abc', 'djfabdjgkusdabckskdjfalsdf'));

// Rabin-Karp O(s+b) or O(s(b-s))
const optimalSearch = (s, b) => {
  const base = 31;
  const hash = genHash(base);
  const sLen = s.length;
  const bLen = b.length;
  
  var sHash = hash(s, 0, sLen)
  var bHash = hash(b, 0, sLen);
  var basePow = Math.pow(base, sLen);
  
  for (var i = 0; i < bLen - sLen; i++) {
    if (sHash === bHash) {
      var found = false;
      
      for (var j = 0; j < sLen; j++) {
        found = b[i + j] === s[j]
          ? true
          : false;
      }
      
      if (found) return i;
    }
    
    bHash = base * bHash - basePow * b.charCodeAt(i) + b.charCodeAt(i + s.length);
  }
  
  return -1
};

const genHash = (base) => {
  return (str, start, end) => {
    var hash = 0;
    
    for (var i = start; i < end; i++) {
      hash = base * hash + str.charCodeAt(i);
    }
    
    return hash;
  };
};

console.log(optimalSearch('abc', 'djfhabdjgusdabckskdjfalsdf'));
