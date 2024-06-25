/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let p1 = 0;
    let p2 = nums.length - 1;
    
    nums = nums.map((num, index) => {
        return { index, val: num };
    })

    nums.sort((a, b) => a.val - b.val);
   
    while(p1 < p2) {
        let num1 = nums[p1];
        let num2 = nums[p2];
        let sum = num1.val + num2.val;
       
        if(sum === target) {
            return [num1.index, num2.index];
        } else if(sum < target) {
            p1++;
        } else {
            p2--;
        }
    }

    return false;
};