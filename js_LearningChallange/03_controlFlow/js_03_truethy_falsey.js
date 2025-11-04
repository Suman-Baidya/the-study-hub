const userEmail = "suman@gmeil.com"

if(userEmail){  // truthy value
    console.log("Condition is true")
}else{
    console.log("Condition is false")
}


// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values:
// true, "0", "false", " ", [], {}, function(){}

let webUsers = []
if(webUsers.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}



// +++++++++++++++ Nullish Coalescing Operator +++++++++++++++++++++++++
let val1;

val1 = 4 ?? 5; // 4
val1 = null ?? 5; // 5
val1 = undefined ?? 5; // 5
val1 = "" ?? 5; // 5
val1 = "Suman" ?? 5; // Suman

// ++++++++++++++++++++++ Ternary Operator +++++++++++++++++++++++++++

const age = 18
const canVote = age >= 18 ? "Yes" : "No"
console.log(canVote)



