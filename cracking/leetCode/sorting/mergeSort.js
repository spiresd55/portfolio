const mergeSort = (arr) => {
    if(arr.length <= 1) {
        return arr;
    }

    let left = 0;
    let right = arr.length;
    let mid = Math.floor((left + right) / 2);
    
    let leftArray = mergeSort(arr.slice(0, mid));
    let rightArray = mergeSort(arr.slice(mid));

    console.log(arr)
    console.log(leftArray)
    console.log(rightArray)
    
    return merge(leftArray, rightArray)
}

const merge = (left, right) => {
    let sortedArray = [];

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }

    return [...sortedArray, ...left, ...right];
}

//Keeps dividing the array until its broken into 2 one sized arrays
// Then when it bubbles up the stack trace
// It merges the arrays back together
console.log(mergeSort([2,45,1,0,-10,6,5,4]));