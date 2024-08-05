let board = [
["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".","9",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

let board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
const isValidSudoku = function(board) {
    let n = board.length;
    let m = board[0].length;

    let rows = [];
    let cols = [];
    let squares = [];

    for(let i = 0; i < 9; i++) {
        rows.push({});
        cols.push({});
        squares.push({});
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            let currentSquare = board[i][j];

            if(currentSquare !== '.') {
                if(rows[i][currentSquare]) {
                    return false;
                } else {
                    rows[i][currentSquare] = true;
                }
    
                if(cols[j][currentSquare]) {
                    return false;
                } else {
                    cols[j][currentSquare] = true;
                }

                let squareRow =  Math.floor((i)/ 3) * 3;
                let squareCol = Math.floor((j)/ 3); 
                let sIndex = squareCol + squareRow;

                if(squares[sIndex][currentSquare]) {
                    return false;
                } else {
                    squares[sIndex][currentSquare] = true
                }
            }
        }
    }

    //console.log(rows, cols)
    return true;
};

console.log(isValidSudoku(board));
//console.log(isValidSudoku(board2));