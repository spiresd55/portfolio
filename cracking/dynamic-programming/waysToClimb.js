let stepPossibilities =  [2, 4, 5, 8];

const _waysToClimb = (n, stepPossibilities, memo = {}) => {
    if(memo[n]) {
        return memo[n];
    }

    if(n === 0) {
        return 1;
    }

    if(n < 0) {
        return 0;
    }

    let ways = 0;
    for(let i = 0; i < stepPossibilities.length; i++) {
        ways += _waysToClimb(n - stepPossibilities[i], stepPossibilities);
    }
    memo[n] = ways
    return memo[n];
}
const waysToClimb = (n, stepPossibilities) => {
    let ways = _waysToClimb(n , stepPossibilities)
    
    return ways;
}

console.log(waysToClimb(10, stepPossibilities));


const waysToClimbBottomUp = (n, stepPossibilities) => {
    let dp = []
    for(let i = 0; i <= n; i++) {
        dp.push(0);
    }
    dp[0] = 1;

    for(let i = 1; i <= n; i++) {
        for(let j = 0; j < stepPossibilities.length; j++) {
            if((i - stepPossibilities[j]) >= 0) {
                dp[i] += dp[i - stepPossibilities[j]]
            }
        }
    }

    return dp[dp.length - 1];
}

console.log(waysToClimbBottomUp(10, stepPossibilities));