//Roman Values

/* 
 I - 1
 V - 5 
 X -10 
 L - 50
 C - 100
 D - 500
 M - 1000
*/

/* 
    The value of the symbol is added to itself, as many times as it is repeated. (Eg. II – 2, XX – 20 and XXX – 30).
A symbol can be repeated only for three times, for example XXX = 30, CC = 200, etc.
Symbols V, L, and D are never repeated.
When a symbol of smaller value appears after a symbol of greater value, its values will be added. For Example-  VI = V + I = 5 + 1 = 6.
When a symbol of a smaller value appears before a greater value symbol, it will be subtracted. For Example-  IX = X – I = 10 – 1 = 9.
The symbols V, L, and D are never subtracted, as they are not written before a greater value symbol.
The symbol I can be subtracted from V and X only and symbol X can be subtracted from symbols L, M and C only.
*/
const convertRomanNumeralToNumber = (romanNumeral) => {
    //TODO: add validation to confirm if a string is a valid roman numeral
    let valueMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let pointer = 0;

    let sum = 0;
    while(pointer < romanNumeral.length) {
        let currentChar = romanNumeral[pointer];
        if(pointer === romanNumeral.length - 1) {
            sum += valueMap[currentChar];
            break;
        }

        let nextChar = romanNumeral[pointer + 1];

        if(valueMap[currentChar] >= valueMap[nextChar]) {
            sum += valueMap[currentChar];
            pointer++;
        } else {
            sum += (valueMap[nextChar] - valueMap[currentChar]);
            pointer+=2;
        }
    }

    return sum;
}

console.log(convertRomanNumeralToNumber('I'));
console.log(convertRomanNumeralToNumber('II'));
console.log(convertRomanNumeralToNumber('III'));
console.log(convertRomanNumeralToNumber('IV'));
console.log(convertRomanNumeralToNumber('V'));
console.log(convertRomanNumeralToNumber('LXXX'));
console.log(convertRomanNumeralToNumber('MI'));


const convertNumberToRomanNumeral = (num) => {
    let numbers = [1000, 500, 100, 50, 10, 5, 1];
    let numMap = {
        1000: 'M',
        500: 'D',
        100: 'C',
        50: 'L',
        10: 'X',
        5: 'V',
        1: 'I',
    };

    let pointer = 0;

    let conversion = '';
    while(pointer < numbers.length) {
        if(numbers[pointer] > num) {
            pointer++; 
        } else {
            // Figure out how many times the number is divisble 
            let count = Math.floor(num / numbers[pointer]);
            if(count < 4) {
                for(let i = 0; i < count; i++) {
                    conversion += numMap[numbers[pointer]];
                }
            } else {
                conversion +=  numMap[numbers[pointer]] + numMap[numbers[pointer - 1]];
            }
            num -= numbers[pointer] * count;
            pointer++;
        }
    }

    return conversion;
}

console.log(convertNumberToRomanNumeral(1001));
console.log(convertNumberToRomanNumeral(1401));
console.log(convertNumberToRomanNumeral(1415));
console.log(convertNumberToRomanNumeral(3515));
console.log(convertNumberToRomanNumeral(86));