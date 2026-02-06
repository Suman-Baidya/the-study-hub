// Assertion: Type assertion is a compile-time mechanism that lets you explicitly tell the compiler the type of a value without changing its runtime behavior.

let response:any = '42'

let numricalLength:number = (response as string).length

type Book = {
    name: string;
}

let bookString = '{"name":"Who moved my cheese"}'
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);


const inputElement = document.getElementById("username") as HTMLInputElement


//Unknown

let value:any
value = 'chai'
value = [1,2,3]
value.toUpperCase()

let newValue:unknown
newValue = 'chai'
newValue = [1,2,3]
// newValue.toUpperCase()  //not work

if(typeof newValue === 'string'){
    newValue.toUpperCase();
}


try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
}



//never
type Role = "admin" | "user"
function redirectBasedRole(role:Role):void{
    if(role === "admin"){
        console.log("Redirect to admin dashboard");
        return
    }

    if(role === "user"){
        console.log("Redirect to user dashboard");
        return
    }

    role // this is not running any case
}


function neverReturn():never{
    while(true){}
}
