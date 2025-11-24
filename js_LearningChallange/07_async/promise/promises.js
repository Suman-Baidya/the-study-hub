const promiseOne = new Promise(function(resolve, reject){
    // Do an async task. Like DB calls, cryptography, network, etc...

    setTimeout(function(){
        console.log("Task 1 is complete")
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("1st promise resolved");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Task 2 is complete")
        resolve()
    }, 1000)

}).then(function(){
    console.log("2nd promise resolved")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "suman", password: "123"})
        }else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((user)=>{
    console.log(user)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("Run the finally part")
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "java script", password: "123"})
        }else{
            reject('Error: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()



fetch('https://jsonplaceholder.typicode.com/users')
.then(function(respnse){
    return respnse.json()
})
.then((data)=>{
    console.log(data)
})
.catch(function(error){
    console.log(error)
})



// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getAllUser()