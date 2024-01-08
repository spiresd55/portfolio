const strings = [ 'a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage (RAM - Random Access Memory)

console.log(strings[2]); //c 

//push
strings.push('e'); // O(1)

console.log(strings) // [a, b, c , d, e]

//pop
strings.pop(); //O(1) - e removed

console.log(strings) // [a, b, c, d ]

strings.unshift('aa'); // O(n) - because the indexes need to shift 

console.log(strings); // [ aa, a, b, c, d]

// splice 
strings.splice(2, 0, 'alien'); // O(n) - [ 'aa', 'a', 'alien', 'b', 'c', 'd' ]

console.log(strings);
