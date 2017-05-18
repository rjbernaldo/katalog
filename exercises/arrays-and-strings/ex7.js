/*
* Given an image represented by an NxN matrix, where each pixel in the image is
* 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
*/

// O(N^2) ?
const rotate90 = (matrix) => {
  const rotatedMatrix = [];

  for (let i = 0; i < matrix.length; i += 1) {
    const row = [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      const current = matrix[j][i];
      row.push(current);
    }
    rotatedMatrix.push(row);
  }

  return rotatedMatrix;
};

console.log(rotate90([
  [0, 1, 2, 3],
  [0, 1, 2, 3],
  [0, 1, 2, 3],
  [0, 1, 2, 3],
]));
