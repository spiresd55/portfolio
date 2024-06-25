/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    let numTracker = {};

    for(let i = 0; i < nums.length; i++) {
        let current = nums[i];

        if(numTracker[current]) {
            numTracker[current] += 1;
        } else {
            numTracker[current] = 1;
        }
    }

    console.log(numTracker)
    let max;
    for(let key in numTracker) {
        console.log(key)
        if(!max) {
            max = {
                num: key,
                occurrences: numTracker[key]
            }
        }

        if(numTracker[key] > max.occurrences) {
            max.num = key;
            max.occurrences = numTracker[key];
        }
    }


    return max.num;
};

console.log(majorityElement([3,2,3]));

// Boyer-Moore Majority Voting Algorithm
/* 
The Boyer-Moore voting algorithm is one of the popular optimal algorithms which is used to find the majority element among the given elements that have more than N/ 2 occurrences. This works perfectly fine for finding the majority element which takes 2 traversals over the given elements, which works in O(N) time complexity and O(1) space complexity.
*/
const majorityElement2 = (nums) => {
    let count = 0;
    let candidate = -1;

    for(let i = 0; i < nums.length; i++) {
        if(count === 0) {
            count = 1;
            candidate = nums[i];
        }

        if(nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === candidate) {
            count++;
        }
    }

    if(count > nums.length / 2) {
        return candidate;
    }

    return -1;
}

console.log(majorityElement2([3,2,3]));
//This algorithm checks if there is a majority vote
console.log(majorityElement2([5,5,5,5,0,1,2,3,4,6]));