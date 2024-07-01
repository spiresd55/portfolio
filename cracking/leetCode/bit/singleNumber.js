/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Use a logical or ^
    // A logical or will turn a bit to zero if both bits are the same
    let number = nums[0];

    // A logical or will cancel a number if they are both the same
    // Essentially the number remaining is not the duplicate
    for(let i = 1; i < nums.length; i++) {
        number = number ^ nums[i];
    }

    return number;
};