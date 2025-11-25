function multiply(num){
    return num * 5;
}

multiply.powerss = 2;

// console.log(multiply(5));
// console.log(multiply.powerss);
// console.log(multiply.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    console.log(++this.score)
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

const chai = new createUser("chai", 25)
const tea = new createUser("chai", 90)

// chai.printMe()
// chai.increment()



// let myName = "suman    "

// console.log(myName.trim().length)

let heros = ['thor', 'ironman']

let heroPower = {
    thor: "hammer",
    spiderMan: "web",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderMan}`)
    }
}
Array.prototype.abcd = function(){
    console.log("this is abcd")
}
Object.prototype.suman = function(){
    console.log("this is suman")
}

heroPower.getSpiderPower()
heroPower.suman()

heros.suman()
heros.abcd()



