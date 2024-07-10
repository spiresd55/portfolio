/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, target) {
    let n = board.length;
    let m = board[0].length;

    let visited = new Set();
    let foundMatch = false;
    //console.log('Made it here')
    const backtrack = (i, j, k) => {
        if(foundMatch) {
            return;
        }
     
        if(i === n || j === m || i < 0 || j < 0) {
            return false;
        }
    
        if(board[i][j] !== target[k]) return false;

        visited.add(`${i},${j}`);
    
        k = k + 1
        if(!visited.has(`${i + 1},${j}`)) {
            backtrack(i + 1, j, k);
        }
        
        if(!visited.has(`${i},${j + 1}`)) {
            backtrack(i, j + 1, k );
        }


        if(!visited.has(`${i},${j-1}`)) {
            backtrack(i, j - 1, k );
        }

        if(!visited.has(`${i - 1},${j}`)) {
            backtrack(i - 1, j, k );
        }
        
        if(k === target.length) {
            foundMatch = true;
            return;
        }
     
        // Backtrack
        visited.delete(`${i},${j}`);
    }


     for(let i = 0; i < n; i++) {
       for(let j = 0; j < m ; j++) {
              visited = new Set();
              if(foundMatch) {
                return true;
              }
              backtrack(i, j, 0); 
        }
     }

     return foundMatch;
};