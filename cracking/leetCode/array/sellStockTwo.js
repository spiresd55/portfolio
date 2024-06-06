
const maxProfit = (stockPrices, idx = 0, memo = []) => {
    let m = stockPrices.length;
    if(memo[idx]) {
        return memo[idx];
    } else if(idx >= m - 1) {
        return 0;
    } else {
        memo[idx] = Math.max(stockPrices[idx] - stockPrices[idx] + maxProfit(stockPrices, idx + 1, memo), stockPrices[idx + 1] - stockPrices[idx] + maxProfit(stockPrices, idx + 1, memo) );
        return memo[idx];
    }
}

console.log(maxProfit([7, 1 ,5 , 3, 6, 4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit( [7,6,4,3,1]));

//TODO: Fix this
const maxProfitBottomUp = (stockPrices) => {
    let m = stockPrices.length;
    let dp = [];
    dp[0] = 0;

    for(let i = 1; i < m - 1; i++) {
        dp[i] = dp[i -1] + Math.max(0, stockPrices[i + 1] - stockPrices[i]);
    }

    return dp[dp.length - 1];
}

const maxProfitThree = (stockPrices) => {
    let profit = 0;
    let buy = stockPrices[0];

    for(let i = 1; i < stockPrices.length; i++) {
        let sell = stockPrices[i];
        //console.log('buy', buy , 'sell', sell, '+1', stockPrices[i + 1])
        if(buy > sell) {
            buy = sell;
        } else if(sell > buy && sell >= stockPrices[i + 1]) {
            profit += sell - buy;
            buy = stockPrices[i + 1];
        } else if(i === stockPrices.length - 1 && sell > buy) {
            profit += sell - buy
        }
    }

    return profit;
}


console.log(maxProfitBottomUp([7, 1 ,5 , 3, 6, 4]));
console.log(maxProfitBottomUp([1,2,3,4,5]));
console.log(maxProfitBottomUp( [7,6,4,3,1]));
console.log('----')
console.log(maxProfitThree([7, 1 ,5 , 3, 6, 4]));
console.log(maxProfitThree([1,2,3,4,5]));
console.log(maxProfitThree( [7,6,4,3,1]));