/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let remaining = x;

    if(x < 0) {
        return false;
    }

    let num = reverseFunction(x);

    let numm = x;
    let reversed = 0;
    while(numm > 0) {
        console.log(Math.floor(num /10))
        console.log(num % 10)
        reversed = reversed * 10 + num % 10;
        numm = Math.floor(numm / 10);
    }

    console.log(reversed)
    console.log(num)

    if(x - num === 0) {
        return true;
    }

    return false;

};

const reverseFunction = (num, reversed = 0) => {
    if (num === 0) {
        return reversed;
    }
    return reverseFunction(Math.floor(num / 10),
        reversed * 10 + num % 10);
};