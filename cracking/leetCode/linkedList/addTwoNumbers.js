class LinkedListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }   
}

const linkedListOne = new LinkedListNode(2, 
    new LinkedListNode(4, 
        new LinkedListNode(8)
    )
)

const linkedListTwo = new LinkedListNode(5, 
    new LinkedListNode(6, 
        new LinkedListNode(4)
    )
)

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let numbersOne = convertListToNumbers(l1); 
    let numbersTwo = convertListToNumbers(l2);

    //console.log(addTwoArrays(numbersOne, numbersTwo));

   // let sum = addTwoArrays(numbersOne, numbersTwo)
    let sum = addTwoArrays([9,9,9,9], [9,9,9,9,9,9,9])
    console.log(numbersOne, numbersTwo, sum)

    let list = null;
    let current = null;
    for(let i = sum.length - 1; i >= 0; i--) {
        if(list === null) {
            list = new LinkedListNode(sum[i]);
            current = list;
        }  else {
            current.next = new LinkedListNode(sum[i]);
            current = current.next;
        }
    }
    return list;
};

let addTwoArrays = (arr1, arr2) => {
    let p1 = arr1.length - 1;
    let p2 = arr2.length - 1;
    let output = [];
    
    while(p1 >= 0 || p2 >= 0) {
        let num1 = p1 < 0 ? 0 : arr1[p1];
        let num2 = p2 < 0 ? 0 : arr2[p2];
        let insertAt = Math.max(p1, p2);
        let additionalSum = output[insertAt] || 0;
        let sum = num1 + num2 + additionalSum;
        console.log(num1, num2, additionalSum, sum)

        //TODO: To stop another loop, in place adding of linked list nodes can occur here
        if(sum >= 10) {
            sum = sum.toString();
            if(insertAt -1 >= 0) {
                console.log('one')
                output[insertAt] = parseInt(sum[sum.length - 1]);
                output[insertAt - 1] = 1
            } else {
                console.log('two')
                output[insertAt] = parseInt(sum[sum.length - 1]);
                output.unshift(1)
            }
        } else {
            output[insertAt] = sum;
        }
        p1--;
        p2--;
    }

    return output;
}

let convertListToNumbers = (list) => {
    let output = [];

    if(!list) {
        return output;
    }

    let current = list;

    while(current !== null) {
        output.unshift(current.val);
        current = current.next;
    }

    /*output = output.reduce((prev, current, idx, arr) => {
        let multiplier = 10 ** (arr.length - 1 - idx);
        return prev + (current * multiplier)
    }, 0);*/

    return output;
}

console.log(addTwoNumbers(linkedListOne, linkedListTwo));