console.log('made it in the sweeper class');


let gameBoard = document.getElementById('board');

//let gameSize = 10;

let board = [];
let bombs = 10;

const handleClick = (event) => {
    console.log('click click boom');
    console.log(event)
    console.log(event.target)
    console.log(event.target.dataset)

    const {x, y} = event.target.dataset;
    console.log('coordinate', x,y);
}

const renderBoard = (gameSize, bombs) => {
    //Create the board
    for(let i = 0; i < gameSize; i++) {
        board.push(Array(gameSize).fill(''));
    }

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
            square.textContent = i * 10 + j
            row.appendChild(square);
        }
        gameBoard.appendChild(row)
    }

}

renderBoard(10, 10);
console.log(board);