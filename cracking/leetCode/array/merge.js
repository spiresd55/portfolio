/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let elementCount = n + m;

    //Convert everything after m to 0
    for(let i = m; i < nums1.length; i++ ) {
        nums1[i] = 0;
    }

    // Merge the 2 arrays in place
    for(let i = 0; i < elementCount; i++) {
        //Once i has surpassed m, keep shifting the first element of the second array to the i postion of nums1
        if(i > m - 1) {
            nums1[i] = nums2.shift()
        } else if(nums1[i] >= nums2[0]) {
            //If nums1 is greater or equal to nums2, swap the values, and sort the second array
            let tmp = nums1[i];
            nums1[i] = nums2[0];
            nums2[0] = tmp;
            nums2.sort((a,b) => a - b);
        }
    }
};