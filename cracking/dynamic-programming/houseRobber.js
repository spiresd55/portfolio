let houses =  [2, 10, 3, 6, 8, 1, 7];

const helper = (houses, idx =0, memo = []) => {
    if(memo[idx]) {
        return memo[idx];
    }

    if(idx >= houses.length) {
        return 0;
    }
    
    memo[idx] = Math.max(helper(houses, idx + 1), houses[idx] + helper(houses, idx + 2));
    return memo[idx];
}

const houseRobberMemo = (houses) => {
    let memo = [];
    return Math.max(helper(houses, 0, memo), helper(houses, 1, memo));
}


const houseRobberBottomUp = (houses) => {
    let dt = [];
    dt[0] = houses[0];
    dt[1] = Math.max(houses[1], houses[0]);

    for(let i = 2; i < houses.length; i++) {
        dt[i] = Math.max(houses[i] + dt[i - 2], dt[i - 1] )
    }

    return dt[dt.length - 1];
}
console.log(houseRobberMemo(houses));
console.log(houseRobberBottomUp(houses));