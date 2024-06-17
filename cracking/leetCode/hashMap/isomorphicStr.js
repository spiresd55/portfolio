/** 
 Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    if(s.length !== t.length) {
        return false;
    }

    return helper(s, t) && helper(t, s);
};


const isIsomorphic2 = (s, t) => {
    if(s.length !== t.length) {
        return false;
    }

    let charMapS = {};
    let charMapT = {};

    for(let i = 0; i < s.length; i++) {
        let charToReplace = s[i].toLowerCase();
        let replacementChar = t[i].toLowerCase();

        if(!charMapS[charToReplace]) {
            charMapS[charToReplace] = replacementChar;
        } else if(charMapS[charToReplace] && charMapS[charToReplace] !== replacementChar) {
            return false;
        }

        if(!charMapT[replacementChar]) {
            charMapT[replacementChar] = charToReplace;
        } else if(charMapT[replacementChar] && charMapT[replacementChar] !== charToReplace) {
            return false;
        }
    }

    return true;
}

const helper = (s, t) => {
    let charTable = {};

    for(let i = 0; i < s.length; i++) {
        //if(s[i] !== t[i]) {
            let charToReplace = s[i].toLowerCase();
            let replacementChar = t[i].toLowerCase();

            if(!charTable[charToReplace]) {
               // console.log(charTable[replacementChar])
                if(charTable[replacementChar] === replacementChar) {
                    return false;
                }
                charTable[charToReplace] = replacementChar;
            } else if((charTable[charToReplace] && charTable[charToReplace] !== replacementChar)) {
                return false;
            } 
       
    }

    return true;
}


console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("badc", "baba"));


console.log(isIsomorphic("abab", "baba"));