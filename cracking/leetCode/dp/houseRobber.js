/**
 * @param {number[]} nums
 * @return {number}
 */
const houseRobber = (nums, n = 0, memo = []) => {
    if(memo[n]) {
        return memo[n];
    }

    if(n >= nums.length) {
        return 0;
    }

    memo[n] = Math.max(houseRobber(nums, n + 1, memo), nums[n] + houseRobber(nums, n + 2, memo));
    return memo[n];
}

const rob = (nums) => {
    return Math.max(houseRobber(nums, 0), houseRobber(nums,1))
}

console.log(houseRobber([1,2,3,1]))


const robBottomUp = (nums) => {
    let dp = [nums[0]]
    dp[1] = Math.max(nums[0], nums[1]);

    if(nums.length === 1) {
        return nums[0]
    }
  
    for(let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1],  nums[i] + dp[i - 2]);
    }

    return dp[dp.length - 1];
}

console.log(robBottomUp([1,2,3,1]))