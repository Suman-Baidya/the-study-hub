function sayMyName(){
    console.log("Hello, I am Suman")
}

// sayMyName()
// sayMyName()
// sayMyName()

function addTwoNumbers(num1, num2){   // parameters
    // console.log(num1 + num2)
    return num1 + num2


    // no code executed after return
}

let result = addTwoNumbers(3, 5) // arguments
// console.log("result: ", result)



function loginUser(userName="syam"){ // default parameter
    if(!undefined){
        console.log("Please enter a username")
        return
    }
    return `${userName} just logged in`
}

// let userLoggedIn = loginUser("Suman")
// console.log(userLoggedIn)



function calculateCartPrice(val1, val2, ...num1){  // rest parameter, returns an array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    userName: "Suman",
    price: 199
}

function handleObject({userName, price}){
    // console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
    // console.log(`Username is ${userName} and price is ${price}`)
}

// handleObject(user)
handleObject({
    userName: "Suman",
    price: 19999
})


const myNewArr = [200, 400, 500, 2000]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr))



// ++++++++++++++++++++++++++++++++ Scope ++++++++++++++++++++++++++++++++++++

var c = 300 // global scope
let a = 100
if(true){
    let a = 10 // block scope
    const b = 20
    var c = 30
}

// console.log(a)
// // console.log(b)
// console.log(c)


function one(){
    const userName = "Suman"

    function two(){
        const userAge = 25

        function three(){
            const userGender = "Male"
            console.log(userName, userAge, userGender)
        }
        three()
    }
    // two()

    console.log("only one function")
}
// one()

if (true){
    const userName = "Suman"

    if(userName === "Suman"){
        const website = "suman.com"
        // console.log(userName, website)
    }

    // console.log(website)
}

// console.log(userName)


// ++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++++++

addone(5); // hoisting
function addone(num){
    return num + 1
}

const addtwo = function(num){
    return num + 2
}

// console.log(addtwo(5))



//+++++++++++++++++++++++++++ Arrow Function +++++++++++++++++++++++++

const user_01 = {
    userName: "Suman",
    price: 199,
    welcomeMsg: function(){
        console.log(`Welcome ${this.userName}`)
        console.log(this)
    }
}

// user_01.welcomeMsg()

// user_01.userName = "Dipu"
// user_01.welcomeMsg()

// console.log(this)

// function chai(){
//     let userName = "Suman"
//     console.log(this.userName)
// }

// chai()


const chai = () => {
    let userName = "Suman"
    console.log(this)
}

// chai()



const addTwoNum = (num1, num2) => num1 + num2
// console.log(addTwoNum(3, 5))

const returnObj = (name) => ({userName: name})    // returns an object help of ({})
// console.log(returnObj("Suman"))




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// IIFE (Immediately Invoked Function Expression)

console.log("IIFE started");

((age)=>{
    let userName = "Suman";
    console.log(userName, age);
})(22);


console.log("IIFE executed!");