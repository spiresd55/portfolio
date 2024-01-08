/*
    You are given an array of positive integers where each integer represents the height of a vertical line on a chart.
    Find two lines which together with the x-axis forms a container that would hold the greatest amount of water.
    Return the area if water it would hold. 
*/

// Brute Force Solution, time - O(n^2) , space O(1)
const mostWater = (arr) => {
    if(arr.length < 2) {
        return 0;
    }

    let maxArea = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            const width = j - i;
            const height = Math.min(arr[i], arr[j]);
            maxArea = Math.max(maxArea, height * width);
        }
    }

    return maxArea;
}

// Does the thickness of the lines affect the area? No
// Do the left and right sides of the graph count as walls? no
// Does a higher line inside our container affect our area? no 
// [7, 1, 2, 3, 9] = L * W = 4 * 7 = 28 
// [] = 0
// [1] = 0
// [6, 9, 3, 4, 5, 8] = 6 * 5 = 30, 8 * 4 = 32 = 32

console.log(mostWater([7,1,2,3,9]));
console.log(mostWater([]));
console.log(mostWater([1]));
console.log(mostWater([6, 9, 3, 4, 5, 8]));

// O(n) time, O(1) space
const mostWaterOptimized = (arr) => {
    if(arr.length < 2) {
        return 0;
    }

    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    let maxArea = 0;
    while(leftPointer < rightPointer) {
        let width = rightPointer - leftPointer;
        let height = Math.min(arr[leftPointer], arr[rightPointer]);
        maxArea = Math.max(maxArea, width * height);

        if(arr[leftPointer] <= arr[rightPointer]) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }

    return maxArea;
}
console.log('--------------------');
console.log(mostWaterOptimized([7,1,2,3,9]));
console.log(mostWaterOptimized([]));
console.log(mostWaterOptimized([1]));
console.log(mostWaterOptimized([6, 9, 3, 4, 5, 8]));