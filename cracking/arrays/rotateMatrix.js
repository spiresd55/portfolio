let testMatrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let otherMatrix = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13,14,15,16,17,18],
    [19,20,21,22,23,24],
    [25,26,27,28,29,30],
    [31,32,33,34,35,36]
]

const rotateMatrix = (matrix) => {
    let levels = Math.floor(matrix.length / 2);
    for(let i = 0; i < levels; i++) {
        for(let j = i; j < matrix[0].length - i - 1; j++) {
            //Get Corner Values
            let topLeft = matrix[i][j];
            let topRight = matrix[j][matrix[0].length - i - 1];
            let bottomRight = matrix[matrix[0].length - i - 1][matrix[0].length - j - 1];
            let bottomLeft = matrix[matrix[0].length - j - 1][i];

            // SWAP corners 
            matrix[j][matrix[0].length - i - 1] = topLeft;
            matrix[i][j] = bottomLeft;
            matrix[matrix[0].length - i - 1][matrix[0].length - j - 1] = topRight;
            matrix[matrix[0].length - j - 1][i] = bottomRight;
        }
    }

    return matrix;
}

console.log(rotateMatrix(testMatrix));
console.log(rotateMatrix(otherMatrix));