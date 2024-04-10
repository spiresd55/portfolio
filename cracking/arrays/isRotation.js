const isStringRotation = (str1, str2) => {
    if (str1.length === str2.length) {
        let s1s1 = str1 + str1;
        return s1s1.indexOf(str2) !== -1
    }
    return false;
}

console.log(isStringRotation('waterbottle', 'bottlewater'));

console.log(isStringRotation('waterbottles', 'bottlewater'))