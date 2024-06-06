/* 
    Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

    Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

    Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
    Return k.
*/

const shiftLeftAndPop = (nums, idx) => {
    for(let i = idx; i < nums.length; i++) {
        //console.log(nums[i], nums[i + 1], nums)  
        nums[i] = nums[i + 1]
    }

    nums.pop()
}

let elements = [3,4,5,6,7,3,3,8,9]
let elements2 = [3, 2, 2, 3]
const removeElement = (nums, num) => {
    for(let i = 0; i < nums.length; i++) {
      while(nums[i] === num) {
        shiftLeftAndPop(nums, i)
      }
    }

    return nums.length;
}

removeElement(elements, 3)
console.log(removeElement(elements2, 3));