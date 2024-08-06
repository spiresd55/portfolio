const bubbleSort = (arr) => {
    let keepSorting = false;
    do{
        let swapMade = false;
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                keepSorting = true;
                swapMade = true;
            }
            if(i === arr.length - 2 && swapMade == false) {
                keepSorting = false;
            }
        }
    }while(keepSorting);

    return arr;
}

console.log(bubbleSort([2,55,0,-10,2,44,55342,0,1,12]));