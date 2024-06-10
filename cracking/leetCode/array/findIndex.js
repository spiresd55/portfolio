/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // Current pointer of str
    let p1 = 0;

    // Where the matching substring starts
    let startIndex = 0;

    // Current pointer of needle
    let p2 = 0;

    while(p1 < haystack.length) {
       // console.log(haystack[p1], p1, p2, startIndex)
        if(haystack[p1] === needle[p2]) {
            if(p2 === 0) {
                startIndex = p1;
            }
            p1++;
            p2++;
        } else {
            p2 = 0;
            p1 = startIndex + 1;
            startIndex = p1;
        }
        
        if(p2 === needle.length) {
            return startIndex;
        }
    }

    return -1;
};


console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("mississippi", "issip"));