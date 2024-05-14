// Recursion solutions are built off the solutions of sub-problems

// Three different ways to solve a problem recursively 
// bottom-up, top-down, and half-and-half 

// Bottom-up: case by case
// Top-Down: How to divide problem for case-n into sub problems
// Half-and-Half: Binary Search 

// Recursive solutions are space inefficient, adds f(n) to stack 
// It is always better to aim for iterative solutions
// However, sometimes the iterative approach is much more complex

// 0, 1, 2, 3, 4, 5


//0,1,1,2,3,5
const fib = (n) => {
    if(n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

//console.log(fib(45))

const fibDynamic = (n, memo = []) => {
    if(n < 2) {
        memo[n] = n;
        return memo[n];
    }

    if(memo[n]) {
        return memo[n];
    }
  
    memo[n] = fibDynamic(n - 1, memo) + fibDynamic(n - 2, memo);
    return memo[n]
}

console.log(fibDynamic(45))