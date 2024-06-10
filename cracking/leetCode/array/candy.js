/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let totalCandies = 0;
    let candyGiven = [];
    for(let i = 0; i < ratings.length; i++) {
        let left = i === 0 ? Number.Infinity : ratings[i - 1];
        let right = i === ratings.length - 1 ? Number.Infinity: ratings[i + 1];
        let current = ratings[i];
        let shouldGiveAdditionalCandy = false;

        if(current > left ) { 
            shouldGiveAdditionalCandy = true;
        }  else if( current > right) {
            shouldGiveAdditionalCandy = true;
        }

        if(shouldGiveAdditionalCandy && i !== 0) {
            if(left === ratings[i]) {
                totalCandies += candyGiven[i - 1];
                candyGiven[i] = candyGiven[i - 1];
            } else if(ratings[i] < left && ratings[i] > right){
                totalCandies += 2;
                candyGiven[i] = 2
            } else {
                totalCandies += candyGiven[i - 1] + 1;
                candyGiven[i] = candyGiven[i - 1] + 1;
            }
        } else if(shouldGiveAdditionalCandy && i === 0) {
            totalCandies += 2;
            candyGiven[i] = 2
        } else {
            totalCandies += 1;
            candyGiven[i] = 1
        }
    }

    console.log(candyGiven)
    return totalCandies
};

// console.log(candy([1,0,2]))
// console.log(candy([1,2,87,87,87,2,1]));
console.log(candy([29,51,87,87,72,12]));
//console.log(candy([1,3,2,2,1]))
// 1 2 2 1 2 2 1


const candyTwo = (ratings) => {
    let candyGiven = [];

    //Init CandyGiven Array 
    for(let i = 0; i < ratings.length; i++) {
        candyGiven.push(1);
    }

    //Left check
    for(let i = 1; i < candyGiven.length; i++) {
        if(ratings[i] > ratings[i - 1]) {
            candyGiven[i] = candyGiven[i - 1] + 1;
        } 
    }
    console.log(candyGiven)

    // Right check
    for(let i = candyGiven.length - 2; i >= 0 ; i--) {
        if(ratings[i] > ratings[i + 1]) {
            // Math.max is needed to prevent an overrite of the initial check 
            candyGiven[i] = Math.max(candyGiven[i + 1] + 1, candyGiven[i]);
        }
    }
    console.log(candyGiven)

    //Sum up the candy given
    return candyGiven.reduce((prev, current) => {
        return prev + current;
    }, 0);
}

//console.log(candyTwo([29,51,87,87,72,12]))
console.log(candyTwo([1,3,4,5,2]))