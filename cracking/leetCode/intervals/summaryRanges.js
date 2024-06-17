/*
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let output = [];

    if(!nums.length) {
        return output;
    }

    let start = nums[0];
    let end;

    for(let i = 1; i < nums.length; i++) {
        let prev = nums[i - 1];
        let current = nums[i];

        if(Math.abs(current - prev) === 1) {
            end = current;
        } else {
            writeToOutput(output, start, end)
            start = nums[i];
            end = undefined;
        }
    }

    writeToOutput(output, start, end);
    return output;
};

const writeToOutput = (output, start, end) => {
    if(end === undefined) {
        output.push(`${start}`);
    } else {
        output.push(`${start}->${end}`);
    }
}


console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,2,3,4,6,8,9]))
console.log(summaryRanges([-1,0,2,9]))