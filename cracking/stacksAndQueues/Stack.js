class Stack {
    constructor() {
        this.elements = [];
    }

    pop() {
        if(this.length === 0) {
            return null;
        }
        return this.elements.pop();
    }

    push(data) {
        this.elements.push(data);
    }

    peek() {
        if(this.isEmpty()) {
            return null;
        }

        return this.elements[this.elements.length - 1];
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    get length() {
        return this.elements.length;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
console.log('Stack Length', stack.length);

while(!stack.isEmpty()){
    let element = stack.pop();
    console.log(element);
}

module.exports = Stack;