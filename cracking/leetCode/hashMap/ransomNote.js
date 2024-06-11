/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    let allowedChars = {};

    if(!magazine.length) {
        return false
    }

    for(let i = 0; i < magazine.length; i++) {
        let letter = magazine[i].toLowerCase();

        if(!allowedChars[letter]) {
            allowedChars[letter] = 1;
        } else {
            allowedChars[letter] += 1
        }
    }

    for(let i = 0; i < ransomNote.length; i++) {
        let letter = ransomNote[i].toLowerCase();
        if(!allowedChars[letter]) {
            return false;
        } else if(allowedChars[letter] === 0) {
            return false;
        } else {
            allowedChars[letter] -= 1;
        }
    }

    return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));