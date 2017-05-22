/*
* Write a method to replace all spaces in a string with '%20'
*/

// O(N) ?
const spacesToString = (str, len) => {
  const newStr = [];

  for (let i = 0; i < len; i += 1) {
    if (str[i] === ' ') {
      newStr.push('%20');
    } else {
      newStr.push(str[i]);
    }
  }

  return newStr.join('');
};

/* TESTS */
console.log(spacesToString('a b   ', 3));
