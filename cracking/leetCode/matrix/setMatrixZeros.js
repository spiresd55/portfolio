/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let coordinatesToZero = [];

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(matrix[i][j] === 0) {
                coordinatesToZero.push([i,j])
            }
        }
    }

    for(let coordinate of coordinatesToZero) {
        const [x, y] = coordinate;
        zeroRow(matrix, x);
        zeroCol(matrix, y);
    }

    return matrix;
};


const zeroRow = (matrix, row) => {
    let m = matrix[0].length;

    for(let i = 0; i < m; i++) {
        matrix[row][i] = 0; 
    }
}

const zeroCol = (matrix, col) => {
    let n = matrix.length;

    for(let i = 0; i < n; i++) {
        matrix[i][col] = 0; 
    }
}