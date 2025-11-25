const user = {
    username: "suman",
    loginCount: 8,
    isLoggedIn: true,
    getUserDetails: function(){
        // console.log("User details from database")
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username);
// user.getUserDetails()

// console.log(this)


function User(username, isLoggedIn){
    this.username = username;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("suman", true)
const userTwo = new User("abcd", false)

console.log(userOne)
console.log(userTwo)