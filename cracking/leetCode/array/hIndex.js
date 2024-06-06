let arr = [3,0,6,1,5];


const hIndex = (citations) => {
    citations.sort((a, b) => b - a);

    let totalCitations = 0;
    for(let i = 0; i < citations.length; i++) {
        if(citations[i]) {
            totalCitations++;
        }
    }

    for(let i = 0; i < citations.length; i++) {
        let current = citations[i];

        if(i + 1 >= current && totalCitations >= i + 1) {
            return current;
        }
    }

    //if(citations[citations.length - 1] > citations.length) {
    //    return citations.length;
    //}

    return totalCitations;
}


//O(n log n) time , O(1) space
const hIndex2 = (citations) => {
    citations.sort((a, b) => b - a);
    let magicIndex = 0;

    for(let i = 0; i < citations.length; i++) {
        let current = citations[i];

        if(current > magicIndex) {
            magicIndex++;
        }
    }

    return magicIndex;
}


console.log(hIndex2(arr));