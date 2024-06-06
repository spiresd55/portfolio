let prices = [7, 1, 5, 3, 6, 4]
let prices2 = [7,6,4,3,1];
let prices3 = [7,1,4,.25,20,6]

//Brute Force O(n^2) time , O(1) space
let bestTimeToBuyStock = (stockPrices) => {
    let maximumProfit = 0;

    for(let i = 0; i < stockPrices.length; i++) {
        for(let j = i + 1; j < stockPrices.length; j++) {
            maximumProfit = Math.max(maximumProfit, stockPrices[j] - stockPrices[i])
        }
    }

    return maximumProfit;
}

//O(n) time, O(n) space
let bestTimeToBuyStock2 = (stockPrices) => {
    let maximumSell = [];

    let highestSellPrice = 0;
    for(let i = stockPrices.length - 1; i >= 0; i--) {
       highestSellPrice = Math.max(highestSellPrice, stockPrices[i]);
       maximumSell[i] = highestSellPrice;
    }

    let maximumProfit = 0;
    for(let i = 0; i < stockPrices.length - 1; i++) {
        maximumProfit = Math.max(maximumSell[i + 1] - stockPrices[i], maximumProfit);
    }

    return maximumProfit;
}

let maxProfit = (prices) => {
    let profit = 0;
    let buy = prices[0];

    for(let i = 1; i < prices.length; i++) {
        let sell = prices[i];
        if(sell > buy) {
            profit = Math.max(profit, sell - buy)
        } else {
            buy = sell;
        }
    }

    return profit;
}

console.log(bestTimeToBuyStock(prices));
console.log(bestTimeToBuyStock(prices2));

console.log(bestTimeToBuyStock2(prices));
console.log(bestTimeToBuyStock2(prices2));

console.log(maxProfit(prices));
console.log(maxProfit(prices2));