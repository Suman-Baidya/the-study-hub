// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// let myCreatedDate = new Date(2025, 0, 23, 5, 3, 2);
let myCreatedDate = new Date("2025-01-01")
// let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toDateString());

// console.log(myCreatedDate.getFullYear());
// console.log(myCreatedDate.getMonth());
// console.log(myCreatedDate.getDate());
// console.log(myCreatedDate.getDay());
// console.log(myCreatedDate.getHours());
// console.log(myCreatedDate.getMinutes());
// console.log(myCreatedDate.getSeconds());
// console.log(myCreatedDate.getMilliseconds());
// console.log(myCreatedDate.getTime());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))



newDate.toLocalString('default',{
    weekday: 'long'
})



