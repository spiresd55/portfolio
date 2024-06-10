/**
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
    let p1 = 0;
    let p2 = 0;
    let sum = 0;
    //get the initial pointers
    while(p2 < nums.length && sum < target) {
        sum += nums[p2];
        if(sum < target) {
            p2++;
        }
    }

    if(sum < target) {
        return 0;
    }

    let minSize = p2 - p1 + 1;
    while(p1 <= p2) {
        if(sum >= target) {
            minSize = Math.min(p2 - p1 + 1, minSize);
        }

        if(p1 === p2) {
            if(nums[p1] >= target) {
                return 1;
            }
            p1++;
        } else if(sum < target && p2 < nums.length - 1) {
            p2++;
            //console.log(`+${nums[p2]}`)
            sum += nums[p2];
        } else {
            sum -= nums[p1];
            //console.log(`-${nums[p1]}`)
            p1++;
        }
    } 

    return minSize;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1,4,4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))