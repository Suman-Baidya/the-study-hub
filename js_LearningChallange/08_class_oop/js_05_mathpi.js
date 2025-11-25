const descripter = Object.getOwnPropertyDescriptors(Math, 'PI');

// console.log(descripter);

// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5;
// console.log(Math.PI); // 3.141592653589793

const chai = {
    name: "ginger chai",
    price: 200,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptors(chai, 'name'));


Object.defineProperty(chai, 'price', {
    writable: false,
    configurable: false,
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptors(chai, 'name'));
