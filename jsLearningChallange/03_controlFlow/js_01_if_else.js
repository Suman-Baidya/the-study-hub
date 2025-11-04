// if
const condtion = true
if(condtion){
    // code to be executed if condition is true
}else{
    // code to be executed if condition is false
}


// <, >, <=, >=, ==, ===, !=, !==

if(2 == "2"){
    // code to be executed if condition is true
    // console.log("condition is true")
}

const temp = 50
if(temp > 30){
    // console.log("it's warm")
}else{
    console.log("it's cold")
}



// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power is ${power}`)
// }
// console.log(power) // not accessible outside the block


const balance = 1000
// if(balance > 500) console.log("test"), console.log("test2"); // multiple statements in a single line, not recommended

if(balance < 500){
    console.log("Less than 500")
}else if(balance < 750){
    console.log("Less than 750")
}else if(balance < 900){
    console.log("Less than 900")
}else{
    // console.log("Greater than 900")
}



const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true
const loggedInFromGoogle = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}else{
    console.log("Login to buy course")
}


if(userLoggedIn && (debitCard || loggedInFromEmail || loggedInFromGoogle)){
    console.log("Allow to buy course")
}else{
    console.log("Login to buy course")
}





