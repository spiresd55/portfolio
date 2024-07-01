/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let n = Math.max(a.length, b.length);

    let carry = 0;
    let output = '';
    for(let i = 0; i < n; i++) {
        let num1 = parseInt(a[a.length - i - 1] || '0');
        let num2 = parseInt(b[b.length - i - 1] || '0');

        let sum = num1 + num2 + carry;
        if(sum === 0) {
            output = '0' + output;
            carry = 0;
        } else if (sum === 1) {
            output = '1' + output;
            carry = 0;
        } else if(sum === 2) {
            output = '0' + output;
            carry = 1;
        } else if(sum === 3) {
            output = '1' + output;
            carry = 1;
        }
    }

    if(carry === 1) {
        output = '1' + output
    }

    return output;
};

const padString = (str, n) => {
    let prefix = '';
    for(let i = 0; i < n; i++) {
        prefix += '0'
    }

    return prefix + str;
}