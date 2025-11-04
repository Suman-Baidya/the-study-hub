// Array

const myArr = [0, 1, 2, 3, 4]
const myHeros = ["thor", "ironman", "hokeye"]

const myArr2 = new Array(1, 2, 3)

// console.log(myArr[1])
// console.log(myArr)

myArr.push(6)
// console.log(myArr)

myArr.pop()
// console.log(myArr)

myArr.unshift(10)
// console.log(myArr)

myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

const newArray = myArr.join()
// console.log(newArray)

// console.log(myArr)
const myn1 = myArr.slice(1,3)
// console.log(myn1)

// console.log(myArr)
const myn2 = myArr.splice(1,3)
// console.log(myn2)

// console.log(myArr)





const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

let allHeros= marvel_heros.concat(dc_heros);
// console.log(allHeros)

let allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros)


const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8]
const realArray = anotherArray.flat()
// console.log(realArray)

// console.log(Array.isArray("Suman"))
// console.log(Array.from("Suman"))
console.log(Array.from({name: "Suman"})) // Interisting... can be used to convert object to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))