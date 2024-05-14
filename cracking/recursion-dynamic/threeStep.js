// A child can hop 1 , 2 , or 3 steps. Calculate all possibilities
const threeStep = (n) => {
    if(n < 0) {
        return 0;
    }

    if(n === 0) {
        return 1;
    }

    return threeStep(n - 3) + threeStep(n - 2) + threeStep(n - 1);
}

const threeStepMemo = (n, memo = []) => {
    if(memo[n]) {
        return memo[n];
    }

    if(n < 0) {
        return 0;
    }

    if(n === 0) {
        return 1;
    }

    memo[n] = threeStepMemo(n - 3) + threeStepMemo(n - 2) + threeStepMemo(n - 1);
    return memo[n];
}

console.log(threeStep(4), threeStepMemo(4));
console.log(threeStep(5), threeStepMemo(5));
// 1 - 1
// 2 - 2 {1, 1} {2}
// 3 - 4 {1, 1, 1} {2, 1} {3, 0} 
// 4 - 5 {1,1,1,1} {2, 2} { 3, 1}, {2, 1, 1}
// 5 -  {1,1,1,1,1} {3,2} {2,2,1} {1,1,1,2,}