const oneEditAway = (word1, word2) => {
    if(Math.abs(word1.length - word2.length) > 1) {
        return false;
    }

    if(word1.length === word2.length) {
        return oneEditReplace(word1, word2);
    } else {
        return oneInsertOrOneReplace(word1, word2);
    }
}

const oneInsertOrOneReplace = (word1, word2) => {
    let counter1 = 0;
    let counter2 = 0;
    let foundDifference = false;
    while(counter1 < word1.length || counter2 < word2.length) {
        if(word1[counter1] !== word2[counter2]) {
            if(foundDifference) {
                return false;
            }
            if(word1.length < word2.length) {
                counter2++;
            } else if(word2.length < word1.length) {
                counter1++;
            }
            foundDifference = true;
        } else {
            counter1++;
            counter2++;
        }
    }

    return true;
}

const oneEditReplace = (word1, word2) => {
    let foundDifference = false;

    for(let i = 0; i < word2.length; i++) {
        //Only allows one swap
        if(word1[i] !== word2[i]) {
            if(foundDifference) {
                return false;
            }
            foundDifference = true;
        }
    }
    return true;
}


console.log(oneEditAway('pale','ple'));
console.log(oneEditAway('pales','pale'));
console.log(oneEditAway('pale','bale'));
console.log(oneEditAway('pale','bake'));