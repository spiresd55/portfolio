const data = [
    [0, 0, 1, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0]
]

// Memo
const calculateNumberOfPathsMemo = (matrix, i = 0, j = 0, memo = {}) => {
    let n = matrix.length;
    let m = matrix[0].length;

    if(memo[`${i},${j}`]) {
        return memo[`${i},${j}`];
    }
    
    if(i == n || j == m || matrix[i][j] === 1) {
        return 0
    } else if(i === n - 1 && j === m - 1) {
        return 1;
    } else {
        memo[`${i},${j}`] = calculateNumberOfPathsMemo(matrix, i + 1, j) + calculateNumberOfPathsMemo(matrix, i, j + 1)
        return memo[`${i},${j}`];
    }
}
const calculateNumberOfPaths = (matrix) => {
    let n = matrix.length;
    let m = matrix[0].length;

    let dp = [];

    for(let i = 0; i < n; i++) {
        dp.push([])
    }
    //console.log(dp, n)
    if(matrix[0][1] === 1 && matrix[1][0] === 1) {
        return 0;
    }

    dp[0][0] = 1;

    let stillPossible = true;
    for(let i = 1; i < m; i++) {
        if(matrix[0][i] === 0 && stillPossible) {
            dp[0][i] = 1;
        } else {
            stillPossible = false;
            dp[0][i] = 0;
        }
    }

    stillPossible = true;
    for(let i = 1; i < n; i++) {
        if(matrix[i][0] === 0 && stillPossible) {
            dp[i][0] =  1;
        } else {
            stillPossible = false;
            dp[i][0] = 0;
        }
    }

    for(let i = 1; i < n; i++) {
        stillPossible = true;
        for(let j = 1; j < m; j++) {
           if(matrix[i][j] !== 1) {
             dp[i][j] = dp[i-1][j] + dp[i][j - 1];
           } else {
             dp[i][j] = 0
           }
        }
    }

    // console.log(dp);
    return dp[n - 1][m - 1];
}

// Bottom Up

console.log(calculateNumberOfPathsMemo(data));
console.log(calculateNumberOfPaths(data));
