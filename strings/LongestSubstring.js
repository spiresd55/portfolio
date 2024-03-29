/* 
    Given a string, find the length of the longest substring without repeating characters
*/

//O(n^2) time and O(N) space
const findLongestSubstring = (str) => {
    let charMap = {};
    let maxCount = 0;
    let currentCount = 0;
    for(let i = 0; i < str.length; i++) {
        currentCount = 0;
        charMap = {};
        for(let j = i; j < str.length; j++) {
            if(!charMap[str[j]]) {
                currentCount++;
                maxCount = Math.max(maxCount, currentCount);
                charMap[str[j]] = true;
            } else {
                break;
            }
        }
    }

    return maxCount;
}

// Is the substring contiguous? yes, look or a substring vs subsequence(character breaks allowed)
// Does case sensitivity matter ? no 

// use sliding window technique, use it to represent current substring, size of window will change based on chars we have seen before
// our seen char hashmap keeps track of what characters we have seen(index)

//O(n) runtime and O(n) space
const findLongestSubstringOptimized = (str) => {
    if(str.length < 2) {
        return str.length;
    }
    let left = 0; let right = 0;
    let longestSubstring = 0, currentSubstring = 0;
    let charMap = {};
    while(right < str.length) {
        if(charMap[str[right]] === undefined) {
            charMap[str[right]] = right;
            right++;
            currentSubstring++;
            longestSubstring = Math.max(longestSubstring, currentSubstring);
        } else {
            left = charMap[str[right]] + 1;
            right = left;
            currentSubstring = 0;
            charMap = {};
        }
    }

    return longestSubstring;
}

const oneMoreApproach = (str) => {
    if(str.length < 2) {
        return str.length;
    }
    let charMap = {}; //Can use JS Map here to optimize this even further
    let longestSubstring = 0;
    let left = 0;

    for(let right = 0; right < str.length; right++) {
        const currentChar = str[right];
        const previouslySeenChar = charMap[currentChar];

        if(previouslySeenChar >= left) {
            left = previouslySeenChar + 1;
        }

        charMap[currentChar] = right;

        longestSubstring = Math.max(longestSubstring, right - left + 1);
    }

    return longestSubstring;
}

// abccabb - 3
console.log(findLongestSubstring('abccabb'));
// cccccccc - 1 
console.log(findLongestSubstring('cccccccc'));
// "" - 0
console.log(findLongestSubstring(''));
//abcbda - 4
console.log(findLongestSubstring('abcbda'));

console.log('-----optimized-------');
// abccabb - 3
console.log(findLongestSubstringOptimized('abccabb'));
// cccccccc - 1 
console.log(findLongestSubstringOptimized('cccccccc'));
// "" - 0
console.log(findLongestSubstringOptimized(''));
//abcbda - 4
console.log(findLongestSubstringOptimized('abcbda'));

console.log('-----optimized again-------');
// abccabb - 3
console.log(oneMoreApproach('abccabb'));
// cccccccc - 1 
console.log(oneMoreApproach('cccccccc'));
// "" - 0
console.log(oneMoreApproach(''));
//abcbda - 4
console.log(oneMoreApproach('abcbda'));

// Sliding Window Technique
// Form a window over some portion of sequential data, then move that window throughout the data to capture different parts of it

// Example problem - Given an array of integers, find two contiguous integers that form the greatest sum
console.log('------')
const findGreatestSum = (arr) => {
    if(arr.length < 2) {
        return 0;
    }
    let left = 0;
    let right = 1;
    let greatestSum = 0;
    while(right < arr.length) {
        greatestSum = Math.max(arr[left] + arr[right], greatestSum);
        left++;
        right++;
    }

    return greatestSum;
}

console.log(findGreatestSum([1,3,7,9,2,4]));