
//O log n
const findMagicIndex = (arr) => {
    let indexes = [];

    for(let i = 0; i < arr.length; i++) {
        if(i === arr[i]) {
            return i;
        }
    }

    return -1;
}

let testArray1 = [0, 1, 2, 3, 5, 10, 12];

let testArray2 = [3, 4, 5, 5.5, 5.7, 5.8, 6];

let testArray3 = [1, 1, 1, 1, 4, 4, 4, 4, 4];

console.log(findMagicIndex(testArray1));

//TODO: Come back to this problem
const findMagicIndexOptimized = (arr) => {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        let mid = Math.floor((high - low) / 2);
        console.log('mid', mid)
        if(arr[mid] === mid) {
            return mid;
        } else if(arr[mid] > mid) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}

const findMagicIndexRecursion = (arr, low, high) => {
    if(low === undefined) {
        low = 0;
    }

    if(high === undefined) {
        high = arr.length - 1;
    }

 
    if(low > high) {
        return - 1;
    }

    let mid = Math.floor((high - low) / 2);
    if(mid === arr[mid]) {
        return mid;
    } else if (arr[mid] > mid) {
        return findMagicIndexRecursion(arr, low, mid - 1 );
    } else {
        return findMagicIndexRecursion(arr, mid + 1, high);
    }
}

console.log('Binary Search');
console.log(findMagicIndexOptimized(testArray1));
console.log(findMagicIndexOptimized(testArray2));
//console.log(findMagicIndexOptimized(testArray3));

console.log('Recursion');
console.log(findMagicIndexRecursion(testArray1));
console.log(findMagicIndexRecursion(testArray2));
//console.log(findMagicIndexRecursion(testArray3));