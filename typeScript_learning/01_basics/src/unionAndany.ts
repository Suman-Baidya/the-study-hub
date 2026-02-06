// Union: Declear option in 1st. or type - possible values... 
let subs: number | string = "1M"

let apiReqStatus: 'pending' | 'success' | 'error' = 'pending'
apiReqStatus = 'error'

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'


//any
const orders = ['12', '20', '28']
let currentOrder;  // any: don't know the data type in current situation

for(let order of orders){
    if(order === '28'){
        currentOrder = order
        break
    }
}

currentOrder = 42

console.log(currentOrder)


// ** use unknown instead of any, because it forces us to do type checking before using the variable.
let userInput: unknown;
let userName: string;