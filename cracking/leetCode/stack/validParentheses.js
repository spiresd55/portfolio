/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    let charStack = [];
    let charMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for(let i = 0; i < s.length; i++) {
        let char = s[i];

        switch(char) {
            case '(':
            case '{':
            case '[':
                charStack.push(char);
                break;
            case ')':
            case '}':
            case ']':
                let c = charStack.pop();
                if(c !== charMap[char]) {
                    return false
                }
                break;
            default:
                break;
        }
    }

    if(charStack.length) {
        return false;
    }

    return true;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));