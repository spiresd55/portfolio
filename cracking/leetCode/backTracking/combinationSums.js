/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let output = [];
    let current = [];
    
    const backtrack = (index, sum) => {
        if(sum === 0) {
            output.push([...current])
            return;
        }

        if(sum < 0 || index === candidates.length) {
            return;
        }

        // Add current number to the possibilities
        current.push(candidates[index])
        // keep adding that number
        backtrack(index, sum - candidates[index]);
        // Remove number
        current.pop();
        // Move to the next candidate
        backtrack(index + 1, sum)
   
    }

    backtrack(0, target);
    return output;
};