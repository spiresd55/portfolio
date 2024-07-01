/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(triangle.length === 1) {
        return triangle[0];
    }

    return bottomUp(triangle);
};


const bottomUp = (triangle) => {
    let dp = [[triangle[0][0]]];
    for(let i = 1; i < triangle.length; i++) {
        dp[i] = [];
        for(let j = 0; j < triangle[i].length; j++) {
            if(j === 0) {
                dp[i].push(dp[i - 1][j] + triangle[i][j])
            } else if (j === triangle[i].length - 1) {
                dp[i].push(dp[i - 1][j- 1] + triangle[i][j]);
            } else {
                dp[i].push(triangle[i][j] + Math.min(dp[i -1][j], dp[i - 1][j - 1]))
            }
        }
    }

       let min = Number.POSITIVE_INFINITY;
        for(let i = 0; i < dp[dp.length - 1].length; i++) {
            min = Math.min(min, dp[dp.length - 1][i]);
        }
        return min;
  
}

const helper = (triangle, level, index = 0, sum = 0, memo = []) => {
    let lowest = Number.POSITIVE_INFINITY;
   // console.log(level, left, right, sum)
    if(memo[index]) {
            return memo[index];
    }
    if(level === triangle.length) {
        return sum;
    }

    let left = index;
    let right = index + 1;
    //console.log(triangle, level, triangle[level])
    let min = Number.POSITIVE_INFINITY
    //for(let i = 0; i < triangle[level].length - 1; i++) {
    min = Math.min(min, helper(triangle, level + 1, left, sum + triangle[level][index]), helper(triangle, level + 1, right, sum + triangle[level][index]));
    //}
    memo[index] = min
    console.log(min)
    return memo[index]
}