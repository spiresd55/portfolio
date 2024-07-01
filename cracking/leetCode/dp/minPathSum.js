/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    return bottomUp(grid);
    //let memo = {}
    //return recursiveHelperMemo(grid, 0, 0, memo)
};

const recursiveHelper = (grid, i, j) => {
    let n = grid.length;
    let m = grid[0].length;

    if(i === n - 1 && m === m - 1) {
        return grid[i][j];
       //return 0
    }

    if(i === n || j === m) {
        return 0
    }

    if(i === n - 1) {
        return grid[i][j] + recursiveHelper(grid,i,j+1)
    }
    
    if(j === m  - 1) {
         return grid[i][j] + recursiveHelper(grid,i + 1,j)
    } 
    return  grid[i][j] + Math.min(recursiveHelper(grid, i + 1, j), recursiveHelper(grid, i, j + 1 ));
}


const recursiveHelperMemo = (grid, i, j, memo = {}) => {
    let n = grid.length;
    let m = grid[0].length;

    if(memo[`${i},${j}`]) {
        return memo[`${i},${j}`];
    }

    if(i === n - 1 && m === m - 1) {
        return grid[i][j];
    }

    if(i === n || j === m) {
        return 0
    }

    if(i === n - 1) {
        memo[`${i},${j}`] =  grid[i][j] + recursiveHelperMemo(grid,i,j+1, memo);
        return memo[`${i},${j}`];
    }
    
    if(j === m  - 1) {
         memo[`${i},${j}`] = grid[i][j] + recursiveHelperMemo(grid,i + 1,j, memo)
         return memo[`${i},${j}`] ;
    } 

    memo[`${i},${j}`] =  grid[i][j] + Math.min(recursiveHelperMemo(grid, i + 1, j, memo), recursiveHelperMemo(grid, i, j + 1, memo ))
    return memo[`${i},${j}`]
}

const bottomUp = (grid) => {
    let n = grid.length;
    let m = grid[0].length;

    let dp = [];

    dp[0] = [];

    for(let i = 0; i < m; i++) {
        if(i === 0) {
            dp[0].push(grid[0][0])
        } else {
            dp[0].push(dp[0][i - 1] + grid[0][i]) 
        }
    }

    for(let i = 1; i < n; i++) {
        dp.push([dp[i - 1][0] + grid[i][0]]) 
    }

    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][ j - 1]);
        }
    }

    return dp[n - 1][m - 1];
}