// A MinHeap is a priority queue 
/* 
    - Every level should be level except the leaf nodes
    - Every node has a maximum of 2 children 
    - All nodes are as far left as possible
    - Heaps are complete trees (everything is full except the leaf nodes)
    - Used in algorithms such as Prims, Dijkstra, or Heap Sort 
*/
class MinHeap {
    constructor() {
        this.heap = []; //Use array approach for binary search
        this.size = 0;
    }

    // Rearrange the elements in the heap to maintain the heap property 
    heapify(index) {
        const left = index * 2 + 1;
        const right = index * 2 + 2;
        let smallest = index;
        
        if(this.size > left && this.heap[smallest] > this.heap[left]) {
            smallest = left;
        }
        
        if(this.size > left && this.heap[smallest] > this.heap[right]) {
            smallest = right;
        }

        if(smallest !== index) {
            let tmp = this.heap[smallest];
            this.heap[smallest] = this.heap[index];
            this.heap[index] = tmp;
            this.heapify(smallest);
        }
    }

    percolateUp(index) {
        const parent = Math.floor(index - 1 / 2);
        if(index <= 0) {
            return;
        } else if(this.heap[index] < this.heap[parent]) {
            let tmp = this.heap[parent];
            this.heap[parent] = this.heap[index];
            this.heap[index] = tmp;
            this.percolateUp(parent);
        }
    }

    insert(data) {
        if(!this.size) {
            this.heap[0] = data;
            this.size++;
        } else {
            this.heap.push(data);
            this.size++;
            this.percolateUp(this.size - 1);
        }
    }

    removeMin() {
        const min = this.heap[0];
        if(this.size > 1) {
            //Heap 0 becomes the last element in the tree
            this.heap[0] = this.heap[this.size - 1];
            this.size--;
            this.heapify(0);
            return min;
        } else if(this.size === 1) {
            this.size--;
            return this.heap[0];
        } else {
            return null;
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    size() {
        return this.size;
    }

    getMin() {
        if(this.size) {
            return this.heap[0];
        }
        return null;
    }

    print() {
        //console.log(this.heap);
        if(!this.size) {
            console.log('The heap is empty');
        } else {
            //BFS - Level Order print
            for(let i = 0; i < Math.log(this.size) / Math.log(2); i++) {
                let strToPrint = "";
                for(let j = 0; j < Math.pow(2, i) && j < Math.pow(2,i) + j < this.size; j++) {
                    let val = this.heap[j + Math.pow(2, i) - 1];
                   if(val == undefined) {
                        strToPrint += "-- "
                   } else {
                        strToPrint += `${val} `;
                   }
                }
                console.log(strToPrint);
            }
        }
    
    }

}


const minHeap = new MinHeap();
minHeap.insert(0);
minHeap.insert(1);
minHeap.insert(2);
minHeap.insert(-30);
minHeap.insert(3);

minHeap.print();


while(!minHeap.isEmpty()) {
    console.log(minHeap.removeMin());
    console.log('Heap After Removing');
    minHeap.print();
}