//https://www.geeksforgeeks.org/backtracking-algorithms/
//https://www.youtube.com/watch?v=51Zy1ULau1s
let field = [
    [0,1,0,1,0,0],
    [0,0,1,0,0,0],
    [0,0,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,1,1,1,0],
    [0,1,0,0,1,0],
];

let field2 = [
    [0,1,0,1,0,0],
    [0,1,1,1,1,0],
    [0,0,0,0,0,0],
    [1,1,1,0,1,1],
    [0,0,1,0,0,0],
    [0,1,0,0,1,0],
];


const robot = (field, moves = [[0,0]], visited={}) => {
    let currentSquare = moves[moves.length - 1];
    let [x, y] = currentSquare;

    if(visited[`${x}-${y}`] && !visited[`${x+1}-${y}`] && field[x + 1][y] !== 1) {
        moves.push([x + 1, y]);
        return robot(field, moves, visited);
    } else if(visited[`${x}-${y}`] && !visited[`${x}-${y + 1}`] && field[x][y + 1] !== 1) {
        moves.push([x, y + 1]);
        return robot(field, moves, visited)
    } else if(visited[`${x}-${y}`]) {
        moves.pop();
        return robot(field, moves, visited);
    }

    if(x === field.length - 1 && y === field.length - 1) {
        return moves;
    }

    visited[`${x}-${y}`] = true;
    if(field[x][y + 1] !== 1 && y + 1 <= field.length - 1) {
        moves.push([x, y + 1])
    } else if(field[x + 1][y] !== 1 && x + 1 <= field.length - 1) {
        moves.push([x + 1, y])
    } else {
        moves.pop();
        let previousMove = moves[moves.length - 1];
        //console.log('prev', previousMove)
        let [prevX, prevY] = previousMove;
        //Previous moved right
        if(prevX === x) {
            moves[moves.length - 1] = [prevX + 1, prevY];
        } else if(prevY === y) {
            moves[moves.length - 1] = [prevX, prevY + 1];
        }
    }

    return robot(field, moves, visited);
}

//console.log(robot(field));

class Point {
    constructor(x, y, path = []) {
        this.x = x;
        this.y = y;
        this.path = path;
    }
}

//Uses backtracking to find the solution
const findPathForRobot = (field, row = 0, col = 0, points = [], path = [new Point(0, 0)], visited = {}) => {
    // Set up a new backtracking point
    if(row + 1 <= field.length - 1 && col + 1 <= field.length - 1 && field[row + 1][col] !== 1 && field[row][col + 1] !== 1) {
        points.push(new Point(row, col, path));
    }

    // Made it to the bottom right
    if(row === field.length - 1 && col === field.length - 1) {
        return path;
    }

    // Mark the node as visited
    visited[`${row}-${col}`] = true;

    //Travel right or down, or backtrack to previous point
    if(row + 1 <= field.length - 1 && field[row+1][col] !== 1 && !visited[`${row+1}-${col}`]) {
        path.push(new Point(row + 1, col));
        return findPathForRobot(field, row + 1, col, points, path, visited);
    } else if(col + 1 <= field.length - 1 && field[row][col + 1] !== 1 && !visited[`${row}-${col + 1}`]) {
        path.push(new Point(row, col + 1));
        return findPathForRobot(field, row, col + 1, points, path, visited);
    } else if(points.length || row + 1 > field.length - 1 || col + 1 > field.length - 1) {
        let point = points.pop();
        point.path.pop();
        return findPathForRobot(field, point.x, point.y, points, point.path, visited);
    } else {
        // No possible solutions
        return "ERROR";
    }
}

console.log(findPathForRobot(field2));