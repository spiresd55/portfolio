/**
 * @param {string} digits
 * @return {string[]}
 */

/* 
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/
var letterCombinations = function(digits) {
    let digitConversion = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    if(!digits.length) {
        return [];
    }
    
    let output = [];

    let pointer = 0;

    while(pointer < digits.length) {
        let digit = digits[pointer];
        let digitToLetters = digitConversion[digit];

        if(!output.length) {
            output[0] = [];
            for(let i = 0; i < digitToLetters.length; i++) {
                output[0].push(digitToLetters[i]);
            }
        } else {
            let prevOutput = output[pointer - 1];
            output[pointer] = [];

            for(let i = 0; i < digitToLetters.length; i++) {
                for(let j = 0; j < prevOutput.length; j++) {
                    output[pointer].push(prevOutput[j] + digitToLetters[i]);
                }
            }
        }
        pointer++;
    }
    
    return output[output.length - 1];
};