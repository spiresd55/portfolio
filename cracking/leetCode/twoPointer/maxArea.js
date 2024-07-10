/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let p1 = 0;
    let p2 = height.length - 1;

    let maxHeight = 0;

    while(p1 < p2) {
        let heightP1 = height[p1];
        let heightP2 = height[p2];

        let potentialMax = Math.min(heightP1, heightP2) * (p2 - p1);
        maxHeight = Math.max(maxHeight, potentialMax);

        if(heightP1 < heightP2) {
            p1++
        } else {
            p2--;
        }
    }

    return maxHeight;
};