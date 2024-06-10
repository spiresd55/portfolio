/**
 * @param {string} s
 * @return {number}
 */
//O(n) time , O(1) space
const romanToInt = (s) => {
    let conversion = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let output = 0;
    let counter = 0;

    while(counter < s.length) {
        let numeral = s[counter];
        let numeralVal = conversion[numeral];

        if(counter === s.length - 1) {
            output += numeralVal;
            counter++;
            break;
        } 

        let nextNumeral = s[counter + 1];
        let nextNumeralValue = conversion[nextNumeral];

        if(numeralVal >= nextNumeralValue) {
            output += numeralVal;
            counter++;
            continue;
        } else {
            output += nextNumeralValue - numeralVal;
            counter+=2;
            continue;
        }
    }

    return output;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let conversionToNumber = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let conversions = [
        { symbol: 'M', prev: 'C'},
        { symbol: 'D'},
        { symbol: 'C', prev: 'X'},
        { symbol: 'L'},
        { symbol: 'X', prev: 'I'},
        { symbol: 'V', prev: 'I'},
        { symbol: 'I'},
    ];

    let remaining = num; 
    let output = '';

    conversions.forEach((conversion, idx) => {
        let {symbol, prev} = conversion;
        let conversionVal = conversionToNumber[symbol];
        let prevConversionValue = conversionToNumber[prev];

        console.log(symbol, conversionVal, prevConversionValue, remaining)
        if(conversionVal <= remaining) {
            let divisibleBy = Math.floor(remaining / conversionVal);
            if(divisibleBy > 3) {
                output += symbol + conversions[idx - 1].symbol;
            } else {
                output += repeatChars(symbol, divisibleBy);
            }
            remaining -= (conversionVal * divisibleBy);
        } 
        
        if(prevConversionValue && (conversionVal - prevConversionValue) <= remaining ) {
            output += prev + symbol
            remaining -= (conversionVal - prevConversionValue);
        }
    });

    return output;
};

let repeatChars = (char, n) => {
    let output = '';
    for(let i = 0; i < n; i++) {
        output += char;
    }
    return output;
}

//console.log(intToRoman(3));
//console.log(intToRoman(58));
console.log(intToRoman(1994));