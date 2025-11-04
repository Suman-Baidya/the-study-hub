const accountId = 12345;
let accountEmail = "suman@gmail.com";
var age = 23;

accountCity = "Kolkata";

let accountState;

// accountId = 54321; // Not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, age, accountCity, accountState]);