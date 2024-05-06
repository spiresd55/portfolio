// A MaxHeap is a priority queue 
/* 
    - Every level should be level except the leaf nodes
    - Every node has a maximum of 2 children 
    - All nodes are as far left as possible
    - Heaps are complete trees (everything is full except the leaf nodes)
    - Used in algorithms such as Prims, Dijkstra, or Heap Sort 
*/
class MaxHeap {
    constructor() {
        this.heap = []; //Use array approach for binary search
        this.size = 0;
    }

    // Rearrange the elements in the heap to maintain the heap property 
    heapify(index) {
        let left = index * 2 + 1;
        let right = index * 2 + 2;
        let largest = index;

        if(this.heap[left] > this.heap[largest] && this.size > left) {
            largest = left;
        }

        if(this.heap[right] > this.heap[largest] && this.size > right) {
            largest = right;
        }

        if(largest !== index) {
            let tmp = this.heap[largest];
            this.heap[largest] = this.heap[index];
            this.heap[index] = tmp;
            this.heapify(largest);
        }
    }

    percolateUp(index) {
        let parent = Math.floor(index - 1 / 2);

        if(index <= 0) {
            return;
        } else if(this.heap[index] > this.heap[parent]) {
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

    removeMax() {
        if(this.size === 0) {
            return;
        }

        if(this.size === 1) {
            this.size--;
            return this.heap[0];
        }

        let max = this.heap[0];
        this.heap[0] = this.heap[this.size - 1];
        this.size--;
        this.heapify(0);
        return max;
    }

    isEmpty() {
        return this.size === 0;
    }

    size() {
        return this.size;
    }

    getMax() {
        if(this.size) {
            return this.heap[0];
        }
        return null;
    }

    print() {
      
    }

}


const maxHeap = new MaxHeap();
maxHeap.insert(0);
maxHeap.insert(1);
maxHeap.insert(2);
maxHeap.insert(-30);
maxHeap.insert(3);
maxHeap.insert(100);
maxHeap.insert(5);
maxHeap.insert(20);

console.log(maxHeap.heap)

console.log(maxHeap.removeMax());
console.log(maxHeap.removeMax());
console.log(maxHeap.removeMax());
console.log(maxHeap.removeMax());
console.log(maxHeap.removeMax());
console.log(maxHeap.removeMax());
console.log(maxHeap.removeMax());
console.log(maxHeap.removeMax());
console.log(maxHeap.removeMax());
