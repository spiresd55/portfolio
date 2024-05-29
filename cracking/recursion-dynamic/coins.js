// nickel, dimes, quarter


const coins = (cents, memo = [1] ) => {
    let coins = [1, 5, 10, 25];
    let coinCombos = [];

    for(let i = 0; i < coins.length; i++) {
        for( let j =0; j < memo.length; j++) {
            if(coins[i] <= j) {
                memo[j] = ways[(j - coins[i])];
            }
        }
    }

    return memo;
}


console.log(coins(8))