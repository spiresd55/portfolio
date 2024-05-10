console.log('made it in the sweeper class');


let gameBoard = document.getElementById('board');


gameBoard.addEventListener('mousedown', (e) => {
    const {x, y} = e.target.dataset;
    if(e.button === 2) {
        console.log('right mouse clicked')
        toggleFlagOnSquare(+x, +y);
    } else {
        console.log('other click')
        handleTurn(+x, +y);
    }
}); 

gameBoard.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

//let gameSize = 10;

let board = [];
let bombs = 10;
let visited = {};
let isFirstTurn = true;

// https://leetcode.com/problems/minesweeper/
/*const handleClick = (event) => {
    console.log('click click boom');
    console.log(event)
    console.log(event.target)
    console.log(event.target.dataset)

    
    const {x, y} = event.target.dataset;
    handleTurn(+x, +y);
    console.log('coordinate', x,y);
    console.log(board);
    
    //event.target.textContent = board[x][y].content;
}*/

const toggleFlagOnSquare = (x, y) => {
    let square = board[x][y];
    const {id} = square;
    square.flagged = !square.flagged;
    if(square.flagged) {
        document.getElementById(id).classList.add('flagged');
    } else {
        document.getElementById(id).classList.remove('flagged');
    }
    
}

const checkForVictory = () => {
    let winCounter = 0;
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            let square = board[i][j];
            console.log('win', winCounter)
            //Unrevealed square
            if(!square.content && !square.revealed) {
                return false;
            } else if(square.content === 'B' && !square.revealed) {
                winCounter++;
            } else if(square.content === 'B' && square.flagged) {
                winCounter++;
            }
        }
    }

    return winCounter === bombs;
}

const handleTurn = (row, col) => {
    // DFS algorithm
    let nodesToProcess = [board[row][col]];

    while(nodesToProcess.length) {
        let node = nodesToProcess.pop();
        const {x, y, id, content} = node;
        console.log(x, y);

        let validNodes = [];

        console.log('finding first empty square', findFirstEmptySquare())
        if (content === 'B' && !isFirstTurn) {
            document.getElementById(id).innerText = content;
            alert('You lost the game!');
            return;
        // Below logic prevents loosing on first turn
        } else if(content === 'B' && isFirstTurn) {
            let emptySquare = findFirstEmptySquare();
            emptySquare.content = 'B';
            node.content = '';
        }

        isFirstTurn = false; 

        // TOP
        if (x - 1 >= 0) {
            validNodes.push(board[x - 1][y]);

            // TOP Left
            if (y - 1 >= 0) {
                validNodes.push(board[x - 1][y - 1]);
            }

            // Top Right
            if (y + 1 <= board.length - 1) {
                validNodes.push(board[x - 1][y + 1]);
            }
        }

        // Bottom
        if (x + 1 <= board.length - 1) {
                validNodes.push(board[x + 1][y]);

                //Bottom Left
                if(y - 1 >= 0) {
                    validNodes.push(board[x + 1][y - 1]);
                }

                //Bottom Right
                if(y + 1 <= board.length - 1) {
                    validNodes.push(board[x + 1][y + 1]);
                }
        }

        // Right
        if(y + 1 <= board.length - 1) {
                validNodes.push(board[x][y + 1]);
        }

        // Left
        if(y - 1 >= 0) {
                validNodes.push(board[x][y - 1]);
        }
  
        let bombCount = countBombsAroundSquare(validNodes);

        console.log(bombCount);
        console.log(validNodes);

        validNodes.push(node);
        if(bombCount === 0) {
            let newNodes = revealSquares(validNodes);
            console.log(newNodes);
            if(newNodes.length) {
                //nodesToProcess.concat(newNodes);
                nodesToProcess = [...nodesToProcess, ...newNodes];
                console.log('Nodes to process', nodesToProcess)
            }
        } else {
            let element = document.getElementById(id);
            console.log(element.textContent)
            element.textContent = bombCount;
            element.classList += ' revealed';
            board[x][y].revealed = true;
        }
    }

    //console.log(checkForVictory());
    if(checkForVictory()) {
        alert('You won!!!!!');
    }
}

let findFirstEmptySquare = () => {
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; i++) {
            if(board[i][j].content !== 'B') {
                return board[i][j];
            }
        }
    }
}

let revealSquares = (squares) => {
    let nodes = [];
    for(let i = 0; i < squares.length; i++) {
        let square = squares[i];
        const {id, x , y} = square; 
        if(!visited[square.id]) {
            let element = document.getElementById(id);
            element.classList+= ' revealed';
            element.textContent = ' ';
            nodes.push(square);
            visited[id] = true;
            board[x][y].revealed = true;
        }
    }

    return nodes;
}

let countBombsAroundSquare = (squares) => {
    let bombCount = 0;
    for(let i = 0; i < squares.length; i++){
        let square = squares[i];
        const {x, y} = square;
        console.log('debug',x,y)
        let content = board[x][y].content;
        if(content === 'B') {
            bombCount++;
        }
    }
    return bombCount;
}

const renderBoard = (gameSize, bombs) => {
    //Create the board
    for(let i = 0; i < gameSize; i++) {
        let row = []
        for(let j =0; j < gameSize; j++) {
            row.push({
                revealed: false,
                content: '',
                flagged: false,
                id: i * gameSize + j,
                x: i,
                y: j,
            });
        }
        board.push(row);
    }
    // Randomize Bombs
    randomizeBombs(board, bombs);

    console.log('after random', board)
    // Render the board in the UI
    for(let i = 0; i < board.length; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        for(let j = 0; j < board.length; j++) {
            let square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.setAttribute('data-x', i);
            square.setAttribute('data-y', j);
            square.setAttribute('id', board[i][j].id);
            square.innerText = '';
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
        board[x][y].content = 'B'
    }
}

renderBoard(10, 10);
console.log(board);