/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let current;
    let streak = 0;
    
    while(i < nums.length) {
        if(i === 0) {
            current = nums[i]
            i++;
        } else if(current === nums[i] && streak < 1) {
            streak++;
            i++;
        } else if(current === nums[i] && streak >= 1) {
            shiftLeft(nums, i)
        } else if(current !== nums[i]) {
            streak = 0;
            current = nums[i];
            i++;
        }
    }

    return nums.length
};


const shiftLeft = (nums, index) => {
    for(let i = index; i < nums.length - 1; i++) {
        nums[i] = nums[i + 1];
    }

    nums.pop();
}