/*
    Given an array of integers representing an elevation map where the width of each bar is 1,
    return how much rainwater can be trapped 
*/

const testArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2 ]; //Should return 8

// Do the left and right side of the graphs count as walls? No 
// Will there be negative integers? No

// [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2 ]; => 8 
//console.log(calculateRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2 ]));
// [] 0
//console.log(calculateRainWater([]));
// [3] 0
//console.log(calculateRainWater([3]));
// [3,4,3] 0
//console.log(calculateRainWater([3,4,3]));


// Question requires going through the entire array 
// Height of water can never exceed smallest wall
// Height of walls 

//O(n^2) time , O(1) space
const trappingRainWaterBF = (arr) => {
    let totalArea = 0;
    let maxWallHeightLeft = arr[0];
    for(let i = 1; i < arr.length; i++) {
        let currentHeight = arr[i];
        let maxWallHeightRight = 0;
        // Find Largest Node on Right 
        for(let j = i + 1; j < arr.length; j++) {
            maxWallHeightRight = Math.max(arr[j], maxWallHeightRight);
        }
        //console.log(Math.min(maxWallHeightLeft, maxWallHeightRight), currentHeight)
        //Only add if the walls are greater than the current node
        let currentWater =  Math.min(maxWallHeightLeft, maxWallHeightRight) - currentHeight
        if (currentWater > 0) {
            //The water can never exceed the smallest wall
            totalArea += currentWater;
        }

        maxWallHeightLeft = Math.max(maxWallHeightLeft, arr[i]);
    }

    return totalArea;
}

const calcRainWater = (current, maxLeft, maxRight) => {
    let currentWater =  Math.min(maxLeft, maxRight) - current;
    if(currentWater > 0) {
        return currentWater;
    }
    return 0;
}

//O(n) time, O(1) space
const trappingRainWaterOptimized = (arr) => {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    let maxLeft = arr[leftPointer];
    let maxRight = arr[rightPointer]; 
    let totalArea = 0;
    while(leftPointer < rightPointer) {
        //Calculate the water of a pointer before moving the pointer, the smallest pointer will always move
        if(arr[leftPointer] > arr[rightPointer]) {
            totalArea += calcRainWater(arr[rightPointer], maxLeft, maxRight);
            maxRight = Math.max(maxRight, arr[rightPointer]);
            rightPointer--;
        } else {
            totalArea += calcRainWater(arr[leftPointer], maxLeft, maxRight);
            maxLeft = Math.max(maxLeft, arr[leftPointer] )
            leftPointer++;
        }
    }

    return totalArea;
}

console.log(trappingRainWaterBF([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2 ]));
console.log(trappingRainWaterBF([]));
console.log(trappingRainWaterBF([2]));
console.log(trappingRainWaterBF([3,4,3]));
console.log(trappingRainWaterBF([5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1 ]));

console.log('-----------')

console.log(trappingRainWaterOptimized([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2 ]));
console.log(trappingRainWaterOptimized([]));
console.log(trappingRainWaterOptimized([2]));
console.log(trappingRainWaterOptimized([3,4,3]));
console.log(trappingRainWaterOptimized([5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1 ]));