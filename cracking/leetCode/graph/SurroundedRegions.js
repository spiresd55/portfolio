/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let visited = {};
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(visited[`${i},${j}`]) {
                continue;
            }

            if(board[i][j] === "O") {
                let cells = findCellsOfRegion(board, i, j, visited);
                isRegionSurrounded(board, cells, visited)
            }
        }
    }

    return board;
};


const isCellSurrounded = (matrix, x, y) => {
    let n = matrix.length;
    let m = matrix[0].length;

    if(x === 0 || y === 0 || x === n - 1 || y === m - 1) {
        return false;
    }

    return true;
}

const isRegionSurrounded = (matrix, cells, visited) => {
    let isSurroundedRegion = true;
    
    for(let i = 0; i < cells.length; i++) {
        const [x, y] = cells[i];
        if(!isCellSurrounded(matrix, x, y)) {
            isSurroundedRegion = false;
            break;
        };
    }

    //Mark all tiles as X if surrounded, mark as visited
    for(let i = 0; i < cells.length; i++) {
        const [x, y] = cells[i];

        if(isSurroundedRegion) {
            const [x,y] = cells[i];

            matrix[x][y] = "X";
        }
    }
}

const findCellsOfRegion = (matrix, x, y, visited) => {
    let queue = [[x, y]];
    let cells = [];
    let n = matrix.length;
    let m = matrix[0].length;

    while(queue.length) {
        let node = queue.pop();
        let [x, y] = node;
        cells.push([x, y]);
        visited[`${x},${y}`] = true;
        
        if(x > 0 && matrix[x - 1][y] === "O" && !visited[`${x-1},${y}`]) {
            queue.push([x-1, y])
        }

        if(y > 0 && matrix[x][y - 1] === "O" && !visited[`${x},${y-1}`]) {
            queue.push([x, y-1])
        }

        if(x < n - 1 && matrix[x + 1][y] === "O" && !visited[`${x+1},${y}`]) {
            queue.push([x + 1, y])
        }

        if(y < m - 1 && matrix[x][y+1] === "O" && !visited[`${x},${y+1}`]) {
            queue.push([x,y+1])
        }
    }

    return cells;
}