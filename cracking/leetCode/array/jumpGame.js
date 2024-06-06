const {nums} = require('./nums')

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums, idx = 0, memo ={}) => {
    let m = nums.length;
    if(memo[idx]) {
        return memo[idx];
    }

    if(nums[idx] === 0 && idx < m - 1) {
        memo[idx] = false
        return memo[idx];
    }

    if(idx === m - 1) {
        memo[idx] = true;
        return memo[idx];
    }

    for(let i = nums[idx]; i > 0; i--) {
        let can = canJump(nums, idx + i, memo);
        if(can) {
            return true;
        }
    }
    memo[idx] = false
    return memo[idx];
}

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
//console.log(canJump(nums))

//Backtracking
const canJump2 = (nums, idx = 0, visited = []) => {
    let m = nums.length;
 
    //console.log(visited)
   // console.log(visited, idx)
    if(nums[idx] !== 0 && idx < m - 1) {
       if(visited[idx] !== undefined && visited[idx] > 0) {
            visited[idx] -= 1
            return canJump2(nums, idx + visited[idx], visited);
        } else if(visited[idx] !== undefined && visited[idx] <= 0) {
            //console.log('made it here')
            if(idx === 0) {
                return false
            }
            return canJump2(nums, idx - 1, visited)
        } else {
            //console.log('made it here 2',)
            visited[idx] = nums[idx];
            return canJump2(nums, idx + visited[idx], visited)
        }
    }
    
    if(nums[idx] === 0 && idx === 0 && nums.length > 1) {
        return false;
    } else if(nums[idx] === 0 && idx < m - 1) {
       //console.log('bingo')
       return canJump2(nums, idx - 1, visited)
    }
  
    return true;
}

//[2,3,1,1,4]
let canJump3 = (nums) => {
    let jump = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= jump) {
            jump = i;
        }
    }
    return jump === 0;
}

console.log(canJump2([2,3,1,1,4]));
console.log(canJump2([3,2,1,0,4]));
//console.log(canJump2(nums));

console.log(canJump3([2,3,1,1,4]));
console.log(canJump3([3,2,1,0,4]));
console.log(canJump3(nums));
//const canJump