"use strict"; // treates code as newer version

// alert("Hello"); // shows alert message, not running in node
// console.log("Hello"); // shows in console

let name = "Suman"; // String
let age = 25; // Number
let isStudent = false; // Boolean
let Gamescore; // Undefined
let value = null; // Null, standalone value
let bigNum = 12345678901234567890n; // BigInt
let userId = Symbol("user"); // Symbol, unique identifier

// console.log(typeof name, typeof age, typeof isStudent, typeof score, typeof value, typeof bigNum, typeof id);
// object





// Primitive data types are immutable and store single values.
// Non-primitive (reference) data types hold collections of values or complex entities.

// Primitive 
// 7 types: String, Number, Boolean, Null, Undefined, BigInt, Symbol

const score = 100
const scoreValue = 100.3

const isLoogedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId)

const bigNumber = 12345678901234567890n



// Non-primitive or Reference
// 3 types: Object, Array, Function

const heros = ["thor", "spiderman", "ironman"]
let myObj = {
    name: "Suman",
    age: 25
}

// console.log(heros, myObj)
// console.log(typeof heros, typeof myObj)

function logger() {
    console.log("Hello World")
}

// console.log(typeof logger)




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory (Primitive), Heap Memory (Non-Primitive)

// Stack memory is a simple linear memory structure that stores primitive values and function call information.
// Heap memory is a dynamic memory structure that stores non-primitive values, such as objects, arrays, and functions.

let myName = "Suman"; // stored in Stack
let myUserName = myName; // myUserName points to the same Stack memory as myName

myUserName = "Suman2"; // myUserName points to the same Stack memory as myName

// console.log(myName, myUserName);


let userOne = {
    email: "user1@com",
    upi: "user@123"
}

let userTwo = userOne; // userTwo points to the same Heap memory as userOne

userTwo.email = "user2@com"; // userTwo points to the same Heap memory as userOne

console.log(userOne, userTwo);

