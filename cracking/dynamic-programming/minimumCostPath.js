let matrix = [
    [3, 2, 12, 15, 10],
    [6, 19, 7, 11, 17],
    [8, 5, 12, 32, 21],
    [3, 20, 2, 9, 7]
]

//Top Left Cell to the Bottom Left Cell (Without memo) O(2 ^ n + m)
const calculateMinCost = (matrix, i = 0, j = 0) => {
    if(i === matrix.length - 1 && j === matrix[0].length - 1) {
        return matrix[i][j]
    }
    if(i === matrix.length - 1) {
        return matrix[i][j] + calculateMinCost(matrix, i, j + 1);
    }
    if(j === matrix[0].length - 1) {
        return matrix[i][j] + calculateMinCost(matrix, i + 1, j);
    }
    return matrix[i][j] + Math.min(calculateMinCost(matrix, i +1, j), calculateMinCost(matrix, i, j + 1))
}

console.log(calculateMinCost(matrix));

//O(nm) time and space
const calculateMinCostMemo = (matrix, i = 0, j = 0, memo = {}) => {
    if(memo[`${i},${j}`]) {
        return memo[`${i},${j}`];
    }

    if(i === matrix.length - 1 && j === matrix[0].length - 1) {
        memo[`${i},${j}`] = matrix[i][j];
        return memo[`${i},${j}`];
    }
    if(i === matrix.length - 1) {
        memo[`${i},${j}`] = matrix[i][j] + calculateMinCost(matrix, i, j + 1);
        return memo[`${i},${j}`];
    }
    if(j === matrix[0].length - 1) {
        memo[`${i},${j}`] = matrix[i][j] + calculateMinCost(matrix, i + 1, j);
        return memo[`${i},${j}`];
    }
    memo[`${i},${j}`] = matrix[i][j] + Math.min(calculateMinCost(matrix, i +1, j), calculateMinCost(matrix, i, j + 1))
    return memo[`${i},${j}`];
}

// o(nm) time and space 
const calculateMinCostBottomUp = (matrix) => {
   let dp = [];

   for(let i = 0; i < matrix.length; i++) {
        dp.push([])
   }

   dp[0][0] = matrix[0][0];

   // Calculate the first horizontal row
   for(let j = 1; j < matrix[0].length; j++) {
    dp[0][j] = matrix[0][j] + dp[0][j - 1];
   }

   // Calculate the first vertical row
   for(let i = 1; i < matrix.length; i++) {
    dp[i][0] = matrix[i][0] + dp[i - 1][0];
   }

   // Go through and add the current value of the matrix to the min of the previous [row and column]
   for(let i = 1; i < matrix.length; i++) {
        for(let j = 1; j < matrix[0].length; j++) {
            dp[i][j] = matrix[i][j] + Math.min(dp[i-1][j], dp[i][j - 1]);
        }
   }

   // Return the bottom right of the table
   return dp[matrix.length - 1][matrix[0].length - 1];
}

console.log(calculateMinCostMemo(matrix));

console.log(calculateMinCostBottomUp(matrix));