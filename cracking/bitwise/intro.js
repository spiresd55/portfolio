// https://code.tutsplus.com/number-systems-an-introduction-to-binary-hexadecimal-and-more--active-10848a

// Number System - Is A way to represent numbers

// Base - 10 (Decimal) is the first number system we learn 
// Base-16 (Hexadecimal) Letters and Numbers
// Base-8(octal)
// Base-2 (Binary)

// Base-10
// 2344 = 2*10^3 + 3*10^2 + 4*10^1 + 4 * 10 ^ 0

// Base-8 (0,1,2,3,4,5,6,7) , 
// WHat comes after 77? 100 
// 77(base-8) = 63(base-10)
// 528 = 5 * 8 ^ 2 + 2* 8 ^ 1 + 8 * * ^ 0

// Converting from Base-10 to Base-8
// 150(base-10) = 2 * 8 ^ 2 (128) + 2 * 8 ^ 1 (16) + 6 * 8 ^ 0 
// 150(base-10) = 226

// Formula for converting any base to base-10 = d4*b4 + d3*b3 + d2*b2 + d1*b1 + d0*b0

// base-4 example 
// 32311(base-4) = 3 * 4^4 + 2 * 4 ^ 3 + 3 * 4 ^ 2 + 1 * 4 ^ 1 + 1 + 4 ^ 0
// = 3 * 256 + 2*64 + 3*16 + 1*4 + 1*1 = 949

// Hexadecimal (Base-16)
// 0=0, 1=1, 2=2, 3=3, 4=4, 5=5, 6=6, 7=7, 8=8, 9=9, A=10, B=11, C=12, D=13, E=14, F=15

// 3D(base-16) = 3 * 16^1 + 13 * 16^0 = 48 + 13 = 61(Base-10)

// Convert 696 to base 10
// = 696 / 16^2 = 2 remainder 184
// = 184 // 16^1 = 11 remainder 8
// = 8/16^0 = 8 remainder 0
//  696 = 2B8(base-16)

// “There are only 10 types of people in the world: those who understand binary and those who don’t.”

// Convert 101100(base-2) to base-10
// 1 * 2 ^ 5 + 0 * 2 ^4 + 1 * 2^ 3 + 1 * 2 ^ 2 + 0 * 2 ^ 1 + 0 * 2 ^ 0 
// 32 + 0 + 8 + 4 + 0 + 0
// 44 (base-10) 

// 65(base-10) to binary 
// 65 / 2^6 = 1 remainder 1
// 1/2^5 = 0 remainder 1
// ... 1/2^0 1 remainder 0 = 1000001

// Easy way to convert binary to hex

// 1011101 (base-2)
// step 1: break it into groups of 4
// 0101 1101 
// 5 13  
// 5D(base-16)

// Can do the reverse, hex to binary
// B7(base-16) = 1011 0111 
// 10110111(Base-2)

// This works because base-16 is a power of 2, the same trick can be applied to octal(base-8) (divide in groups of 3)

// Next Lesson: https://code.tutsplus.com/understanding-bitwise-operators--active-11301a


//Bitwise & operator (compares 2 integers represent in binary, and returns 1, where both integers had 1 set in binary )

const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011

console.log(a & b); // 00000000000000000000000000000001

// Can use a Bitwise & to determine if a number is odd
// by comparing the least significant digit

let randomNumber =  Math.floor(Math.random() * 1000);
console.log(randomNumber, randomNumber & 1)

// Faster than using % operator
if(randomNumber & 1 === 1) {
    console.log('The number is odd');
} else {
    console.log('The number is even');
}

// Bitwise Or(|) operator
// The | operator compares each binary digit across two integers and gives back a 1 if either of them are 1.

console.log(37 | 23); // 55
console.log(7 | 8); // 15  - 1000 0111 becomes 1111


// Can use to pass multiple configurations to a class
class PopupWindow {
    static YES = 1;
    static NO = 2;
    static OKAY = 4;
    static CANCEL = 8;

    static showPopup(buttons) {
        if(buttons & this.YES) { // 0011 0001 - 0001
            console.log('yes button');
        }

        if(buttons & this.NO) { //0011 0010 - 0010
            console.log('no button')
        }

        if(buttons & this.CANCEL) { //0011 0010 - 0010
            console.log('cancel button')
        }

        if(buttons & this.OKAY) { //0011 0010 - 0010
            console.log('okay button')
        }
    }
}

// Can use this to config multiple things at once, must have each property at a different base value of 2
PopupWindow.showPopup(PopupWindow.YES | PopupWindow.NO | PopupWindow.CANCEL | PopupWindow.OKAY); // 0001 0010 - 0011

console.log('-----');
PopupWindow.showPopup(PopupWindow.OKAY); //Only show okay button


//0 + 0 = 0.
//0 + 1 = 1.
//1 + 0 = 1.
//1 + 1 =10.

// bitwise not operator ~ (switches 1's to 0's and 0's to 1's)
console.log(~5); // -6    0101 - 1010
console.log(~8); // 1000 - 0111  -9
// 0000 0000 0000 0000 0000 0000 0000 1000 (MSB is the  value left of the last one)
// 1111 1111 1111 1111 1111 1111 1111 0111 - then add 1
// 1111 1111 1111 1111 1111 1111 1111 1000 - 8 (2s compliment)
// 

// -9   0000 1001
//  1111 0110
// 1111 0111 -9 (2 complement)

// 8bit           - 0000 1000
// 2's compliment - 1111 0111
//                  1111 1000
//                       128 64 32 16 8 4 2 1    -128 + 64 + 32 + 16 + 8

console.log(~-8) // 7

// uint - 4 bytes or 32 bits long
// https://www.youtube.com/watch?v=sJXTo3EZoxM

// How to find singed magnitude 2 ^ n-1, where n represents bits needed (left most bit represents sign)

// 6    =    2^4-1 = 2^3 = 8
// 8 4 2 1
// 6 - > 0 1 1 0
// first three numbers represent number  (110)
// 0(110) 0 indicates positive, 1 indicates negative 

// 2's complement method
// 7 = 0111 
// step 1: Find compliment by swapping 1s an 0s = 1000
// step 2: add one = 1001
// -8 0 0 1 = -7 


// Bitwise XOR operator, compares the binary digits of 2 numbers. If one or the other is a one,
// it will insert a one as a result

console.log('BITWISE XOR');
console.log(37 ^ 23); //50

// Bitwise Shift Left Operator <<

// Lets take 37 << 3
// The binary digits of 37 is 00100101
// Remove the first three digits 001, and shift the binary numbers 00101
// Passing the empty space with 0's: 00101 -> 00101000
// 296      Shifting a value is the same as multiplying the base number to the exponent 2^n (n being the shift spaces)
// x << n === x * Math.pow(2, n)
console.log('BITWISE LEFT SHIFT');
console.log(37 << 3);

console.log('BITWISE Unsigned right'); //Similar to the shift left operator, but the shift happens from the right
console.log(37 >>> 3);  //00100101 -> 101 removed -> 00100 -> pad left -> 00000100 = 4 


