//TODO: Clean up this class
class StackOfPlates {
    constructor(stackCapacity) {
        this.stacks = [];
        this.stackCapacity = stackCapacity;
    }

    push() {
        if(!this.stacks.length) {
            this.stacks[0] = ['plate1'];
        } else if(this.stacks[this.stacks.length - 1].length === this.stackCapacity) {
            this.stacks.push([`plate${this.stacks.length + 1}`]);
        } else {
            this.stacks[this.stacks.length - 1].push(`plate${this.stacks.length}`);
        }
    }

    pop() {
        if(!this.stacks.length) {
            return null;
        } else {
            let plate = this.stacks[this.stacks.length - 1].pop();

            if(!this.stacks[this.stacks.length - 1].length) {
                this.stacks.pop();
            }

            return plate;
        }
    }

    print() {
        for(let i = 0; i < this.stacks.length; i++) {
            for(let j = 0; j < this.stacks[i].length; j++) {
                console.log(this.stacks[i][j]);
            }
        }
    }

}

const plates = new StackOfPlates(3);

for(let i = 0; i < 20; i++) {
    plates.push();
}

for(let i = 0; i < 5; i++) {
    plates.pop();
}

plates.print();