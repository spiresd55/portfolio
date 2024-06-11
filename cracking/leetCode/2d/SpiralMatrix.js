let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12], [13,14,15,16]];

/** 
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function(matrix) {
    let directions = ['r', 'd', 'l', 'u'];
    let startDirectionIndex = 0;
    let count = 0;
    let output = [];
    let n = matrix.length;
    let m = matrix[0].length;
    let i = 0;
    let j = 0;
    
    // Boundaries will shrink every time a loop is made
    let leftBoundary = 0;
    let rightBoundary = m - 1;
    let topBoundary = leftBoundary + 1;
    let bottomBoundary = n - 1;

    while(count < n * m ) {
        output.push(matrix[i][j]);
        if(directions[startDirectionIndex] === 'r') {
            if(j < rightBoundary ) {
                j++;
            } else {
                i++;
                startDirectionIndex++;
            }
        } else if(directions[startDirectionIndex] === 'd') {
            if(i < bottomBoundary) {
                i++;
            } else {
                startDirectionIndex++;
                j--;
            }
        } else if(directions[startDirectionIndex] === 'l') {
            if(j > leftBoundary) {
                j--;
            } else {
                startDirectionIndex++;
                i--;
            }
        } else if(directions[startDirectionIndex] === 'u') {
            if(i > topBoundary) {
                i--
            } else {
                //Shrink the boundaries and begin going right again
                topBoundary++;
                rightBoundary--;
                leftBoundary++;
                bottomBoundary--;
                startDirectionIndex = 0;
                j++;
            }
        }

        count++;
    }

    return output;
};


console.log(spiralOrder(matrix));