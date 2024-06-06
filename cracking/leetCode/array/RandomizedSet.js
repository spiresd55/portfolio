class RandomizedSet {
    constructor() {
        this.currentValues = {};
        this.set = [];
        this.length = 0;
    }

    insert(val) {
        if(this.currentValues[val] !== undefined) {
            return false;
        }
        this.set.push(val);
        this.currentValues[val] = this.set.length - 1;
        this.length++;
        return true;
    }

    remove(val) {
        if(!this.length) {
            return false;
        }

        if(this.currentValues[val] !== undefined) {
            let idx = this.currentValues[val];
            this.length--;
            delete this.currentValues[val];
            this.set[idx] = undefined;
            return true;
        }

        return false;
    }

    getRandom() {
        let keys = Object.keys(this.currentValues)
        return keys[Math.floor(Math.random() * keys.length)];
    }
}

const randomSet = new RandomizedSet();
randomSet.insert(1);
console.log(randomSet.remove(2));
randomSet.insert(2);
console.log('---', randomSet.insert(2))
console.log(randomSet.getRandom());
console.log(randomSet.remove(1));
randomSet.insert(2);
console.log(randomSet.getRandom())


//randomSet.insert(3);
//randomSet.insert(4);
//randomSet.insert(5);
//randomSet.insert(6);

//console.log(randomSet.remove(4));

console.log(randomSet);