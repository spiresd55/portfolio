const _minCoins = (coins, amount, memo = {}) => {
    if(amount === 0) {
        return 0;
   }

   if(memo[amount]) {
    return memo[amount];
   }

   let mCoins = Number.POSITIVE_INFINITY;
   for(let i = 0; i < coins.length; i++) {
        if(amount - coins[i] >= 0) {
            mCoins = Math.min(mCoins, 1 + _minCoins(coins, amount - coins[i], memo))
        }
   }

   memo[amount] = mCoins;
   return memo[amount];
}
const minCoins = (coins, amount, memo = {}) => {
   let res = _minCoins(coins,amount, memo)
   return res === Number.POSITIVE_INFINITY ? -1: res;
}

console.log(minCoins([2, 3, 7], 15));


const minCoinsBottomUp = (coins, amount) => {
    let dp = [];
    dp[0] = 0;
    for(let i = 1; i <= amount; i++) {
        dp[i] = Number.POSITIVE_INFINITY;
    }

    for(let i = 1; i <= amount; i++) {
        for(let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]])
            } 
        }
    }

    return dp[amount];
}

console.log(minCoinsBottomUp([2, 3, 7], 15));