/**
 * @param {number[]} nums
 * @return {number}
 */
const _jump = function(nums, idx = 0, memo = {}) {
    let m = nums.length;

    if(memo[idx]) {
        return memo[idx];
    }

    if(idx === m - 1) {
        return 0;
    }

    if(nums[idx] === 0 && idx < m - 1) {
        return Number.POSITIVE_INFINITY;
    }

    let min = Number.POSITIVE_INFINITY;
    for(let i = 1; i <= nums[idx]; i++) {
       min = Math.min(1 + _jump(nums, idx + i, memo), min)
        //min = Math.min(1 + _jump(nums, idx + i), min);
    }
    
    memo[idx] = min;
    return memo[idx];
};

const jump = (numbers) => {
    let result = _jump(numbers);
    return result === Number.POSITIVE_INFINITY ? 0 : result;
}

console.log(jump([2,3,1,1,4]))
console.log(jump([2,3,0,1,4]))

//TODO: Top Down Approach 
//TODO: Iterative Approach 