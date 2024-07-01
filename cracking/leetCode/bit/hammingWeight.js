/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    return hammingWeight2(n)
    //convert to base 2 , toString(2) converts to binary, padStart pads the beginning of the string
    //let unsignedInt = n.toString(2).padStart(32, "0")
    let mask = 1;
    let counter = 0;
    for(let i = 0; i < 32; i++) {
        if((n & mask) !== 0) { // & operator will only switch a bit to one if both operands are 1, otherwise 0 is returned
            counter++;
        }
        mask = mask << 1; // shifts binary number over one bit, eg 0001 becomes 0010
    }

    return counter;
};

var hammingWeight2 = (n) => {
    let count = 0;

    // The bitwise & operator will continue to shed sig bits until none are left
    while(n !== 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
}