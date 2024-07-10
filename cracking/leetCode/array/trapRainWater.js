/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let totalRainWater = 0;
    let peaks = [];

    let maxStack = [];

    //create a max stack
    for(let i = height.length - 1; i > 0; i--) {
        if(!maxStack.length) {
            maxStack.push(height[i]);
        } else {
            maxStack.push(Math.max(maxStack[maxStack.length - 1], height[i]))
        }
    }

    let leftMax = height[0];

    //To find the rain water at each space, take the min of the maxLeftWall and maxRightWall
    // then minus the total of that height from the max, if the number is greater than 0
    // add the final result to the total 
    for(let i = 1; i < height.length - 1; i++) {
       let rightMax = maxStack.pop();
       let total = Math.min(rightMax, leftMax) - height[i]
       leftMax = Math.max(height[i], leftMax);
       if(total > 0) {
        totalRainWater += total;
       }
    }
   
    return totalRainWater;
};
