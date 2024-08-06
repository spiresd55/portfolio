
//Implement the quick sort algorithm
// https://stackoverflow.com/questions/5185864/how-to-implement-a-stable-quicksort-algorithm-in-javascript

const quickSort = (arr) => {
   if(arr.length < 2) {
     return arr;
   }

   let left = [];
   let right = [];
   let equal = [];
   let pivot = arr[Math.floor(Math.random() * arr.length)];

   for(let i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else if(arr[i] > pivot){
            right.push(arr[i]);
        } else {
            equal.push(arr[i]);
        }
   }

   console.log(left, right)

   return [...quickSort(left), ...equal , ...quickSort(right)];
}

const randomList = [2,66,3,5,777,0,-1,3,20]

console.log(quickSort(randomList));
