/**
 * @param {string} s
 * @return {boolean}
 */
let test = 'A man, a plan, a canal: Panama';
let test2 = 'a.';
let test3 = 'race a car';
let test4 = '0P';

var isPalindrome = function(s) {
    let p1 = 0;
    let p2 = s.length - 1;
    let str = s.toLowerCase();
    
    let alphaNumericRegex = /[A-Za-z\d]/
    while(p1 < p2) {
        let charP1 = str[p1];
        let charP2 = str[p2];
        console.log(charP1, charP2)
        if(!alphaNumericRegex.test(charP1)) {
            console.log('o')
            p1++;
        } else if(!alphaNumericRegex.test(charP2)) {
            console.log('oo')
            p2--;
        } else if(charP1 !== charP2) {
            return false;
        } else {
            p1++;
            p2--;
        }
    }

    return true;
};

//console.log(isPalindrome(test));
//console.log(isPalindrome(test2));
//console.log(isPalindrome(test3));
console.log(isPalindrome(test4));