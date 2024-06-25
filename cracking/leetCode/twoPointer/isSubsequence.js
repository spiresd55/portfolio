/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(!s.length) {
        return true;
    }
    // Pointer for subsequence
    let p1 = 0;

    // Pointer for string
    let p2 = 0;


    while(p1 < s.length && p2 < t.length) {
        let subsequenceChar = s[p1];
        let char = t[p2];

        if(subsequenceChar === char) {
            p1++;
            p2++;
        } else {
            p2++;
        }

        if(p1 > s.length - 1) {
            return true;
        }
    }

    return false;
};

console.log(isSubsequence('abc','ahbgdc'));
console.log(isSubsequence('axc','ahbgdc'));


//Follow Up - Multiple Subsequences 
const isSubsequence2 = (sequences, t) => {
    //Sort the subsequences
    sequences.sort((a, b) => a.localeCompare(b));

    //Binary Search
    let p1 = 0;
    let p2 = sequences.length - 1;
    let mid = Math.floor((p2 - p1) / 2);

    while(mid >= p1 && mid <= p2) {
        let isSubsequence = isSubsequence(sequences[mid], t);
        if(isSubsequence) {
            return true;
        } else if(true) {

        }
    }
    console.log(sequences)
}


/*console.log(isSubsequence2([
    'xbc',
    'abc',
    'zff',
    'bab',
    'dec'
], 'test-drive')); */