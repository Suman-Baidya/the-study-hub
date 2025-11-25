class User {
    constructor(username, email, pass){
        this.username = username
        this.email = email
        this.pass = pass
    }

    encryptPassword(){
        return `${this.pass}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const suman = new User("suman", "suman@gmail.com", "123")

console.log(suman.encryptPassword());
console.log(suman.changeUsername());