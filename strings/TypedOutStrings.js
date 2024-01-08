/*
    Given two strings S and T, return if they are equal when both are typed out. Any '#' that appears in the string counts as a backspace
*/

// What happens two #'s appear beside each other? Delete the two values before the #
// What happens to # when there is no character to remove? nothing
// Are two empty strings equal to each other? yes
// Does case sensitivity matter? yes

//O(n+m) time, O(n+m) space
const areStringsEqual = (str1, str2) => {
    return convertString(str1) === convertString(str2);
};

const convertString = (str) => {
    const arr = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '#') {
            arr.pop();
        } else {
            arr.push(str[i]);
        }
    }
    return arr.join("");
}

console.log(areStringsEqual("ab#z", "ab#z")); //True
console.log(areStringsEqual("abc#d", "acc#c")); //False
console.log(areStringsEqual("x#y#z#", "a#")); //True
console.log(areStringsEqual("a###b", "b")); // True
console.log(areStringsEqual("Ab#z", "ab#z")); // False


//O(n+m) time, O(1) space
const areStringsEqualOptimized = (str1, str2) => {
    let p1 = str1.length - 1;
    let p2 = str2.length - 1;

    while(p1 >= 0 || p2 >= 0) {
        if(str1[p1] === '#') {
            p1-=2;
        } else if(str2[p2] === '#') {
            p2-=2;
        } else if(str2[p2]!== str1[p1]) {
            return false;
        } else {
            p1--;
            p2--;
        }
    }

    return true;
}

console.log('------');
console.log(areStringsEqualOptimized("ab#z", "ab#z")); //True
console.log(areStringsEqualOptimized("abc#d", "acc#c")); //False
console.log(areStringsEqualOptimized("x#y#z#", "a#")); //True
console.log(areStringsEqualOptimized("a###b", "b")); // True
console.log(areStringsEqualOptimized("Ab#z", "ab#z")); // False
console.log(areStringsEqualOptimized("###ab#zbbd", "###ab#zbb#bd")); //true