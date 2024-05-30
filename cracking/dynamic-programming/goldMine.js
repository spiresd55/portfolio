const mine = [
    [3, 2, 12, 15, 10],
    [6, 19, 7, 11, 17],
    [8, 5, 12, 32, 21],
    [3, 20, 2, 9, 7]
 ];


 const getTheMostGold = (mine, x = 0, y = 0, memo = {}) => {
    let n = mine.length;
    let m = mine[0].length;

    if(memo[`${x},${y}`]) {
        return memo[`${x},${y}`];
    } else if(x === n - 1) {
        memo[`${x},${y}`] = mine[x][y];
        return memo[`${x},${y}`];
    } else if(y === 0) {
        // Can move bottom and bottom-right
        memo[`${x},${y}`] = mine[x][y] + Math.max(getTheMostGold(mine, x + 1, y), getTheMostGold(mine, x + 1, y + 1));
        return memo[`${x},${y}`];
    } else if(y === m - 1) {
        // Can move bottom and bottom-left
        memo[`${x},${y}`] = mine[x][y] + Math.max(getTheMostGold(mine, x + 1, y), getTheMostGold(mine, x + 1, y - 1));
        return memo[`${x},${y}`];
    } else {
        // Can move bottom-left, bottom , and bottom-right
        memo[`${x},${y}`] = mine[x][y] + Math.max(getTheMostGold(mine, x + 1, y), getTheMostGold(mine, x + 1, y - 1) , getTheMostGold(mine, x + 1, y + 1));
        return memo[`${x},${y}`];
    }
 }

 const goldMine = (mine) => {
    let maxValue = 0;
    for(let i = 0; i < mine[0].length; i++) {
        maxValue = Math.max(maxValue, getTheMostGold(mine, 0, i));
    }
    return maxValue;
 }

 const goldMineBottomUp = (mine) => {
    let dp = [];
    let m = mine.length;
    let n = mine[0].length;

    for(let i = 0; i < m; i++) {
        dp.push([]);
    }

    for(let i = 0; i < n; i++) {
        dp[0][i] = mine[0][i];
    }

    for(let i = 1; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(j === 0) {
                let prev = Math.max(dp[i - 1][j], dp[i-1][j+1]);
                dp[i][j] = prev + mine[i][j];
            } else if(j === n - 1){
                let prev = Math.max(dp[i - 1][j], dp[i-1][j-1]);
                dp[i][j] = prev + mine[i][j];
            } else {
                let prev = Math.max(dp[i - 1][j], dp[i-1][j-1], dp[i-1][j + 1]);
                dp[i][j] = prev + mine[i][j];
            }
        }
    }

    return Math.max(...dp[dp.length - 1]);
 }

 console.log(goldMine(mine));

 console.log(goldMineBottomUp(mine));