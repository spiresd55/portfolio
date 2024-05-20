const binarySearch = (arr, query) => {
    let high = arr.length - 1;
    let low = 0;

    while(low <= high) {
        let mid = Math.floor(high - low);

        if(query > arr[mid]) {
            low = mid + 1;
        } else if(query < arr[mid]) {
            high = mid - 1;
        } else {
            return mid
        }
    }

    return -1;
}


let data = [
    1,
    30,
    44,
    55,
    6435,
    34543,
    345,
    9,
    88,
    7,
    0,
    -23
];

data = data.sort((a , b) => a - b);

console.log(data)
console.log(binarySearch(data, 90));