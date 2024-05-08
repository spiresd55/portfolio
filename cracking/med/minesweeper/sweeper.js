console.log('made it in the sweeper class');


let gameBoard = document.getElementById('board');

//let gameSize = 10;

let board = [];
let bombs = 10;

// https://leetcode.com/problems/minesweeper/
const handleClick = (event) => {
    console.log('click click boom');
    console.log(event)
    console.log(event.target)
    console.log(event.target.dataset)

    const {x, y} = event.target.dataset;
    console.log('coordinate', x,y);
    console.log(board);
    event.target.textContent = board[x][y].content;
}

const renderBoard = (gameSize, bombs) => {
    //Create the board
    for(let i = 0; i < gameSize; i++) {
        board.push(Array(gameSize).fill({
            revealed: false,
            content: '-',
            flagged: false,
        }));
    }
    // Randomize Bombs
    randomizeBombs(board, bombs);

    console.log('after random', board)
    // Render the board in the UI
    for(let i = 0; i < board.length; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        for(let j = 0; j < board.length; j++) {
            let square = document.createElement('span');
            square.setAttribute('class', 'square');
            square.setAttribute('data-x', i);
            square.setAttribute('data-y', j);
            square.setAttribute('id', i * 10 + j)
            square.textContent = '';
            row.appendChild(square);
        }
        gameBoard.appendChild(row)
    }
}

const randomizeBombs = (board, bombCount) => {
    //Create a random array of choices
    let choices = [];

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            choices.push([i, j]);
        }
    }

    for(let i = 0; i < bombCount; i++) {
        let randomSquare = Math.floor(Math.random() * choices.length);
        let choice = choices.splice(randomSquare, 1);
        console.log('cc', choice)
        let [x, y] = choice[0];
        console.log('bomb', x, y, board[x][y])
        board[x][y] = Object.assign({}, {content: 'B'});
    }
}

renderBoard(10, 10);
console.log(board);