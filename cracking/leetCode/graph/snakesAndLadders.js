/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    let n = board.length;
    let m = board[0].length;
    
    let movementBoard = [];
    let movementBoardMap = {};
    let shouldInverse = -1;
    //Create movement board
    for(let i = 0; i < n; i++) {
        movementBoard[n - i - 1] = [];
        for(let j = 0; j < m; j++) {
            if(shouldInverse === - 1) {
                movementBoard[n- i - 1][j] = (i * m) + j + 1;
            } else {
                movementBoard[n- i - 1][m - j - 1] = (i * m) + j + 1;
            }
        }
        shouldInverse *= -1; 
    }

    for(let i = 1; i <= 36; i++) {
     //  console.log(i,  calculateNewMove(6, 6, i) );
    }
    console.log('END')

    //console.log(movementBoard)
    return findLeastAmountOfMoves(board, movementBoard, [[board.length - 1, 0]]);
};

const findLeastAmountOfMoves = (board, movementBoard, moves, totalMoves = 0, minMoves = Number.POSITIVE_INFINITY, visited = {}) => {
    let newMoves = [];
    let n = board.length;
    let m = board[0].length;
    let end = n * m;

    if(!moves.length) {
        if( Number.POSITIVE_INFINITY === minMoves) {
            return -1; 
        }
        return minMoves ;
    }

    while(moves.length) {
        let [row, col] = moves.pop();

        if( (n % 2 === 0 && row < 0) || 
            (n % 2 === 0 && row === 0 && col === 0) ||
            (n % 2 !== 0 && row === 0 && col === m - 1)
        ) {
            minMoves = Math.min(minMoves, totalMoves);
            continue;
        }

        space = movementBoard[row][col]

        if(visited[space]) {
            continue;
        } else {
            visited[space] = true;
        }
    
        let valueOnSpace = board[row][col];
    
        if(valueOnSpace !== -1) {
            space = board[row][col]
        }

        if(valueOnSpace === n * m) {
            minMoves = Math.min(minMoves, totalMoves );
            continue;
        }

        if(space + 6 >= n * m) {
            minMoves = Math.min(minMoves, totalMoves + 1);
            continue;
        }

        for(let j = 1; j <= 6; j++) {
            let newSpace = space + j;
            let move = calculateNewMove(n, m, newSpace);
            let [r, c] = move;
            if(!visited[newSpace]) {
                newMoves.push(move);
            }
        }
    }

    return findLeastAmountOfMoves(board, movementBoard, newMoves, totalMoves + 1, minMoves, visited);
}

const calculateNewMove = (n, m, space) => {
    let end = n * m;

    let row = n - Math.floor((space - 1) / m) - 1;
    let col; 
    let isRowInverted;
    
    if(n % 2 === 0) {
        isRowInverted = row % 2 === 0;
    } else {
        isRowInverted = row % 2 !== 0;
    }
    
    if(isRowInverted) {
        col = (end - row * m) - space;
    } else {
        col = m - ((end - row * m) - space) - 1
    }

    return [row, col]
}