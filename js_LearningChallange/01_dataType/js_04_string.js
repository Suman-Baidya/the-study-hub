const name = "Suman";
const age = 22;

// console.log("My name is " + name + " and I am " + age + " years old.");

const templateLiteral = `My name is ${name.toUpperCase()} and I am ${age} years old.`;
// console.log(templateLiteral);

const gameName = new String("Suman Baidya");
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-3);
console.log(anotherString);

const newStringOne = "   Suman   ";
console.log(newStringOne);
console.log(newStringOne.trim());

console.log(gameName.split(" "));

console.log(gameName.replace("Suman", "Suman Baidya"));

console.log("Suman".repeat(5));