/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let i = 0;
    let prefix = '';
    let shouldContinue = true;
    while(shouldContinue) {
        let char = '';
        for(let j = 0; j < strs.length; j++) {
            //This is the char we need to compare across all strings
            if(j === 0) {
                char = strs[j][i];
                //If not a valid char, go ahead and break from the loop
                if(!char) {
                    shouldContinue = false;
                    break;
                }
            } else if (strs[j][i] !== char) {
                //The characters no longer match, break out of the loop
                shouldContinue = false;
                break;
            }

            // Compared all strings at position i, indicating another letter can be added to the common prefix
            if(j === strs.length - 1 ) {
                prefix += char;
                i++;
            }
        }
    }

    // Return the longest common prefix
    return prefix;
};