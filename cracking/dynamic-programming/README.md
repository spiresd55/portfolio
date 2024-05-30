# Dynamic Programming 

- Remember previous results while solving the problem

- General base cases n == 0 return 1 or n < 0 return 0
- Base cases are used to end recursive algorithms 

- Dynamic Programming is needed because decision trees when solving algorithms have a lot of repeated subproblems

- Dynamic Programming is an algorithmic technique that solves a problem by diving it into smaller subproblems,
but it stores the result of each subproblem to avoid solving the same subproblem more than once. 
[Optimal substructure, overlapping subproblems]

- A problem is said to have an optimal substructure if the optimal solution of the problem can be calculated 
from the optimal solutions of smaller subproblems, we that it respects the principle of optimality. 
- A problem is said to have overlapping subproblems if during the recursive process of dividing it into subproblems,
we solve the same subproblem more than once. 

# Recursion
- A function is recursive if it calls itself. 
- A base case is needed to end the recursive call of the functions 
- Each recursive call is stored on the call stack 

# Top Down Approach - Memoization 
- Acts like a cache - remembers solutions to smaller subproblems

# Bottom Up Approach - Tabulation 
- solve the smallest problem first, and work our way up
O(n) time, O(n) space
const fib = (n) => {
    let dp = []
    for(let i = 0; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n];
}
# Can also use 3 variables (before_prev, prev, and current) O(n) time O(1) space

# Tabulation vs Memoization 
Ease Of Implementation - Memoization
Speed - Tabulation 
Speed(Sparse subproblems) - Memoization 
No risk of stack overflow - Tabulation 
Possibility of space optimization - Tabulation  

# Directed Acyclic Graph in DP
A graph is a collection of vertices connected by edges 
A directed graph means that each edge is only going in one direction
Acyclic means there is no cycle within the graph 
A DAG is a directed graph that does not contain a cycle 

Why? 
Breaking down the problem into smaller problems 
Can't be a tree, because multiple nodes can point to the same node(cant do that with a tree)

Building a DAG allows us to know
- if there are overlapping subproblems 
- what subproblems are we solving 
- dimensions of the dp table
- What subproblems each problem needs to solve 