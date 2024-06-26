const Matrix = require('./Matrix');

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid.length) {
        return 0;
    }

    let matrix = new Matrix(grid);
    let visited = {};

    let totalIslands = 0;
    for(let i = 0; i < matrix.n; i++) {
        for(let j = 0; j < matrix.m; j++) {
            let current = matrix.data[i][j];
            if(current == 1 && !visited[`${i},${j}`]) {
                traverseIsland(matrix, i, j, visited);
                totalIslands++;
            }
            visited[`${i},${j}`] = true;
        }
    }

    return totalIslands;
};

const traverseIsland = (matrix,x, y,visited) => {
    let nodesToProcess = [[x,y]];

    while(nodesToProcess.length) {
        let [row, col] = nodesToProcess.pop();
        visited[`${row},${col}`] = true;
        let surroundingNodes = matrix.getSurroundingCoordinates(row, col);
        for(let key in surroundingNodes) {
            let n = surroundingNodes[key];
            if(n && n.data == 1 && !visited[`${n.x},${n.y}`]) {
                nodesToProcess.push([n.x, n.y])
            }
        }
    }
}

let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];

let grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]];

  console.log(numIslands(grid))
  console.log(numIslands(grid2))