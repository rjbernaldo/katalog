/*
* Write a method to replace all spaces in a string with '%20'
*/

// O(N) ?
const spacesToString = (str, len) => {
  var newStr = [];
  
  for (var i = 0; i < len; i++) {
    if (str[i] === ' ') {
      newStr.push('%20');
    } else {
      newStr.push(str[i]);
    }
  }
  
  return newStr.join('');
};

console.log(spacesToString('a b   ', 3));