const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let pendingChanges = [];
    let n = board.length;
    let m = board[0].length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            let isCurrentLive = board[i][j] === 1;
            let liveNeighbors = 0;
            // Top
            if(i !== 0 && board[i-1][j] === 1) {
                liveNeighbors++; 
            }
            // Bottom
            if(i !== n - 1 && board[i+1][j] === 1) {
                liveNeighbors++;
            }
            // Bottom Right
            if(i !== n - 1 && j !== m - 1 && board[i+1][j+1] === 1) {
                liveNeighbors++;
            }

            //Bottom Left
            if(i !== n - 1 && j !== 0 && board[i+1][j-1] === 1) {
                liveNeighbors++;
            }
            // Right
            if(j !== m - 1 && board[i][j + 1] === 1) {
                liveNeighbors++;
            }
            // Top Right 
            if(j !== m - 1 && i !== 0 && board[i-1][j+1] === 1) {
                liveNeighbors++;
            }
            // Left
            if(j !== 0 && board[i][j-1] === 1) {
                liveNeighbors++;
            }
            // Top Left
            if(j !== 0 && i !==0 && board[i-1][j-1] === 1) {
                liveNeighbors++;
            }


            // Rules
            if(isCurrentLive) {
                // Any live cell with fewer than two live neighbors dies as if caused by under-population.
                // Any live cell with more than three live neighbors dies, as if by over-population.
                if(liveNeighbors < 2 || liveNeighbors > 3) {
                    pendingChanges.push([i,j,0]);  
                }              
            } else {
                // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
                if(liveNeighbors === 3) {
                    pendingChanges.push([i,j,1]);
                }
            }
        }
    }

    for(let i = 0; i < pendingChanges.length; i++) {
        const [x, y, value] = pendingChanges[i];
        board[x][y] = value;
    }

    console.log(board)
};

gameOfLife(board);