/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let output = [];

    if(n === 0 || k === 0) {
        return [];
    }

    if(k === 1) {
        for(let i = 1; i <= n; i++) {
            output.push([i]);
        }
        return output;
    }

    combineHelper(1, n, k, undefined, output)
    return output;
};

const combineHelper = (index, n, k, current = [], output, used = {}) => {
    if(current.length === k) {
        output.push([...current])
        return;
    }

    for(let i = index; i <= n; i++) {
        current.push(i)
        combineHelper(i + 1, n, k, current, output);
        current.pop();
    }
}