
//O(n) time O(n) space
const stringCompression = (str) => {
    let output = '';
    let currentChar = str[0];
    let count = 1;
    
    for(let i = 1; i < str.length; i++) {
        let char = str[i];
        
        if(char !== currentChar) {
            output += `${currentChar}${count}`;
            currentChar = char;
            count = 1;
        } else {
            count++;
        }
    }

    output += `${currentChar}${count}`;

    return output;
}

console.log(stringCompression('aabbbbcccccddddefghijrrrr'));

console.log(stringCompression('aabbbbcccccddddefghi'));

console.log(stringCompression('aabbbbcccccddddefghiAAAABBBBBCCCCDDDDDEEEEEEEEE'));