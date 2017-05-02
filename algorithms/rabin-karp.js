/*
* Given a smaller string s and a bigger string b, find s within b and return
* the index.
*/

// O(s(b-s))
const substrSearch = (s, b) => {
  for (var i = 0; i < b.length; i++) {
    var found = false;
    
    for (var j = i; j < i + s.length && !false; j++) {
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

console.log(substrSearch('abc', 'djfhabdjgkusdabckskdjfalsdf'));

// TODO: Rabin fingerprint
const substrSearch2 = (s, b) => {
  
};

console.log(substrSearch2(s, b));