/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let shouldCarry = false;
    for(let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];
        
        //Adding one to the number(least sig dif)
        if(i === digits.length - 1) {
            digit += 1;
        }

        //If the previous addition was more than 10, then a carry is needed 
        if(shouldCarry) {
            digit += 1;
        }

        //Replace the number with carry value, and continue to carry
        if(digit > 9) {
            digits[i] = digit - 10;
            shouldCarry = true;
        //Stop carrying the number and break from the loop
        } else {
            digits[i] = digit;
            shouldCarry = false;
            break;
        }
    }

    //If a carry is still needed, than add one to the beggining of the array
    if(shouldCarry) {
        digits.unshift(1);
    }

    return digits;
};