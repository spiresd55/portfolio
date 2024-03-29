
const isUnique = (str) => {
    let charsUsed = {}

    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        if(charsUsed[char]) {
            return false;
        }
        charsUsed[char] = true;
    }

    return true;
}


console.log(isUnique('abcd'));
console.log(isUnique('abcda'));

// Without using a data structure
// O(n^2) - Compare each char with every other character in the str
// O(n log n) - Sort the str, and compare neighboring characters 