/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    let possibleValues = {};

    for(let i = 0; i < nums.length; i++) {
        if(!possibleValues[nums[i]]) {
            possibleValues[nums[i]] = []
        } 
        possibleValues[nums[i]].push(i)
    }

    let output = [];
    for(let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j];
            let neededValue = -1 * (num1 + num2);
            //console.log(neededValue)
            if(possibleValues[neededValue]) {
                for(let k = 0; k < possibleValues[neededValue].length; k++) {
                    if(possibleValues[neededValue][k] !== i && possibleValues[neededValue][k] !== j) {
                        output.push([i,j,possibleValues[neededValue][k]])
                    }
                }
            }
        }

    }

    //console.log(possibleValues)
    console.log(output)
};


// Non Distinct - Brute Force 
const threeSum2 = (nums) => {
    let output = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                if(nums[i] + nums[j] + nums[k] === 0) {
                    output.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    return output;
}


const helper = (nums, startIdx) => {
    let possibilities = {};
    for(let i = startIdx; i < nums.length; i++) {
        for(let j = i + 1; i < nums.length; i++) {
            let sum = nums[i] + nums[j];

            if(!possibilities[sum]) {
                possibilities = [nums[i], nums[j]]
            }
        }
    }
}

const threeSum3 = (nums) => {
    nums.sort((a,b) => a - b);
    console.log(nums)
    let possibilities = {};

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            console.log(i , j, sum);
        }
    }
}

const threeSum4 = (nums) => {
    // Need to sort the array to keep track of uniques
    nums.sort((a,b) => a - b);
    let output = [];
    let distinct = {};
    for(let i = 0; i < nums.length; i++) {
       let p1 = i + 1;
       let p2 = nums.length - 1;
    
       // Target
       let target = nums[i] * -1;
    
       while(p1 < p2) {
            if((nums[p1] + nums[p2]) > target) {
                p2--;
            } else if((nums[p1] + nums[p2]) < target) {
                p1++;
            } else {
                // Only add if the value is unique
                if(!distinct[`${nums[i]},${nums[p1]},${nums[p2]}`]) {
                    output.push([nums[i], nums[p1], nums[p2]]);
                    distinct[`${nums[i]},${nums[p1]},${nums[p2]}`] = true;
                }
              
                p1++;
            }
       }
    }

    return output
}

console.log(threeSum4([-1,0,1,2,-1,-4]));