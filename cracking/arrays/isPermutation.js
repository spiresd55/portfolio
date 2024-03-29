// O( n log n) time, space O(n)
const isPermutation = (str, str2) => {
    return str.split('').sort().join('') === str2.split('').sort().join('');
}


console.log(isPermutation('abc', 'cba'));
console.log(isPermutation('1234test', 'test1234'));
console.log(isPermutation('true', 'false'));

// O(n) time, O(n) space
const isPermutationOptimized = (str1, str2) => {
    if(str1.length !== str2.length) {
        return false;
    }
    
    const charMap = {};

    for(let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }


    for(let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if(charMap[char]) {
            charMap[char]--;
        } else {
            return false;
        }
    }

    for(let k of Object.keys(charMap)) {
        if(charMap[k] !== 0) {
            return false;
        }
    }

    return true;
}

console.log(isPermutationOptimized('abc', 'cba'));
console.log(isPermutationOptimized('1234test', 'test1234'));
console.log(isPermutationOptimized('true', 'false'));