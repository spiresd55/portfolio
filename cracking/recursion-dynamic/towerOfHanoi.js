
//TODO: Come back to this one
let solvePuzzle = (towers = [], n = 0) => {
    if(isPuzzleSolved(towers) || n === 6) {
        return towers;
    }

    let leftTower = towers[0];
    let middleTower = towers[1];
    let rightTower = towers[2];

    shiftPuzzleRight(towers)
    console.log(towers)
    middleTower.push(leftTower.pop());
    console.log(towers)
    shiftPuzzleLeft(towers);
    console.log(towers)
    if(!rightTower.length || middleTower[middleTower.length - 1] < rightTower[middleTower.length - 1]) {
        rightTower.push(middleTower.pop());
    } else {
        shiftPuzzleLeft(towers, 1);
    }

    console.log(towers)
    /*if(middleTower.length && !rightTower.length) {
        rightTower.push(middleTower.pop());
        console.log(towers)
    } else if(middleTower.length && rightTower.length && middleTower[middleTower.length - 1] < rightTower[middleTower.length - 1]) {
        rightTower.push(middleTower.pop());
        console.log(towers)
    } else if(rightTower.length && leftTower.length && !middleTower.length) {
        middleTower.push(leftTower.pop());
        console.log(towers)
    } else if(!rightTower.length && !middleTower.length && leftTower.length) {
        shiftPuzzleRight(towers);
        console.log(towers)
    }  else {
        shiftPuzzleLeft(towers)
        console.log(towers)
    }*/


    return solvePuzzle(towers, n + 1);
}

let shiftPuzzleRight = (towers = [], direction = 2) => {
    let leftTower = towers[0];
    let middleTower = towers[1];
    let rightTower = towers[2];

    if(direction === 2) {
         //Move 1
        rightTower.push(leftTower.pop());
        // Move 2
        middleTower.push(leftTower.pop());
        // Move 3
        middleTower.push(rightTower.pop());
        // Move 4
        rightTower.push(leftTower.pop());
        // Move 5
        leftTower.push(middleTower.pop())
        // Move 6
        rightTower.push(middleTower.pop())
        // Move 7
        rightTower.push(leftTower.pop());
    } else {
        rightTower.push(leftTower.pop());
        middleTower.push(leftTower.pop());
        leftTower.push(rightTower.pop())
        rightTower.push(middleTower.pop());
        rightTower.push(leftTower.pop());
        middleTower.push(leftTower.pop())
        leftTower.push(rightTower.pop());
        middleTower.push(rightTower.pop());
        middleTower.push(leftTower.pop());
    }
   
}

let shiftPuzzleLeft = (towers = [], direction = 2) => {
    let leftTower = towers[0];
    let middleTower = towers[1];
    let rightTower = towers[2];

    if(direction === 2) {
        //Move 1
        leftTower.push(rightTower.pop());
        // Move 2
        middleTower.push(rightTower.pop());
        // Move 3
        middleTower.push(leftTower.pop());
        // Move 4
        leftTower.push(rightTower.pop());
        // Move 5
        rightTower.push(middleTower.pop())
        // Move 6
        leftTower.push(middleTower.pop())
        // Move 7
        leftTower.push(rightTower.pop());
    } else {
        if(rightTower.length === 1) {
            middleTower.push(rightTower.pop());
        } else {
            leftTower.push(rightTower.pop());
            middleTower.push(rightTower.pop());
            rightTower.push(leftTower.pop())
            leftTower.push(middleTower.pop());
            leftTower.push(rightTower.pop());
            middleTower.push(rightTower.pop())
            rightTower.push(leftTower.pop());
            middleTower.push(leftTower.pop());
            middleTower.push(rightTower.pop());
        }
    }
 
}

let isPuzzleSolved = (towers) => {
    if(towers[0].length) {
        return false;
    } else if(towers[1].length) {
        return false;
    } else {
        for(let i = 1; i < towers[2].length; i++) {
            if(towers[i] > towers[i - 1]) {
                return false;
            }
        }
    }

    return true;
}

let towerOfHanoi = (originalTower) => {
    //console.log(originalTower.pop())
     //shiftPuzzleRight(originalTower);
     console.log(originalTower)
    return solvePuzzle([originalTower, [], []]);
}

console.log(towerOfHanoi([8,7,6,5,4,3,2,1]));