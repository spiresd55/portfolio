/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let rightSide = 1;
    let stack = []
    let output = [];
    //Calculate the right side
    for(let i = nums.length - 1; i >= 1; i--) {
        rightSide = rightSide * nums[i];
        stack.push(rightSide)
    }

    let leftSide = 1;

    for(let i = 0; i < nums.length; i++) {
         if(i !== 0) {
            leftSide *= nums[i - 1];
         } 
         
         if(i === nums.length - 1) {
            output.push(leftSide);
         } else {
            output.push(leftSide * stack.pop());
         }

    }

    return output;
};


console.log(productExceptSelf([1,2,3, 4]))