/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let output = [];

    let xRange, yRange;

    //Sort Intervals by starting index
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    for(let i = 0; i < intervals.length; i++) {
        let [x1, y1] = intervals[i];
        if(xRange === undefined || yRange === undefined) {
            xRange = x1;
            yRange = y1;
            // [0,0] [1,4]
        } else if(x1 > yRange || x1 < xRange) {
            output.push([xRange,yRange]);
            xRange = x1;
            yRange = y1;
        } else {
            yRange = Math.max(yRange, y1);
            xRange = Math.min(xRange, x1);
        }
       
        if(i === intervals.length - 1) {
            output.push([xRange, yRange]);
        }
    }

    return output;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]))
console.log(merge([[1,4],[0,0]]));