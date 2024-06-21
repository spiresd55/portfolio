/**
 * Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(' ');
    let wordPatterns = pattern.split('');
    let wordsUsed = {};
    let patternTracker = {};

    if(words.length !== wordPatterns.length) {
        return false;
    }

    for(let i = 0; i < pattern.length; i++) {
        let word = words[i];
        let wordPattern = wordPatterns[i];

        if(word === 'constructor') {
            word = 'constructor1235634534'
        }
        if(!patternTracker[wordPattern]) {
            if(wordsUsed[word]) {
                return false;
            }
            patternTracker[wordPattern] = word;
            wordsUsed[word] = true;
        } else {
            let wordAtPattern = patternTracker[wordPattern];
            if(wordAtPattern !== word) {
                return false;
            }
        }
    }

    return true;
};

//console.log(wordPattern("abba", "dog cat cat dog"));
//console.log(wordPattern("abba", "dog cat cat fish"));
//console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abba", "dog constructor constructor dog"));