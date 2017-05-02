/*
* Given a smaller string s and a bigger string b, find s within b and return
* the index.
*/

// Brute force: O(text*str)
const search = (text, str) => {
  for (var i = 0; i < text.length; i++) {
    var found = false;
    
    for (var j = i; j < i + str.length; j++) {
      let strChar = str[j - i];
      let textChar = text[j];
      
      found = textChar === strChar
        ? true
        : false;
    }
    
    if (found) return i;
  }
  
  return -1;
};

console.log(search('djfabdjgkusdabckskdjfalsdf', 'abc'));

// Rabin-Karp O(text+str) or O(str*(text-str))
const optimalSearch = (text, str) => {
  const base = 31;
  const hash = genHash(base);
  const textLen = text.length;
  const strLen = str.length;
  
  var textHash = hash(text, 0, strLen);
  var strHash = hash(str, 0, strLen)
  var basePow = Math.pow(base, strLen);
  
  for (var i = 0; i < textLen - strLen; i++) {
    if (textHash === strHash) {
      var found = false;
      
      for (var j = 0; j < strLen; j++) {
        found = text[i + j] === str[j]
          ? true
          : false;
      }
      
      if (found) return i;
    }
    
    textHash = base * textHash - basePow * text.charCodeAt(i) + text.charCodeAt(i + str.length);
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

console.log(optimalSearch('djfhabdjgusdabckskdjfalsdf', 'abc'));
