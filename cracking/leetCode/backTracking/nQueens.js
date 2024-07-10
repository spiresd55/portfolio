/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let board = [];

   /* for(let i = 0; i < n; i++) {
        board[i] = [];
        for(let j = 0; j < n; j++) {
            board[i].push('.');
        }
    }*/

    //console.log(board)
    let upperDiagonal = new Set();
    let bottomDiagonal = new Set();
    let cols = new Set();
    let solutions = 0;

    let backtrack = (r) => {
        //console.log('ROW', r, board)
        if(r === n) {
            solutions++;
        }

        //Try the queen once in each column of that row
        for(let i = 0; i < n; i++) {
            //Is a queen already in this column, or the upper or bottom diagonal? 
            if(cols.has(i) || bottomDiagonal.has(r - i) || upperDiagonal.has(i + r)) {
                continue;
            }

            // Add it to the set
            cols.add(i);
            bottomDiagonal.add(r - i);
            upperDiagonal.add(i + r);

            //Move on to the next row
            backtrack(r + 1)

            //Remove previous path
            cols.delete(i);
            bottomDiagonal.delete(r - i);
            upperDiagonal.delete(i + r)
            // board[r][i] = '.'
        }
    }

    backtrack(0);
    return solutions;
};
