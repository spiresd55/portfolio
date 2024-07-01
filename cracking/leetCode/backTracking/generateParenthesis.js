/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let output = [];
    helper(n, 0, 0, '', output);
    return output;
};


const helper = (n, opened, closed, current = '', output) => {
    if(opened === n && closed === n) {
        output.push(current);
        return;
    }

    if(opened === closed || opened < n) {
        helper(n, opened + 1, closed, `${current}(`, output);
    } 

    if(closed < opened) {
        helper(n, opened, closed + 1, `${current})`, output)
    }

}