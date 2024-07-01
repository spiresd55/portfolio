/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let memo = {};
    return recursionHelper(obstacleGrid, 0, 0, memo);
};

const recursionHelper = (obstacleGrid,i,j,memo) => {
    let n = obstacleGrid.length;
    let m = obstacleGrid[0].length;
    
    if(memo[`${i},${j}`]) {
        return memo[`${i},${j}`]
    }

    if(i === n || j === m) {
        return 0;
    }

    if(obstacleGrid[i][j] === 1) {
         memo[`${i},${j}`] = 0;
        return memo[`${i},${j}`];
    }

    if(i === n - 1 && j === m - 1) {
         memo[`${i},${j}`] = 1;
        return memo[`${i},${j}`];
    }

     memo[`${i},${j}`] = recursionHelper(obstacleGrid, i + 1, j, memo) + recursionHelper(obstacleGrid, i, j + 1, memo);
    return  memo[`${i},${j}`];
}


//Fix this

const bottomUpHelper = (grid) => {
    let n = grid.length;
    let m = grid[0].length;
    let dp = [[]];

    for(let i = 0; i < m; i++) {
        let isObstacle = grid[0][i] === 1 ? 0 : 1;

        if(i === 0) {
            dp[0][i] = isObstacle;
        } else {
            if(dp[0][i-1] === 0) {
                dp[0][i] = 0
            } else {
                dp[0][i] = 1
            }
        }
    }

    for(let i = 1; i < n; i++) {
        if(dp[i - 1][0] === 0) {
            dp.push([0]);
        } else {
            dp.push([grid[i][0] === 0 ? 1: 0]);
        }
    }

    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            if(dp[i - 1][j] === 0 && dp[i][j - 1] === 0) {
                dp[i][j] = 0;
            } else if(grid[i][j] === 1) {
                dp[i][j] = 0;
            } else if(dp[i -1][j] !== 0 && dp[i][j -1] !==0){
                dp[i][j] = dp[i][j-1] + dp[i -1][j] + 1;
            } else if(dp[i -1][j] !== 0) {
                dp[i][j] = dp[i][j-1] + 1;
            } else {
                dp[i][j] = dp[i - 1][j] + 1;
            }
        }
    }

    console.log(dp)
}