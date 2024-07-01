/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length) {
        return false;
    }

    let n = matrix.length;
    let m = matrix[0].length;

    let start = 0;
    let end = n * m - 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);

        //row
        let i = Math.floor(mid / m);
        //column
        //let j =  m - (((i + 1) * m) - mid)
        let j = mid % m;
        if(matrix[i][j] === target) {
            return true;
        } else if(matrix[i][j] < target) {
            start = mid + 1;
        } else {
            end = mid - 1
        }
    }

    return false;
};