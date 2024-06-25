/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) {
        return false;
    }

    let charCount = {};

    for(let i = 0; i < s.length; i++) {
        let char = s[i];

        if(charCount[char]) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }

    for(let i = 0; i < t.length; i++) {
        let char = t[i];

        if(!charCount[char]) {
            return false;
        } else {
            charCount[char] -= 1;
        }
    }

    for(let char in charCount) {
        if(charCount[char] !== 0) {
            return false;
        }
    }

    return true;
};