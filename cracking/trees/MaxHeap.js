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
    
    }

    percolateUp(index) {
        
    }

    insert(data) {
      
    }

    removeMax() {
   
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