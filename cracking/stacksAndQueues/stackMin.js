class Stack {
    constructor() {
        this.elements = [];
        this.min;
    }

    pop() {
        if(this.length === 0) {
            return null;
        }
        let element = this.elements.pop();

        let calculatedMin = this.min === element.data ? element.previousMin: this.min;
        this.min = this.isEmpty() ? undefined: calculatedMin;

        return element;
    }

    push(data) {
        let prevMin = this.min;
        if(!this.min) {
            this.min = data;
        } else {
            this.min = Math.min(data, this.min);
        }
        // Need to keep track of the previous min when doing a pop action
        this.elements.push({data, previousMin: prevMin});
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
stack.push(10);
stack.push(-100);
stack.push(-1);
stack.push(-1300);
stack.push(10000);
stack.push(12);

console.log('The min of this stack is ', stack.min);

while(!stack.isEmpty()) {
    let element = stack.pop();
    console.log(`The min of the stack is after removing ${element.data} is: `, stack.min);
}

console.log('The min of the stack is ', stack.min);


class StackWithMinStack {
    constructor() {
        this.elements = [];
        // This will keep track of all possible mins
        this.minStack = [];
    }

    pop() {
        if(this.length === 0) {
            return null;
        }
        let element = this.elements.pop();
        let topOfMinStack = this.minStack[this.minStack.length - 1];

        if(topOfMinStack === element) {
            this.minStack.pop();
        }

        return element;
    }

    push(data) {
        if(!this.minStack.length) {
            this.minStack.push(data);
        } else {
            let topOfMinStack = this.minStack[this.minStack.length - 1];

            if(data < topOfMinStack) {
                this.minStack.push(data);
            }
        }
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

    get currentMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

console.log('new stack....');

let stack2 = new StackWithMinStack();

stack2.push(1);
stack2.push(10);
stack2.push(-100);
stack2.push(-1);
stack2.push(-1300);
stack2.push(10000);
stack2.push(12);

console.log('The min of this stack is ', stack2.currentMin);

while(!stack2.isEmpty()) {
    let element = stack2.pop();
    console.log(`The min of the stack is after removing ${element} is: `, stack2.currentMin);
}

console.log('The min of this stack is ', stack2.currentMin);