/*
* Write an algorithm such that if an element in an MxN matrix is 0, its entire
* row and column are set to 0.
*/

// O(MN) ?
const bomberMan = (matrix) => {
  var iCache = {};
  var jCache = {};
  
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      let current = matrix[i][j];
      
      if (current === 0 && !(iCache[i] || jCache[j])) {
        iCache[i] = true;
        jCache[j] = true;
        
        for (var x = 0; x < matrix.length; x++) {
          matrix[x][j] = 0;
        }
        
        for (var y = 0; y < matrix[i].length; y++) {
          matrix[i][y] = 0;
        }
      }
    }
  }
  
  return matrix;
};

console.log(bomberMan([
  [1,1,1,1],
  [1,0,1,1],
  [1,1,1,1],
  [1,1,1,1],
]));
