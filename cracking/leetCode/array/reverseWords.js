/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').reduce((prev, word) => {
        console.log(word)
        let trimmedWord = word.trim();
        if(trimmedWord !== '') {
            prev.push(trimmedWord)
        }
        return prev;
    }, []).reverse().join(' ');
};