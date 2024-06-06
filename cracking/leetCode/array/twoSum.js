/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    let p1 = 0;
    let p2 = numbers.length - 1;
    let output = [];
    while(p1 < p2) {
        let sum = numbers[p1] + numbers[p2];

        if(sum > target) {
            p2--;
        } else if(sum < target) {
            p1++;
        } else {
            //output.push([p1 + 1, p2 + 1]);
            //p1++;
            return [p1 + 1, p2 + 1];
        }
    }

    return output;
};

//console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([5, 25, 75], 100))