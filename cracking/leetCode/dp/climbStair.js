var climbStairs = function(n, memo = [1]) {
    if(n < 0) {
        return 0;
    }

    if(memo[n]) {
        return memo[n];
    }
    
    memo[n] = climbStairs(n - 1) + climbStairs(n-2)
    return memo[n];
};

const climbStairsBottomUp = (n) => {
    let dp = [1, 2];

    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n - 1];
}


console.log(climbStairs(2))
console.log(climbStairs(3))

console.log(climbStairs(38))

console.log('------')
console.log(climbStairsBottomUp(2))
console.log(climbStairsBottomUp(3))

console.log(climbStairsBottomUp(38))