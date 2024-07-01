/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0;
    let r = nums.length - 1;

    if(nums.length < 2) {
        return 0;
    }

    while(l < r) {
        let mid = Math.floor((r + l) / 2);

        if(nums[mid] > nums[mid + 1]) {
            r = mid
        } else {
            l = mid + 1
        }
    }

    return l;
};