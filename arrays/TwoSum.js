/* 
    Given an array of integers, return the indices of the two numbers that up to a given target
*/

// Step 1: Verify the constraints (Ask questions to understand the question)
// Are all the numbers positive or can there be negatives? All numbers are positive
// Are there duplicate numbers in the array? There are no duplicates 
// Will there always be a solution available? No, there may not always be a solution 
// What do we return if there's no solution? Just return null
// Can there be multiple pairs? No, only one pair will exist

// Step 2: Write out some test cases 

// [1,3,7,9,2] t = 11 a = [3, 4]
// [1,3,7,9,2] t = 25 a = null
// [] t = 25 a = null
// [5] [] t = 5 a = null
// [1,6] t = 7 a = [0,1]

// Solve with 2 pointer technique 
// numberToFind = target - nums[p1]
// {o(n^2)}
const twoSum = (nums, target) => {
    if(nums.length < 2) {
        return null;
    }

    for(let i = 0; i < nums.length; i++) {
        let numberToFind = target - nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            if(numberToFind === nums[j]) {
                return [i, j];
            }
        }
    }

    return null;
}

console.log(twoSum([1,3,7,9,2], 11));
console.log(twoSum([1,3,7,9,2], 25));
console.log(twoSum([], 11));
console.log(twoSum([11], 11));
console.log(twoSum([10, 1], 11));

//O(n)
const twoSumOptimized = (nums, target) => {
    let numbersInArray = {};
    if(nums.length < 2) {
        return null;
    }
    for(let i = 0; i < nums.length; i++) {
        if(!numbersInArray[i]) {
            numbersInArray[nums[i]] = i;
        }
    }
    for(let i = 0; i < nums.length; i++) {
        let numberToFind = target - nums[i];
        if(numbersInArray[numberToFind]) {
            return [i, numbersInArray[numberToFind]];
        }
    }
    return null;
}
console.log('-------------------')
console.log(twoSumOptimized([1,3,7,9,2], 11));
console.log(twoSumOptimized([1,3,7,9,2], 25));
console.log(twoSumOptimized([], 11));
console.log(twoSumOptimized([11], 11));
console.log(twoSumOptimized([10, 1], 11));


const altTwoSum = (nums, target) => {
    if(nums.length < 2) {
        return null;
    }
    let numsMap = {};
    for(let i = 0; i < nums.length; i++) {
        let currentMapVal = numsMap[nums[i]];

        if(currentMapVal >= 0) {
            return [i, currentMapVal];
        } else {
            let numberToFind = target - nums[i];
            numsMap[numberToFind] = i;
        }
    }

    return null;
}

console.log('-------------------')
console.log(altTwoSum([1,3,7,9,2], 11));
console.log(altTwoSum([1,3,7,9,2], 25));
console.log(altTwoSum([], 11));
console.log(altTwoSum([11], 11));
console.log(altTwoSum([10, 1], 11));