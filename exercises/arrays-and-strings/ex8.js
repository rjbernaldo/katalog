/*
* Write an algorithm such that if an element in an MxN matrix is 0, its entire
* row and column are set to 0.
*/

// O(MN) ?
const bomberMan = (matrix) => {
  const currentMatrix = matrix;
  const iCache = {};
  const jCache = {};

  for (let i = 0; i < currentMatrix.length; i += 1) {
    for (let j = 0; j < currentMatrix[i].length; j += 1) {
      const current = currentMatrix[i][j];

      if (current === 0 && !(iCache[i] || jCache[j])) {
        iCache[i] = true;
        jCache[j] = true;

        for (let x = 0; x < currentMatrix.length; x += 1) {
          currentMatrix[x][j] = 0;
        }

        for (let y = 0; y < currentMatrix[i].length; y += 1) {
          currentMatrix[i][y] = 0;
        }
      }
    }
  }

  return currentMatrix;
};

console.log(bomberMan([
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
]));
