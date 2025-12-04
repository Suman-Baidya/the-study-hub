// function greet(name){
//     return `Hello, ${name}!`;
// }

// console.log(greet("World")); // Output: Hello, World!
// console.log(greet(25)); // Output: Hello, 25!


function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("World")); // Output: Hello, World!
// console.log(greet(25)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

