function SetUsername(username){
    this.username = username
    console.log("called")
}

function createUser(username, email, pass){
    SetUsername.call(this, username)

    this.email = email
    this.pass = pass
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai)