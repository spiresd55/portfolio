//O(n) time, O(n) space
const urlify = (str, length) => {
    const strToURLify = str.substring(0, length);
    let charArr = [];

    for(let i = 0; i < strToURLify.length; i++) {
        let char = strToURLify[i];

        if(char === ' ') {
            charArr.push('%20');
        } else {
            charArr.push(char);
        }
    }

    return charArr.join('');
    //return strToURLify.split(" ").join('%20'); //One liner
}


console.log(urlify('Mr John Smith   ', 13));