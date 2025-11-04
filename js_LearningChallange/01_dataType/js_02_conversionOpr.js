// let score = "33abc";
// let score = null;
let score = undefined;

// console.log(typeof score);
score = Number(score);
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN
// "" => false
// "Suman" => NaN or true

let isLoogedIn = 1;
let booleanIsLoogedIn = Boolean(isLoogedIn);

// console.log(booleanIsLoogedIn);


// ************************************* Operations *********************************

let value = 3;
let negValue = -value;
// console.log(negValue);


// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 3);
// console.log(2 ** 3);

let str1 = "Hello";
let str2 = "Suman";
// console.log(str1 + " " + str2);


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

console.log(+true)
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3);