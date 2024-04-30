const { SinglyLinkedList } = require('./SinglyLinkedList');

const linkedList = new SinglyLinkedList();
linkedList.insertNode(3);
linkedList.insertNode(5);
linkedList.insertNode(8);
linkedList.insertNode(5);
linkedList.insertNode(10);
linkedList.insertNode(2);
linkedList.insertNode(1);

const findNextPivotPoint = (list, x) => {
    let currentNode = list;
    
    while(currentNode) {
       // console.log('t', currentNode.data, x)
        if(currentNode.data >= x) {
            return currentNode;
        }
        currentNode = currentNode.next;
    }

    return null;
}

const partitionList = (list, x) => {
    if(!list.root) {
        return list;
    }

    let currentNode = list.root;
    let pivotPoint;
 
    while(currentNode) {
        if(currentNode.data >= x && !pivotPoint) {
            pivotPoint = currentNode;
        } else if(currentNode.data < x && pivotPoint) {
            //Swap
            let tmp = currentNode.data;
            currentNode.data = pivotPoint.data;
            pivotPoint.data = tmp;
            pivotPoint = findNextPivotPoint(pivotPoint, x);
        }

        currentNode = currentNode.next;
    }

    return linkedList;
}

console.log('after partition');
partitionList(linkedList, 5).print();