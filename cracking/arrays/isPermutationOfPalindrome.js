
//O(n) time O(n) space
const isPermutationOfPalindrome = (word) => {
    let charCount = {};

    for(let i = 0; i < word.length; i++) {
        let char = word[i].toLowerCase();

        if(char === ' ') {
            continue;
        }

        if(charCount[char]) {
            charCount[char]+= 1;
        } else {
            charCount[char] = 1;
        }
    }

    let odds = 0;
    for(let char of Object.keys(charCount)) {
        console.log(char, charCount[char], charCount[char] % 2);
        let isCountOdd = charCount[char] % 2 !== 0;
        if(odds === 0 && isCountOdd) {
            odds++;
        } else if(odds !== 0 && isCountOdd) {
            return false;
        } else {
            continue;
        }
    }

    return true;
}

console.log(isPermutationOfPalindrome('Tact Coa'));
console.log(isPermutationOfPalindrome('Tact Coaa'));

// TODO: Solve with bit vector approach