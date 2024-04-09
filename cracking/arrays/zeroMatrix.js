let testMatrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

const printMatrix = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let row = '';
        for(let j = 0; j < arr[i].length; j++) {
            let item = arr[i][j];       
            row += `${item} `;
        }
        console.log(row);
    }
}

const zeroRow = (arr, row) => {
    for(let i = 0; i < arr[row].length; i++) {
        arr[row][i] = 0;
    }
}

const zeroColumn = (arr, col) => {
    for(let i = 0; i < arr[col].length; i++) {
        arr[i][col] = 0;
    }
}

const zeroMatrix = (arr, element) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            let item = arr[i][j];
            if (item === element) {
                //console.log('match found', i, j)
                zeroColumn(arr ,j)
                zeroRow(arr, i);
                break;
            }
        }
    }
}

printMatrix(testMatrix);
zeroMatrix(testMatrix, 14);
console.log('');
printMatrix(testMatrix);
zeroMatrix(testMatrix, 7);
console.log('');
printMatrix(testMatrix);