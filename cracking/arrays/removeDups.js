/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;

    while(i < nums.length - 1) {
        let current = nums[i];
        let next = nums[i + 1];

        if(current === next) {
            shiftLeft(nums, i);
        } else {
            i++;
        }
    }

    console.log(nums)
    return nums.length;
};


const shiftLeft = (nums, index) => {
    for(let i = index; i < nums.length - 1; i++) {
        nums[i] = nums[i + 1];
    }

    nums.pop();
}


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))