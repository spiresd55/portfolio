class Queue {
    constructor() {
        this.elements = [];
    }

    enqueue(item) {
        this.elements.push(item)
    }

    dequeue() {
        if(this.isEmpty()) {
            return null;
        }

        return this.elements.shift();
    }

    peek() {
        return this.elements[0];
    }

    isEmpty() { 
        return this.elements.length === 0;
    }
     
    get length() {
        return this.elements.length;
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log('Here is the queue');
console.log(queue.length);
console.log('------------------');

while(!queue.isEmpty()) {
    let element = queue.dequeue();
    console.log(element);
}

module.exports = Queue;