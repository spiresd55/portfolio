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



//TODO: Solve this using an additional stack